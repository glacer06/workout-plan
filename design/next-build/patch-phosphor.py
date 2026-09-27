#!/usr/bin/env python3
"""Tab bar icons: Phosphor (MIT). Regular weight for inactive tabs, fill for the active tab.

Usage: python3 patch-phosphor.py <in.js> <out.js> <icons.json>
icons.json maps tab -> {"r": svg, "f": svg}, fetched from the Phosphor set.
Refuses to run if any piece it replaces has changed.
"""
import json, re, sys

src, dst, icons_path = sys.argv[1:4]
b = open(src, encoding='utf-8').read()
icons = json.load(open(icons_path))


def tag(svg, cls):
    svg = re.sub(r'\s(width|height)="[^"]*"', '', svg)
    svg = svg.replace('<svg ', '<svg class="t-ico ' + cls + '" aria-hidden="true" ', 1)
    return svg.replace('"', '\\"')


for tab in ['week', 'workouts', 'food', 'goals', 'trainer']:
    pat = re.compile(r'(data-tab=\\"' + tab + r'\\"[^>]*>)(<svg class=\\"t-ico\\".*?</svg>)')
    found = pat.findall(b)
    if len(found) != 1:
        sys.exit(f'expected one {tab} tab icon, found {len(found)}')
    b = pat.sub(lambda m: m.group(1) + tag(icons[tab]['r'], 'ph-r') + tag(icons[tab]['f'], 'ph-f'), b)

CSS = ('.tab[aria-selected="true"] .ph-r{display:none!important}'
       '.tab:not([aria-selected="true"]) .ph-f{display:none!important}')
anchor = "\nvar hash = (location.hash || '').replace('#', '');"
if b.count(anchor) != 1:
    sys.exit('anchor missing')
b = b.replace(anchor, "\n(function () { var st = document.createElement('style'); st.id = 'sfPhosphor'; st.textContent = '" + CSS + "'; document.head.appendChild(st); })();" + anchor)
open(dst, 'w', encoding='utf-8').write(b)
print('ok', len(b))
