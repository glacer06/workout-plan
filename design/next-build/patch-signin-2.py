import hashlib, json
src = open('app-next.base5.js', encoding='utf-8').read()
s = src
PAIRS = []
def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:70])
    PAIRS.append((old, new)); s = s.replace(old, new)
a = s.index("'<p class=\"login-line\">")
b = s.index("The old private link is being retired.</p></div>';", a) + len("The old private link is being retired.</p></div>';")
old = s[a:b]
PERSON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>'
new = ("'<p class=\"login-line\">Two people, one 12-week plan.</p>' +\n"
 "'<ul class=\"cast\" aria-label=\"Me and you\"><li class=\"cast-chip\"><span class=\"cast-ico\">" + PERSON + "</span><span>Me</span></li>" +
 "<li class=\"cast-bump\"><button type=\"button\" class=\"bump\" aria-label=\"Fist bump\"><span class=\"fist fist-l\" aria-hidden=\"true\">\U0001F91C</span><span class=\"fist fist-r\" aria-hidden=\"true\">\U0001F91B</span></button></li>" +
 "<li class=\"cast-chip\"><span class=\"cast-ico\">" + PERSON + "</span><span>You</span></li></ul>' +\n"
 "'<div id=\"gsiBtn\" class=\"gsi-slot\"></div><p class=\"fine\" id=\"loginMsg\" role=\"status\"></p></div>';")
rep(old, new)
rep('<p class="fine">The private link is being retired. Sign in once on this phone to keep access.</p>', '')
CSS = """
.cast{align-items:center;gap:10px}
.cast-bump{padding-bottom:22px}
.bump{position:relative;background:none;border:0;padding:8px 6px;margin:0;font-size:1.9rem;line-height:1;cursor:pointer;display:inline-flex;align-items:center;-webkit-tap-highlight-color:transparent;touch-action:manipulation}
.fist{display:inline-block;will-change:transform}
.fist-l{margin-right:-0.12em}
.bump::after{content:"\\2764\\FE0F";position:absolute;left:50%;top:0;font-size:1.1rem;line-height:1;margin-left:-0.5em;opacity:0;pointer-events:none}
@keyframes sfBumpL{0%{transform:none}40%{transform:translateX(-14px) rotate(-10deg)}62%{transform:translateX(4px)}78%{transform:translateX(-1px)}100%{transform:none}}
@keyframes sfBumpR{0%{transform:none}40%{transform:translateX(14px) rotate(10deg)}62%{transform:translateX(-4px)}78%{transform:translateX(1px)}100%{transform:none}}
@keyframes sfHeart{0%,45%{opacity:0;transform:translateY(6px) scale(0.3)}58%{opacity:1;transform:translateY(-6px) scale(1.25)}70%{transform:translateY(-12px) scale(1)}100%{opacity:0;transform:translateY(-38px) scale(0.9)}}
.bump.go .fist-l{animation:sfBumpL 0.55s cubic-bezier(.3,.7,.3,1)}
.bump.go .fist-r{animation:sfBumpR 0.55s cubic-bezier(.3,.7,.3,1)}
.bump.go::after{animation:sfHeart 1.1s ease-out}
@media (prefers-reduced-motion: reduce){.bump.go .fist,.bump.go::after{animation:none}}
"""
JS = """
(function () {
function bump(el) { el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) {} }
document.addEventListener('click', function (ev) { var b = ev.target.closest && ev.target.closest('.bump'); if (b) bump(b); });
document.addEventListener('pointerover', function (ev) { if (ev.pointerType !== 'mouse') return; var b = ev.target.closest && ev.target.closest('.bump'); if (b && !(ev.relatedTarget && b.contains(ev.relatedTarget))) bump(b); });
document.addEventListener('animationend', function (ev) { if (ev.animationName === 'sfHeart') { var b = ev.target.closest('.bump'); if (b) b.classList.remove('go'); } });
})();
"""
APPEND = JS + "\n;(function () { var st = document.createElement('style'); st.id = 'sf-next-signin2'; st.textContent = " + repr(CSS) + "; document.head.appendChild(st); })();\n"
s += APPEND
open('app-next.js', 'w', encoding='utf-8').write(s)
json.dump({'pairs': PAIRS, 'append': APPEND, 'src_md5': hashlib.md5(src.encode()).hexdigest(), 'dst_md5': hashlib.md5(s.encode()).hexdigest()}, open('edit5.json', 'w'), ensure_ascii=False)
print(hashlib.md5(src.encode()).hexdigest(), hashlib.md5(s.encode()).hexdigest())
