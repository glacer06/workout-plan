import re,sys
W='/home/user/workout-plan/'
blue=open(W+'steph-fitness-B-blue.svg').read()
# geometry paths from the approved vector, colors swapped
paths=re.findall(r'<path [^>]*/>', blue)
HANDLE=paths[0]; SHOULDER=paths[1]; FACET_L=paths[2]; FACET_R=paths[3]; FRONT=paths[4]; EDGE=paths[5]; S=paths[6]
DEFS='''<defs>
  <linearGradient id="handle" x1=".1" y1="0" x2=".7" y2="1"><stop stop-color="#8C8C8C"/><stop offset=".12" stop-color="#3A3A3A"/><stop offset=".5" stop-color="#141414"/><stop offset=".85" stop-color="#2A2A2A"/><stop offset="1" stop-color="#0E0E0E"/></linearGradient>
  <linearGradient id="shoulder" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9A9A9A"/><stop offset=".2" stop-color="#2E2E2E"/><stop offset=".49" stop-color="#7A7A7A"/><stop offset=".75" stop-color="#262626"/><stop offset="1" stop-color="#101010"/></linearGradient>
  <linearGradient id="front" x1=".2" y1="0" x2=".8" y2="1"><stop stop-color="#383838"/><stop offset=".5" stop-color="#1B1B1B"/><stop offset="1" stop-color="#0B0B0B"/></linearGradient>
  <linearGradient id="letter" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#EBCB7E"/><stop offset=".55" stop-color="#C9A04A"/><stop offset="1" stop-color="#9C7A2A"/></linearGradient>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="18"/></filter>
 </defs>'''
def body():
    fl=FACET_L.replace('#071A3D','#050505'); fr=FACET_R.replace('#071A3D','#050505')
    ed=EDGE.replace('#607CAE','#A8A8A8')
    s=S.replace('#06132C','#0A0A0A')
    return '\n '.join([HANDLE,SHOULDER,fl,fr,FRONT,ed,s])
def svg(bg, label, view='0 0 1024 1024', size=1024, rx=0, shadow=True):
    x,y,w,h=map(int,view.split())
    rxa = ' rx="%d"' % rx if rx else ''
    rect=f'<rect x="{x}" y="{y}" width="{w}" height="{h}"{rxa} fill="{bg}"/>' if bg else ''
    sh='<ellipse cx="510" cy="905" rx="260" ry="32" fill="#000" opacity=".28" filter="url(#shadow)"/>' if shadow else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="{view}" role="img" aria-label="{label}">\n {DEFS}\n {rect}\n {sh}\n {body()}\n</svg>\n'
BG='#2B2B2B'
open(W+'sims-fitness-gold.svg','w').write(svg(BG,'Sims Fitness icon, dark grey background'))
open(W+'sims-fitness-gold-transparent.svg','w').write(svg(None,'Sims Fitness icon',shadow=False))
open(W+'favicon-gold.svg','w').write(svg(BG,'Sims Fitness',view='77 61 860 860',size=64,rx=150,shadow=False))
