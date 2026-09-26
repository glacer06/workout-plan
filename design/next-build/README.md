# Preview build: Today card + bottom tabs

Shipped to the `?next=1` preview channel on 2026-09-26. Live (`app.js`) is untouched.

- Source of truth: the `app-next.js` row in `game_plan.assets`. The `game-plan-app` function serves it for `?b=next`.
- `patch.py` turns `app-next.before.js` into the preview build. It refuses to run if any piece it replaces has changed.
- Written with a guarded update: it only applied if the row was still the version the patch was built on (md5 `8749e766...`), and only if the result matched the tested build (md5 `8821b7e0...`).

## What changed

- **Bottom tab bar on phones (640px and under).** All five tabs fit (Week, Workouts, Food, Goals, Coach), each 76 by 56 px, with icons. Hidden while editing the plan. Desktop keeps the top tabs.
- **Today card split into Train and Eat.** Same controls, same order inside each section. On a gym day, Train comes first until 4pm, then Eat comes first. On a rest day, Eat comes first. Bonus move sits after the moves.

## Try it

Open `https://fitness.nicksims.co/?next=1` on the phone. `?next=0` goes back to live.

## Roll back

Set the row back to the saved build:

```sql
update game_plan.assets set body = <contents of app-next.before.js>, updated_at = now()
where name = 'app-next.js' and md5(body) = '8821b7e02f7b20455e7de42abdfe393b';
```

## Promote to live

Not done. Promote only after checking it on both phones. Rebase on the current `app.js` first, since another session also ships to this table.

## Goals strength tests (shipped to the preview 2026-09-26 18:13 UTC)

- The Goals table becomes one card per test with four week buttons (Week 1, 4, 8, 12). Tap a week and a sheet opens with a big number, minus and plus buttons, and a slider. Save writes it straight to the plan, with no Edit plan mode.
- The picker starts at your last result for that test. Units and ranges come from the test: lbs in 5 lb steps (deadlift 45 to 315, machines 10 to 250, bells 5 to 100), plank in seconds (5 to 90), push-ups in reps.
- Each card shows the gain since Week 1. Edit plan still shows the old table, for renaming tests.
- `patch-goals.py` builds it from `app-next.before-goals.js` (md5 `8821b7e0...`, the build with the Today card and tabs). Tested result md5 `89bd88d2...`.
- Shipped with the same guarded write after Nick said go. Roll back by setting the row to `app-next.before-goals.js` (guard on md5 `89bd88d2...`).

## Workout names in the day picker (shipped to the preview 2026-09-26 18:17 UTC)

- The Workout dropdown on each day now uses the names from the plan, the same words as the Workouts tab ("Day 1: Chest and Upper Body"), not "Workout A", "Solo card", "Workout C". Falls back to the old labels if a plan has no names.
- `patch-workout-names.py`, guarded from md5 `89bd88d2...` to `e9df479b...`.

## Sign-in screen (shipped to the preview 2026-09-26 18:20 UTC)

- One line on what the app is ("Your 12-week plan, for the two of you and your coach."), three role chips (You, Partner, Coach; roles, never names, before sign-in), the Google button, and one fine-print line.
- Dark mode wordmark fixed (it was rendering in the muted text color).
- Auto sign-in: the app already set Google's `auto_select`, but never called `google.accounts.id.prompt()`, so the "Continue as" prompt never showed. It now does, on the sign-in screen only.
- Not added: the blurred week preview from the research. There's no real data before sign-in, so it would be decoration.
- `patch-signin.py`, guarded from md5 `e9df479b...` to `68ed556e...`. Screenshots: `design/current/signin-preview-*.png`.

## Sign-in, second pass (shipped to the preview 2026-09-26 18:28 UTC)

Nick's direction: it's about two people working out in tandem, not the coach, and the screen doesn't need to explain sign-in.

- Line: "Two people, one 12-week plan."
- Chips: Me and You, with a fist bump between them. No coach chip.
- Removed the fine print about signing in once and the old private link, here and in the sign-in nudge on the Week tab.
- The fist bump is a button: tap it (or hover with a mouse) and the fists pull back, bump, and a heart pops up and floats away. Off when the phone asks for reduced motion.
- `patch-signin-2.py`, guarded from md5 `68ed556e...` to `772263e1...`.

## Promoted to live (2026-09-26 18:33 UTC)

Nick said "promote to live". Everything above is now in `app.js`.

- Live `app.js` was the preview loader + PJ's 17:39 build (md5 `8749e766...`) + a closing brace. The new live is the same loader + the tested preview (md5 `772263e1...`) + the same brace, built inside the database from the preview row. Guarded: it only applied if live was still `43405b00...` and the result matched the tested file `1ddf69a1...`.
- Tested before the swap in the local harness as the live file: tabs, Today card, log and bonus drawers, Goals picker, sign-in fist bump.
- Checked after: the live site serves `1ddf69a1...` and shows the new sign-in screen (`design/current/signin-live-light-390.png`).
- Backup: the previous live build is saved in `game_plan._app_js_snapshots` with the note "live app.js before design promote ... 2026-09-26".

### Roll back live

```sql
update game_plan.assets set body = (select body from game_plan._app_js_snapshots where note like 'live app.js before design promote%' order by taken_at desc limit 1), updated_at = now()
where name = 'app.js' and md5(body) = '1ddf69a1b96208cb0597bee3d0f45ddf';
```

## Palette (shipped to the preview 2026-09-26)

Nick's direction: he's black and old gold, Steph is berry, and the orange comes from Syracuse. Every color now means something.

- **Black and warm paper** are the base. The background moved from gray-green (`#f3f4f1`) to a warm off-white (`#f6f3ec`), and the grays spread further apart, so "Off" reads lighter and session details read darker.
- **Old gold is Nick, berry is Steph.** Their color is on their column in the weekly table (header underline and a bar beside each session), on their avatar ring in the header, and on the "at the gym" tag for the other person. The table follows whose log is open, so Steph sees her berry column first.
- **Orange means do this now.** Today's day, the active tab, and the Today card border use a darker orange so text stays readable (4.9:1 on white). Primary buttons are a brighter orange with black text (6.2:1).
- **Workout day dots** moved off gold and red so they don't clash with Nick and Steph: blue, green, and black, like bumper plates.
- **Sign-in:** the Me and You circles are black with an old gold ring.
- **Dark mode fix:** the page shell (`index.html`) set the body text color with a stronger selector, so in dark mode the app used the muted gray for everything, headings included. The bundle now sets full ink. This bug is also on live.
- **Not changed:** the blue kettlebell logo and app icon. They're files in this repo, not in the bundle, and they clash with the new palette. A black and gold version is the next step.
- `patch-palette.py`, guarded from md5 `772263e1...` (`app-next.before-palette.js`) to `415bbedb...`. Roll back by setting the row to `app-next.before-palette.js`, guarded on md5 `415bbedb...`.
