import hashlib, json
src = open('app-next.base3.js', encoding='utf-8').read()
old = "((S.plan && S.plan.schedule && S.plan.schedule[personSlot()]) || []).forEach(function (s) { if (s.workout === 'A' || s.workout === 'C') lab[s.workout] = s.label; });"
new = old + "\n((S.plan && S.plan.workouts && S.plan.workouts.list) || []).forEach(function (w) { if (lab[w.id] && w.name) lab[w.id] = w.name; });"
assert src.count(old) == 1
s = src.replace(old, new)
open('app-next.js', 'w', encoding='utf-8').write(s)
json.dump({'pairs': [[old, new]], 'append': '', 'src_md5': hashlib.md5(src.encode()).hexdigest(), 'dst_md5': hashlib.md5(s.encode()).hexdigest()}, open('edit3.json', 'w'))
print(hashlib.md5(src.encode()).hexdigest(), hashlib.md5(s.encode()).hexdigest())
