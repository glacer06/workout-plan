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
