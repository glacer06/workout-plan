import hashlib, json
src = open('app-next.base4.js', encoding='utf-8').read()
s = src
PAIRS = []
def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:70])
    PAIRS.append((old, new)); s = s.replace(old, new)

PERSON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>'
COACH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 3h6v3H9zM8.5 11h7M8.5 15h5"/></svg>'
def chip(ico, label):
    return '<li class="cast-chip"><span class="cast-ico">' + ico + '</span><span>' + label + '</span></li>'

old_card = """return '<div class="login-card"><img class="login-icon" src="steph-fitness-B-blue.svg" alt=""><div class="login-name">Sims Fitness</div><div id="gsiBtn" class="gsi-slot"></div><p class="fine" id="loginMsg"></p></div>';"""
new_card = ("return '<div class=\"login-card\"><img class=\"login-icon\" src=\"steph-fitness-B-blue.svg\" alt=\"\"><div class=\"login-name\">Sims Fitness</div>' +\n"
 "'<p class=\"login-line\">Your 12-week plan, for the two of you and your coach.</p>' +\n"
 "'<ul class=\"cast\" aria-label=\"Who this plan is for\">" + chip(PERSON, 'You') + chip(PERSON, 'Partner') + chip(COACH, 'Coach') + "</ul>' +\n"
 "'<div id=\"gsiBtn\" class=\"gsi-slot\"></div><p class=\"fine\" id=\"loginMsg\" role=\"status\"></p>' +\n"
 "'<p class=\"fine login-fine\">Sign in once on each phone and it remembers you. The old private link is being retired.</p></div>';")
rep(old_card, new_card)

old_btn = "google.accounts.id.renderButton(slot, { theme: 'filled_black', size: 'large', shape: 'pill', text: 'signin_with' });"
new_btn = old_btn + "\nif (slotId === 'gsiBtn') { try { google.accounts.id.prompt(); } catch (e) {} }"
rep(old_btn, new_btn)

CSS = """
.login-name{color:var(--ink)}
.login-card{gap:14px}
.login-line{margin:0;font-size:1.05rem;line-height:1.4;color:var(--ink-2);max-width:30ch;text-wrap:balance}
.cast{list-style:none;margin:6px 0 10px;padding:0;display:flex;justify-content:center;gap:22px}
.cast-chip{display:grid;justify-items:center;gap:6px;font-family:var(--mono);font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-3)}
.cast-ico{width:48px;height:48px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.cast-ico svg{width:24px;height:24px}
.login-fine{margin:4px 0 0;max-width:32ch;color:var(--ink-3)}
#loginMsg:empty{display:none}
"""
APPEND = "\n;(function () { var st = document.createElement('style'); st.id = 'sf-next-signin'; st.textContent = " + repr(CSS) + "; document.head.appendChild(st); })();\n"
s += APPEND
open('app-next.js', 'w', encoding='utf-8').write(s)
json.dump({'pairs': PAIRS, 'append': APPEND, 'src_md5': hashlib.md5(src.encode()).hexdigest(), 'dst_md5': hashlib.md5(s.encode()).hexdigest()}, open('edit4.json', 'w'))
print(hashlib.md5(src.encode()).hexdigest(), hashlib.md5(s.encode()).hexdigest())
