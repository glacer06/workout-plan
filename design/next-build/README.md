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
