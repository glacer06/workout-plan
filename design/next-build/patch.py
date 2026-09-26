import sys
src = open('app-next.orig.js', encoding='utf-8').read()
s = src
def rep(old, new, count=1):
    global s
    n = s.count(old)
    assert n == count, (n, old[:80])
    s = s.replace(old, new)

ICO = {
 'week': '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 'workouts': '<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
 'food': '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17.5 21V3c-2 1.5-3 4-3 7v4h3"/>',
 'goals': '<path d="M5.5 21V4M5.5 4h11l-2 4 2 4h-11"/>',
 'trainer': '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 3h6v3H9zM8.5 11h7M8.5 15h5"/>',
}
def svg(k):
    return '<svg class="t-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICO[k] + '</svg>'
def esc_js_dq(h):  # header HTML lives in a double-quoted JS string
    return h.replace('"', '\\"')

# 1. Tab markup: icon + long label (desktop) + short label (phone bottom bar)
for key, long, short in [('week','This week','Week'),('workouts','Workouts','Workouts'),('food','Food','Food'),('goals','Goals','Goals')]:
    sel = 'true' if key == 'week' else 'false'
    old = 'data-tab=\\"' + key + '\\" aria-selected=\\"' + sel + '\\">' + long + '</button>'
    new = 'data-tab=\\"' + key + '\\" aria-selected=\\"' + sel + '\\">' + esc_js_dq(svg(key) + '<span class="t-long">' + long + '</span><span class="t-short">' + short + '</span>') + '</button>'
    rep(old, new)
rep('id=\\"trainerTab\\" aria-selected=\\"false\\">For the trainer</button>',
    'id=\\"trainerTab\\" aria-selected=\\"false\\">' + esc_js_dq(svg('trainer') + '<span class="t-long">For the trainer</span><span class="t-short">Coach</span>') + '</button>')
rep("document.getElementById('trainerTab').textContent = 'For ' + N.trainer;",
    "(function () { var tl = document.querySelector('#trainerTab .t-long'); if (tl) tl.textContent = 'For ' + N.trainer; })();")

# 2. Today card: two labeled sections, Train and Eat, ordered by what comes next
old_body = """'<div class="food-row" title="How eating went">"""
assert s.count(old_body) == 1
start = s.index("'<div class=\"food-row\" title=\"How eating went\">")
end = s.index("'</div>' + liftsHTML(date, e) + '</li></ol>';", start) + len("'</div>' + liftsHTML(date, e) + '</li></ol>';")
block = s[start:end]
food_row = block[:block.index("snackRow(date, e) +")]
def grab(prefix):
    lines=[l for l in block.split("\n") if l.startswith(prefix)]
    assert len(lines)==1, prefix
    return lines[0].rstrip(" +")
session_field = grab("'<label class=\"field f-session\">")
weight_field = grab("'<label class=\"field\"><span>Weight</span>")
bonus_btn = grab("'<button class=\"bonus\"")
for piece in (session_field, weight_field, bonus_btn):
    assert piece in block, piece[:60]
new_block = (
 "'';\n"
 "var gymDay = pl.mine.length > 0 || (!!e.session && e.session !== 'X') || (e.lifts || []).length > 0;\n"
 "var trainFirst = gymDay && !(isToday && new Date().getHours() >= 16);\n"
 "var trainSec = '<section class=\"dsec dsec-train\" aria-label=\"Train\"><div class=\"dsec-h\">Train</div>' +\n"
 "'<div class=\"day-fields dsec-fields\">' + " + session_field + " + '</div>' +\n"
 "liftsHTML(date, e) + '<div class=\"day-fields dsec-fields dsec-bonus\">' + " + bonus_btn + " + '</div></section>';\n"
 "var eatSec = '<section class=\"dsec dsec-eat\" aria-label=\"Eat\"><div class=\"dsec-h\">Eat</div>' +\n"
 + food_row + "snackRow(date, e) +\n"
 "'<div class=\"day-fields dsec-fields dsec-weigh\">' + " + weight_field + " + '</div></section>';\n"
 "return head + (trainFirst ? trainSec + eatSec : eatSec + trainSec) + '</li></ol>';"
)
# the card head (everything before the food row) becomes `head`
ret = "return '<ol class=\"days\"><li class=\"day' + (isToday ? ' is-today' : '') + '\">' +"
assert s.count(ret) == 1
s = s.replace(ret, "var head = '<ol class=\"days\"><li class=\"day' + (isToday ? ' is-today' : '') + '\">' +", 1)
s = s.replace(block, new_block, 1)

# 3. CSS, appended after the app's own stylesheet so it wins
CSS = """
.t-ico,.t-short{display:none}
.dsec{display:grid;gap:10px;border-top:1px solid var(--line-2);padding-top:10px}
.dsec-h{font-family:var(--display);font-weight:700;font-size:0.95rem;letter-spacing:0.06em;text-transform:uppercase;color:var(--ink-2)}
.dsec-fields{border-top:0;padding-top:0}
.dsec-weigh{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
@media (max-width: 640px){
 .tabs.wrap{position:fixed;left:0;right:0;bottom:0;z-index:30;max-width:none;margin:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:0;overflow:visible;padding:4px 4px calc(4px + env(safe-area-inset-bottom,0px));background:var(--surface);border-top:1px solid var(--line);box-shadow:0 -8px 24px -18px rgba(0,0,0,0.35)}
 .tab{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:54px;padding:6px 2px;border-bottom:0;font-size:0.74rem;letter-spacing:0.03em;border-radius:10px}
 .tab .t-ico{display:block;width:23px;height:23px}
 .tab .t-long{display:none}
 .tab .t-short{display:inline}
 .tab[aria-selected="true"]{color:var(--accent);background:var(--accent-soft)}
 main{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))}
 .toast{bottom:calc(80px + env(safe-area-inset-bottom,0px))}
 body.editing .tabs.wrap{display:none}
 body.editing .toast{bottom:calc(92px + env(safe-area-inset-bottom,0px))}
}
"""
inject = "\n;(function () { var st = document.createElement('style'); st.id = 'sf-next-ui'; st.textContent = " + repr(CSS).replace("\\n","\\n") + "; document.head.appendChild(st); })();\n"
s = s + inject
open('app-next.js', 'w', encoding='utf-8').write(s)
print('ok', len(src), len(s))
