import hashlib
src = open('app-next.base2.js', encoding='utf-8').read()
s = src
PAIRS = []
def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:70])
    PAIRS.append((old, new)); s = s.replace(old, new)

a = s.index("h += '<div class=\"table-wrap\"><table><thead><tr><th>Test</th>")
b = s.index("h += '</tbody></table></div>';", a) + len("h += '</tbody></table></div>';")
table = s[a:b]
rep(table, "if (S.editing) {\n" + table + "\n} else { h += gtCards(G.tests || []); }")
rep("if (!S.editing && can()) h += '<p class=\"fine\">Tap Edit plan at the top to fill in results.</p>';",
    "if (!S.editing && can()) h += '<p class=\"fine\">Tap a week to log a result. It starts at your last number.</p>';")

JS = r"""
/* ---------- strength tests: tap a week, pick a number ---------- */
var GT_COLS = [['baseline', 'Week 1'], ['w4', 'Week 4'], ['w8', 'Week 8'], ['w12', 'Week 12']];
function gtSpec(t) {
var s = ((t.name || '') + ' ' + (t.how || '')).toLowerCase();
if (/plank|hold|second/.test(s)) return { u: 'sec', min: 5, max: 90, step: 5, start: 20 };
if (/push-?up|pull-?up|most clean reps/.test(s)) return { u: 'reps', min: 1, max: 50, step: 1, start: 8 };
if (/deadlift/.test(s)) return { u: 'lbs', min: 45, max: 315, step: 5, start: 65 };
if (/machine|press|row|pulldown/.test(s)) return { u: 'lbs', min: 10, max: 250, step: 5, start: 40 };
return { u: 'lbs', min: 5, max: 100, step: 5, start: 15 };
}
function gtNum(v) { var m = String(v == null ? '' : v).match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : null; }
function gtCards(tests) {
var h = '<div class="gt-list">';
tests.forEach(function (t, ti) {
var sp = gtSpec(t), first = gtNum(t.baseline), last = null;
GT_COLS.forEach(function (c) { var n = gtNum(t[c[0]]); if (n != null) last = n; });
var gain = (first != null && last != null && last !== first) ? (last > first ? '+' : '−') + Math.abs(Math.round((last - first) * 10) / 10) + ' ' + sp.u + ' since Week 1' : '';
h += '<article class="gt-card"><div class="gt-head"><b>' + esc(t.name) + '</b>' + (gain ? '<span class="gt-gain">' + esc(gain) + '</span>' : '') + '</div>' +
'<small class="gt-how">' + esc(t.how) + '</small><div class="gt-row">';
GT_COLS.forEach(function (c) {
var v = t[c[0]];
h += '<button type="button" class="gt-cell' + (v ? ' has' : '') + '" id="gt-' + ti + '-' + c[0] + '" data-gt-open="' + ti + '" data-gt-f="' + c[0] + '"' + (can() ? '' : ' disabled') + ' aria-label="' + esc(t.name + ', ' + c[1] + ': ' + (v || 'not yet')) + '"><span>' + c[1] + '</span><b>' + (v ? esc(v) : 'Not yet') + '</b></button>';
});
h += '</div></article>';
});
return h + '</div>';
}
var gtEdit = null;
function gtOpen(ti, f) {
var t = ((S.plan.goals || {}).tests || [])[ti];
if (!t) return;
var sp = gtSpec(t), v = gtNum(t[f]), label = '';
if (v == null) {
GT_COLS.forEach(function (c) { if (c[0] === f) { label = c[1]; return; } if (!label) { var n = gtNum(t[c[0]]); if (n != null) v = n; } });
if (v == null) v = sp.start;
}
GT_COLS.forEach(function (c) { if (c[0] === f) label = c[1]; });
v = Math.max(sp.min, Math.min(sp.max, Math.round(v / sp.step) * sp.step));
gtEdit = { ti: ti, f: f, v: v, sp: sp };
snackDate = null; bonusDate = null; liftDate = null;
var body = document.getElementById('snackBody');
body.innerHTML = '<div class="drawer-head"><h2 id="snackTitle">' + esc(t.name) + ', ' + label + '</h2><button class="btn btn-sm btn-quiet" type="button" data-close="1">Cancel</button></div>' +
'<p class="lede">' + esc(t.how) + '</p>' +
'<div class="gt-pick"><button type="button" class="gt-step" data-gt-step="-1" aria-label="' + sp.step + ' less">−</button>' +
'<output class="gt-val" id="gtVal" aria-live="polite"><b>' + v + '</b> ' + sp.u + '</output>' +
'<button type="button" class="gt-step" data-gt-step="1" aria-label="' + sp.step + ' more">+</button></div>' +
'<input type="range" class="gt-range" id="gtRange" min="' + sp.min + '" max="' + sp.max + '" step="' + sp.step + '" value="' + v + '" aria-label="' + esc(t.name) + ' in ' + sp.u + '">' +
'<div class="gt-scale"><span>' + sp.min + '</span><span>' + sp.max + ' ' + sp.u + '</span></div>' +
'<div class="gt-actions">' + (t[f] ? '<button class="btn btn-quiet" type="button" data-gt-clear="1">Clear</button>' : '<span></span>') +
'<button class="btn btn-primary" type="button" data-gt-save="1">Save ' + label + '</button></div>';
document.getElementById('snackDrawer').hidden = false;
}
function gtSet(v) {
if (!gtEdit) return;
var sp = gtEdit.sp;
v = Math.max(sp.min, Math.min(sp.max, Math.round(v / sp.step) * sp.step));
gtEdit.v = v;
var o = document.getElementById('gtVal'); if (o) o.innerHTML = '<b>' + v + '</b> ' + sp.u;
var r = document.getElementById('gtRange'); if (r && +r.value !== v) r.value = v;
}
function gtSave(val) {
if (!gtEdit || !can()) return;
var e = gtEdit; gtEdit = null;
var body = JSON.parse(JSON.stringify(S.plan.goals || {}));
var t = body.tests[e.ti]; t[e.f] = val;
document.getElementById('snackDrawer').hidden = true;
S.focusId = 'gt-' + e.ti + '-' + e.f;
api('plan', { key: 'goals', body: body }).then(function () {
S.plan.goals = body; render(); toast(val ? t.name + ': ' + val + ' saved.' : t.name + ' cleared.');
}, handleErr);
}
document.addEventListener('click', function (ev) {
var o = ev.target.closest('[data-gt-open]');
if (o) { if (can() && !S.editing) gtOpen(+o.dataset.gtOpen, o.dataset.gtF); return; }
if (!gtEdit || document.getElementById('snackDrawer').hidden) return;
var st = ev.target.closest('[data-gt-step]');
if (st) { gtSet(gtEdit.v + (+st.dataset.gtStep) * gtEdit.sp.step); return; }
if (ev.target.closest('[data-gt-save]')) { gtSave(gtEdit.v + ' ' + gtEdit.sp.u); return; }
if (ev.target.closest('[data-gt-clear]')) { gtSave(''); return; }
});
document.addEventListener('input', function (ev) { if (ev.target && ev.target.id === 'gtRange') gtSet(+ev.target.value); });
"""
CSS = """
.gt-list{display:grid;gap:10px}
.gt-card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:12px;display:grid;gap:6px}
.gt-head{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.gt-head b{font-size:1.02rem}
.gt-gain{font-family:var(--mono);font-size:0.72rem;color:var(--good);white-space:nowrap}
.gt-how{color:var(--ink-3)}
.gt-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:4px}
.gt-cell{min-height:56px;border:1px solid var(--line);border-radius:10px;background:var(--surface-2);color:var(--ink-3);display:grid;align-content:center;justify-items:center;gap:2px;padding:6px 2px;cursor:pointer;font:inherit}
.gt-cell span{font-family:var(--mono);font-size:0.62rem;letter-spacing:0.06em;text-transform:uppercase}
.gt-cell b{font-weight:600;font-size:0.86rem}
.gt-cell.has{background:var(--accent-soft);border-color:var(--accent);color:var(--ink)}
.gt-cell:disabled{cursor:default}
.gt-pick{display:grid;grid-template-columns:64px 1fr 64px;align-items:center;gap:12px;margin:8px 0}
.gt-step{height:64px;border-radius:50%;border:1px solid var(--line);background:var(--surface-2);color:var(--ink);font-size:1.8rem;line-height:1;cursor:pointer}
.gt-val{text-align:center;font-family:var(--display);font-size:1.3rem;color:var(--ink-2);text-transform:uppercase;letter-spacing:0.04em}
.gt-val b{font-size:3.2rem;color:var(--ink);letter-spacing:0}
.gt-range{width:100%;height:44px;accent-color:var(--accent)}
.gt-scale{display:flex;justify-content:space-between;font-family:var(--mono);font-size:0.66rem;color:var(--ink-3);margin-top:-6px}
.gt-actions{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px}
.gt-actions .btn-primary{min-height:48px;padding-inline:22px}
"""
ANCHOR = "\nvar hash = (location.hash || '').replace('#', '');"
rep(ANCHOR, JS + ANCHOR)
APPEND = "\n;(function () { var st = document.createElement('style'); st.id = 'sf-next-goals'; st.textContent = " + repr(CSS) + "; document.head.appendChild(st); })();\n"
s = s + APPEND
open('app-next.js', 'w', encoding='utf-8').write(s)
import json
json.dump({'pairs': PAIRS, 'append': APPEND, 'src_md5': hashlib.md5(src.encode()).hexdigest(), 'dst_md5': hashlib.md5(s.encode()).hexdigest()}, open('edit2.json', 'w'))
print('src', hashlib.md5(src.encode()).hexdigest(), 'dst', hashlib.md5(s.encode()).hexdigest(), len(s))
