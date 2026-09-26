# Design research log

Research notes for Sims Fitness, written by forge-design's Research step.

The bar every idea has to clear: **ease of use and ease of input.** We take the idea that makes logging faster, never another app's look. References are links plus notes; no third-party screenshots live in this repo. Screenshots of our own app are in `design/current/`.

## 2026-09-26: Sign-in screen, mobile (pilot run)

Job: the first screen anyone sees. Get the right person signed in with Google, and tell them in one glance what this is and who it's for.

Scene: a phone in one hand, at home early or late, one of two people on a shared 12-week plan with a trainer. They open it to check today's session or log food, so the screen has to get out of the way fast.

Sources: Appshot Gallery (rendered in a browser). Paid sources unavailable in this session: no Refero or Mobbin seat connected, Mobbin's site returns 403 to automated fetches, and Refero's public pages return almost nothing without an account.

### What's there now

`design/current/signin-light-390.png` and `signin-dark-390.png`, at 390px wide.

- Icon (96px), the SIMS FITNESS wordmark, and the Google button, centered. About 60% of the screen is empty.
- Nothing says what the app does or that it's a plan for two people and a trainer.
- In dark mode the wordmark renders in the muted text color, not the main ink, so the name reads weaker than the button under it.
- Inside the app, the "Sign in once on this phone to keep access" nudge explains the private-link retirement, but the sign-in screen itself says nothing.

### Ref 1: Bevel, App Store listing, lead screen (https://www.appshot.gallery/app/bevel-health-performance)
Pattern: one plain value line above a real product view ("All your health apps in one"), with the product's own ring metrics as the picture instead of stock art.
Fits our scene because: the person signing in already knows the plan exists; a peek at the actual week card tells them they're in the right place faster than a logo does.
Not taking: Bevel's gray gradient backgrounds, its ring visuals, or any of its copy.

### Ref 2: WaterDuo, App Store listing, "Motivate each other" and "My partner" screens (https://www.appshot.gallery/app/waterduo-water-tracker-duo)
Pattern: the two-person shape of the product is the headline. The first view shows "you" and "my partner today" side by side.
Fits our scene because: Sims Fitness is literally a plan for two, plus a trainer. Saying so on the front door is the one thing no generic fitness app can say.
Not taking: the purple palette, the mascot, the badge and streak mechanics.

### Ref 3: Waking Up, App Store listing, "Tomorrow starts tonight" screen (https://www.appshot.gallery/app/waking-up-meditation-wisdom)
Pattern: a short headline tied to when you use the app, not a feature list.
Fits our scene because: our plan runs on time already (the 12-week clock, the 8pm snack rule). A line anchored to the program's time ("Week 3 of 12") is more ours than a tagline.
Not taking: the cloud imagery, the testimonial and award screens.

### Ref 4 (outside the category): Nori Family AI, App Store listing, household avatar row (https://www.appshot.gallery/app/nori-family-ai)
Pattern: a row of the household's faces or initials up front, so the product reads as shared before you touch anything.
Fits our scene because: person, partner, and trainer are the whole cast. Three initials under the wordmark would carry "this is ours" without a paragraph.
Not taking: the warm beige palette, the cat mascot, the chat-first layout.

### Directions for Generate

1. **Plain promise.** Keep the layout. Add one line under the wordmark (for example, "Your 12-week plan, for two") and fix the dark-mode wordmark color. Smallest change. Refs 1 and 3.
2. **The cast.** Wordmark, then three initial chips (you, partner, trainer), then the Google button, then one fine-print line on why sign-in replaced the private link. Refs 2 and 4.
3. **Peek.** A blurred, non-interactive preview of this week's card behind a bottom sheet holding the Google button. The strongest "you're in the right place" signal, and the most work. Ref 1.

Recommendation: direction 2. It says the one true, specific thing (a plan for two people and their coach) in the least space, and it fills the dead vertical space with meaning instead of decoration.

### Open before building

- Where the names come from before sign-in. Showing initials to a signed-out visitor exposes who's on the plan; the chips may need to be generic roles ("You, Partner, Coach") until after sign-in.
- The UI source lives in the Supabase edge function `game-plan-app`, not in this repo. Build on the `?next=1` channel first, then promote.
- Gates still to run on the built version: contrast in both themes, 44px hit targets, 4 widths, reduced motion.

## 2026-09-26: Sign-in screen, mobile, second pass with Mobbin

Same job and scene as the pilot above. Sources: Mobbin (MCP, connected through the Claude connector). Two searches: fitness sign-in screens, and shared-plan or household welcome screens.

### Ref 5: Cal AI, sign-in sheet over a product preview (https://mobbin.com/screens/cae33fa7-93df-48ae-8232-fb246efa55fc)
Pattern: the real home screen sits behind a bottom sheet that holds the sign-in buttons. You see what you're signing into before you sign in.
Fits our scene because: it's direction 3 ("Peek") done by a shipped nutrition tracker, which is half of what our app does.
Not taking: their Apple-first button stack, their card styling.

### Ref 6: Ladder, one-line purpose headline (https://mobbin.com/screens/45937175-2a08-4aa0-be6c-86425c3d24a9)
Pattern: a condensed uppercase headline, "Sign in now to find your plan", then a single sign-in button.
Fits our scene because: our wordmark already uses a condensed uppercase face. One line in that voice ("Your 12-week plan") costs nothing and fixes the "what is this" gap.
Not taking: the full-bleed athlete photo.

### Ref 7: Fitbit, Google account sheet (https://mobbin.com/screens/bb60888c-fb65-4cbd-968b-4a09d5bc5e47)
Pattern: Google's own "Continue as <name>" sheet slides up, so a returning person signs in with one tap.
Fits our scene because: we already use Google Identity Services, which offers this One Tap prompt. Most sign-ins here are returning users on their own phone.
Not taking: the illustration.

### Ref 8 (outside the category): Citizen, family plan members row (https://mobbin.com/screens/67dac07c-e152-494a-a3e7-e819f5bd9454)
Pattern: a row of circles, the first filled with the signed-in person, the rest labeled with roles ("e.g. Mom", "e.g. Dad") until real people join.
Fits our scene because: it answers the open question from the pilot. Show roles, not names, until someone is signed in: "You, Partner, Coach".
Not taking: the invite list and contacts search.

### Ref 9 (outside the category): Pangea, shared-plan preview with a one-line promise (https://mobbin.com/screens/430c31d2-b130-42bb-8bcf-a067ff971a69)
Pattern: a phone-shaped preview of the shared plan, one line ("Share your future travel plans"), one button.
Fits our scene because: another shared-plan product that leads with the plan itself, not the brand.
Not taking: the carousel dots and multi-step intro.

### What changed

- Direction 3 now has shipped evidence (Cal AI), and direction 2 has a clean answer to the privacy question (Citizen's role placeholders).
- New recommendation: combine them. A blurred week preview up top, then a bottom sheet with a one-line headline, three role chips (You, Partner, Coach), and the Google button, with One Tap for returning users.

### Free sources vs Mobbin, same brief

| | Free (Appshot) | Mobbin |
|---|---|---|
| Relevant results | 4, all App Store marketing screens | 20 real in-app screens, 6 used |
| Actual sign-in screens | 0 | 10 |
| Answered an open question | No | Yes (roles before names) |
| Time to usable references | About 40 minutes, including browser workarounds | 2 searches, a few minutes |

## 2026-09-26: Today card and navigation, mobile (Mobbin)

Job: open the app, log the one thing you're there to log, close it. At 6am that's sets. At 8pm that's food.

Sources: Mobbin (MCP), plus 14 screenshots of our own app from Nick's phone (kept out of the repo).

What we have today: five tabs in a top bar that clips on every phone screen, and a Today card that stacks food, snacks, the 8pm button, the workout picker, weight, bonus and moves in one column.

### Ref 10: Centr, Home with labeled Move and Meals sections (https://mobbin.com/screens/e7523bd0-c371-441a-9971-c8abf5f81578)
Taking: two plain labels that split the day into its two jobs.
Not taking: the photo cards, the carousel, the plan switcher.

### Ref 11: Yazio, Diary with a Nutrition block (https://mobbin.com/screens/3fd304c4-9207-4734-a7bd-98493d252754)
Taking: food lives in its own block so it can move as a unit.
Not taking: per-meal rows. Our faces are faster than meal logging, and that's the point.

### Ref 12: Hevy, live workout with a Previous column (https://mobbin.com/screens/b7c6155c-8453-4230-9c28-a12218a415d8)
Confirms what we already have: "Last time" next to the input is the most useful detail in a lifting log. No change needed.

### Ref 13: Garmin Connect, Peloton, Hevy, Tonal: bottom tab bars (https://mobbin.com/screens/6a8103d0-b97e-46aa-a290-1014d55c5353)
Taking: navigation at the bottom, in thumb reach, icon plus a one-word label, every tab visible.
Not taking: a More tab. Five fits.

### What shipped to the preview

See `design/next-build/README.md`. Bottom tabs on phones, and the Today card split into Train and Eat, ordered by time of day. Nothing new to learn: same controls, same colors, same words.

### Still open

- The Goals strength-test table scrolls sideways with no hint. Separate small pass.
- "Workout A" in the day picker doesn't match the card names on the Workouts tab.
