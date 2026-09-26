#!/usr/bin/env python3
"""Palette: black and old gold for Nick, berry for Steph, orange for the one thing to do now.

Usage: python3 patch-palette.py <in.js> <out.js>
Refuses to run if any piece it replaces has changed.
"""
import sys

src, dst = sys.argv[1], sys.argv[2]
b = open(src, encoding='utf-8').read()


def rep(old, new, count=1):
    global b
    n = b.count(old)
    if n != count:
        sys.exit(f'expected {count} of {old[:70]!r}, found {n}')
    b = b.replace(old, new)


LIGHT_OLD = ('--bg: #f3f4f1;--surface: #ffffff;--surface-2: #f7f8f5;--ink: #1c211f;--ink-2: #4f5853;--ink-3: #7b847f;'
             '--line: #d8dcd7;--line-2: #e8ebe6;--accent: #2c5aa0;--accent-ink: #ffffff;--accent-soft: #e2e9f5;'
             '--plate-a: #2c5aa0;--plate-b: #c28e0c;--plate-c: #bd3d34;--plate-x: #6f7a74;')
LIGHT_NEW = ('--bg: #f6f3ec;--surface: #ffffff;--surface-2: #faf8f3;--ink: #15130f;--ink-2: #4a453c;--ink-3: #756e61;'
             '--line: #dcd5c8;--line-2: #ebe6dc;--accent: #b04304;--accent-ink: #ffffff;--accent-soft: #fbe6d6;'
             '--plate-a: #3a63a8;--plate-b: #2f8a5e;--plate-c: #2a2622;--plate-x: #8a8376;'
             '--cuse: #f76900;--cuse-ink: #15130f;'
             '--nick: #b8912f;--nick-ink: #86661c;--nick-soft: #f4ecd6;'
             '--steph: #a3245e;--steph-ink: #a3245e;--steph-soft: #f8e3ec;')
rep(LIGHT_OLD, LIGHT_NEW)
rep('--shadow: 0 1px 2px rgba(28,33,31,0.05),0 8px 20px -14px rgba(28,33,31,0.25)',
    '--shadow: 0 1px 2px rgba(21,19,15,0.05),0 8px 20px -14px rgba(21,19,15,0.25)')

DARK_OLD = ('--bg: #111412;--surface: #191d1b;--surface-2: #1f2421;--ink: #e7ebe8;--ink-2: #aab3ae;--ink-3: #7e8782;'
            '--line: #2e3531;--line-2: #252b28;--accent: #8fb0ea;--accent-ink: #0f1a2e;--accent-soft: #1f2b40;'
            '--plate-a: #6f98de;--plate-b: #e0b23a;--plate-c: #e2685e;--plate-x: #8b958f;')
DARK_NEW = ('--bg: #12110f;--surface: #1b1916;--surface-2: #221f1b;--ink: #efeae0;--ink-2: #b5ad9f;--ink-3: #8a8275;'
            '--line: #36312a;--line-2: #2a2621;--accent: #ff8f45;--accent-ink: #1a0c00;--accent-soft: #3a2413;'
            '--plate-a: #7a9fe0;--plate-b: #5cc08a;--plate-c: #d8d2c6;--plate-x: #8f887b;'
            '--cuse: #ff7a1a;--cuse-ink: #15130f;'
            '--nick: #d9b665;--nick-ink: #d9b665;--nick-soft: #2f2716;'
            '--steph: #e8729f;--steph-ink: #e8729f;--steph-soft: #3b1c2a;')
rep(DARK_OLD, DARK_NEW, 2)
rep('--hub: rgba(17,20,18,0.85)', '--hub: rgba(18,17,15,0.85)', 2)

# Browser bar color (theme-color) follows the new backgrounds.
rep('#f3f4f1', '#f6f3ec', 3)
rep('#111412', '#12110f', 3)

# Who is who: the person whose log is on screen, and the other one.
rep("var N = names();\ndocument.title = N.title;",
    "var N = names();\ndocument.documentElement.setAttribute('data-me', personSlot());\ndocument.title = N.title;")
rep("<div class=\"rh-head\" role=\"columnheader\">' + esc(names().person)",
    "<div class=\"rh-head rh-me-h\" role=\"columnheader\">' + esc(names().person)")
rep("<div class=\"rh-head\" role=\"columnheader\">' + esc(names().partner)",
    "<div class=\"rh-head rh-you-h\" role=\"columnheader\">' + esc(names().partner)")
rep("h += '<div class=\"rh-day\">' + dn + '</div><div>' + steph + '</div><div>' + nick + '</div>';",
    "h += '<div class=\"rh-day\">' + dn + '</div><div class=\"rh-me\">' + steph + '</div><div class=\"rh-you\">' + nick + '</div>';")
rep("if (me) meBtn.innerHTML = avatarHTML(me, 30);",
    "if (me) { meBtn.innerHTML = avatarHTML(me, 30); meBtn.setAttribute('data-slot', me.slot || ''); }")
rep("if (other) otherBtn.innerHTML = avatarHTML(other, 30);",
    "if (other) { otherBtn.innerHTML = avatarHTML(other, 30); otherBtn.setAttribute('data-slot', other.slot || ''); }")

CSS = ''.join([
    ':root{--me: var(--nick);--me-ink: var(--nick-ink);--me-soft: var(--nick-soft);--you: var(--steph);--you-ink: var(--steph-ink);--you-soft: var(--steph-soft)}',
    ':root[data-me="steph"]{--me: var(--steph);--me-ink: var(--steph-ink);--me-soft: var(--steph-soft);--you: var(--nick);--you-ink: var(--nick-ink);--you-soft: var(--nick-soft)}',
    '.btn-primary{background: var(--cuse);color: var(--cuse-ink);border-color: var(--cuse);font-weight: 700}',
    '.rhythm>.rh-me-h{color: var(--me-ink);box-shadow: inset 0 -3px 0 var(--me)}',
    '.rhythm>.rh-you-h{color: var(--you-ink);box-shadow: inset 0 -3px 0 var(--you)}',
    '.rh-me .rh-slot{border-left: 3px solid var(--me);padding-left: 8px}',
    '.rh-you .rh-slot{border-left: 3px solid var(--you);padding-left: 8px}',
    '.rh-me .rh-slot b,.rh-you .rh-slot b{color: var(--ink)}',
    '.avatar-btn[data-slot="nick"]{border: 2px solid var(--nick)}',
    '.avatar-btn[data-slot="steph"]{border: 2px solid var(--steph)}',
    '.avatar-btn[data-slot="nick"] .avatar-fallback{background: var(--nick-soft);color: var(--nick-ink)}',
    '.avatar-btn[data-slot="steph"] .avatar-fallback{background: var(--steph-soft);color: var(--steph-ink)}',
    ':root:not(#sf) body{color: var(--ink);background: var(--bg)}',
    '.cast-chip .cast-ico{background: #15130f;color: #d9b665;box-shadow: inset 0 0 0 1.5px #d9b665}',
    '.tag-nick{color: var(--you-ink);background: var(--you-soft);border: 1px solid var(--you);border-style: solid}',
])
rep("\nvar hash = (location.hash || '').replace('#', '');",
    "\n(function () { var st = document.createElement('style'); st.id = 'sfPalette'; st.textContent = " + repr(CSS).replace("\\'", "'") + "; document.head.appendChild(st); })();"
    "\nvar hash = (location.hash || '').replace('#', '');")

open(dst, 'w', encoding='utf-8').write(b)
print('ok', len(b))
