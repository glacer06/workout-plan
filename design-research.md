# Design research log

Research notes for Sims Fitness, written by forge-design's Research step. References are links plus notes; no third-party screenshots live in this repo. Screenshots of our own app are in `design/current/`.

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
