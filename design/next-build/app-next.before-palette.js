(function(){var css=":root{--bg: #f3f4f1;--surface: #ffffff;--surface-2: #f7f8f5;--ink: #1c211f;--ink-2: #4f5853;--ink-3: #7b847f;--line: #d8dcd7;--line-2: #e8ebe6;--accent: #2c5aa0;--accent-ink: #ffffff;--accent-soft: #e2e9f5;--plate-a: #2c5aa0;--plate-b: #c28e0c;--plate-c: #bd3d34;--plate-x: #6f7a74;--good: #2f7d4f;--good-soft: #e0efe5;--okay: #6f8a1c;--okay-soft: #ecf1d8;--meh: #bf7414;--meh-soft: #f7e8d0;--rough: #b53a32;--rough-soft: #f5dedb;--hub: rgba(255,255,255,0.9);--shadow: 0 1px 2px rgba(28,33,31,0.05),0 8px 20px -14px rgba(28,33,31,0.25);--display: 'Barlow Condensed','Arial Narrow','Roboto Condensed',sans-serif;--body: 'Source Sans 3','Segoe UI',system-ui,-apple-system,sans-serif;--mono: 'IBM Plex Mono',ui-monospace,'SF Mono',Menlo,monospace}@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]){color-scheme: dark;--bg: #111412;--surface: #191d1b;--surface-2: #1f2421;--ink: #e7ebe8;--ink-2: #aab3ae;--ink-3: #7e8782;--line: #2e3531;--line-2: #252b28;--accent: #8fb0ea;--accent-ink: #0f1a2e;--accent-soft: #1f2b40;--plate-a: #6f98de;--plate-b: #e0b23a;--plate-c: #e2685e;--plate-x: #8b958f;--good: #6cc08d;--good-soft: #1b3125;--okay: #b5c659;--okay-soft: #292e17;--meh: #e8a64e;--meh-soft: #392914;--rough: #ec7b72;--rough-soft: #3b1f1c;--hub: rgba(17,20,18,0.85);--shadow: 0 1px 2px rgba(0,0,0,0.3),0 8px 20px -14px rgba(0,0,0,0.6)}}:root[data-theme=\"dark\"]{color-scheme: dark;--bg: #111412;--surface: #191d1b;--surface-2: #1f2421;--ink: #e7ebe8;--ink-2: #aab3ae;--ink-3: #7e8782;--line: #2e3531;--line-2: #252b28;--accent: #8fb0ea;--accent-ink: #0f1a2e;--accent-soft: #1f2b40;--plate-a: #6f98de;--plate-b: #e0b23a;--plate-c: #e2685e;--plate-x: #8b958f;--good: #6cc08d;--good-soft: #1b3125;--okay: #b5c659;--okay-soft: #292e17;--meh: #e8a64e;--meh-soft: #392914;--rough: #ec7b72;--rough-soft: #3b1f1c;--hub: rgba(17,20,18,0.85);--shadow: 0 1px 2px rgba(0,0,0,0.3),0 8px 20px -14px rgba(0,0,0,0.6)}*{box-sizing: border-box}[hidden]{display: none !important}html{-webkit-text-size-adjust: 100%}body{margin: 0;background: var(--bg);color: var(--ink);font-family: var(--body);font-size: 16px;line-height: 1.5;-webkit-font-smoothing: antialiased}body.editing{padding-bottom: calc(84px + env(safe-area-inset-bottom,0px))}@media (prefers-reduced-motion: reduce){*{transition: none !important;animation: none !important}}button,input,select,textarea{font: inherit;color: inherit}:focus-visible{outline: 2px solid var(--accent);outline-offset: 2px}.wrap{max-width: 880px;margin: 0 auto;padding-inline: 16px}.top{position: sticky;top: env(safe-area-inset-top,0px);z-index: 20;background: var(--bg);border-bottom: 1px solid var(--line)}.top-row{display: flex;align-items: flex-end;justify-content: space-between;gap: 12px;padding-block: 14px 8px}.eyebrow{font-family: var(--mono);font-size: 0.7rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3)}h1 .title-ico{height: 0.92em;width: auto;vertical-align: -0.1em;margin-right: 0.22em}h1 .title-img{height: 1.15em;vertical-align: -0.22em;margin: 0 0.06em 0 -0.18em}h1{font-family: var(--display);font-weight: 700;font-size: 1.85rem;line-height: 1;letter-spacing: 0.01em;text-transform: uppercase;margin: 4px 0 0}.top-actions{display: flex;align-items: center;gap: 8px;flex-shrink: 0}.sync{font-family: var(--mono);font-size: 0.68rem;letter-spacing: 0.06em;text-transform: uppercase;color: var(--ink-3);display: inline-flex;align-items: center;gap: 6px}.sync::before{content: \"\";width: 7px;height: 7px;border-radius: 50%;background: var(--ink-3)}.sync[data-state=\"live\"]::before{background: var(--good)}.sync[data-state=\"view\"]::before{background: var(--meh)}.theme-btn{min-width: 0;padding: 0 10px;gap: 5px;font-family: var(--mono);font-size: 0.66rem;letter-spacing: 0.06em;text-transform: uppercase;color: var(--ink-2)}.theme-btn svg{width: 15px;height: 15px;flex-shrink: 0}.sync{display: none !important}.theme-btn span{display: none}.theme-btn,#editBtn.icon-btn{width: 38px;min-width: 38px;padding: 0;justify-content: center}.theme-btn svg,#editBtn.icon-btn svg{width: 18px;height: 18px}@media (max-width: 640px){.top-row{display: grid;grid-template-columns: minmax(0,1fr) auto;align-items: end;column-gap: 10px;row-gap: 6px}.top-row>div:first-child{display: contents}#eyebrow{grid-column: 1 / -1}#title{grid-column: 1;margin: 0;font-size: clamp(1.4rem, 7.4vw, 1.85rem);white-space: nowrap}.top-actions{grid-column: 2;gap: 6px}.sync{font-size: 0;gap: 0}.sync::before{width: 9px;height: 9px}}.tabs{display: flex;gap: 2px;overflow-x: auto;scrollbar-width: none}.tabs::-webkit-scrollbar{display: none}.tab{background: none;border: none;border-bottom: 2.5px solid transparent;padding: 8px 10px 9px;font-family: var(--display);font-weight: 600;font-size: 1.02rem;letter-spacing: 0.04em;text-transform: uppercase;color: var(--ink-3);cursor: pointer;white-space: nowrap}.tab[aria-selected=\"true\"]{color: var(--ink);border-bottom-color: var(--accent)}main{padding-block: 20px 56px}.panel{display: grid;gap: 22px}h2{font-family: var(--display);font-weight: 600;font-size: 1.45rem;letter-spacing: 0.02em;text-transform: uppercase;line-height: 1.1;margin: 0;text-wrap: balance}h3{font-family: var(--display);font-weight: 600;font-size: 1.2rem;letter-spacing: 0.02em;text-transform: uppercase;margin: 0}p{margin: 0;max-width: 66ch}.lede{color: var(--ink-2);max-width: 62ch}.fine{font-size: 0.88rem;color: var(--ink-3)}.section{display: grid;gap: 12px}.section-head{display: grid;gap: 4px}.banner{background: var(--meh-soft);color: var(--ink);border: 1px solid var(--line);border-radius: 10px;padding: 10px 14px;font-size: 0.92rem}.btn{display: inline-flex;align-items: center;justify-content: center;gap: 6px;min-height: 38px;padding: 0 14px;border-radius: 8px;border: 1px solid var(--line);background: var(--surface);color: var(--ink);font-weight: 600;font-size: 0.92rem;cursor: pointer}.btn:disabled{opacity: 0.5;cursor: default}.btn-primary{background: var(--accent);color: var(--accent-ink);border-color: var(--accent)}.btn-quiet{background: none;border-color: transparent;color: var(--ink-2)}.btn-sm{min-height: 32px;padding: 0 10px;font-size: 0.85rem}.plate{--pc: var(--plate-x);display: inline-block;width: 14px;height: 14px;border-radius: 50%;flex-shrink: 0;background: radial-gradient(circle,var(--hub) 0 20%,var(--pc) 22% 100%)}.plate.lg{width: 34px;height: 34px;background: radial-gradient(circle,var(--hub) 0 15%,var(--pc) 17% 70%,var(--hub) 71% 74%,var(--pc) 75% 100%)}.plate-A{--pc: var(--plate-a)}.plate-B{--pc: var(--plate-b)}.plate-C{--pc: var(--plate-c)}.plate-X{--pc: var(--plate-x)}.plate-empty{background: none;box-shadow: inset 0 0 0 1.5px var(--line)}.wk-head{display: grid;grid-template-columns: auto 1fr auto;align-items: center;gap: 10px}.wk-head .mid{text-align: center;display: grid;gap: 2px}.wk-head h2{font-size: 1.6rem}.arrow{width: 40px;height: 40px;border-radius: 50%;border: 1px solid var(--line);background: var(--surface);cursor: pointer;display: inline-flex;align-items: center;justify-content: center}.arrow svg{width: 18px;height: 18px}.tiles{display: grid;grid-template-columns: repeat(3,minmax(0,1fr));gap: 8px}@media (max-width: 380px){.tiles{grid-template-columns: 1fr}}.tile{background: var(--surface);border: 1px solid var(--line);border-radius: 10px;padding: 12px;display: grid;gap: 4px;align-content: start}.tile-label{font-family: var(--mono);font-size: 0.66rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3)}.tile-value{font-family: var(--display);font-weight: 700;font-size: 1.75rem;line-height: 1;font-variant-numeric: tabular-nums}.tile-value small{font-size: 0.95rem;font-weight: 600;color: var(--ink-3);margin-left: 3px}.tile-empty{font-size: 1.25rem;color: var(--ink-3)}.tile-sub{font-size: 0.8rem;color: var(--ink-3);line-height: 1.3}.dots{display: flex;gap: 5px;margin-top: 2px}.bar{position: relative;height: 8px;border-radius: 4px;background: var(--line-2);overflow: visible;margin-top: 4px}.bar-fill{position: absolute;inset: 0 auto 0 0;border-radius: 4px;background: var(--good);max-width: 100%}.bar-fill[data-s=\"close\"]{background: var(--meh)}.bar-fill[data-s=\"over\"]{background: var(--rough)}.bar-tick{position: absolute;top: -3px;bottom: -3px;width: 2px;background: var(--ink-3);border-radius: 1px}.status{display: flex;align-items: flex-start;gap: 10px;font-size: 0.95rem;color: var(--ink-2)}.status::before{content: \"\";width: 9px;height: 9px;border-radius: 50%;margin-top: 7px;flex-shrink: 0;background: var(--good)}.status[data-s=\"close\"]::before{background: var(--meh)}.status[data-s=\"over\"]::before{background: var(--rough)}.status[data-s=\"idle\"]::before{background: var(--ink-3)}.days{list-style: none;margin: 0;padding: 0;display: grid;gap: 10px}.day{background: var(--surface);border: 1px solid var(--line);border-radius: 12px;padding: 12px;display: grid;gap: 10px}.day.is-today{border-color: var(--accent);box-shadow: var(--shadow)}.day-top{display: flex;align-items: center;gap: 12px;flex-wrap: wrap}.day-name{display: flex;align-items: baseline;gap: 6px;min-width: 64px}.dow{font-family: var(--display);font-weight: 700;font-size: 1.25rem;text-transform: uppercase;letter-spacing: 0.03em}.dom{font-family: var(--mono);font-size: 0.78rem;color: var(--ink-3)}.today-flag{font-family: var(--mono);font-size: 0.62rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--accent)}.day-tags{display: flex;gap: 6px;flex-wrap: wrap}.tag{display: inline-flex;align-items: center;gap: 6px;font-size: 0.8rem;padding: 3px 9px 3px 7px;border-radius: 999px;background: var(--surface-2);border: 1px solid var(--line-2);color: var(--ink-2);white-space: nowrap}.tag-nick{color: var(--ink-3);background: none;border-style: dashed}.tag-alt{color: var(--ink-3)}.faces{display: grid;grid-template-columns: repeat(4,minmax(0,1fr));gap: 6px}.face{display: flex;align-items: center;justify-content: center;gap: 6px;min-height: 44px;border-radius: 10px;border: 1px solid var(--line);background: var(--surface-2);color: var(--ink-3);cursor: pointer;font-size: 0.85rem;font-weight: 600;transition: background 0.12s,color 0.12s,border-color 0.12s}.face svg{width: 22px;height: 22px;flex-shrink: 0}.face:disabled{cursor: default}.face[aria-pressed=\"true\"][data-f=\"great\"]{background: var(--good-soft);color: var(--good);border-color: var(--good)}.face[aria-pressed=\"true\"][data-f=\"okay\"]{background: var(--okay-soft);color: var(--okay);border-color: var(--okay)}.face[aria-pressed=\"true\"][data-f=\"meh\"]{background: var(--meh-soft);color: var(--meh);border-color: var(--meh)}.face[aria-pressed=\"true\"][data-f=\"rough\"]{background: var(--rough-soft);color: var(--rough);border-color: var(--rough)}@media (max-width: 420px){.face span{display: none}}.day-fields{display: grid;grid-template-columns: minmax(0,1.6fr) minmax(0,1fr) auto;gap: 8px;align-items: end;border-top: 1px solid var(--line-2);padding-top: 10px}.food-row{display: flex;align-items: center;gap: 8px}.food-row .faces{flex: 1;min-width: 0}.food-ico{width: 30px;height: 30px;flex-shrink: 0;color: var(--ink-3)}@media (max-width: 560px){.day-fields{grid-template-columns: minmax(0,1fr) minmax(0,1fr)}.day-fields .f-session{grid-column: 1 / -1}.day-fields .bonus{grid-column: 1 / -1}}.field{display: grid;gap: 3px;min-width: 0}.field>span{font-family: var(--mono);font-size: 0.62rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3)}.field input,.field select,.field textarea,.inp{width: 100%;min-height: 40px;border: 1px solid var(--line);border-radius: 8px;background: var(--surface-2);padding: 7px 10px;font-size: 16px;font-variant-numeric: tabular-nums}.field textarea,textarea.inp{min-height: 96px;line-height: 1.4;resize: vertical}.field input:disabled,.field select:disabled{opacity: 0.65}.bonus{min-height: 40px;border-radius: 8px;border: 1px dashed var(--line);background: none;color: var(--ink-3);padding: 0 12px;cursor: pointer;font-weight: 600;font-size: 0.88rem;display: inline-flex;align-items: center;justify-content: center;gap: 6px}.bonus[aria-pressed=\"true\"]{border-style: solid;border-color: var(--good);color: var(--good);background: var(--good-soft)}.card{background: var(--surface);border: 1px solid var(--line);border-radius: 12px;padding: 16px;display: grid;gap: 12px}.plain-list{margin: 0;padding-left: 18px;display: grid;gap: 6px;color: var(--ink-2)}.plain-list li{max-width: 66ch}.rhythm{display: grid;grid-template-columns: 3.4rem minmax(0,1fr) minmax(0,1fr);border: 1px solid var(--line);border-radius: 12px;overflow: hidden;background: var(--surface)}.rhythm>div{padding: 9px 10px;border-top: 1px solid var(--line-2);font-size: 0.88rem;min-width: 0}.rhythm>.rh-head{border-top: none;font-family: var(--mono);font-size: 0.64rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3);background: var(--surface-2)}.rhythm .rh-day{font-family: var(--display);font-weight: 700;text-transform: uppercase;font-size: 1.02rem}.rh-slot{display: grid;gap: 1px}.rh-slot b{font-weight: 600;display: flex;align-items: center;gap: 6px}.rh-slot small{color: var(--ink-3);font-size: 0.78rem}.rh-empty{color: var(--ink-3)}.seg{display: grid;grid-template-columns: repeat(3,minmax(0,1fr));border: 1px solid var(--line);border-radius: 10px;overflow: hidden}.seg button{border: none;background: var(--surface);padding: 9px 6px;cursor: pointer;display: grid;gap: 1px;border-left: 1px solid var(--line)}.seg button:first-child{border-left: none}.seg button b{font-family: var(--display);font-weight: 600;font-size: 1.05rem;text-transform: uppercase;letter-spacing: 0.03em}.seg button small{font-family: var(--mono);font-size: 0.62rem;letter-spacing: 0.05em;color: var(--ink-3);text-transform: uppercase}.seg button[aria-pressed=\"true\"]{background: var(--accent-soft)}.seg button[aria-pressed=\"true\"] b{color: var(--accent)}.wo-head{display: flex;gap: 12px;align-items: center}.wo-head .meta{display: grid;gap: 2px;min-width: 0}.wo-meta-line{font-size: 0.85rem;color: var(--ink-3)}.wo-block{display: grid;gap: 3px}.wo-block .k{font-family: var(--mono);font-size: 0.62rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3)}.ex-list{list-style: none;margin: 0;padding: 0;border-top: 1px solid var(--line-2)}.ex{display: grid;grid-template-columns: minmax(0,1fr) auto;gap: 2px 12px;padding: 10px 0;border-bottom: 1px solid var(--line-2)}.ex-name{font-weight: 600}.ex-target{font-family: var(--display);font-weight: 600;font-size: 1.08rem;text-align: right;font-variant-numeric: tabular-nums;white-space: nowrap}.ex-note{grid-column: 1 / -1;font-size: 0.84rem;color: var(--ink-3)}.ex.has-pic{grid-template-columns: 76px minmax(0,1fr) auto;column-gap: 12px}.ex.has-pic .ex-note,.ex.has-pic .ex-how{grid-column: 2 / -1}.ex-pic{grid-row: 1 / span 3;align-self: start;display: block;width: 76px;height: 76px;border-radius: 8px;overflow: hidden;background: var(--surface-2);border: 1px solid var(--line-2)}.ex-pic img{width: 100%;height: 100%;object-fit: cover;display: block}.ex-how{font-size: 0.84rem;font-weight: 600;color: var(--accent);text-decoration: none}.ex-how:hover{text-decoration: underline}.approval{display: flex;gap: 10px;align-items: flex-start;background: var(--meh-soft);border: 1px solid var(--line);border-radius: 10px;padding: 10px 14px;font-size: 0.92rem}.approval[data-s=\"ok\"]{background: var(--good-soft)}.coach{font-size: 0.9rem;color: var(--ink-2);background: var(--surface-2);border-radius: 8px;padding: 10px 12px}.edit-grid{display: grid;gap: 10px;grid-template-columns: repeat(2,minmax(0,1fr))}.edit-grid .span2{grid-column: 1 / -1}@media (max-width: 560px){.edit-grid{grid-template-columns: 1fr}}.ex-edit{display: grid;gap: 6px;padding: 10px 0;border-bottom: 1px solid var(--line-2);grid-template-columns: repeat(3,minmax(0,1fr))}.ex-edit .full{grid-column: 1 / -1}.ex-edit .row-actions{grid-column: 1 / -1;display: flex;justify-content: flex-end}.slot-edit{display: grid;gap: 6px;grid-template-columns: 5.5rem minmax(0,1fr) minmax(0,1.4fr);padding: 6px 0}@media (max-width: 560px){.slot-edit{grid-template-columns: 5rem minmax(0,1fr)}.slot-edit .lbl{grid-column: 1 / -1}}.face-guide{display: grid;grid-template-columns: repeat(4,minmax(0,1fr));gap: 8px}@media (max-width: 560px){.face-guide{grid-template-columns: repeat(2,minmax(0,1fr))}}.fg{border-radius: 10px;padding: 12px;display: grid;gap: 4px;border: 1px solid var(--line);background: var(--surface)}.fg svg{width: 28px;height: 28px}.fg[data-f=\"great\"]{color: var(--good)}.fg[data-f=\"okay\"]{color: var(--okay)}.fg[data-f=\"meh\"]{color: var(--meh)}.fg[data-f=\"rough\"]{color: var(--rough)}.fg b{font-family: var(--display);font-weight: 700;font-size: 1.15rem;text-transform: uppercase}.fg .v{font-family: var(--display);font-weight: 600;font-size: 1.05rem;color: var(--ink);font-variant-numeric: tabular-nums}.fg p{font-size: 0.82rem;color: var(--ink-3)}.slots{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: 10px}@media (max-width: 560px){.slots{grid-template-columns: 1fr}}.slot-head{display: flex;justify-content: space-between;align-items: baseline;gap: 10px}.slot-kcal{font-family: var(--display);font-weight: 600;font-size: 1.1rem;color: var(--ink-2);font-variant-numeric: tabular-nums}.sum-line{display: flex;justify-content: space-between;align-items: baseline;font-family: var(--display);font-weight: 600;font-size: 1.1rem;text-transform: uppercase;letter-spacing: 0.03em;border-top: 2px solid var(--ink);padding-top: 8px;font-variant-numeric: tabular-nums}.block-head{display: flex;justify-content: space-between;align-items: baseline;gap: 10px;flex-wrap: wrap}.pill{font-family: var(--mono);font-size: 0.64rem;letter-spacing: 0.08em;text-transform: uppercase;padding: 3px 8px;border-radius: 999px;background: var(--line-2);color: var(--ink-3)}.pill[data-s=\"now\"]{background: var(--accent-soft);color: var(--accent)}.pill[data-s=\"done\"]{background: var(--good-soft);color: var(--good)}.goal-cols{display: grid;grid-template-columns: repeat(3,minmax(0,1fr));gap: 14px}@media (max-width: 680px){.goal-cols{grid-template-columns: 1fr}}.goal-cols .k{font-family: var(--mono);font-size: 0.64rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3);margin-bottom: 4px}.goal-cols ul{margin: 0;padding-left: 18px;display: grid;gap: 4px;font-size: 0.93rem}.goal-cols p{font-size: 0.93rem}.score{display: grid;grid-template-columns: repeat(4,minmax(0,1fr));gap: 1px;background: var(--line-2);border-radius: 10px;overflow: hidden;border: 1px solid var(--line-2)}@media (max-width: 480px){.score{grid-template-columns: repeat(2,minmax(0,1fr))}}.score>div{background: var(--surface-2);padding: 10px;display: grid;gap: 2px}.score .n{font-family: var(--display);font-weight: 700;font-size: 1.35rem;line-height: 1;font-variant-numeric: tabular-nums}.score .n small{font-size: 0.85rem;color: var(--ink-3);font-weight: 600}.score .l{font-size: 0.74rem;color: var(--ink-3)}.table-wrap{overflow-x: auto;border: 1px solid var(--line);border-radius: 12px;background: var(--surface)}table{border-collapse: collapse;width: 100%;min-width: 560px;font-size: 0.9rem}th,td{text-align: left;padding: 9px 10px;border-bottom: 1px solid var(--line-2);vertical-align: top}th{font-family: var(--mono);font-size: 0.64rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3);font-weight: 500;background: var(--surface-2)}tr:last-child td{border-bottom: none}td.num{font-family: var(--display);font-weight: 600;font-size: 1.02rem;font-variant-numeric: tabular-nums}td .inp{min-height: 34px;padding: 5px 8px}td small{color: var(--ink-3)}.steps{margin: 0;padding-left: 22px;display: grid;gap: 8px;color: var(--ink-2)}.steps li{max-width: 66ch}.steps b{color: var(--ink)}.sheet{font-family: var(--mono);font-size: 0.76rem;line-height: 1.55;background: var(--surface-2);border: 1px solid var(--line);border-radius: 10px;padding: 12px;max-height: 360px;overflow: auto;white-space: pre-wrap;margin: 0}.copy-row{display: flex;justify-content: space-between;align-items: center;gap: 10px}footer{border-top: 1px solid var(--line);padding-block: 18px 32px;font-size: 0.8rem;color: var(--ink-3);display: grid;gap: 6px}footer ul{margin: 8px 0 0;padding-left: 18px;display: grid;gap: 3px}.srcs summary{cursor: pointer;font-family: var(--mono);font-size: 0.68rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3);padding: 6px 0;list-style-position: inside}.srcs summary:hover{color: var(--ink-2)}footer a{color: var(--ink-2)}.editbar{position: fixed;left: 0;right: 0;bottom: 0;z-index: 30;background: var(--surface);border-top: 1px solid var(--line);padding: 12px 16px calc(12px + env(safe-area-inset-bottom,0px));box-shadow: 0 -8px 24px -16px rgba(0,0,0,0.35)}.editbar .wrap{display: flex;align-items: center;justify-content: space-between;gap: 10px;padding-inline: 0}.editbar span{font-size: 0.9rem;color: var(--ink-2)}.toast{position: fixed;left: 50%;transform: translateX(-50%);bottom: calc(20px + env(safe-area-inset-bottom,0px));z-index: 40;background: var(--ink);color: var(--bg);padding: 9px 16px;border-radius: 999px;font-size: 0.88rem;font-weight: 600;max-width: calc(100% - 32px);box-shadow: var(--shadow)}body.editing .toast{bottom: calc(92px + env(safe-area-inset-bottom,0px))}.snack-row{display: flex;align-items: center;gap: 8px;flex-wrap: wrap}.snack-btn{min-height: 40px;border-radius: 8px;border: 1px solid var(--line);background: var(--surface-2);padding: 0 12px;font-weight: 600;font-size: 0.88rem;cursor: pointer;color: var(--ink-2)}.snack-btn:disabled{cursor: default;opacity: 0.65}.snack-chips{display: flex;gap: 5px;flex-wrap: wrap;flex: 1;min-width: 0}.chip{display: inline-flex;align-items: center;font-size: 0.78rem;padding: 2px 9px;border-radius: 999px;border: 1px solid var(--line-2);background: var(--surface-2);color: var(--ink-2);white-space: nowrap}.chip.free{border-color: var(--good);color: var(--good);background: var(--good-soft)}.chip.one{border-color: var(--meh);color: var(--meh);background: var(--meh-soft)}.chip.none{color: var(--ink-3);border-style: dashed;background: none}.by8{margin-left: auto}.snack-warn{font-size: 0.82rem;color: var(--meh);width: 100%}.drawer{position: fixed;inset: 0;z-index: 50;display: flex;align-items: flex-end;justify-content: center}.drawer-back{position: absolute;inset: 0;background: rgba(0,0,0,0.45)}.drawer-panel{position: relative;width: 100%;max-width: 560px;max-height: 86vh;overflow: auto;background: var(--surface);border-radius: 16px 16px 0 0;padding: 18px 16px calc(18px + env(safe-area-inset-bottom,0px));display: grid;gap: 14px;box-shadow: 0 -10px 30px -10px rgba(0,0,0,0.4)}@media (min-width: 600px){.drawer{align-items: center}.drawer-panel{border-radius: 16px}}.drawer-head{display: flex;justify-content: space-between;align-items: center;gap: 10px}.pick-grid{display: flex;flex-wrap: wrap;gap: 8px}.pick{min-height: 42px;padding: 0 14px;border-radius: 999px;border: 1px solid var(--line);background: var(--surface-2);font-weight: 600;font-size: 0.9rem;cursor: pointer;color: var(--ink-2)}.pick.free[aria-pressed=\"true\"]{background: var(--good-soft);border-color: var(--good);color: var(--good)}.pick.one[aria-pressed=\"true\"]{background: var(--meh-soft);border-color: var(--meh);color: var(--meh)}.pick-k{font-family: var(--mono);font-size: 0.64rem;letter-spacing: 0.08em;text-transform: uppercase;color: var(--ink-3)}.fb-card{display: flex;align-items: center;justify-content: space-between;gap: 12px;flex-wrap: wrap;background: var(--surface);border: 1px solid var(--line);border-radius: 12px;padding: 12px 14px;margin-bottom: 8px;color: var(--ink-2);font-size: 0.92rem}.drawer textarea{width: 100%;min-height: 140px;border: 1px solid var(--line);border-radius: 8px;background: var(--surface-2);padding: 10px;font-size: 16px;line-height: 1.4;resize: vertical}.login-card{max-width: 360px;margin: 0 auto;text-align: center;display: grid;gap: 18px;justify-items: center}.login-icon{width: 96px;height: 96px;border-radius: 22px;box-shadow: var(--shadow)}.login-name{font-family: var(--display);font-weight: 700;font-size: 1.9rem;letter-spacing: 0.02em;text-transform: uppercase}body.logged-out .top,body.logged-out footer,body.logged-out #banner{display: none !important}body.logged-out main{min-height: 100vh;min-height: 100dvh;display: grid;place-items: center;padding: 24px 16px}.gsi-slot{min-height: 44px;display: flex;justify-content: center;color-scheme: light}.gsi-slot iframe{color-scheme: light}.signin-nudge{display: flex;align-items: center;justify-content: space-between;gap: 12px;flex-wrap: wrap;border-color: var(--accent)}.linkish{background: none;border: none;padding: 0;color: var(--accent);font: inherit;cursor: pointer;text-decoration: underline}.sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.avatar-btn{width: 30px;height: 30px;min-width: 30px;padding: 0;border-radius: 50%;border: 1px solid var(--line);background: var(--surface-2);cursor: pointer;overflow: hidden;flex-shrink: 0;display: inline-flex;align-items: center;justify-content: center}.avatar{display: block;width: 100%;height: 100%;object-fit: cover;border-radius: 50%}.avatar-fallback{display: inline-flex;align-items: center;justify-content: center;width: 100%;height: 100%;border-radius: 50%;background: var(--accent-soft);color: var(--accent);font-family: var(--display);font-weight: 700}.avatar-lg{width: 80px;height: 80px}.profile-avatar-row{display: flex;align-items: center;gap: 14px}.view-banner{display: flex;align-items: center;justify-content: space-between;gap: 10px;flex-wrap: wrap;border-color: var(--accent)}";var markup="<header class=\"top\"><div class=\"wrap top-row\"><div><div class=\"eyebrow\" id=\"eyebrow\">12 weeks</div><h1 id=\"title\">Sims Fitness</h1></div><div class=\"top-actions\"><span class=\"sync\" id=\"sync\" data-state=\"loading\">Connecting</span><button class=\"btn btn-sm theme-btn\" id=\"themeBtn\" type=\"button\" aria-label=\"Theme: follows your phone. Tap to change.\">Auto</button><button class=\"btn btn-sm\" id=\"editBtn\" type=\"button\" hidden>Edit plan</button></div></div><nav class=\"wrap tabs\" role=\"tablist\" aria-label=\"Plan sections\"><button class=\"tab\" role=\"tab\" type=\"button\" data-tab=\"week\" aria-selected=\"true\"><svg class=\"t-ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"2\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/></svg><span class=\"t-long\">This week</span><span class=\"t-short\">Week</span></button><button class=\"tab\" role=\"tab\" type=\"button\" data-tab=\"workouts\" aria-selected=\"false\"><svg class=\"t-ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11\"/></svg><span class=\"t-long\">Workouts</span><span class=\"t-short\">Workouts</span></button><button class=\"tab\" role=\"tab\" type=\"button\" data-tab=\"food\" aria-selected=\"false\"><svg class=\"t-ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17.5 21V3c-2 1.5-3 4-3 7v4h3\"/></svg><span class=\"t-long\">Food</span><span class=\"t-short\">Food</span></button><button class=\"tab\" role=\"tab\" type=\"button\" data-tab=\"goals\" aria-selected=\"false\"><svg class=\"t-ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5.5 21V4M5.5 4h11l-2 4 2 4h-11\"/></svg><span class=\"t-long\">Goals</span><span class=\"t-short\">Goals</span></button><button class=\"tab\" role=\"tab\" type=\"button\" data-tab=\"trainer\" id=\"trainerTab\" aria-selected=\"false\"><svg class=\"t-ico\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"4.5\" width=\"14\" height=\"16.5\" rx=\"2\"/><path d=\"M9 3h6v3H9zM8.5 11h7M8.5 15h5\"/></svg><span class=\"t-long\">For the trainer</span><span class=\"t-short\">Coach</span></button></nav></header><main class=\"wrap\"><div id=\"banner\" class=\"banner\" hidden></div><div id=\"viewBanner\" class=\"banner view-banner\" hidden><span id=\"viewBannerText\"></span><button class=\"btn btn-sm\" type=\"button\" id=\"backToMineBtn\">Back to mine</button></div><div id=\"app\" class=\"panel\" role=\"tabpanel\"></div><footer><div id=\"whoLine\" hidden></div><div class=\"fb-card\"><span>Idea, question, or something bugging you?</span><button class=\"btn btn-sm btn-primary\" id=\"fbBtn\" type=\"button\">Send feedback</button></div><details class=\"srcs\"><summary>Sources</summary><ul><li><a href=\"https://www.cdc.gov/healthy-weight-growth/losing-weight/index.html\" target=\"_blank\" rel=\"noopener\">CDC: Steps for Losing Weight</a> (1 to 2 lbs a week holds better long term)</li><li><a href=\"https://www.health.harvard.edu/staying-healthy/calorie-counting-made-easy\" target=\"_blank\" rel=\"noopener\">Harvard Health: Calorie counting made easy</a> (women shouldn't drop below 1,200 a day without a professional involved)</li><li><a href=\"https://help.trainerize.com/hc/en-us/articles/208689086-How-to-Create-a-Workout-in-the-Master-Workout-Library\" target=\"_blank\" rel=\"noopener\">Trainerize: Create a workout</a> and <a href=\"https://help.trainerize.com/hc/en-us/articles/208688956-Ways-To-Manage-Client-Training-Phase-Schedules\" target=\"_blank\" rel=\"noopener\">manage training phase schedules</a></li><li><a href=\"https://help.trainerize.com/hc/en-us/articles/360001127403-How-to-Create-a-Nutrition-Goal-for-a-Client\" target=\"_blank\" rel=\"noopener\">Trainerize: Nutrition goals</a> (daily only, which is why the weekly budget lives here)</li><li><a href=\"https://www.leomoves.com/leomoves-app\" target=\"_blank\" rel=\"noopener\">LeoMoves app</a> (beginner programs Begin &amp; Win and Move &amp; Flex)</li></ul></details></footer></main><div class=\"editbar\" id=\"editbar\" hidden><div class=\"wrap\"><span>Editing the plan. Changes save for everyone.</span><div style=\"display:flex; gap:8px;\"><button class=\"btn\" type=\"button\" id=\"cancelEdit\">Cancel</button><button class=\"btn btn-primary\" type=\"button\" id=\"saveEdit\">Save changes</button></div></div></div><div class=\"drawer\" id=\"snackDrawer\" hidden><div class=\"drawer-back\" data-close=\"1\"></div><div class=\"drawer-panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"snackTitle\" id=\"snackBody\"></div></div><div class=\"drawer\" id=\"fbDrawer\" hidden><div class=\"drawer-back\" data-close=\"1\"></div><div class=\"drawer-panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"fbTitle\"><div class=\"drawer-head\"><h2 id=\"fbTitle\">Send feedback</h2><button class=\"btn btn-sm btn-quiet\" type=\"button\" data-close=\"1\">Close</button></div><p class=\"lede\">Suggestions, things that feel off, ideas for the plan. It goes straight to PJ, who makes the changes.</p><textarea id=\"fbText\" maxlength=\"4000\" placeholder=\"What would make this better?\"></textarea><div style=\"display:flex;justify-content:flex-end;gap:8px\"><button class=\"btn\" type=\"button\" data-close=\"1\">Cancel</button><button class=\"btn btn-primary\" type=\"button\" id=\"fbSend\">Send</button></div></div></div><div class=\"toast\" id=\"toast\" role=\"status\" aria-live=\"polite\" hidden></div>";var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);var pc=document.createElement('link');pc.rel='preconnect';pc.href='https://fonts.gstatic.com';pc.crossOrigin='';document.head.appendChild(pc);var fl=document.createElement('link');fl.rel='stylesheet';fl.href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@500&family=Source+Sans+3:wght@400;600;700&display=swap";document.head.appendChild(fl);document.body.innerHTML=markup;})();
(function () {
'use strict';
var API = 'https://voaproqjjegepcmbjvov.supabase.co/functions/v1/sims-fitness';
var KEY = (function () {
var k = '';
try { k = new URLSearchParams(location.search).get('k') || ''; } catch (e) {}
if (!k) { var m = (location.hash || '').match(/k=([A-Za-z0-9_-]+)/); if (m) k = m[1]; }
try {
if (k) localStorage.setItem('gp-key', k);
else k = localStorage.getItem('gp-key') || '';
} catch (e) {}
return k;
})();
var SESSION = (function () { try { var v = JSON.parse(localStorage.getItem('gp-session') || 'null'); return v && v.token && v.exp > Date.now() ? v : null; } catch (e) { return null; } })();
try { if (/[?&]k=/.test(location.search)) history.replaceState(null, '', location.pathname + location.hash); } catch (e) {}
var KEYS = ['settings', 'schedule', 'workouts', 'goals', 'food'];
var DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var FACES = [
{ k: 'great', label: 'Great' },
{ k: 'okay', label: 'Okay' },
{ k: 'meh', label: 'Meh' },
{ k: 'rough', label: 'Rough' }
];
var FACE_TEXT = {
great: 'On plan all day.',
okay: 'A little extra somewhere.',
meh: 'A real slip, one meal or a snack run.',
rough: 'Off the rails. It happens.'
};
function names() {
var s = (S.plan && S.plan.settings) || {};
var people = S.people || [];
var viewed = people.filter(function (p) { return p.email === S.viewing; })[0];
var other = people.filter(function (p) { return p.email !== S.viewing; })[0];
return { person: (viewed && (viewed.displayName || viewed.name)) || s.person || 'You', trainer: s.trainer || 'your trainer', partner: (other && (other.displayName || other.name)) || s.partner || 'your partner', title: s.title || 'Sims Fitness', place: s.place || '' };
}
function personSlot() {
var people = S.people || [];
var viewed = people.filter(function (p) { return p.email === S.viewing; })[0];
return (viewed && viewed.slot) || 'steph';
}
function partnerSlot() { return personSlot() === 'steph' ? 'nick' : 'steph'; }
function partnerLabel(l) { return String(l || '').replace(/^With [^:]+:\s*/i, ''); }
function sessionOpts() {
var lab = { A: 'Workout A', B: 'Solo card', C: 'Workout C' };
((S.plan && S.plan.schedule && S.plan.schedule[personSlot()]) || []).forEach(function (s) { if (s.workout === 'A' || s.workout === 'C') lab[s.workout] = s.label; });
((S.plan && S.plan.workouts && S.plan.workouts.list) || []).forEach(function (w) { if (lab[w.id] && w.name) lab[w.id] = w.name; });
return [{ v: '', label: 'No workout' }, { v: 'A', label: lab.A }, { v: 'B', label: lab.B }, { v: 'C', label: lab.C }, { v: 'X', label: 'Other workout' }];
}
var S = {
plan: null,
draft: null,
weeks: {},
db: null,
mode: 'loading',
canWrite: false,
editing: false,
tab: 'week',
weekStart: null,
phase: null,
pendingRender: false,
focusId: null,
people: null,
me: null,
viewing: null,
readOnly: false,
selDate: null
};
var app = document.getElementById('app');
var banner = document.getElementById('banner');
var syncEl = document.getElementById('sync');
var editBtn = document.getElementById('editBtn');
var editbar = document.getElementById('editbar');
var toastEl = document.getElementById('toast');
var queues = {};
var toastTimer = null;
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function esc(s) {
return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
});
}
function num(v) {
if (v === null || v === undefined || v === '') return null;
var n = Number(v);
return isFinite(n) ? n : null;
}
function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
function fmt1(n) { return (Math.round(n * 10) / 10).toFixed(1); }
function signed(n) { var r = Math.round(n * 10) / 10; return (r > 0 ? '+' : r < 0 ? '−' : '') + Math.abs(r).toFixed(1); }
function getPath(o, p) { return p.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); }
function setPath(o, p, v) {
var ks = p.split('.'); var a = o;
for (var i = 0; i < ks.length - 1; i++) { a = a[ks[i]]; }
a[ks[ks.length - 1]] = v;
}
function P() { return S.editing ? S.draft : S.plan; }
function can() { return S.mode === 'live' && S.canWrite && !S.readOnly; }
function dis() { return can() ? '' : ' disabled'; }
function meDis() { return (S.mode === 'live' && SESSION) ? '' : ' disabled'; }
function iso(d) {
return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function parse(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
function addDays(s, n) { var d = parse(s); d.setDate(d.getDate() + n); return iso(d); }
function mondayOf(s) { var d = parse(s); var wd = (d.getDay() + 6) % 7; d.setDate(d.getDate() - wd); return iso(d); }
function todayISO() { return iso(new Date()); }
function startMonday() { return mondayOf(P().settings.startDate || '2026-09-28'); }
function weekIndex(ws) { return Math.round((parse(ws) - parse(startMonday())) / 864e5 / 7) + 1; }
function short(s) { return parse(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
function range(a, b) {
var da = parse(a), db = parse(b);
if (da.getMonth() === db.getMonth()) return short(a) + ' to ' + db.getDate();
return short(a) + ' to ' + short(b);
}
function phaseForWeek(idx) {
var ph = P().workouts.phases;
if (idx <= 4) return ph[0].id;
if (idx <= 8) return ph[1] ? ph[1].id : ph[0].id;
return ph[2] ? ph[2].id : ph[ph.length - 1].id;
}
function phaseName(id) {
var f = P().workouts.phases.filter(function (p) { return p.id === id; })[0];
return f ? f.name : '';
}
function dayIdx(name) { return DAYS.indexOf(String(name || '').slice(0, 3)); }
function faceSVG(k) {
var mouth = {
great: 'M7.6 13.6c1.1 2.5 2.6 3.8 4.4 3.8s3.3-1.3 4.4-3.8',
okay: 'M8.6 14.9c1 1 2.1 1.5 3.4 1.5s2.4-.5 3.4-1.5',
meh: 'M8.8 15.6h6.4',
rough: 'M8.6 17.2c1-1.4 2.1-2.1 3.4-2.1s2.4.7 3.4 2.1'
}[k];
return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.4" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
'<circle cx="9" cy="10" r="1.15" fill="currentColor"/><circle cx="15" cy="10" r="1.15" fill="currentColor"/>' +
'<path d="' + mouth + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
}
var ARROW_L = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var ARROW_R = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function toast(msg) {
toastEl.textContent = msg;
toastEl.hidden = false;
clearTimeout(toastTimer);
toastTimer = setTimeout(function () { toastEl.hidden = true; }, 2600);
}
function weekStats(ws) {
var set = P().settings;
var wk = S.weeks[ws];
var days = (wk && wk.days) || {};
var today = todayISO();
var r = { used: 0, logged: 0, estimated: false, sessions: [], weights: [], open: 0, faces: 0, extras: 0, by8: 0 };
for (var i = 0; i < 7; i++) {
var d = addDays(ws, i);
var e = days[d] || {};
var k = num(e.kcal);
var v = k != null ? k : (e.face && set.faceKcal ? num(set.faceKcal[e.face]) : null);
if (v != null) {
r.used += v; r.logged++;
if (k == null) r.estimated = true;
} else if (d >= today) {
r.open++;
}
if (e.face) r.faces++;
if (e.session) r.sessions.push(e.session); else if (e.lifts && e.lifts.length) r.sessions.push('X');
if (num(e.weight) != null) r.weights.push(num(e.weight));
if (e.extra) r.extras++;
if (e.by8) r.by8++;
}
var target = num(set.dailyTarget) || 1400;
var floor = num(set.floor) || 1200;
r.target = target;
r.floor = floor;
r.budget = target * 7;
var unloggedPast = 7 - r.logged - r.open;
r.projected = r.used + unloggedPast * target;
r.remaining = r.budget - r.projected;
r.perDay = r.open > 0 ? r.remaining / r.open : null;
r.avgW = r.weights.length ? r.weights.reduce(function (a, b) { return a + b; }, 0) / r.weights.length : null;
r.done = r.open === 0;
r.elapsed = 7 - r.open;
if (r.logged === 0) {
r.s = 'idle';
} else if (r.done) {
r.s = r.projected <= r.budget ? 'good' : (r.projected <= r.budget * 1.05 ? 'close' : 'over');
} else if (r.logged === 0) {
r.s = 'idle';
} else {
r.s = r.perDay >= target ? 'good' : (r.perDay >= floor ? 'close' : 'over');
}
return r;
}
function statusText(r) {
if (r.s === 'idle') return r.done ? 'Nothing was logged this week. No big deal. Pick it back up today.' : 'Nothing logged yet this week. Tap a face tonight.';
if (r.done) {
if (r.s === 'good') return 'On budget for the week. That is exactly how this works.';
if (r.s === 'close') return 'Close to budget. That counts as a good week.';
return 'Over this week. It happens. Monday starts clean.';
}
if (r.s === 'good') return 'On pace. You have about ' + fmt(r.perDay) + ' a day for the rest of the week.';
if (r.s === 'close') return 'A little over pace. Aim for about ' + fmt(r.perDay) + ' a day for the rest of the week.';
return 'Hold at ' + fmt(r.floor) + ' to ' + fmt(r.floor + 150) + ' a day and let the week land. Monday starts clean.';
}
function render() {
S.pendingRender = false;
document.body.classList.toggle('logged-out', !S.plan && (S.mode === 'login' || S.mode === 'nokey'));
if (!S.plan) { renderShell(); return; }
var N = names();
document.title = N.title; var amt = document.querySelector('meta[name="apple-mobile-web-app-title"]'); if (amt) amt.content = N.title;
document.getElementById('title').innerHTML = '<img class="title-ico title-img" src="steph-fitness-B-transparent.svg" alt="" onload="this.nextSibling&&this.nextSibling.remove()" onerror="this.remove()"><svg class="title-ico" viewBox="78 36 356 440" aria-hidden="true"><defs><clipPath id="tiH"><path d="M130 262 C96 222 80 150 90 112 C102 64 168 44 256 44 C344 44 410 64 422 112 C432 150 416 222 382 262 L330 300 L182 300 Z M178 238 C154 216 144 182 146 152 C148 120 166 106 200 104 L312 104 C346 106 364 120 366 152 C368 182 358 216 334 238 Z" clip-rule="evenodd"/></clipPath></defs><path d="M130 262 C96 222 80 150 90 112 C102 64 168 44 256 44 C344 44 410 64 422 112 C432 150 416 222 382 262 L330 300 L182 300 Z M178 238 C154 216 144 182 146 152 C148 120 166 106 200 104 L312 104 C346 106 364 120 366 152 C368 182 358 216 334 238 Z" fill-rule="evenodd" style="fill:currentColor"/><g clip-path="url(#tiH)"><rect x="80" y="210" width="352" height="26" style="fill:var(--accent)"/></g><path d="M209 466 A145 145 0 1 1 303 466 Z" style="fill:currentColor"/><circle cx="256" cy="360" r="64" style="fill:none;stroke:var(--bg);stroke-width:7"/><path d="M42 210H224Q228 171 251.0 150.5Q274 130 311 130Q349 130 371.0 147.5Q393 165 393 196Q393 222 375.5 239.0Q358 256 332.5 267.0Q307 278 260 292Q192 313 149.0 334.0Q106 355 75.0 396.0Q44 437 44 503Q44 601 115.0 656.5Q186 712 300 712Q416 712 487.0 656.5Q558 601 563 502H378Q376 536 353.0 555.5Q330 575 294 575Q263 575 244.0 558.5Q225 542 225 511Q225 477 257.0 458.0Q289 439 357 417Q425 394 467.5 373.0Q510 352 541.0 312.0Q572 272 572 209Q572 149 541.5 100.0Q511 51 453.0 22.0Q395 -7 316 -7Q239 -7 178.0 18.0Q117 43 80.5 92.0Q44 141 42 210Z" transform="translate(256,360) scale(0.13,-0.13) translate(-307,-352.5)" style="fill:var(--bg)"/></svg>' + esc(N.title);
(function () { var tl = document.querySelector('#trainerTab .t-long'); if (tl) tl.textContent = 'For ' + N.trainer; })();
document.querySelectorAll('.tab').forEach(function (t) {
t.setAttribute('aria-selected', String(t.dataset.tab === S.tab));
});
document.body.classList.toggle('editing', S.editing);
editbar.hidden = !S.editing;
editBtn.hidden = !can() || S.editing || S.tab === 'week';
setSync();
document.getElementById('eyebrow').textContent = (N.place ? N.place + ' · ' : '') + '12 weeks from ' + short(startMonday());
if (S.mode === 'offline') {
banner.hidden = false;
banner.textContent = 'Can\'t reach the server right now. Anything you tap won\'t save until the connection is back.';
} else {
banner.hidden = true;
}
var vb = document.getElementById('viewBanner');
if (vb) {
if (S.readOnly && S.viewing) {
var vp = (S.people || []).filter(function (p) { return p.email === S.viewing; })[0];
vb.hidden = false;
document.getElementById('viewBannerText').textContent = 'Viewing ' + ((vp && (vp.displayName || vp.name)) || 'their') + '\'s log. Read only.';
} else {
vb.hidden = true;
}
}
var html = '';
if (!SESSION && S.tab === 'week') html += '<div class="card signin-nudge"><div><b>Sign in with Google</b></div><div id="gsiNudge"></div></div>';
if (S.tab === 'week') html += renderWeek();
else if (S.tab === 'workouts') html = renderWorkouts();
else if (S.tab === 'food') html = renderFood();
else if (S.tab === 'goals') html = renderGoals();
else html = renderTrainer();
app.innerHTML = html;
if (S.tab === 'week') afterWeek();
if (!SESSION && S.tab === 'week') setupGoogle('gsiNudge');
renderWho();
renderAvatars();
if (S.focusId) {
var f = document.getElementById(S.focusId);
if (f) f.focus({ preventScroll: true });
S.focusId = null;
}
}
function setSync() {
var st = S.mode === 'live' ? 'live' : (S.mode === 'loading' ? 'loading' : 'view');
syncEl.dataset.state = st;
syncEl.textContent = { live: 'Live', loading: 'Loading', offline: 'Offline', nokey: 'Sign in', login: 'Sign in' }[S.mode] || 'Loading';
}
function renderShell() {
setSync();
editBtn.hidden = true;
var msg;
if (S.mode === 'nokey' || S.mode === 'login') { app.innerHTML = loginCard(); setupGoogle(); return; }
else if (S.mode === 'offline') msg = '<div class="card"><h2>Can\'t reach the plan</h2><p class="lede">Check the connection and pull to refresh. If it keeps happening, the link may be wrong.</p></div>';
else msg = '<div class="card"><p class="lede">Loading your plan…</p></div>';
app.innerHTML = msg;
}
function scheduleRender() {
var a = document.activeElement;
if (a && app.contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) {
S.pendingRender = true;
return;
}
render();
}
function plannedFor(dayName) {
var sch = P().schedule;
var mine = personSlot(), theirs = partnerSlot();
var out = { mine: [], theirs: [], alt: [] };
(sch[mine] || []).forEach(function (s) {
if (dayIdx(s.day) === dayIdx(dayName)) out.mine.push(s);
if (s.alt) {
var m = String(s.alt).match(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/);
if (m && m[1] === dayName) out.alt.push(s);
}
});
(sch[theirs] || []).forEach(function (s) { if (dayIdx(s.day) === dayIdx(dayName)) out.theirs.push(s); });
return out;
}

function snackLists() {
var sn = (P().food && P().food.snacks) || {};
return { free: sn.free || [], one: sn.one || [] };
}
function cutoff() { return ((P().food && P().food.snacks) || {}).cutoff || '8pm'; }
function maxOne() { var m = Number(((P().food && P().food.snacks) || {}).maxOne); return m > 0 ? m : 2; }
function snackLabel(n) { return String(n).replace(/^(free|one):/, ''); }
function snackKind(name) {
if (/^free:/.test(name)) return 'free';
if (/^one:/.test(name)) return 'one';
var L = snackLists();
if (L.free.indexOf(name) >= 0) return 'free';
return 'one';
}
function snackRow(date, e) {
var list = e.snacks || [];
var chips = list.map(function (n) { return '<span class="chip ' + snackKind(n) + '">' + esc(snackLabel(n)) + '</span>'; }).join('');
if (!chips) chips = '<span class="chip none">No snacks logged</span>';
var ones = list.filter(function (n) { return snackKind(n) === 'one'; }).length;
return '<div class="snack-row">' +
'<button class="snack-btn" type="button" id="sn-' + date + '" data-act="snacks" data-date="' + date + '"' + dis() + '>Snacks</button>' +
'<div class="snack-chips">' + chips + '</div>' +
'<button class="bonus by8" type="button" id="e8-' + date + '" data-act="by8" data-date="' + date + '" aria-pressed="' + (!!e.by8) + '"' + dis() + '>Done by ' + esc(cutoff()) + '</button>' +
(ones > maxOne() ? '<div class="snack-warn">That\'s ' + ones + ' healthy snacks today. The limit is ' + maxOne() + '. Stick with veggies the rest of the day.</div>' : '') +
'</div>';
}
var snackDate = null;
function dayEntry(date) { return ((S.weeks[mondayOf(date)] || {}).days || {})[date] || {}; }
function renderSnackDrawer() {
var body = document.getElementById('snackBody');
if (!snackDate) return;
var L = snackLists();
var have = dayEntry(snackDate).snacks || [];
var ones = have.filter(function (n) { return snackKind(n) === 'one'; }).length;
var btn = function (n, k) { return '<button class="pick ' + k + '" type="button" data-pick="' + esc(n) + '" aria-pressed="' + (have.indexOf(n) >= 0) + '">' + esc(snackLabel(n)) + '</button>'; };
var customs = function (k) { return have.filter(function (n) { return n.indexOf(k + ':') === 0; }).map(function (n) { return btn(n, k); }).join(''); };
body.innerHTML = '<div class="drawer-head"><h2 id="snackTitle">Snacks, ' + esc(DAYS[(parse(snackDate).getDay() + 6) % 7] + ' ' + short(snackDate)) + '</h2><button class="btn btn-sm btn-primary" type="button" data-close="1">Done</button></div>' +
'<p class="lede">Two snacks a day, between meals. Tap what you had.</p>' +
'<div class="pick-k">Free. Have as much as you want.</div><div class="pick-grid">' + L.free.map(function (n) { return btn(n, 'free'); }).join('') + customs('free') + '<button class="pick" type="button" data-other="free">+ Other</button></div>' +
'<div class="pick-k">Healthy snacks, up to ' + maxOne() + ' a day' + (ones ? (ones > maxOne() ? '. That\'s ' + ones + ' today' : (ones === maxOne() ? '. That\'s your ' + ones + ' for today' : '. ' + ones + ' of ' + maxOne() + ' so far')) : '') + '</div><div class="pick-grid">' + L.one.map(function (n) { return btn(n, 'one'); }).join('') + customs('one') + '<button class="pick" type="button" data-other="one">+ Other</button></div>' +
'<p class="fine">Kitchen closes at ' + esc(cutoff()) + '. Hungry after that? Go for the free veggies.</p>';
}
function openSnacks(date) {
snackDate = date; liftDate = null;
renderSnackDrawer();
document.getElementById('snackDrawer').hidden = false;
}
var bonusDate = null;
var profileOpen = false;
function openProfile() {
if (!S.plan) return;
profileOpen = true; bonusDate = null; snackDate = null; liftDate = null;
var cur = num(P().settings.dailyTarget) || 1400;
var floor = num(P().settings.floor) || 1200;
var opts = '';
for (var v = floor; v <= 2200; v += 50) opts += '<option value="' + v + '"' + (v === cur ? ' selected' : '') + '>' + fmt(v) + ' a day · ' + fmt(v * 7) + ' a week</option>';
if (cur < floor || cur > 2200 || (cur - floor) % 50) opts = '<option value="' + cur + '" selected>' + fmt(cur) + ' a day · ' + fmt(cur * 7) + ' a week</option>' + opts;
var me = (S.people || []).filter(function (p) { return p.isMe; })[0] || {};
var dn = me.displayName || me.name || '';
document.getElementById('snackBody').innerHTML = '<div class="drawer-head"><h2 id="snackTitle">Profile</h2><button class="btn btn-sm btn-primary" type="button" data-close="1">Done</button></div>' +
'<div class="profile-avatar-row">' + avatarHTML(me, 80) + '<div><input type="file" accept="image/*" id="avatarFile" hidden><button class="btn btn-sm" type="button" id="changePhotoBtn"' + meDis() + '>Change photo</button></div></div>' +
'<label class="field"><span>Display name</span><input class="inp" id="displayNameInp" value="' + esc(dn) + '"' + meDis() + '></label>' +
(SESSION ? '<p class="fine">Signed in as ' + esc(SESSION.email) + '</p>' : '') +
'<label class="field"><span>Daily calorie budget</span><select id="kcalSel"' + dis() + '>' + opts + '</select></label>' +
'<p class="fine">The week is what counts: this number times 7. It can\'t go below the ' + fmt(floor) + ' floor.</p>' +
(SESSION ? '<div><button class="btn btn-sm btn-quiet" type="button" id="profSignOut">Sign out</button></div>' : '');
document.getElementById('snackDrawer').hidden = false;
}
function saveBudget(v) {
if (!can() || S.editing) return;
var body = clone(S.plan.settings); body.dailyTarget = v;
api('plan', { key: 'settings', body: body }).then(function () {
S.plan.settings = body; render();
toast('Budget set: ' + fmt(v) + ' a day, ' + fmt(v * 7) + ' a week.');
}, handleErr);
}
var BONUS_TYPES = ['Walking Keds & Beau 🐶', 'LeoMoves', 'Apple Fitness+', 'Pickleball', 'Dancing', 'Swimming', 'Biking'];
function bonusList(e) { return e && e.extra ? String(e.extra_type || '').split('|').map(function (x) { return x.trim(); }).filter(Boolean) : []; }
function saveBonus(date, list) { list = list.slice(0, 6); saveDay(date, { extra: list.length > 0, extra_type: list.length ? list.join('|') : null }); }
function bonusTypes() { var t = (P().schedule && P().schedule.bonusTypes) || BONUS_TYPES; return t.length ? t : BONUS_TYPES; }
function openBonus(date) {
bonusDate = date; snackDate = null; liftDate = null;
var cur = dayEntry(date);
var body = document.getElementById('snackBody');
var picked = bonusList(cur);
var btn = function (n) { return '<button class="pick free" type="button" data-bonus="' + esc(n) + '" aria-pressed="' + (picked.indexOf(n) >= 0) + '">' + esc(n) + '</button>'; };
var known = bonusTypes();
var others = picked.filter(function (n) { return known.indexOf(n) < 0; });
body.innerHTML = '<div class="drawer-head"><h2 id="snackTitle">Bonus move, ' + esc(DAYS[(parse(date).getDay() + 6) % 7] + ' ' + short(date)) + '</h2><button class="btn btn-sm btn-primary" type="button" data-close="1">Done</button></div>' +
'<p class="lede">What did you do? Pick as many as you did.</p>' +
'<div class="pick-grid">' + known.map(btn).join('') + others.map(btn).join('') + '<button class="pick" type="button" data-bonus-other="1">+ Other</button></div>' +
(cur.extra ? '<div><button class="btn btn-sm btn-quiet" type="button" data-bonus-clear="1">Clear all bonus moves</button></div>' : '');
document.getElementById('snackDrawer').hidden = false;
}
function closeDrawers() {
var wasSnack = !document.getElementById('snackDrawer').hidden;
if (wasSnack && liftDate) { S.focusId = liftIdx != null ? 'lr-' + liftDate + '-' + liftIdx : null; liftDate = null; liftIdx = null; movePick = false; document.getElementById('snackDrawer').hidden = true; render(); return; }
if (wasSnack && profileOpen) { profileOpen = false; document.getElementById('snackDrawer').hidden = true; return; }
if (wasSnack && bonusDate) { S.focusId = 'b-' + bonusDate; bonusDate = null; document.getElementById('snackDrawer').hidden = true; render(); return; }
document.getElementById('snackDrawer').hidden = true;
document.getElementById('fbDrawer').hidden = true;
if (wasSnack && snackDate) { S.focusId = 'sn-' + snackDate; snackDate = null; render(); }
}
function renderWeek() {
if (!S.selDate) S.selDate = todayISO();
var sel = S.selDate;
var ws = mondayOf(sel);
S.weekStart = ws;
var idx = weekIndex(ws);
var weeks = num(P().settings.weeks) || 12;
var label;
if (idx < 1) label = 'Before the plan starts';
else if (idx > weeks) label = 'Week ' + idx + ' · past the ' + weeks + ' weeks';
else label = 'Week ' + idx + ' of ' + weeks + ' · ' + phaseName(phaseForWeek(idx));
var r = weekStats(ws);
var prev = weekStats(addDays(ws, -7));
var wkDays = (S.weeks[ws] && S.weeks[ws].days) || {};
var dots = '';
for (var i = 0; i < 3; i++) {
var sx = r.sessions[i];
dots += '<span class="plate ' + (sx ? 'plate-' + esc(sx) : 'plate-empty') + '"></span>';
}
var extraDots = r.sessions.length > 3 ? ' +' + (r.sessions.length - 3) : '';
var sessSub = r.sessions.length >= 3 ? 'Done for the week.' : nextSessionText(ws, wkDays);
if (r.extras) sessSub += ' Bonus days: ' + r.extras + '.';
var pct = Math.min(100, (r.used / r.budget) * 100);
var pacePct = Math.min(100, ((r.elapsed * r.target) / r.budget) * 100);
var foodSub = r.logged ? (r.logged + (r.logged === 1 ? ' day' : ' days') + ' logged' + (r.estimated ? ', includes face estimates' : '')) : 'Budget: ' + fmt(r.target) + ' a day on average';
var wVal, wSub;
if (r.avgW != null) {
wVal = fmt1(r.avgW) + '<small>lbs avg</small>';
wSub = prev.avgW != null ? signed(r.avgW - prev.avgW) + ' lbs from last week' : r.weights.length + (r.weights.length === 1 ? ' weigh-in' : ' weigh-ins') + ' this week';
} else {
wVal = '<span class="tile-empty">Not yet</span>';
wSub = 'Weigh in any morning. Only the average counts.';
}
var h = helloHTML();
h += stripHTML(sel);
h += dayCardHTML(sel, ws, wkDays);
h += '<div class="eyebrow wk-label">' + esc(label) + ' · ' + esc(range(ws, addDays(ws, 6))) + '</div>';
h += '<div class="tiles">' +
'<div class="tile"><div class="tile-label">Gym days</div><div class="tile-value">' + r.sessions.length + '<small>of 3' + extraDots + '</small></div><div class="dots">' + dots + '</div><div class="tile-sub">' + esc(sessSub) + '</div></div>' +
'<div class="tile"><div class="tile-label">Food budget</div><div class="tile-value">' + fmt(r.used) + '<small>of ' + fmt(r.budget) + '</small></div>' +
'<div class="bar"><div class="bar-fill" data-s="' + r.s + '" style="width:' + pct.toFixed(1) + '%"></div><div class="bar-tick" style="left:calc(' + pacePct.toFixed(1) + '% - 1px)" title="Where an even pace would be today"></div></div>' +
'<div class="tile-sub">' + esc(foodSub) + '</div></div>' +
'<div class="tile"><div class="tile-label">Weigh-in</div><div class="tile-value">' + wVal + '</div><div class="tile-sub">' + esc(wSub) + '</div></div>' +
'</div>';
h += '<div class="status" data-s="' + r.s + '">' + esc(statusText(r)) + '</div>';
h += '<p class="fine">Kitchen closed by ' + esc(cutoff()) + ': ' + r.by8 + (r.by8 === 1 ? ' day' : ' days') + ' this week. Veggie snacks are free. Up to ' + maxOne() + ' healthy snacks a day.</p>';
h += '<p class="fine">Each face counts as an estimate: Great ' + fmt(P().settings.faceKcal.great) + ', Okay ' + fmt(P().settings.faceKcal.okay) + ', Meh ' + fmt(P().settings.faceKcal.meh) + ', Rough ' + fmt(P().settings.faceKcal.rough) + '. The gray tick on the budget bar shows where an even pace would be by today.</p>';
return h;
}
function nextSessionText(ws, wkDays) {
var sch = P().schedule[personSlot()] || [];
var today = todayISO();
var doneTypes = {};
Object.keys(wkDays).forEach(function (d) { if (wkDays[d].session) doneTypes[wkDays[d].session] = true; });
for (var i = 0; i < sch.length; i++) {
var s = sch[i];
var date = addDays(ws, dayIdx(s.day));
if (!doneTypes[s.workout] && date >= today) return 'Next: ' + s.label + ' on ' + DAYS[dayIdx(s.day)] + '.';
}
return 'Make up a missed one Friday or Sunday.';
}
function bind(path, val, opts) {
opts = opts || {};
var type = opts.num ? 'data-bind-num' : 'data-bind';
var id = 'e-' + path.replace(/\./g, '-');
if (opts.area) return '<textarea class="inp" id="' + id + '" ' + type + '="' + path + '">' + esc(val) + '</textarea>';
return '<input class="inp" id="' + id + '" ' + type + '="' + path + '" value="' + esc(val) + '"' + (opts.num ? ' inputmode="numeric"' : '') + (opts.ph ? ' placeholder="' + esc(opts.ph) + '"' : '') + '>';
}
function bindLines(path, arr) {
var id = 'e-' + path.replace(/\./g, '-');
return '<textarea class="inp" id="' + id + '" data-bind-lines="' + path + '">' + esc((arr || []).join('\n')) + '</textarea>';
}
function renderWorkouts() {
var W = P().workouts;
var sch = P().schedule;
if (!S.phase) S.phase = phaseForWeek(Math.max(1, weekIndex(mondayOf(todayISO()))));
var h = '';
h += '<section class="section"><div class="section-head"><h2>How the week runs</h2>' +
'<p class="lede">Three days, three areas, so the whole body gets worked every week with a rest day between each session. ' + esc(names().trainer) + ' coaches Day 1 and teaches the moves. Day 2 is solo on machines and dumbbells. Day 3 is with ' + esc(names().partner) + '.</p></div>';
if (S.editing) {
h += '<div class="card"><h3>' + esc(names().person) + '\'s sessions</h3>';
(sch[personSlot()] || []).forEach(function (s, i) {
h += '<div class="slot-edit"><label class="field"><span>Day</span>' + bind('schedule.' + personSlot() + '.' + i + '.day', s.day) + '</label>' +
'<label class="field"><span>Time</span>' + bind('schedule.' + personSlot() + '.' + i + '.time', s.time) + '</label>' +
'<label class="field lbl"><span>Label</span>' + bind('schedule.' + personSlot() + '.' + i + '.label', s.label) + '</label></div>';
});
h += '<label class="field"><span>Backup day for the weekend session</span>' + bind('schedule.' + personSlot() + '.2.alt', (sch[personSlot()][2] || {}).alt || '') + '</label>';
h += '<h3 style="margin-top:8px">' + esc(names().partner) + '\'s sessions</h3>';
(sch[partnerSlot()] || []).forEach(function (s, i) {
h += '<div class="slot-edit"><label class="field"><span>Day</span>' + bind('schedule.' + partnerSlot() + '.' + i + '.day', s.day) + '</label>' +
'<label class="field"><span>Time</span>' + bind('schedule.' + partnerSlot() + '.' + i + '.time', s.time) + '</label>' +
'<label class="field lbl"><span>What</span>' + bind('schedule.' + partnerSlot() + '.' + i + '.label', s.label) + '</label></div>';
});
h += '<label class="field"><span>Rules, one per line</span>' + bindLines('schedule.rules', sch.rules) + '</label></div>';
} else {
h += '<div class="rhythm" role="table" aria-label="Weekly schedule">' +
'<div class="rh-head" role="columnheader">Day</div><div class="rh-head" role="columnheader">' + esc(names().person) + '</div><div class="rh-head" role="columnheader">' + esc(names().partner) + '</div>';
DAYS.forEach(function (dn) {
var pl = plannedFor(dn);
var nick = pl.theirs.map(function (s) { return '<div class="rh-slot"><b>' + esc(s.time) + '</b><small>' + esc(partnerLabel(s.label)) + '</small></div>'; }).join('') || '<span class="rh-empty">Off</span>';
var steph = pl.mine.map(function (s) {
return '<div class="rh-slot"><b><span class="plate plate-' + esc(s.workout) + '"></span>' + esc(s.time) + '</b><small>' + esc(s.label) + (s.alt ? ', ' + esc(s.alt) : '') + '</small></div>';
}).join('');
if (!steph && pl.alt.length) steph = '<div class="rh-slot"><small>Backup for the weekend session</small></div>';
if (!steph) steph = '<span class="rh-empty">' + (dn === 'Fri' ? 'Make-up day' : 'Off') + '</span>';
h += '<div class="rh-day">' + dn + '</div><div>' + steph + '</div><div>' + nick + '</div>';
});
h += '</div>';
h += '<ul class="plain-list">' + (sch.rules || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
}
h += '</section>';
h += '<section class="section"><div class="section-head"><h2>The workouts</h2><p class="lede">Every exercise has a picture and a how-to link. Tap either one to see how it\'s done. The names match what you\'ll find in Trainerize.</p></div>';
var appr = W.approval || '';
if (S.editing) h += '<label class="field"><span>' + esc(names().trainer) + '\'s review</span>' + bind('workouts.approval', appr, { ph: 'e.g. Approved by Olumide on Oct 1' }) + '</label>';
else h += '<div class="approval" data-s="' + (/approv|ok\b|good to go/i.test(appr) && !/wait|pending/i.test(appr) ? 'ok' : 'wait') + '">' + esc(appr || ('Waiting on ' + names().trainer + '\'s OK for Days 2 and 3.')) + '</div>';
h += '<div class="seg" role="group" aria-label="Phase">';
W.phases.forEach(function (ph) {
h += '<button type="button" data-act="phase" data-p="' + esc(ph.id) + '" aria-pressed="' + (S.phase === ph.id) + '"><b>' + esc(ph.name) + '</b><small>' + esc(ph.weeks) + '</small></button>';
});
h += '</div>';
var cur = W.phases.filter(function (p) { return p.id === S.phase; })[0] || W.phases[0];
if (S.editing) {
var pi = W.phases.indexOf(cur);
h += '<div class="edit-grid"><label class="field"><span>Phase name</span>' + bind('workouts.phases.' + pi + '.name', cur.name) + '</label>' +
'<label class="field"><span>Weeks</span>' + bind('workouts.phases.' + pi + '.weeks', cur.weeks) + '</label>' +
'<label class="field span2"><span>Effort for this phase</span>' + bind('workouts.phases.' + pi + '.effort', cur.effort) + '</label></div>';
} else {
h += '<p class="lede"><b>Effort:</b> ' + esc(cur.effort) + '</p>';
}
W.list.forEach(function (w, wi) {
h += '<article class="card">';
if (S.editing) {
h += '<div class="wo-head"><span class="plate lg plate-' + esc(w.id) + '"></span><h3>Workout ' + esc(w.id) + '</h3></div>';
h += '<div class="edit-grid">' +
'<label class="field"><span>Name</span>' + bind('workouts.list.' + wi + '.name', w.name) + '</label>' +
'<label class="field"><span>With</span>' + bind('workouts.list.' + wi + '.who', w.who) + '</label>' +
'<label class="field"><span>When</span>' + bind('workouts.list.' + wi + '.when', w.when) + '</label>' +
'<label class="field"><span>Minutes</span>' + bind('workouts.list.' + wi + '.minutes', w.minutes, { num: true }) + '</label>' +
'<label class="field span2"><span>What this day is for</span>' + bind('workouts.list.' + wi + '.purpose', w.purpose, { area: true }) + '</label>' +
'<label class="field span2"><span>Warm-up</span>' + bind('workouts.list.' + wi + '.warmup', w.warmup) + '</label>' +
'</div>';
h += '<div class="ex-list">';
w.exercises.forEach(function (ex, ei) {
var base = 'workouts.list.' + wi + '.exercises.' + ei;
h += '<div class="ex-edit">' +
'<label class="field full"><span>Exercise</span>' + bind(base + '.name', ex.name) + '</label>' +
'<label class="field"><span>' + esc(W.phases[0].name) + '</span>' + bind(base + '.p1', ex.p1) + '</label>' +
'<label class="field"><span>' + esc((W.phases[1] || {}).name || 'Phase 2') + '</span>' + bind(base + '.p2', ex.p2) + '</label>' +
'<label class="field"><span>' + esc((W.phases[2] || {}).name || 'Phase 3') + '</span>' + bind(base + '.p3', ex.p3) + '</label>' +
'<label class="field full"><span>Note</span>' + bind(base + '.note', ex.note, { ph: 'Optional' }) + '</label>' +
'<label class="field full"><span>How-to link</span>' + bind(base + '.how', ex.how, { ph: 'https://...' }) + '</label>' +
'<label class="field full"><span>Picture link</span>' + bind(base + '.img', ex.img, { ph: 'https://...jpg' }) + '</label>' +
'<div class="row-actions"><button class="btn btn-quiet btn-sm" type="button" data-act="delex" data-w="' + wi + '" data-i="' + ei + '">Remove exercise</button></div>' +
'</div>';
});
h += '</div><div><button class="btn btn-sm" type="button" data-act="addex" data-w="' + wi + '">Add exercise</button></div>';
h += '<label class="field"><span>Coaching note</span>' + bind('workouts.list.' + wi + '.coachNote', w.coachNote, { area: true }) + '</label>';
} else {
h += '<div class="wo-head"><span class="plate lg plate-' + esc(w.id) + '"></span><div class="meta"><h3>' + esc(w.name) + '</h3>' +
'<div class="wo-meta-line">' + esc(w.who) + ' · ' + esc(w.when) + ' · about ' + esc(w.minutes) + ' min</div></div></div>';
h += '<p>' + esc(w.purpose) + '</p>';
h += '<div class="wo-block"><span class="k">Warm-up</span><span>' + esc(w.warmup) + '</span></div>';
if (!w.exercises || !w.exercises.length) {
h += '<p class="lede">Your plan for this day is on the way.</p>';
} else {
h += '<ul class="ex-list">';
w.exercises.forEach(function (ex) {
var safe = function (u) { return /^https:\/\//.test(u || '') ? u : ''; };
var hw = safe(ex.how), im = safe(ex.img);
h += '<li class="ex' + (im ? ' has-pic' : '') + '">' +
(im ? '<a class="ex-pic" href="' + esc(hw || im) + '" target="_blank" rel="noopener"><img src="' + esc(im) + '" alt="How to do ' + esc(ex.name) + '" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.style.display=\'none\'"></a>' : '') +
'<span class="ex-name">' + esc(ex.name) + '</span><span class="ex-target">' + esc(ex[cur.id] || '') + '</span>' +
(ex.note ? '<span class="ex-note">' + esc(ex.note) + '</span>' : '') +
(hw ? '<a class="ex-how" href="' + esc(hw) + '" target="_blank" rel="noopener">How to do it' + (ex.src ? ' (' + esc(ex.src) + ')' : '') + ' ↗</a>' : '') + '</li>';
});
h += '</ul>';
}
if (w.coachNote) h += '<div class="coach">' + esc(w.coachNote) + '</div>';
}
h += '</article>';
});
h += '</section>';
h += '<section class="section"><div class="section-head"><h2>Bonus moves</h2><p class="lede">Never required. Tap Bonus move on the day you do one and it shows up in the week.</p></div>';
if (S.editing) h += '<label class="field"><span>Bonus ideas, one per line</span>' + bindLines('schedule.extras', sch.extras) + '</label>';
else h += '<ul class="plain-list">' + (sch.extras || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
h += '</section>';
return h;
}
function renderFood() {
var F = P().food;
var set = P().settings;
var target = num(set.dailyTarget) || 1400;
var h = '';
h += '<section class="section"><div class="section-head"><h2>The weekly budget</h2>' +
'<p class="lede">Food drives the weight. The gym drives strength. This page keeps the food side simple: one face a day, and the math happens by the week.</p></div>';
if (S.editing) {
h += '<div class="card"><div class="edit-grid">' +
'<label class="field"><span>Daily average target</span>' + bind('settings.dailyTarget', set.dailyTarget, { num: true }) + '</label>' +
'<label class="field"><span>Floor, never below</span>' + bind('settings.floor', set.floor, { num: true }) + '</label>' +
'<label class="field"><span>Protein goal (grams)</span>' + bind('settings.proteinGoal', set.proteinGoal, { num: true }) + '</label>' +
'<label class="field"><span>Plan start date</span><input class="inp" type="date" id="e-settings-startDate" data-bind="settings.startDate" value="' + esc(set.startDate) + '"></label>' +
'<label class="field"><span>Great day estimate</span>' + bind('settings.faceKcal.great', set.faceKcal.great, { num: true }) + '</label>' +
'<label class="field"><span>Okay day estimate</span>' + bind('settings.faceKcal.okay', set.faceKcal.okay, { num: true }) + '</label>' +
'<label class="field"><span>Meh day estimate</span>' + bind('settings.faceKcal.meh', set.faceKcal.meh, { num: true }) + '</label>' +
'<label class="field"><span>Rough day estimate</span>' + bind('settings.faceKcal.rough', set.faceKcal.rough, { num: true }) + '</label>' +
'</div></div>';
} else {
h += '<div class="tiles">' +
'<div class="tile"><div class="tile-label">Per week</div><div class="tile-value">' + fmt(target * 7) + '</div><div class="tile-sub">About ' + fmt(target) + ' a day on average</div></div>' +
'<div class="tile"><div class="tile-label">Floor</div><div class="tile-value">' + fmt(num(set.floor) || 1200) + '</div><div class="tile-sub">Never below this in a day</div></div>' +
'<div class="tile"><div class="tile-label">Protein</div><div class="tile-value">' + fmt(num(set.proteinGoal) || 100) + '<small>g</small></div><div class="tile-sub">A day, protein first at every meal</div></div>' +
'</div>';
}
h += '<div class="face-guide">';
FACES.forEach(function (f) {
h += '<div class="fg" data-f="' + f.k + '">' + faceSVG(f.k) + '<b>' + f.label + '</b><span class="v">About ' + fmt(set.faceKcal[f.k]) + '</span><p>' + esc(FACE_TEXT[f.k]) + '</p></div>';
});
h += '</div>';
h += '<p class="fine">The numbers under each face are what the page counts when you don\'t type calories. They\'re rough on purpose.</p>';
if (S.editing) h += '<label class="field"><span>Rules, one per line</span>' + bindLines('food.rules', F.rules) + '</label>';
else h += '<ul class="plain-list">' + (F.rules || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
h += '</section>';
var total = (F.slots || []).reduce(function (a, s) { return a + (num(s.target) || 0); }, 0);
h += '<section class="section"><div class="section-head"><h2>Build a great day</h2>' +
'<p class="lede">Your go-to options, sized so a normal day lands on budget. Swap in the breakfasts and lunches you actually rotate.</p></div>';
h += '<div class="slots">';
(F.slots || []).forEach(function (s, i) {
h += '<div class="card">';
if (S.editing) {
h += '<div class="edit-grid"><label class="field"><span>Meal</span>' + bind('food.slots.' + i + '.name', s.name) + '</label>' +
'<label class="field"><span>Calories</span>' + bind('food.slots.' + i + '.target', s.target, { num: true }) + '</label>' +
'<label class="field span2"><span>Options, one per line</span>' + bindLines('food.slots.' + i + '.options', s.options) + '</label></div>';
} else {
h += '<div class="slot-head"><h3>' + esc(s.name) + '</h3><span class="slot-kcal">about ' + fmt(num(s.target) || 0) + '</span></div>';
h += '<ul class="plain-list">' + (s.options || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
}
h += '</div>';
});
h += '</div>';
h += '<div class="sum-line"><span>A great day</span><span>' + fmt(total) + '</span></div>';
h += '</section>';
var SN = F.snacks || {};
h += '<section class="section"><div class="section-head"><h2>Snacks and the 8pm rule</h2>' +
'<p class="lede">Two snacks a day, one between breakfast and lunch and one between lunch and dinner. Veggies are free, eat as many as you want. Up to two healthy snacks a day. Log them with the Snacks button on each day.</p></div>';
if (S.editing) {
h += '<div class="card"><div class="edit-grid">' +
'<label class="field"><span>Free snacks, one per line</span>' + bindLines('food.snacks.free', SN.free) + '</label>' +
'<label class="field"><span>Healthy snacks (up to two a day), one per line</span>' + bindLines('food.snacks.one', SN.one) + '</label>' +
'<label class="field"><span>Kitchen closes at</span>' + bind('food.snacks.cutoff', SN.cutoff) + '</label></div></div>';
} else {
h += '<div class="slots"><div class="card"><div class="slot-head"><h3>Free</h3><span class="slot-kcal">all you want</span></div><div class="pick-grid">' + (SN.free || []).map(function (x) { return '<span class="chip free">' + esc(x) + '</span>'; }).join('') + '</div></div>' +
'<div class="card"><div class="slot-head"><h3>Up to two a day</h3><span class="slot-kcal">about 100 to 200</span></div><div class="pick-grid">' + (SN.one || []).map(function (x) { return '<span class="chip one">' + esc(x) + '</span>'; }).join('') + '</div></div></div>';
h += '<div class="card"><p><b>Kitchen closes at ' + esc(SN.cutoff || '8pm') + '.</b> Not a hard law, just the target. If you\'re hungry after, stick to the free veggies. Tap "Done by ' + esc(SN.cutoff || '8pm') + '" on the days you make it.</p></div>';
}
h += '</section>';
h += '<section class="section"><div class="section-head"><h2>Recovering a rough day</h2></div>' +
'<div class="card"><p>Say Saturday lands around ' + fmt(set.faceKcal.rough) + '. That\'s about ' + fmt(set.faceKcal.rough - target) + ' over the daily average. Spread it across the days left: over five days that\'s roughly ' + fmt((set.faceKcal.rough - target) / 5) + ' less a day, which is a skipped snack, not a skipped meal. The This week tab does this math for you and tells you the number.</p>' +
'<p class="fine">If the number it gives you drops under the floor, stop chasing it. Eat at the floor, let the week land where it lands, and start clean Monday.</p></div></section>';
return h;
}
function blockStats(b) {
var start = addDays(startMonday(), b * 28);
var today = todayISO();
var r = { start: start, end: addDays(start, 27), sessions: 0, faces: 0, faceDays: 0, weeksHit: 0, weeksDone: 0, firstW: null, lastW: null };
for (var w = 0; w < 4; w++) {
var ws = addDays(start, w * 7);
var st = weekStats(ws);
r.sessions += Math.min(st.sessions.length, 3);
r.faces += st.faces;
if (st.done && ws <= today) {
r.weeksDone++;
if (st.logged > 0 && st.projected <= st.budget) r.weeksHit++;
}
if (st.avgW != null) {
if (r.firstW == null) r.firstW = st.avgW;
r.lastW = st.avgW;
}
for (var d = 0; d < 7; d++) { if (addDays(ws, d) <= today) r.faceDays++; }
}
r.state = today < r.start ? 'next' : (today > r.end ? 'done' : 'now');
return r;
}
function renderGoals() {
var G = P().goals;
var h = '';
h += '<section class="section"><div class="section-head"><h2>How each month is graded</h2>' +
'<p class="lede">Consistency first, strength second, the scale third. Each month is four weeks and lines up with a training phase.</p></div>';
(G.blocks || []).forEach(function (bk, bi) {
var st = blockStats(bi);
var stLabel = { next: 'Up next', now: 'In progress', done: 'Done' }[st.state];
h += '<article class="card"><div class="block-head"><h3>' + esc(bk.name) + ': ' + esc(bk.focus) + '</h3>' +
'<span class="eyebrow">' + esc(range(st.start, st.end)) + '</span><span class="pill" data-s="' + st.state + '">' + stLabel + '</span></div>';
if (S.editing) {
var base = 'goals.blocks.' + bi;
h += '<div class="edit-grid"><label class="field"><span>Name</span>' + bind(base + '.name', bk.name) + '</label>' +
'<label class="field"><span>Focus</span>' + bind(base + '.focus', bk.focus) + '</label>' +
'<label class="field"><span>Consistency, one per line</span>' + bindLines(base + '.consistency', bk.consistency) + '</label>' +
'<label class="field"><span>Strength, one per line</span>' + bindLines(base + '.strength', bk.strength) + '</label>' +
'<label class="field span2"><span>Scale</span>' + bind(base + '.weight', bk.weight) + '</label></div>';
} else {
h += '<div class="goal-cols">' +
'<div><div class="k">Consistency</div><ul>' + (bk.consistency || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
'<div><div class="k">Strength</div><ul>' + (bk.strength || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
'<div><div class="k">Scale</div><p>' + esc(bk.weight) + '</p></div></div>';
}
var wc = (st.firstW != null && st.lastW != null && st.firstW !== st.lastW) ? signed(st.lastW - st.firstW) + '<small> lbs</small>' : '<small>Not yet</small>';
h += '<div class="score">' +
'<div><span class="n">' + st.sessions + '<small> / 12</small></span><span class="l">Gym days</span></div>' +
'<div><span class="n">' + st.faces + '<small> / ' + (st.faceDays || 28) + '</small></span><span class="l">Faces logged' + (st.state === 'now' ? ' so far' : '') + '</span></div>' +
'<div><span class="n">' + st.weeksHit + '<small> / ' + (st.weeksDone || 4) + '</small></span><span class="l">Weeks on budget</span></div>' +
'<div><span class="n">' + wc + '</span><span class="l">Weekly average change</span></div>' +
'</div>';
h += '</article>';
});
h += '</section>';
h += '<section class="section"><div class="section-head"><h2>Strength tests</h2>' +
'<p class="lede">Run these with ' + esc(names().trainer) + ' in Week 1, then again in Weeks 4, 8 and 12. Getting stronger is the gym goal, and this is where it shows.</p></div>';
if (S.editing) {
h += '<div class="table-wrap"><table><thead><tr><th>Test</th><th>How</th><th>Week 1</th><th>Week 4</th><th>Week 8</th><th>Week 12</th></tr></thead><tbody>';
(G.tests || []).forEach(function (t, ti) {
var base = 'goals.tests.' + ti;
if (S.editing) {
h += '<tr><td>' + bind(base + '.name', t.name) + '</td><td>' + bind(base + '.how', t.how) + '</td>' +
'<td>' + bind(base + '.baseline', t.baseline, { ph: 'lbs or reps' }) + '</td><td>' + bind(base + '.w4', t.w4) + '</td><td>' + bind(base + '.w8', t.w8) + '</td><td>' + bind(base + '.w12', t.w12) + '</td></tr>';
} else {
var cell = function (v) { return v ? esc(v) : '<small>Not yet</small>'; };
h += '<tr><td><b>' + esc(t.name) + '</b></td><td><small>' + esc(t.how) + '</small></td>' +
'<td class="num">' + cell(t.baseline) + '</td><td class="num">' + cell(t.w4) + '</td><td class="num">' + cell(t.w8) + '</td><td class="num">' + cell(t.w12) + '</td></tr>';
}
});
h += '</tbody></table></div>';
} else { h += gtCards(G.tests || []); }
if (!S.editing && can()) h += '<p class="fine">Tap a week to log a result. It starts at your last number.</p>';
h += '</section>';
return h;
}
function buildSheet() {
var W = P().workouts;
var sch = P().schedule[personSlot()] || [];
var out = [];
out.push(String(names().title).toUpperCase() + ' · 12-WEEK STRENGTH PLAN');
out.push('3 phases of 4 weeks. 3 workouts per week: ' + sch.map(function (s) { return s.day + ' ' + s.time + ' (' + s.label + ')'; }).join(', ') + '.');
W.phases.forEach(function (ph, pi) {
out.push('');
out.push('PHASE ' + (pi + 1) + ': ' + String(ph.name).toUpperCase() + ' (' + ph.weeks + ')');
out.push('Effort: ' + ph.effort);
W.list.forEach(function (w, wi) {
out.push('');
out.push('Day ' + (wi + 1) + ' · ' + w.who + ' · ' + w.name + ' (' + w.when + ')');
out.push('Warm-up: ' + w.warmup);
if (!w.exercises || !w.exercises.length) {
out.push('  (Exercises coming soon)');
} else {
w.exercises.forEach(function (ex) {
out.push('  ' + ex.name + ': ' + (ex[ph.id] || '') + (ex.note ? '. ' + ex.note : ''));
if (pi === 0 && ex.how) out.push('    How-to: ' + ex.how);
});
}
});
});
return out.join('\n');
}
function noteText() { return (S.plan.settings && S.plan.settings.trainerNote) || ''; }
function renderTrainer() {
var h = '';
h += '<section class="section"><div class="section-head"><h2>Loading it into Trainerize</h2>' +
'<p class="lede">The gym app runs on Trainerize, so ' + esc(names().trainer) + ' can build this once and it shows up on ' + esc(names().person) + '\'s phone with the right workout on the right day. Share this tab with ' + esc(names().trainer) + '.</p></div>';
h += '<div class="card"><ol class="steps">' +
'<li>Create a <b>phased program</b> called "' + esc(names().title) + '" with three 4-week phases: ' + esc(P().workouts.phases.map(function (p) { return p.name; }).join(', ')) + '.</li>' +
'<li>In each phase, build three workouts: <b>Day 1 with ' + esc(names().trainer) + '</b>, <b>Day 2 solo</b>, <b>Day 3 with ' + esc(names().partner) + '</b>. Use the targets in the build sheet as text targets, like "3 × 10, 3 reps in reserve."</li>' +
'<li>Schedule them on her calendar for <b>Tuesday, Thursday and Saturday</b> so they appear in her app. Saturday can slide to Sunday.</li>' +
'<li><b>Review Days 2 and 3</b> on the Workouts tab and tell ' + esc(names().partner) + ' or ' + esc(names().person) + ' what to change. They\'ll mark it approved once you OK it.</li>' +
'<li>Add one daily <b>habit</b>: "Tap today\'s food face."</li>' +
'<li><b>Skip the daily nutrition goal.</b> Trainerize only does daily targets, and her budget is weekly. It lives on this page.</li>' +
'<li>After every session, <b>log her working weights</b> in Trainerize so she knows what to lift next time.</li>' +
'</ol></div>';
h += '</section>';
h += '<section class="section"><div class="copy-row"><h2>Note to ' + esc(names().trainer) + '</h2><button class="btn btn-sm" type="button" data-act="copy" data-src="note">Copy</button></div>' +
'<pre class="sheet" id="note" style="max-height:none">' + esc(noteText()) + '</pre></section>';
h += '<section class="section"><div class="copy-row"><h2>Build sheet</h2><button class="btn btn-sm" type="button" data-act="copy" data-src="sheet">Copy</button></div>' +
'<p class="fine">Generated from the Workouts tab, so edits there show up here.</p>' +
'<pre class="sheet" id="sheet">' + esc(buildSheet()) + '</pre></section>';
return h;
}

function authHeaders() {
var h = { 'content-type': 'application/json' };
if (SESSION) h['x-plan-session'] = SESSION.token;
else if (KEY) h['x-plan-key'] = KEY;
return h;
}
function signOutLocal() {
SESSION = null;
try { localStorage.removeItem('gp-session'); localStorage.removeItem('gp-key'); } catch (e) {}
KEY = '';
}
function loginCard() {
return '<div class="login-card"><img class="login-icon" src="steph-fitness-B-blue.svg" alt=""><div class="login-name">Sims Fitness</div>' +
'<p class="login-line">Two people, one 12-week plan.</p>' +
'<ul class="cast" aria-label="Me and you"><li class="cast-chip"><span class="cast-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"/></svg></span><span>Me</span></li><li class="cast-bump"><button type="button" class="bump" aria-label="Fist bump"><span class="fist fist-l" aria-hidden="true">🤜</span><span class="fist fist-r" aria-hidden="true">🤛</span></button></li><li class="cast-chip"><span class="cast-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"/></svg></span><span>You</span></li></ul>' +
'<div id="gsiBtn" class="gsi-slot"></div><p class="fine" id="loginMsg" role="status"></p></div>';
}
var gsiState = { clientId: null, loading: null };
function loadGsi() {
if (window.google && google.accounts && google.accounts.id) return Promise.resolve();
if (gsiState.loading) return gsiState.loading;
gsiState.loading = new Promise(function (res, rej) {
var sc = document.createElement('script'); sc.src = 'https://accounts.google.com/gsi/client'; sc.async = true;
sc.onload = res; sc.onerror = rej; document.head.appendChild(sc);
});
return gsiState.loading;
}
function setupGoogle(slotId) {
slotId = slotId || 'gsiBtn';
var msg = function (t) { var m = document.getElementById('loginMsg'); if (m) m.textContent = t; };
var cfgP = gsiState.clientId !== null ? Promise.resolve(gsiState.clientId) : fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ op: 'authconfig' }) }).then(function (r) { return r.json(); }).then(function (j) { gsiState.clientId = j.clientId || ''; return gsiState.clientId; });
cfgP.then(function (cid) {
var slot = document.getElementById(slotId);
if (!slot) return;
if (!cid) { if (slotId === 'gsiNudge') { var n = slot.closest('.signin-nudge'); if (n) n.hidden = true; } else msg('Sign-in isn\'t available right now.'); return; }
return loadGsi().then(function () {
google.accounts.id.initialize({ client_id: cid, callback: onGoogle, auto_select: true, cancel_on_tap_outside: true });
slot.innerHTML = '';
google.accounts.id.renderButton(slot, { theme: 'filled_black', size: 'large', shape: 'pill', text: 'signin_with' });
if (slotId === 'gsiBtn') { try { google.accounts.id.prompt(); } catch (e) {} }
});
}).catch(function () { msg('Couldn\'t load Google sign-in. Check the connection and try again.'); });
}
function onGoogle(resp) {
fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ op: 'login', credential: resp.credential }) })
.then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
.then(function (x) {
if (!x.ok) {
var t = x.j.error === 'not_allowed' ? ('That Google account (' + (x.j.email || '') + ') isn\'t on the list for this app.') : 'Sign-in didn\'t work. Try again.';
var m = document.getElementById('loginMsg'); if (m) m.textContent = t; else toast(t);
return;
}
SESSION = { token: x.j.token, email: x.j.email, name: x.j.name, exp: Date.now() + 89 * 864e5 };
try { localStorage.setItem('gp-session', JSON.stringify(SESSION)); localStorage.removeItem('gp-key'); } catch (e) {}
KEY = '';
toast('Signed in' + (x.j.name ? ' as ' + x.j.name : '') + '.');
S.mode = 'loading'; render(); load(true);
}).catch(function () { toast('Sign-in didn\'t work. Check the connection.'); });
}
function renderWho() {
var el = document.getElementById('whoLine');
if (!el) return;
if (SESSION) { el.hidden = false; el.innerHTML = 'Signed in as ' + esc(SESSION.email) + ' · <button type="button" class="linkish" id="signOutBtn">Sign out</button>'; }
else el.hidden = true;
}
document.addEventListener('click', function (ev) {
if (ev.target && (ev.target.id === 'signOutBtn' || ev.target.id === 'profSignOut')) {
signOutLocal();
try { if (window.google && google.accounts && google.accounts.id) google.accounts.id.disableAutoSelect(); } catch (e) {}
S.plan = null; S.mode = 'login'; profileOpen = false; document.getElementById('snackDrawer').hidden = true; render();
}
});
function api(op, payload) {
var body = Object.assign({ op: op }, payload || {});
if (S.readOnly && S.viewing && (op === 'day' || op === 'plan')) body.as = S.viewing;
return fetch(API, {
method: 'POST',
headers: authHeaders(),
body: JSON.stringify(body)
}).then(function (r) {
return r.json().catch(function () { return {}; }).then(function (j) {
if (!r.ok) { var e = new Error(j.error || ('http_' + r.status)); e.code = r.status === 401 ? 'bad_key' : (j.error || 'http'); throw e; }
return j;
});
});
}
function applyLoad(j) {
var plan = j.plan || {};
if (!plan.settings) throw new Error('empty_plan');
S.plan = plan;
var weeks = {};
(j.days || []).forEach(function (d) {
var ws = mondayOf(d.day);
weeks[ws] = weeks[ws] || { start: ws, days: {} };
weeks[ws].days[d.day] = { face: d.face, kcal: d.kcal, weight: d.weight, session: d.session, extra: !!d.extra, extra_type: d.extra_type || null, snacks: d.snacks || [], by8: d.by8, lifts: d.lifts || [] };
});
S.weeks = weeks;
if (j.people) S.people = j.people;
S.me = j.me || S.me || null;
S.viewing = j.viewing || S.me;
S.readOnly = !!j.readOnly;
}
var pending = 0;
function currentAs() { return (S.viewing && S.me && S.viewing !== S.me) ? S.viewing : null; }
function load(initial, asEmail) {
if (!KEY && !SESSION) { S.mode = 'login'; render(); return Promise.resolve(); }
if (pending > 0 || S.editing) return Promise.resolve();
var payload = asEmail ? { as: asEmail } : {};
return api('load', payload).then(function (j) {
if (pending > 0) return;
var first = !S.plan;
applyLoad(j);
S.mode = 'live';
S.canWrite = true;
if (first) {
var tw = mondayOf(todayISO());
S.weekStart = tw < startMonday() ? startMonday() : tw;
}
scheduleRender();
renderAvatars();
}).catch(function (e) {
S.mode = e && e.code === 'bad_key' ? 'login' : 'offline';
if (S.mode === 'login') signOutLocal();
render();
});
}
function handleErr(e) {
if (e && e.code === 'bad_key') { signOutLocal(); S.mode = 'login'; S.plan = null; render(); return; }
toast('That didn\'t save. Check your connection and tap it again.');
load();
}
function saveDay(date, patch) {
if (!can()) return;
var ws = mondayOf(date);
var wk = S.weeks[ws] ? clone(S.weeks[ws]) : { start: ws, days: {} };
wk.days = wk.days || {};
wk.days[date] = Object.assign({}, wk.days[date] || {}, patch);
S.weeks[ws] = wk;
pending++;
api('day', { date: date, patch: patch }).then(function () {
pending--;
}, function (e) { pending--; handleErr(e); });
}
function saveEdits() {
if (!S.editing) return;
var btn = document.getElementById('saveEdit');
var changed = KEYS.filter(function (k) { return JSON.stringify(S.draft[k]) !== JSON.stringify(S.plan[k]); });
if (!changed.length) { S.editing = false; S.draft = null; render(); toast('No changes to save.'); return; }
btn.disabled = true;
var chain = Promise.resolve();
changed.forEach(function (k) {
chain = chain.then(function () {
var body = clone(S.draft[k]);
return api('plan', { key: k, body: body }).then(function () { S.plan[k] = body; });
});
});
chain.then(function () {
S.editing = false; S.draft = null; btn.disabled = false;
render(); toast('Saved.');
}).catch(function (e) { btn.disabled = false; handleErr(e); });
}
document.querySelector('.tabs').addEventListener('click', function (ev) {
var t = ev.target.closest('[data-tab]');
if (!t) return;
S.tab = t.dataset.tab;
try { history.replaceState(null, '', location.pathname + location.search + '#' + S.tab); } catch (e) {}
render();
window.scrollTo({ top: 0 });
});
editBtn.addEventListener('click', function () {
if (!can()) return;
S.draft = clone(S.plan);
S.editing = true;
render();
});
document.getElementById('cancelEdit').addEventListener('click', function () {
S.editing = false; S.draft = null; render();
});
document.getElementById('saveEdit').addEventListener('click', saveEdits);
app.addEventListener('click', function (ev) {
var el = ev.target.closest('[data-act]');
if (!el || el.disabled) return;
var act = el.dataset.act;
if (act === 'prevwk' || act === 'nextwk') {
var minW = addDays(startMonday(), -7);
var maxW = addDays(startMonday(), 7 * ((num(P().settings.weeks) || 12) + 3));
var n = addDays(S.weekStart, act === 'prevwk' ? -7 : 7);
if (n < minW || n > maxW) return;
S.weekStart = n;
S.focusId = el.id || null;
render();
} else if (act === 'face') {
var date = el.dataset.date;
var cur = ((S.weeks[mondayOf(date)] || {}).days || {})[date] || {};
var val = cur.face === el.dataset.f ? null : el.dataset.f;
S.focusId = el.id;
saveDay(date, { face: val });
render();
} else if (act === 'bonus') {
var d2 = el.dataset.date;
openBonus(d2);
} else if (act === 'snacks') {
openSnacks(el.dataset.date);
} else if (act === 'by8') {
var d3 = el.dataset.date;
S.focusId = el.id;
saveDay(d3, { by8: !dayEntry(d3).by8 });
render();
} else if (act === 'phase') {
S.phase = el.dataset.p;
render();
} else if (act === 'addex') {
var wi = Number(el.dataset.w);
S.draft.workouts.list[wi].exercises.push({ name: 'New exercise', p1: '', p2: '', p3: '', note: '', how: '', img: '' });
render();
} else if (act === 'delex') {
S.draft.workouts.list[Number(el.dataset.w)].exercises.splice(Number(el.dataset.i), 1);
render();
} else if (act === 'copy') {
var src = document.getElementById(el.dataset.src);
var text = src ? src.textContent : '';
var done = function () { toast('Copied.'); };
var fallback = function () {
try {
var sel = window.getSelection(); var rg = document.createRange();
rg.selectNodeContents(src); sel.removeAllRanges(); sel.addRange(rg);
toast('Selected. Copy it from your menu.');
} catch (e) { toast('Select the text and copy it.'); }
};
try {
if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
else fallback();
} catch (e) { fallback(); }
}
});
app.addEventListener('change', function (ev) {
var el = ev.target;
if (el.dataset.field && el.dataset.date) {
var f = el.dataset.field;
var v;
if (f === 'session') v = el.value || null;
else {
var raw = el.value.trim().replace(/,/g, '');
v = raw === '' ? null : num(raw);
if (raw !== '' && v == null) { toast('Numbers only in that box.'); el.value = ''; return; }
}
var patch = {}; patch[f] = v;
saveDay(el.dataset.date, patch);
scheduleRender();
}
});
app.addEventListener('input', function (ev) {
var el = ev.target;
if (!S.editing) return;
if (el.dataset.bind) setPath(S.draft, el.dataset.bind, el.value);
else if (el.dataset.bindNum) {
var n = num(el.value.replace(/,/g, ''));
if (n != null) setPath(S.draft, el.dataset.bindNum, n);
} else if (el.dataset.bindLines) {
setPath(S.draft, el.dataset.bindLines, el.value.split('\n').map(function (x) { return x.trim(); }).filter(Boolean));
}
});
app.addEventListener('focusout', function () {
if (S.pendingRender) setTimeout(scheduleRender, 0);
});
var THEME_ICON = {
system: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
light: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
};
var THEME_LABEL = { system: 'Auto', light: 'Light', dark: 'Dark' };
var THEME_ARIA = { system: 'Theme: follows your phone. Tap for light.', light: 'Theme: light. Tap for dark.', dark: 'Theme: dark. Tap to follow your phone.' };
function getTheme() { try { var t = localStorage.getItem('gp-theme'); return t === 'light' || t === 'dark' ? t : 'system'; } catch (e) { return 'system'; } }
function applyTheme(t) {
var root = document.documentElement;
if (t === 'light' || t === 'dark') root.setAttribute('data-theme', t); else root.removeAttribute('data-theme');
var l = document.getElementById('tc-light'), d = document.getElementById('tc-dark');
if (l && d) {
if (t === 'light') { l.content = '#f3f4f1'; d.content = '#f3f4f1'; }
else if (t === 'dark') { l.content = '#111412'; d.content = '#111412'; }
else { l.content = '#f3f4f1'; d.content = '#111412'; }
}
var b = document.getElementById('themeBtn');
if (b) { b.innerHTML = THEME_ICON[t] + '<span>' + THEME_LABEL[t] + '</span>'; b.setAttribute('aria-label', THEME_ARIA[t]); }
}
document.getElementById('themeBtn').addEventListener('click', function () {
var order = ['system', 'light', 'dark'];
var next = order[(order.indexOf(getTheme()) + 1) % 3];
try { if (next === 'system') localStorage.removeItem('gp-theme'); else localStorage.setItem('gp-theme', next); } catch (e) {}
applyTheme(next);
toast(next === 'system' ? 'Following your phone\'s setting.' : (THEME_LABEL[next] + ' mode.'));
});
applyTheme(getTheme());
function initials(name) { return (String(name || '').trim().charAt(0) || '?').toUpperCase(); }
function avatarHTML(person, size) {
size = size || 30;
if (person && person.avatarUrl) return '<img class="avatar" style="width:' + size + 'px;height:' + size + 'px" src="' + esc(person.avatarUrl) + '" alt="">';
return '<span class="avatar avatar-fallback" style="width:' + size + 'px;height:' + size + 'px">' + esc(initials(person && (person.displayName || person.name))) + '</span>';
}
function renderAvatars() {
var people = S.people || [];
var me = people.filter(function (p) { return p.isMe; })[0];
var other = people.filter(function (p) { return !p.isMe; })[0];
var meBtn = document.getElementById('meAvatarBtn');
var otherBtn = document.getElementById('otherAvatarBtn');
if (meBtn) { meBtn.hidden = !SESSION || !me || S.editing; if (me) meBtn.innerHTML = avatarHTML(me, 30); }
if (otherBtn) { otherBtn.hidden = !SESSION || !other || S.editing; if (other) otherBtn.innerHTML = avatarHTML(other, 30); }
}
(function () {
var tb = document.getElementById('themeBtn');
if (!tb) return;
var ob = document.createElement('button');
ob.className = 'avatar-btn'; ob.id = 'otherAvatarBtn'; ob.type = 'button'; ob.hidden = true;
ob.setAttribute('aria-label', "View the other person's log");
tb.parentNode.insertBefore(ob, tb);
ob.addEventListener('click', function () {
var other = (S.people || []).filter(function (p) { return !p.isMe; })[0];
if (!other || S.editing) return;
S.mode = 'loading'; render();
load(false, other.email);
});
var b = document.createElement('button');
b.className = 'avatar-btn'; b.id = 'meAvatarBtn'; b.type = 'button'; b.hidden = true;
b.setAttribute('aria-label', 'Profile and calorie budget');
tb.parentNode.insertBefore(b, tb);
b.addEventListener('click', openProfile);
b.title = 'Profile';
tb.title = 'Light, dark, or auto';
var backBtn = document.getElementById('backToMineBtn');
if (backBtn) backBtn.addEventListener('click', function () { if (S.editing) return; S.mode = 'loading'; render(); load(false, null); });
var eb = document.getElementById('editBtn');
if (eb) { eb.classList.add('icon-btn'); eb.setAttribute('aria-label', 'Edit plan'); eb.title = 'Edit plan'; eb.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19.4 13.5a7.7 7.7 0 0 0 0-3l2-1.6-2-3.4-2.4 1a7.6 7.6 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.5A7.6 7.6 0 0 0 7 6.5l-2.4-1-2 3.4 2 1.6a7.7 7.7 0 0 0 0 3l-2 1.6 2 3.4 2.4-1a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.4 1 2-3.4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'; }
})();
function resizeAvatar(file) {
return new Promise(function (resolve, reject) {
var img = new Image();
var url = URL.createObjectURL(file);
img.onload = function () {
URL.revokeObjectURL(url);
var size = 256;
var side = Math.min(img.width, img.height);
var sx = (img.width - side) / 2, sy = (img.height - side) / 2;
var cv = document.createElement('canvas'); cv.width = size; cv.height = size;
var ctx = cv.getContext('2d');
ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
resolve(cv.toDataURL('image/jpeg', 0.85));
};
img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('bad_image')); };
img.src = url;
});
}
document.getElementById('snackDrawer').addEventListener('change', function (ev) {
if (ev.target && ev.target.id === 'kcalSel') saveBudget(Number(ev.target.value));
else if (ev.target && ev.target.id === 'avatarFile') {
var f = ev.target.files && ev.target.files[0];
ev.target.value = '';
if (!f) return;
resizeAvatar(f).then(function (dataUrl) {
return api('avatar', { image: dataUrl });
}).then(function (j) {
var me = (S.people || []).filter(function (p) { return p.isMe; })[0];
if (me) me.avatarUrl = j.avatarUrl;
renderAvatars();
if (profileOpen) openProfile();
toast('Photo updated.');
}, function () { toast('Could not update photo.'); });
} else if (ev.target && ev.target.id === 'displayNameInp') {
var v = ev.target.value.trim().slice(0, 60);
if (!v) return;
api('profile', { displayName: v }).then(function () {
var me2 = (S.people || []).filter(function (p) { return p.isMe; })[0];
if (me2) me2.displayName = v;
renderAvatars();
toast('Name updated.');
}, function () { toast('Could not update name.'); });
}
});
document.getElementById('snackDrawer').addEventListener('click', function (ev) {
if (ev.target && ev.target.id === 'changePhotoBtn') { var fi = document.getElementById('avatarFile'); if (fi) fi.click(); }
});

document.getElementById('snackDrawer').addEventListener('click', function (ev) {
if (ev.target.closest('[data-close]')) { closeDrawers(); return; }
if (bonusDate) {
if (!can()) return;
var bb = ev.target.closest('[data-bonus]'), bo = ev.target.closest('[data-bonus-other]'), bc = ev.target.closest('[data-bonus-clear]');
var bd = bonusDate;
if (bb) { var bl = bonusList(dayEntry(bd)); var bi = bl.indexOf(bb.dataset.bonus); if (bi >= 0) bl.splice(bi, 1); else bl.push(bb.dataset.bonus); saveBonus(bd, bl); openBonus(bd); }
else if (bo) { var w = window.prompt('What did you do?', ''); if (w === null) return; w = w.replace(/\|/g, '/').trim().slice(0, 40) || 'Other'; var bl2 = bonusList(dayEntry(bd)); if (bl2.indexOf(w) < 0) bl2.push(w); saveBonus(bd, bl2); openBonus(bd); toast('Added.'); }
else if (bc) { saveDay(bd, { extra: false, extra_type: null }); closeDrawers(); }
return;
}
var o = ev.target.closest('[data-other]');
if (o && snackDate && can()) {
var what = window.prompt(o.dataset.other === 'free' ? 'What free snack did you have?' : 'What healthy snack did you have?', '');
if (what === null) return;
what = what.trim().slice(0, 60) || 'Other';
var cur0 = (dayEntry(snackDate).snacks || []).slice();
cur0.push(o.dataset.other + ':' + what);
if (o.dataset.other === 'one' && cur0.filter(function (x) { return snackKind(x) === 'one'; }).length > maxOne()) toast('That\'s more than ' + maxOne() + ' healthy snacks. Veggies from here.');
saveDay(snackDate, { snacks: cur0 });
renderSnackDrawer();
return;
}
var p = ev.target.closest('[data-pick]');
if (!p || !snackDate || !can()) return;
var n = p.dataset.pick;
var cur = (dayEntry(snackDate).snacks || []).slice();
var i = cur.indexOf(n);
if (i >= 0) cur.splice(i, 1); else cur.push(n);
if (i < 0 && snackKind(n) === 'one' && cur.filter(function (x) { return snackKind(x) === 'one'; }).length > maxOne()) toast('That\'s more than ' + maxOne() + ' healthy snacks. Veggies from here.');
saveDay(snackDate, { snacks: cur });
renderSnackDrawer();
});
document.getElementById('fbDrawer').addEventListener('click', function (ev) {
if (ev.target.closest('[data-close]')) closeDrawers();
});
document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') closeDrawers(); });
document.getElementById('fbBtn').addEventListener('click', function () {
if (!KEY && !SESSION) { toast('Sign in first.'); return; }
document.getElementById('fbDrawer').hidden = false;
setTimeout(function () { document.getElementById('fbText').focus(); }, 50);
});
document.getElementById('fbSend').addEventListener('click', function () {
var ta = document.getElementById('fbText');
var text = ta.value.trim();
if (!text) { toast('Type something first.'); return; }
var b = this; b.disabled = true;
api('feedback', { text: text, tab: S.tab }).then(function () {
b.disabled = false; ta.value = ''; closeDrawers(); toast('Sent to PJ. Thank you.');
}, function (e) {
b.disabled = false;
toast(e && e.code === 'bad_key' ? 'Sign in first.' : 'That didn\'t send. Check your connection and try again.');
});
});
/* ---- Sims Fitness: today view, move log, daily motivation ---- */
var SF_CSS = [
'.hello{display:grid;gap:4px;padding:2px 2px 0}',
'.hello-name{font-family:var(--display);font-weight:700;font-size:1.55rem;letter-spacing:.01em;line-height:1.1}',
'.hello-msg{margin:0;color:var(--ink-2);font-size:1rem;line-height:1.4}',
'.strip-card{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:12px 0 10px;display:grid;gap:10px}',
'.strip-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 14px}',
'.strip-head h2{margin:0;font-family:var(--body);font-weight:700;font-size:1.3rem;text-transform:none;letter-spacing:0}',
'.strip-actions{display:flex;align-items:center;gap:12px}',
'.linkbtn{background:none;border:0;padding:4px 2px;font-weight:700;font-size:1rem;color:var(--accent);cursor:pointer}',
'.linkbtn.is-on{opacity:.45;cursor:default}',
'.cal-btn{position:relative;display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;border-radius:8px;color:var(--ink);cursor:pointer}',
'.cal-btn svg{width:26px;height:26px}',
'.cal-btn input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;font-size:16px}',
'.strip{display:flex;gap:8px;overflow-x:auto;padding:2px 14px 4px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch;scrollbar-width:none}',
'.strip::-webkit-scrollbar{display:none}',
'.ds{flex:0 0 auto;width:52px;min-height:64px;border-radius:10px;border:1px solid var(--line);background:var(--surface);display:grid;justify-items:center;align-content:center;gap:1px;padding:6px 0 5px;cursor:pointer;scroll-snap-align:center;color:var(--ink)}',
'.ds b{font-size:1.2rem;font-weight:600;font-variant-numeric:tabular-nums;line-height:1.1}',
'.ds span{font-size:.8rem;color:var(--ink-3)}',
'.ds i{width:6px;height:6px;border-radius:50%;background:var(--ink);margin-top:2px}',
'.ds i[hidden]{display:block;visibility:hidden}',
'.ds.is-today{border-color:var(--accent)}',
'.ds.is-sel{background:var(--accent-soft);border-color:var(--accent);border-width:2px}',
'.ds.is-sel span{color:var(--ink)}',
'.lifts{display:grid;gap:8px;border-top:1px solid var(--line-2);padding-top:10px}',
'.lifts-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}',
'.lifts-head .lbl{font-family:var(--mono);font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}',
'.lift-row{display:grid;grid-template-columns:1fr auto;gap:2px 10px;align-items:center;text-align:left;width:100%;border:1px solid var(--line);border-radius:10px;background:var(--surface-2);padding:9px 12px;cursor:pointer;color:var(--ink)}',
'.lift-row b{font-weight:600}',
'.lift-row small{grid-column:1/-1;color:var(--ink-3);font-size:.82rem}',
'.lift-row .sets{font-variant-numeric:tabular-nums;color:var(--ink-2);font-size:.9rem}',
'.lift-add{display:flex;gap:8px;flex-wrap:wrap}',
'.mv-search{width:100%;min-height:42px;border:1px solid var(--line);border-radius:10px;background:var(--surface-2);padding:8px 12px;font-size:16px;color:var(--ink)}',
'.mv-group{display:grid;gap:6px}',
'.mv-area{font-family:var(--mono);font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3);margin-top:4px}',
'.set-rows{display:grid;gap:8px}',
'.set-row{display:grid;grid-template-columns:28px minmax(0,1fr) minmax(0,1fr) 36px;gap:8px;align-items:center}',
'.set-row .n{font-family:var(--mono);color:var(--ink-3);font-size:.85rem}',
'.set-row input{width:100%;min-height:42px;border:1px solid var(--line);border-radius:8px;background:var(--surface-2);padding:6px 10px;font-size:16px;font-variant-numeric:tabular-nums;color:var(--ink)}',
'.set-row .x{min-height:36px;border:0;background:none;color:var(--ink-3);font-size:1.3rem;cursor:pointer}',
'.set-cols{display:grid;grid-template-columns:28px minmax(0,1fr) minmax(0,1fr) 36px;gap:8px;font-size:.78rem;color:var(--ink-3)}',
'.last-time{background:var(--accent-soft);border-radius:10px;padding:9px 12px;font-size:.9rem;color:var(--ink-2)}',
'.drawer-actions{display:flex;gap:8px;flex-wrap:wrap}'
].join('');
(function () { var st2 = document.createElement('style'); st2.textContent = SF_CSS; document.head.appendChild(st2); })();

var CAL_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 9h18M8 2.8v3.4M16 2.8v3.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="8" cy="13" r="1.1" fill="currentColor"/><circle cx="12" cy="13" r="1.1" fill="currentColor"/><circle cx="16" cy="13" r="1.1" fill="currentColor"/><circle cx="8" cy="17" r="1.1" fill="currentColor"/><circle cx="12" cy="17" r="1.1" fill="currentColor"/></svg>';

function ordinal(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
function longDate(s) { var d = parse(s); return d.toLocaleDateString('en-US', { month: 'long' }) + ' ' + ordinal(d.getDate()); }
function hasLog(e) { return !!(e && (e.face || e.session || e.weight != null || e.extra || e.by8 || (e.snacks && e.snacks.length) || (e.lifts && e.lifts.length))); }

/* ---------- move library ---------- */
var NICK_MOVES = {
'Chest and Upper Body': ['Chest Press Machine', 'Dumbbell Bench Press', 'Incline Dumbbell Press', 'Pec Deck (Chest Fly Machine)', 'Cable Crossover', 'Shoulder Press Machine', 'Dumbbell Shoulder Press', 'Dumbbell Lateral Raise', 'Cable Triceps Pushdown', 'Dumbbell Biceps Curl', 'Push-Up'],
'Back and Core': ['Lat Pulldown', 'Seated Cable Row', 'Assisted Pull-Up', 'Single-Arm Dumbbell Row', 'Back Extension', 'Cable Face Pull', 'Plank', 'Cable Crunch', 'Hanging Knee Raise', 'Medicine Ball Russian Twist'],
'Legs and Lower Body': ['Leg Press', 'Goblet Squat', 'Romanian Deadlift', 'Barbell Deadlift', 'Leg Extension', 'Seated Leg Curl', 'Hip Abduction Machine', 'Walking Lunge', 'Calf Raise', 'Kettlebell Swing', 'Suitcase Carry']
};
function areaOf(dayName) { var m = String(dayName || '').split(':'); return (m[1] || m[0] || 'Other').trim(); }
function moveLibrary() {
var out = [], seen = {};
function add(n, a) { n = String(n || '').trim(); if (!n) return; var k = n.toLowerCase(); if (seen[k]) return; seen[k] = 1; out.push({ name: n, area: a || 'Other' }); }
var W = (S.plan && S.plan.workouts) || {};
(W.list || []).forEach(function (w) { (w.exercises || []).forEach(function (ex) { add(ex.name, areaOf(w.name)); }); });
if (personSlot() === 'nick') Object.keys(NICK_MOVES).forEach(function (a) { NICK_MOVES[a].forEach(function (n) { add(n, a); }); });
var doc = S.plan && S.plan.moves;
((doc && doc.list) || []).forEach(function (m) { add(m.name, m.area); });
Object.keys(S.weeks || {}).forEach(function (ws) { var ds = S.weeks[ws].days || {}; Object.keys(ds).forEach(function (d) { (ds[d].lifts || []).forEach(function (l) { add(l.name, 'Other'); }); }); });
return out;
}
function libraryAreas() {
var lib = moveLibrary(), areas = [];
lib.forEach(function (m) { if (areas.indexOf(m.area) < 0) areas.push(m.area); });
return areas;
}
function lastTime(name, beforeDate) {
var key = String(name).toLowerCase(), best = null;
Object.keys(S.weeks || {}).forEach(function (ws) {
var ds = S.weeks[ws].days || {};
Object.keys(ds).forEach(function (d) {
if (d >= beforeDate) return;
(ds[d].lifts || []).forEach(function (l) {
if (String(l.name).toLowerCase() === key && l.sets && l.sets.length && (!best || d > best.date)) best = { date: d, sets: l.sets };
});
});
});
return best;
}
function setText(st) { return (st.w != null && st.w !== '' ? st.w : 'BW') + ' × ' + (st.r != null && st.r !== '' ? st.r : '?'); }
function setsText(sets) { var t = (sets || []).filter(function (st) { return (st.w != null && st.w !== '') || (st.r != null && st.r !== ''); }).map(setText).join(', '); return t || 'Sets not filled in yet'; }
function lastSessionMoves(session, beforeDate) {
var best = null;
Object.keys(S.weeks || {}).forEach(function (ws) {
var ds = S.weeks[ws].days || {};
Object.keys(ds).forEach(function (d) {
if (d >= beforeDate || ds[d].session !== session || !(ds[d].lifts || []).length) return;
if (!best || d > best.date) best = { date: d, lifts: ds[d].lifts };
});
});
return best;
}
function planMoves(session) {
var W = (S.plan && S.plan.workouts) || {};
var w = (W.list || []).filter(function (x) { return x.id === session; })[0];
return w && (w.exercises || []).length ? { name: w.name, names: w.exercises.map(function (ex) { return ex.name; }) } : null;
}

/* ---------- day card ---------- */
function liftsHTML(date, e) {
var lifts = e.lifts || [];
var h = '<div class="lifts"><div class="lifts-head"><span class="lbl">Moves</span></div>';
lifts.forEach(function (l, i) {
var lt = lastTime(l.name, date);
h += '<button class="lift-row" type="button" data-act="openmove" data-date="' + date + '" data-i="' + i + '" id="lr-' + date + '-' + i + '"><b>' + esc(l.name) + '</b><span class="sets">' + ((l.sets || []).length ? (l.sets.length + (l.sets.length === 1 ? ' set' : ' sets')) : 'Tap to log') + '</span>' +
'<small>' + ((l.sets || []).length ? esc(setsText(l.sets)) : (lt ? 'Last time: ' + esc(setsText(lt.sets)) : 'No history yet')) + '</small></button>';
});
var btns = '<button class="pick" type="button" data-act="addmove" data-date="' + date + '"' + dis() + '>+ Add move</button>';
if (!lifts.length && e.session && e.session !== 'X') {
var rep = lastSessionMoves(e.session, date);
var pm = planMoves(e.session);
if (rep) btns += '<button class="pick free" type="button" data-act="repeatmoves" data-date="' + date + '"' + dis() + '>Repeat last ' + esc(sessionLabel(e.session)) + '</button>';
else if (pm) btns += '<button class="pick free" type="button" data-act="planmoves" data-date="' + date + '"' + dis() + '>Start from the plan</button>';
}
h += '<div class="lift-add">' + btns + '</div></div>';
return h;
}
function sessionLabel(v) { var o = sessionOpts().filter(function (x) { return x.v === v; })[0]; return o ? o.label : 'workout'; }
function dayCardHTML(date, ws, wkDays) {
var today = todayISO();
var d = (parse(date).getDay() + 6) % 7;
var dn = DAYS[d];
var e = wkDays[date] || {};
var pl = plannedFor(dn);
var isToday = date === today;
var tags = '';
pl.mine.forEach(function (s) { tags += '<span class="tag"><span class="plate plate-' + esc(s.workout || 'X') + '"></span>' + esc(s.label) + ' · ' + esc(s.time) + '</span>'; });
pl.alt.forEach(function (s) {
var satDate = addDays(ws, dayIdx(s.day));
if (!(wkDays[satDate] && wkDays[satDate].session)) tags += '<span class="tag tag-alt"><span class="plate plate-' + esc(s.workout || 'X') + '"></span>Backup: ' + esc(s.label) + '</span>';
});
pl.theirs.forEach(function (s) { tags += '<span class="tag tag-nick" title="' + esc(partnerLabel(s.label)) + '">' + esc(names().partner) + ' at the gym ' + esc(s.time) + '</span>'; });
var faces = '';
FACES.forEach(function (f) {
var on = e.face === f.k;
faces += '<button class="face" type="button" id="f-' + date + '-' + f.k + '" data-act="face" data-date="' + date + '" data-f="' + f.k + '" aria-pressed="' + on + '" aria-label="' + f.label + ' eating day"' + dis() + '>' + faceSVG(f.k) + '<span>' + f.label + '</span></button>';
});
var opts = '';
sessionOpts().forEach(function (o) { opts += '<option value="' + o.v + '"' + ((e.session || '') === o.v ? ' selected' : '') + '>' + esc(o.label) + '</option>'; });
var head = '<ol class="days"><li class="day' + (isToday ? ' is-today' : '') + '">' +
'<div class="day-top"><div class="day-name"><span class="dow">' + dn + '</span><span class="dom">' + esc(short(date)) + '</span>' + (isToday ? '<span class="today-flag">Today</span>' : '') + '</div>' +
'<div class="day-tags">' + tags + '</div></div>' +
'';
var gymDay = pl.mine.length > 0 || (!!e.session && e.session !== 'X') || (e.lifts || []).length > 0;
var trainFirst = gymDay && !(isToday && new Date().getHours() >= 16);
var trainSec = '<section class="dsec dsec-train" aria-label="Train"><div class="dsec-h">Train</div>' +
'<div class="day-fields dsec-fields">' + '<label class="field f-session"><span>Workout</span><select id="s-' + date + '" data-field="session" data-date="' + date + '"' + dis() + '>' + opts + '</select></label>' + '</div>' +
liftsHTML(date, e) + '<div class="day-fields dsec-fields dsec-bonus">' + '<button class="bonus" type="button" id="b-' + date + '" data-act="bonus" data-date="' + date + '" aria-pressed="' + (!!e.extra) + '"' + dis() + '>' + (e.extra ? 'Bonus: ' + esc(bonusList(e).join(' + ') || 'done') : 'Bonus move') + '</button>' + '</div></section>';
var eatSec = '<section class="dsec dsec-eat" aria-label="Eat"><div class="dsec-h">Eat</div>' +
'<div class="food-row" title="How eating went"><svg class="food-ico" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="9.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".6"/><path d="M3.5 6v6.5M2 6v4a1.5 1.5 0 0 0 3 0V6M3.5 12.5V26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M28.5 26V6c-1.8 1.5-2.6 4-2.6 7.5v3h2.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="faces" role="group" aria-label="How eating went on ' + esc(dn + ' ' + short(date)) + '">' + faces + '</div></div>' +
snackRow(date, e) +
'<div class="day-fields dsec-fields dsec-weigh">' + '<label class="field"><span>Weight</span><input id="w-' + date + '" data-field="weight" data-date="' + date + '" inputmode="decimal" placeholder="Optional" value="' + esc(e.weight == null ? '' : e.weight) + '"' + dis() + '></label>' + '</div></section>';
return head + (trainFirst ? trainSec + eatSec : eatSec + trainSec) + '</li></ol>';
}
function stripHTML(sel) {
var today = todayISO();
var start = addDays(mondayOf(sel), -7);
var cells = '';
for (var i = 0; i < 21; i++) {
var d = addDays(start, i);
cells += '<button class="ds' + (d === sel ? ' is-sel' : '') + (d === today ? ' is-today' : '') + '" type="button" data-act="pickday" data-date="' + d + '" id="ds-' + d + '" aria-label="' + esc(longDate(d)) + '" aria-pressed="' + (d === sel) + '"><b>' + parse(d).getDate() + '</b><span>' + DAYS[(parse(d).getDay() + 6) % 7] + '</span><i' + (hasLog(dayEntry(d)) ? '' : ' hidden') + '></i></button>';
}
return '<section class="strip-card"><div class="strip-head"><h2>' + esc(longDate(sel)) + '</h2><div class="strip-actions">' +
(sel !== today ? '<button class="linkbtn" type="button" data-act="pickday" data-date="' + today + '">Today</button>' : '<span class="linkbtn is-on">Today</span>') +
'<label class="cal-btn" title="Pick a date">' + CAL_SVG + '<input type="date" id="calPick" aria-label="Pick a date" value="' + sel + '"></label></div></div>' +
'<div class="strip" id="strip">' + cells + '</div></section>';
}
function afterWeek() {
var st = document.getElementById('strip');
var el = st && st.querySelector('.is-sel');
if (st && el) st.scrollLeft = el.offsetLeft - (st.clientWidth - el.offsetWidth) / 2;
}
function selectDay(d) {
if (!/^\d{4}-\d{2}-\d{2}$/.test(d || '')) return;
S.selDate = d;
S.weekStart = mondayOf(d);
render();
}

/* ---------- motivation ---------- */
var MOTIV = {
general: [
'{n}, one good day at a time. That\'s the whole trick.',
'Show up, log it, move on. You\'ve got this, {n}.',
'{n}, nobody\'s asking for perfect. Just honest.',
'Small wins stack, {n}. Today\'s another brick.',
'You don\'t need motivation, {n}. You need the next rep.',
'{n}, the plan works when you work it.',
'Future you is already thanking you, {n}.',
'Consistency beats intensity. Every time, {n}.',
'{n}, drink some water before you do anything else.',
'Progress is quiet, {n}. Keep going anyway.',
'{n}, a rough meal isn\'t a rough week. Keep it moving.',
'Strong is a habit, {n}. Build it today.',
'{n}, you\'ve done hard things before. This is one more.',
'Don\'t count the days, {n}. Make them count. Then log them.',
'{n}, the scale is one number. How you feel is the rest of the story.',
'Pick one thing today and nail it, {n}.',
'{n}, you\'re not starting over. You\'re continuing.',
'Eat like you like yourself, {n}.',
'{n}, protein first, then everything else.',
'It\'s not about the week you had. It\'s about the next choice, {n}.',
'{n}, keep your promises to yourself. They count the most.',
'Slow progress is still progress, {n}.',
'{n}, move a little more than yesterday. That\'s it.',
'Tap a face tonight, {n}. Two seconds, done.',
'{n}, you\'re building something that lasts. No shortcuts needed.',
'The people who win log the boring days too, {n}.',
'{n}, be proud of the effort, not just the results.',
'One more good choice than bad today, {n}. That\'s a win.',
'{n}, your body keeps score of the little things. Stack them.',
'Take the stairs today, {n}. Every little bit adds up.',
'{n}, stronger every week. Keep stacking.',
'Don\'t wait for Monday, {n}. Today works just fine.',
'{n}, discipline is just remembering what you want.',
'Fuel up right today, {n}. Tomorrow\'s workout starts now.',
'{n}, sleep counts too. Get to bed on time tonight.',
'Keep it simple today, {n}. Plan, eat, move, rest.',
'{n}, you and {p} are in this together. Lean on it.',
'Every rep is a vote for who you\'re becoming, {n}.',
'{n}, you don\'t have to feel like it. You just have to start.',
'Nobody gets strong in a day, {n}. They get strong daily.'
],
gymday: [
'It\'s gym day, {n}. Get in, get it done, get out.',
'{n}, the weights aren\'t going to lift themselves. Let\'s go.',
'Gym day, {n}. Beat last time by one rep.',
'{n}, today\'s session is already on the calendar. Just show up.',
'Warm up right today, {n}. Then go to work.',
'{n}, log every set today. Next time you\'ll know exactly what to lift.',
'Gym day. Pick your moves, {n}, and own them.',
'{n}, add five pounds or one rep somewhere today. That\'s progress.',
'Big day, {n}. Leave a little better than you walked in.',
'{n}, form first. The weight follows.',
'Your stronger self is waiting at the gym, {n}.',
'{n}, forty-five minutes. That\'s all today asks.',
'Gym bag packed, {n}? Today\'s the day.',
'Train hard today, {n}. Brag to {p} later.',
'{n}, the hardest part is walking in the door. Everything after is easier.'
],
didgym: [
'Workout\'s in the books, {n}. Nice work.',
'{n}, you showed up today. That\'s the win.',
'Done and logged, {n}. Now get some protein in.',
'That session counts, {n}. Rest up tonight.',
'{n}, another workout on the board. Keep it rolling.',
'Look at you, {n}. Workout done.',
'{n}, stretch a little tonight. You earned it.',
'Strong work today, {n}. Recovery is part of the plan.'
],
restday: [
'Rest day, {n}. Recovery is where the strength shows up.',
'{n}, no gym today. A walk with Keds and Beau still counts.',
'Take it easy today, {n}. Next session, you go to work.',
'{n}, rest days are part of the program, not a break from it.',
'Off day, {n}. Keep the eating tight and let the muscles rebuild.',
'{n}, stretch, walk, hydrate. Rest days have a job too.',
'Recharge today, {n}. You\'ll feel it next session.',
'{n}, a bonus move is always on the table. No pressure.',
'Rest up, {n}. Sleep is where muscles get built.',
'{n}, today\'s goal is simple. Eat well and chill.'
],
onpace: [
'On pace this week, {n}. Keep doing exactly this.',
'{n}, the week is lining up nicely. Stay the course.',
'Right on budget, {n}. This is what consistent looks like.',
'{n}, you\'re ahead of the game this week. Nice.',
'The numbers like you this week, {n}.',
'{n}, keep this pace and the month takes care of itself.',
'Solid week so far, {n}. Don\'t change a thing.',
'{n}, you\'re making this look easy. It isn\'t. Proud of you.',
'Budget\'s in good shape, {n}. Enjoy your meals today.',
'{n}, on track. Now go stack another good day.',
'Look at that week, {n}. Steady wins.',
'{n}, this is the rhythm. Ride it.'
],
overpace: [
'A little over this week, {n}. One good day fixes more than you think.',
'{n}, no guilt. Just a clean day today.',
'The week isn\'t lost, {n}. Tighten up and let it land.',
'{n}, reset with a good breakfast. The rest of the day follows.',
'Over pace is a signal, not a sentence, {n}.',
'{n}, veggies are free. Lean on them today.',
'Kitchen closes at 8 tonight, {n}. That alone moves the needle.',
'{n}, one solid day and the week looks different.',
'Plenty of week left, {n}. Keep it simple.',
'{n}, skip the extras today and you\'re right back in it.',
'Don\'t chase it, {n}. Just have a normal, good day.',
'{n}, weeks like this happen. Monday always comes back around.'
],
idle: [
'{n}, yesterday\'s blank. Two taps and it\'s filled in.',
'Welcome back, {n}. Pick up right where you are.',
'{n}, no judgment. Just log today.',
'Missed a day? That\'s life, {n}. Log today and keep going.',
'{n}, the app misses you. Tap a face tonight.',
'Fresh start today, {n}. No catching up needed.',
'{n}, one log today gets the ball rolling again.',
'Nothing logged yet this week, {n}. Today\'s a great day to start.',
'{n}, you don\'t have to make up for anything. Just show up today.',
'Back at it, {n}. That\'s what counts.',
'{n}, a quick log beats a perfect one.',
'Let\'s get today on the board, {n}.'
],
streak: [
'{s} days logged in a row, {n}. Keep it going.',
'{n}, that\'s a {s}-day streak. Don\'t break the chain.',
'{s} straight days, {n}. This is becoming who you are.',
'{n}, {s} days running. Consistency looks good on you.',
'Streak\'s at {s}, {n}. One more today.',
'{n}, {s} days in a row. {p} better keep up.',
'{s} days logged, {n}. That\'s a habit now.',
'{n}, {s} days strong. Keep stacking.',
'Look at that streak, {n}. {s} days and counting.',
'{n}, {s} days in a row. Today makes it one more.'
],
monday: [
'New week, {n}. Clean slate, same plan.',
'Monday, {n}. Set the tone for the whole week.',
'{n}, fresh week, fresh budget. Let\'s go.',
'It\'s Monday, {n}. Start strong and the week follows.',
'{n}, new week. Same goals. Better you.',
'Happy Monday, {n}. Let\'s make this week count.'
],
friday: [
'Friday, {n}. Finish the week like you started it.',
'{n}, weekends are where weeks get won or lost. Plan tonight\'s dinner.',
'Happy Friday, {n}. Enjoy it and keep it tight.',
'{n}, strong finish today. The weekend\'s right there.',
'Friday feels good, {n}. So does staying on budget.'
],
weekend: [
'Weekend mode, {n}. Have fun and keep it in budget.',
'{n}, weekends are a great time for a workout with {p}.',
'Enjoy the weekend, {n}. A walk counts.',
'{n}, plan one fun meal and keep the rest simple.',
'{n}, weekends are for moving more, not less.',
'Relax today, {n}. Then log it tonight.',
'{n}, get outside today. Your mood will thank you.',
'Weekend reset, {n}. Prep a little for the week ahead.'
],
fall: [
'{n}, fall is here. Perfect weather for a walk.',
'Pumpkin spice is a treat, not a food group, {n}.',
'{n}, cooler mornings, stronger workouts.',
'Football season, {n}. The veggie tray is your friend.',
'{n}, fall is the best season to build habits. Nobody\'s watching.',
'Sweater weather, {n}. Keep the workouts warm.',
'{n}, get those fall walks in while it\'s nice out.',
'Leaves are changing, {n}. So are you.'
],
winter: [
'{n}, cold outside, warm in the gym.',
'Winter\'s for building, {n}. Spring shows it off.',
'{n}, holiday season is a marathon. Pace yourself.',
'Short days, {n}. Get your movement in early.',
'{n}, soup season. Load it with veggies.',
'Bundle up, {n}. The gym\'s heated.'
],
spring: [
'Spring\'s here, {n}. Time to get outside.',
'{n}, longer days mean more time to move.',
'Fresh season, {n}. Fresh goals.',
'{n}, spring cleaning starts in the kitchen.'
],
summer: [
'{n}, hydrate. It\'s hot out there.',
'Summer\'s here, {n}. Early workouts beat the heat.',
'{n}, pool days count as bonus moves.',
'Long summer evenings, {n}. Perfect for a walk.'
],
halloween: ['{n}, the Halloween candy is for the kids. Mostly.', 'Trick or treat, {n}. Pick one treat and enjoy it.'],
thanksgiving: ['{n}, enjoy Thanksgiving. One plate, then a walk.', 'Grateful for you, {n}. Enjoy the day and pick it back up tomorrow.'],
christmas: ['Merry Christmas week, {n}. Enjoy it. January can wait.', '{n}, a walk after the big meal is the best gift you can give yourself.'],
newyear: ['New year, same {n}, stronger plan.', '{n}, no resolutions needed. You already started.'],
valentine: ['{n}, share dessert with {p}. Half the calories, all the fun.'],
july4: ['{n}, cookout season. Load up on the grilled stuff.']
};
function motivCount() { var c = 0; Object.keys(MOTIV).forEach(function (k) { c += MOTIV[k].length; }); return c; }
function hashStr(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function holidayKey(d) {
var m = d.getMonth() + 1, day = d.getDate();
if (m === 10 && day >= 25) return 'halloween';
if (m === 11 && day >= 20 && day <= 30) return 'thanksgiving';
if (m === 12 && day >= 18 && day <= 26) return 'christmas';
if ((m === 12 && day >= 27) || (m === 1 && day <= 5)) return 'newyear';
if (m === 2 && day >= 10 && day <= 14) return 'valentine';
if (m === 7 && day <= 5) return 'july4';
return null;
}
function seasonKey(d) { var m = d.getMonth() + 1; return m >= 9 && m <= 11 ? 'fall' : (m === 12 || m <= 2 ? 'winter' : (m <= 5 ? 'spring' : 'summer')); }
function streakDays(today) {
var n = 0, d = hasLog(dayEntry(today)) ? today : addDays(today, -1);
while (hasLog(dayEntry(d)) && n < 400) { n++; d = addDays(d, -1); }
return n;
}
function motivation() {
var today = todayISO();
var now = new Date();
var e = dayEntry(today);
var wd = (now.getDay() + 6) % 7;
var r = weekStats(mondayOf(today));
var st = streakDays(today);
var anyEver = Object.keys(S.weeks || {}).length > 0;
var pools = [];
var hk = holidayKey(now);
if (e.session || (e.lifts && e.lifts.length)) pools.push('didgym');
if (st >= 3) pools.push('streak');
if (anyEver && !hasLog(dayEntry(addDays(today, -1))) && !hasLog(e)) pools.push('idle');
if (!e.session && plannedFor(DAYS[wd]).mine.length) pools.push('gymday');
else if (!e.session && !plannedFor(DAYS[wd]).mine.length) pools.push('restday');
if (r.s === 'good' || r.s === 'close') pools.push('onpace');
if (r.s === 'over') pools.push('overpace');
if (wd === 0) pools.push('monday');
if (wd === 4) pools.push('friday');
if (wd >= 5) pools.push('weekend');
pools.push(seasonKey(now));
var who = (S.viewing || '') + '|';
var h = hashStr(who + today);
var dayNum = Math.floor(parse(today).getTime() / 864e5);
var key;
if (hk && h % 3 === 0) key = hk;
else if (h % 4 === 0) key = 'general';
else key = pools[(h >>> 3) % pools.length];
var list = MOTIV[key] || MOTIV.general;
var msg = list[(dayNum + (h >>> 7)) % list.length];
var N = names();
return msg.replace(/\{n\}/g, N.person).replace(/\{p\}/g, N.partner).replace(/\{s\}/g, String(st));
}
function helloHTML() {
if (S.readOnly) return '';
var hr = new Date().getHours();
var part = hr < 12 ? 'Good morning' : (hr < 17 ? 'Good afternoon' : 'Good evening');
return '<section class="hello"><div class="hello-name">' + esc(part + ', ' + names().person + '.') + '</div><p class="hello-msg">' + esc(motivation()) + '</p></section>';
}

/* ---------- move drawers ---------- */
var liftDate = null, liftIdx = null, movePick = false, moveQuery = '';
function dayLifts(date) { return (dayEntry(date).lifts || []).map(function (l) { return { name: l.name, sets: (l.sets || []).map(function (s) { return { w: s.w, r: s.r }; }) }; }); }
function saveLifts(date, lifts) { saveDay(date, { lifts: lifts }); }
function openAddMove(date) {
liftDate = date; liftIdx = null; movePick = true; snackDate = null; bonusDate = null; profileOpen = false;
renderMovePicker();
document.getElementById('snackDrawer').hidden = false;
}
function renderMovePicker() {
var body = document.getElementById('snackBody');
var have = dayLifts(liftDate).map(function (l) { return l.name.toLowerCase(); });
var q = moveQuery.trim().toLowerCase();
var lib = moveLibrary().filter(function (m) { return !q || m.name.toLowerCase().indexOf(q) >= 0; });
var groups = '';
libraryAreas().forEach(function (a) {
var items = lib.filter(function (m) { return m.area === a; });
if (!items.length) return;
groups += '<div class="mv-group"><div class="mv-area">' + esc(a) + '</div><div class="pick-grid">' + items.map(function (m) {
return '<button class="pick' + (have.indexOf(m.name.toLowerCase()) >= 0 ? ' free' : '') + '" type="button" data-move="' + esc(m.name) + '" aria-pressed="' + (have.indexOf(m.name.toLowerCase()) >= 0) + '">' + esc(m.name) + '</button>';
}).join('') + '</div></div>';
});
body.innerHTML = '<div class="drawer-head"><h2 id="snackTitle">Add a move</h2><button class="btn btn-sm btn-primary" type="button" data-close="1">Done</button></div>' +
'<input class="mv-search" id="moveSearch" type="search" placeholder="Search your moves" value="' + esc(moveQuery) + '" autocomplete="off">' +
(groups || '<p class="fine">No moves match that. Add it as a new one.</p>') +
'<div class="drawer-actions"><button class="pick" type="button" data-newmove="1">+ New move</button></div>' +
'<p class="fine">Tap a move to log its sets. New moves you add stay on your list.</p>';
}
function openSets(date, i) {
liftDate = date; liftIdx = i; movePick = false; snackDate = null; bonusDate = null; profileOpen = false;
renderSets();
document.getElementById('snackDrawer').hidden = false;
}
function renderSets() {
var body = document.getElementById('snackBody');
var lifts = dayLifts(liftDate);
var l = lifts[liftIdx];
if (!l) { closeDrawers(); return; }
var lt = lastTime(l.name, liftDate);
var rows = (l.sets || []).map(function (s, j) {
return '<div class="set-row"><span class="n">' + (j + 1) + '</span>' +
'<input inputmode="decimal" data-set="' + j + '" data-k="w" placeholder="lbs" value="' + esc(s.w == null ? '' : s.w) + '"' + dis() + '>' +
'<input inputmode="numeric" data-set="' + j + '" data-k="r" placeholder="reps" value="' + esc(s.r == null ? '' : s.r) + '"' + dis() + '>' +
'<button class="x" type="button" data-delset="' + j + '" aria-label="Remove set ' + (j + 1) + '"' + dis() + '>×</button></div>';
}).join('');
body.innerHTML = '<div class="drawer-head"><h2 id="snackTitle">' + esc(l.name) + '</h2><button class="btn btn-sm btn-primary" type="button" data-close="1">Done</button></div>' +
(lt ? '<div class="last-time">Last time, ' + esc(short(lt.date)) + ': ' + esc(setsText(lt.sets)) + '</div>' : '<p class="fine">First time logging this one. Start light and write it down.</p>') +
(rows ? '<div class="set-cols"><span></span><span>Weight (lbs)</span><span>Reps</span><span></span></div><div class="set-rows">' + rows + '</div>' : '') +
'<div class="drawer-actions"><button class="pick free" type="button" data-addset="1"' + dis() + '>+ Add set</button>' +
(lt && !(l.sets || []).length ? '<button class="pick" type="button" data-copylast="1"' + dis() + '>Same as last time</button>' : '') + '</div>' +
'<div><button class="btn btn-sm btn-quiet" type="button" data-delmove="1"' + dis() + '>Remove this move</button></div>';
}
function addToLibrary(name, area) {
var doc = clone((S.plan && S.plan.moves) || { list: [] });
doc.list = doc.list || [];
if (doc.list.some(function (m) { return String(m.name).toLowerCase() === name.toLowerCase(); })) return;
doc.list.push({ name: name, area: area || 'Other' });
S.plan.moves = doc;
api('plan', { key: 'moves', body: doc }).catch(function () {});
}
document.getElementById('snackDrawer').addEventListener('click', function (ev) {
if (!liftDate || ev.target.closest('[data-close]')) return;
if (!can()) return;
var lifts = dayLifts(liftDate);
var mv = ev.target.closest('[data-move]');
if (mv && movePick) {
var nm = mv.dataset.move;
var at = lifts.map(function (l) { return l.name.toLowerCase(); }).indexOf(nm.toLowerCase());
if (at < 0) { lifts.push({ name: nm, sets: [] }); saveLifts(liftDate, lifts); at = lifts.length - 1; }
moveQuery = '';
openSets(liftDate, at);
return;
}
if (ev.target.closest('[data-newmove]')) {
var w = window.prompt('Name of the move (what it\'s called on the machine or in Trainerize)', moveQuery);
if (w === null) return;
w = w.trim().slice(0, 60);
if (!w) return;
var areas = libraryAreas();
var a = window.prompt('Which day or area is it? (' + areas.join(', ') + ')', areas[0] || 'Other');
a = (a || 'Other').trim().slice(0, 40) || 'Other';
var match = areas.filter(function (x) { return x.toLowerCase() === a.toLowerCase(); })[0];
addToLibrary(w, match || a);
lifts.push({ name: w, sets: [] });
saveLifts(liftDate, lifts);
moveQuery = '';
openSets(liftDate, lifts.length - 1);
toast('Added to your moves.');
return;
}
var l = lifts[liftIdx];
if (!l) return;
if (ev.target.closest('[data-addset]')) {
var prev = l.sets[l.sets.length - 1];
var lt = lastTime(l.name, liftDate);
var seed = prev || (lt && lt.sets[l.sets.length]) || (lt && lt.sets[lt.sets.length - 1]) || { w: null, r: null };
l.sets.push({ w: seed.w, r: seed.r });
saveLifts(liftDate, lifts); renderSets();
} else if (ev.target.closest('[data-copylast]')) {
var lt2 = lastTime(l.name, liftDate);
if (lt2) { l.sets = lt2.sets.map(function (s) { return { w: s.w, r: s.r }; }); saveLifts(liftDate, lifts); renderSets(); }
} else if (ev.target.closest('[data-delset]')) {
l.sets.splice(Number(ev.target.closest('[data-delset]').dataset.delset), 1);
saveLifts(liftDate, lifts); renderSets();
} else if (ev.target.closest('[data-delmove]')) {
lifts.splice(liftIdx, 1);
saveLifts(liftDate, lifts);
closeDrawers();
}
});
document.getElementById('snackDrawer').addEventListener('input', function (ev) {
if (ev.target && ev.target.id === 'moveSearch' && movePick) {
moveQuery = ev.target.value;
var pos = ev.target.selectionStart;
renderMovePicker();
var si = document.getElementById('moveSearch');
if (si) { si.focus(); try { si.setSelectionRange(pos, pos); } catch (e) {} }
}
});
document.getElementById('snackDrawer').addEventListener('change', function (ev) {
var t = ev.target;
if (!liftDate || t.dataset.set === undefined || !can()) return;
var lifts = dayLifts(liftDate);
var l = lifts[liftIdx];
if (!l || !l.sets[Number(t.dataset.set)]) return;
var raw = t.value.trim().replace(/,/g, '');
var v = raw === '' ? null : Number(raw);
if (raw !== '' && !isFinite(v)) { toast('Numbers only in that box.'); t.value = ''; return; }
if (v != null && t.dataset.k === 'r') v = Math.round(v);
if (v != null && (v < 0 || v > (t.dataset.k === 'w' ? 2000 : 200))) { toast('That number looks off.'); return; }
l.sets[Number(t.dataset.set)][t.dataset.k] = v;
saveLifts(liftDate, lifts);
});
app.addEventListener('click', function (ev) {
var el = ev.target.closest('[data-act]');
if (!el || el.disabled) return;
var act = el.dataset.act;
if (act === 'pickday') selectDay(el.dataset.date);
else if (act === 'addmove') { moveQuery = ''; openAddMove(el.dataset.date); }
else if (act === 'openmove') openSets(el.dataset.date, Number(el.dataset.i));
else if (act === 'repeatmoves' || act === 'planmoves') {
var d = el.dataset.date, e = dayEntry(d);
var names2 = act === 'repeatmoves' ? ((lastSessionMoves(e.session, d) || {}).lifts || []).map(function (l) { return l.name; }) : ((planMoves(e.session) || {}).names || []);
if (!names2.length || !can()) return;
saveLifts(d, names2.map(function (n) { return { name: n, sets: [] }; }));
render();
toast('Moves loaded. Tap each one to log your sets.');
}
});
app.addEventListener('change', function (ev) {
if (ev.target && ev.target.id === 'calPick' && ev.target.value) selectDay(ev.target.value);
});

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

var hash = (location.hash || '').replace('#', '');
if (['week', 'workouts', 'food', 'goals', 'trainer'].indexOf(hash) >= 0) S.tab = hash;
render();
load(true);
document.addEventListener('visibilitychange', function () { if (!document.hidden) load(false, currentAs()); });
setInterval(function () { if (!document.hidden) load(false, currentAs()); }, 60000);
})();

;(function () { var st = document.createElement('style'); st.id = 'sf-next-ui'; st.textContent = '\n.t-ico,.t-short{display:none}\n.dsec{display:grid;gap:10px;border-top:1px solid var(--line-2);padding-top:10px}\n.dsec-h{font-family:var(--display);font-weight:700;font-size:0.95rem;letter-spacing:0.06em;text-transform:uppercase;color:var(--ink-2)}\n.dsec-fields{border-top:0;padding-top:0}\n.dsec-weigh{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n@media (max-width: 640px){\n .tabs.wrap{position:fixed;left:0;right:0;bottom:0;z-index:30;max-width:none;margin:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:0;overflow:visible;padding:4px 4px calc(4px + env(safe-area-inset-bottom,0px));background:var(--surface);border-top:1px solid var(--line);box-shadow:0 -8px 24px -18px rgba(0,0,0,0.35)}\n .tab{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:54px;padding:6px 2px;border-bottom:0;font-size:0.74rem;letter-spacing:0.03em;border-radius:10px}\n .tab .t-ico{display:block;width:23px;height:23px}\n .tab .t-long{display:none}\n .tab .t-short{display:inline}\n .tab[aria-selected="true"]{color:var(--accent);background:var(--accent-soft)}\n main{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))}\n .toast{bottom:calc(80px + env(safe-area-inset-bottom,0px))}\n body.editing .tabs.wrap{display:none}\n body.editing .toast{bottom:calc(92px + env(safe-area-inset-bottom,0px))}\n}\n'; document.head.appendChild(st); })();

;(function () { var st = document.createElement('style'); st.id = 'sf-next-goals'; st.textContent = '\n.gt-list{display:grid;gap:10px}\n.gt-card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:12px;display:grid;gap:6px}\n.gt-head{display:flex;justify-content:space-between;align-items:baseline;gap:8px}\n.gt-head b{font-size:1.02rem}\n.gt-gain{font-family:var(--mono);font-size:0.72rem;color:var(--good);white-space:nowrap}\n.gt-how{color:var(--ink-3)}\n.gt-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:4px}\n.gt-cell{min-height:56px;border:1px solid var(--line);border-radius:10px;background:var(--surface-2);color:var(--ink-3);display:grid;align-content:center;justify-items:center;gap:2px;padding:6px 2px;cursor:pointer;font:inherit}\n.gt-cell span{font-family:var(--mono);font-size:0.62rem;letter-spacing:0.06em;text-transform:uppercase}\n.gt-cell b{font-weight:600;font-size:0.86rem}\n.gt-cell.has{background:var(--accent-soft);border-color:var(--accent);color:var(--ink)}\n.gt-cell:disabled{cursor:default}\n.gt-pick{display:grid;grid-template-columns:64px 1fr 64px;align-items:center;gap:12px;margin:8px 0}\n.gt-step{height:64px;border-radius:50%;border:1px solid var(--line);background:var(--surface-2);color:var(--ink);font-size:1.8rem;line-height:1;cursor:pointer}\n.gt-val{text-align:center;font-family:var(--display);font-size:1.3rem;color:var(--ink-2);text-transform:uppercase;letter-spacing:0.04em}\n.gt-val b{font-size:3.2rem;color:var(--ink);letter-spacing:0}\n.gt-range{width:100%;height:44px;accent-color:var(--accent)}\n.gt-scale{display:flex;justify-content:space-between;font-family:var(--mono);font-size:0.66rem;color:var(--ink-3);margin-top:-6px}\n.gt-actions{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px}\n.gt-actions .btn-primary{min-height:48px;padding-inline:22px}\n'; document.head.appendChild(st); })();

;(function () { var st = document.createElement('style'); st.id = 'sf-next-signin'; st.textContent = '\n.login-name{color:var(--ink)}\n.login-card{gap:14px}\n.login-line{margin:0;font-size:1.05rem;line-height:1.4;color:var(--ink-2);max-width:30ch;text-wrap:balance}\n.cast{list-style:none;margin:6px 0 10px;padding:0;display:flex;justify-content:center;gap:22px}\n.cast-chip{display:grid;justify-items:center;gap:6px;font-family:var(--mono);font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-3)}\n.cast-ico{width:48px;height:48px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}\n.cast-ico svg{width:24px;height:24px}\n.login-fine{margin:4px 0 0;max-width:32ch;color:var(--ink-3)}\n#loginMsg:empty{display:none}\n'; document.head.appendChild(st); })();

(function () {
function bump(el) { el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) {} }
document.addEventListener('click', function (ev) { var b = ev.target.closest && ev.target.closest('.bump'); if (b) bump(b); });
document.addEventListener('pointerover', function (ev) { if (ev.pointerType !== 'mouse') return; var b = ev.target.closest && ev.target.closest('.bump'); if (b && !(ev.relatedTarget && b.contains(ev.relatedTarget))) bump(b); });
document.addEventListener('animationend', function (ev) { if (ev.animationName === 'sfHeart') { var b = ev.target.closest('.bump'); if (b) b.classList.remove('go'); } });
})();

;(function () { var st = document.createElement('style'); st.id = 'sf-next-signin2'; st.textContent = '\n.cast{align-items:center;gap:10px}\n.cast-bump{padding-bottom:22px}\n.bump{position:relative;background:none;border:0;padding:8px 6px;margin:0;font-size:1.9rem;line-height:1;cursor:pointer;display:inline-flex;align-items:center;-webkit-tap-highlight-color:transparent;touch-action:manipulation}\n.fist{display:inline-block;will-change:transform}\n.fist-l{margin-right:-0.12em}\n.bump::after{content:"\\2764\\FE0F";position:absolute;left:50%;top:0;font-size:1.1rem;line-height:1;margin-left:-0.5em;opacity:0;pointer-events:none}\n@keyframes sfBumpL{0%{transform:none}40%{transform:translateX(-14px) rotate(-10deg)}62%{transform:translateX(4px)}78%{transform:translateX(-1px)}100%{transform:none}}\n@keyframes sfBumpR{0%{transform:none}40%{transform:translateX(14px) rotate(10deg)}62%{transform:translateX(-4px)}78%{transform:translateX(1px)}100%{transform:none}}\n@keyframes sfHeart{0%,45%{opacity:0;transform:translateY(6px) scale(0.3)}58%{opacity:1;transform:translateY(-6px) scale(1.25)}70%{transform:translateY(-12px) scale(1)}100%{opacity:0;transform:translateY(-38px) scale(0.9)}}\n.bump.go .fist-l{animation:sfBumpL 0.55s cubic-bezier(.3,.7,.3,1)}\n.bump.go .fist-r{animation:sfBumpR 0.55s cubic-bezier(.3,.7,.3,1)}\n.bump.go::after{animation:sfHeart 1.1s ease-out}\n@media (prefers-reduced-motion: reduce){.bump.go .fist,.bump.go::after{animation:none}}\n'; document.head.appendChild(st); })();
