/* unordinary. digital motion library. Attribute-driven; respects prefers-reduced-motion.
data-split[="repeat"]   word-by-word headline reveal on enter
data-reveal[="repeat"]  fade + rise on enter
data-parallax="0.15"    scroll parallax (relative to parent)
data-magnetic="0.35"    pulls toward the pointer
data-cursor (on body)   custom orange cursor; data-cursor-label="View" grows it
data-hover              adds .is-hover (use with .ud-fill-row)
data-hover-preview      container; children with data-preview="Label" [data-preview-img="url"] show a floating card
data-marquee[="reverse"] infinite ticker
data-scroll-progress[="sticky"] sets --p 0..1
data-hscroll + child data-hscroll-track  sticky horizontal scroll
data-scroll-words       words light up with scroll
a[data-transition]      page wipe before navigating
API: UDMotion.init(root,{observeDelay}), .transition(fn), .enter(), .replay(el), .autopilot(t=>({x,y})) */
(()=>{
const R=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(pointer:fine)').matches;
const M={x:innerWidth/2,y:innerHeight/2},S={active:false,lastReal:0,auto:null,hover:null,running:false};
let L={par:[],mag:[],prog:[],hs:[],words:[]},cursor=null,cursorLabel=null,preview=null,previewIn=null,io=null;
const lerp=(a,b,t)=>a+(b-a)*t,clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
addEventListener('mousemove',e=>{M.x=e.clientX;M.y=e.clientY;S.active=true;S.lastReal=performance.now();},{passive:true});
if(R)document.documentElement.classList.add('ud-reduce');
function split(el,stagger=true){
if(el.dataset.udSplit)return [...el.querySelectorAll('.ud-wi')];
el.dataset.udSplit='1';
const nodes=[...el.childNodes],out=[];el.textContent='';
const add=c=>{const o=document.createElement('span');o.className='ud-w';const n=document.createElement('span');n.className='ud-wi';typeof c==='string'?n.textContent=c:n.appendChild(c);o.appendChild(n);el.appendChild(o);el.appendChild(document.createTextNode(' '));out.push(n);};
nodes.forEach(nd=>{if(nd.nodeType===3)nd.textContent.split(/\s+/).filter(Boolean).forEach(add);else if(nd.nodeName==='BR')el.appendChild(document.createElement('br'));else if(nd.nodeType===1)add(nd);});
out.forEach((n,i)=>n.style.transitionDelay=stagger?`calc(var(--stagger) * ${i})`:'0s');
return out;
}
function init(root=document,opts={}){
const q=s=>[...root.querySelectorAll(s)];
q('[data-split]').forEach(el=>split(el));
q('[data-marquee]').forEach(el=>{if(el.dataset.udMq)return;el.dataset.udMq='1';const h=el.innerHTML;el.classList.add('ud-marquee');el.innerHTML=`<div class="ud-marquee-track">${h}${h}</div>`;});
L.words=q('[data-scroll-words]').map(el=>{el.classList.add('is-in');return {el,w:split(el,false)};});
L.par=R?[]:q('[data-parallax]');
L.mag=R||!fine?[]:q('[data-magnetic]').map(el=>({el,x:0,y:0}));
L.prog=q('[data-scroll-progress]');
L.hs=q('[data-hscroll]').map(el=>({el,t:el.querySelector('[data-hscroll-track]')}));
q('a[data-transition]').forEach(a=>{if(a.dataset.udT)return;a.dataset.udT='1';a.addEventListener('click',e=>{e.preventDefault();const h=a.getAttribute('href');transition(()=>{if(h&&h[0]==='#'){const t=document.querySelector(h);t&&scrollTo({top:t.getBoundingClientRect().top+scrollY,behavior:'instant'});}else if(h)location.href=h;});});});
if(document.body.hasAttribute('data-cursor')&&fine&&!R&&!cursor){cursor=document.createElement('div');cursor.className='ud-cursor';cursor.innerHTML='<div class="ud-cursor-dot"><span></span></div>';cursorLabel=cursor.querySelector('span');document.body.appendChild(cursor);document.documentElement.classList.add('ud-has-cursor');cursor.p={x:M.x,y:M.y};}
if(root.querySelector('[data-hover-preview]')&&!preview&&!R){preview=document.createElement('div');preview.className='ud-preview';preview.innerHTML='<div class="ud-preview-in"></div>';previewIn=preview.firstChild;document.body.appendChild(preview);preview.p={x:M.x,y:M.y};}
const obs=()=>{if(!io)io=new IntersectionObserver(es=>es.forEach(e=>{const rep=e.target.dataset.reveal==='repeat'||e.target.dataset.split==='repeat';if(e.isIntersecting){e.target.classList.add('is-in');if(!rep)io.unobserve(e.target);}else if(rep)e.target.classList.remove('is-in');}),{threshold:.15});q('[data-split],[data-reveal]').forEach(el=>io.observe(el));};
opts.observeDelay?setTimeout(obs,opts.observeDelay):obs();
if(!S.running){S.running=true;requestAnimationFrame(frame);}
}
function frame(now){
const vh=innerHeight;
if(S.auto&&now-S.lastReal>2000){const p=S.auto(now/1000);M.x=p.x;M.y=p.y;S.active=true;}
L.par.forEach(el=>{const r=el.parentElement.getBoundingClientRect();el.style.transform=`translate3d(0,${(r.top+r.height/2-vh/2)*-(parseFloat(el.dataset.parallax)||.15)}px,0)`;});
L.prog.forEach(el=>{const r=el.getBoundingClientRect();const p=el.dataset.scrollProgress==='sticky'?clamp(-r.top/Math.max(1,r.height-vh)):clamp((vh-r.top)/(r.height+vh));el.style.setProperty('--p',p.toFixed(4));});
L.hs.forEach(({el,t})=>{if(!t)return;const r=el.getBoundingClientRect();const p=clamp(-r.top/Math.max(1,r.height-vh));t.style.transform=`translate3d(${-p*Math.max(0,t.scrollWidth-t.parentElement.clientWidth)}px,0,0)`;});
L.words.forEach(({el,w})=>{const r=el.getBoundingClientRect();const p=R?1:clamp((vh*.85-r.top)/(r.height+vh*.35));const n=w.length;w.forEach((s,i)=>s.style.opacity=(.15+.85*clamp(p*n*1.15-i)).toFixed(3));});
L.mag.forEach(o=>{const r=o.el.getBoundingClientRect();const cx=r.left+r.width/2-o.x,cy=r.top+r.height/2-o.y,dx=M.x-cx,dy=M.y-cy;const near=S.active&&Math.hypot(dx,dy)<Math.max(r.width,r.height)*.9;const s=parseFloat(o.el.dataset.magnetic)||.35;o.x=lerp(o.x,near?dx*s:0,.15);o.y=lerp(o.y,near?dy*s:0,.15);o.el.style.transform=`translate3d(${o.x.toFixed(2)}px,${o.y.toFixed(2)}px,0)`;});
const under=S.active?document.elementFromPoint(M.x,M.y):null;
const row=under&&under.closest('[data-hover]');
if(row!==S.hover){S.hover&&S.hover.classList.remove('is-hover');row&&row.classList.add('is-hover');S.hover=row;}
if(cursor){cursor.p.x=M.x;cursor.p.y=M.y;cursor.style.transform=`translate3d(${cursor.p.x}px,${cursor.p.y}px,0)`;cursor.classList.toggle('is-on',S.active);const lab=under&&under.closest('[data-cursor-label]');cursor.classList.toggle('is-big',!!lab);if(lab)cursorLabel.textContent=lab.dataset.cursorLabel;}
if(preview){const it=under&&under.closest('[data-hover-preview] [data-preview]');preview.p.x=lerp(preview.p.x,M.x,.12);preview.p.y=lerp(preview.p.y,M.y,.12);preview.style.transform=`translate3d(${preview.p.x}px,${preview.p.y}px,0)`;preview.classList.toggle('is-on',!!it);if(it){previewIn.textContent=it.dataset.previewImg?'':it.dataset.preview;previewIn.style.backgroundImage=it.dataset.previewImg?`url(${it.dataset.previewImg})`:'';}}
requestAnimationFrame(frame);
}
function layers(){return ['var(--orange)','var(--charcoal)'].map(c=>{const d=document.createElement('div');d.className='ud-wipe';d.style.background=c;document.body.appendChild(d);return d;});}
const wipe=(d,from,to,origin,delay)=>d.animate([{transform:`scaleY(${from})`,transformOrigin:origin},{transform:`scaleY(${to})`,transformOrigin:origin}],{duration:700,delay,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'}).finished;
async function transition(fn){
if(R){fn&&fn();return;}
const [o,c]=layers();
await Promise.all([wipe(o,0,1,'bottom',0),wipe(c,0,1,'bottom',90)]);
fn&&fn();await new Promise(r=>setTimeout(r,150));
await Promise.all([wipe(c,1,0,'top',0),wipe(o,1,0,'top',90)]);
o.remove();c.remove();
}
async function enter(){
if(R)return;const [o,c]=layers();o.style.transform=c.style.transform='scaleY(1)';
await new Promise(r=>setTimeout(r,200));
await Promise.all([wipe(c,1,0,'top',0),wipe(o,1,0,'top',90)]);o.remove();c.remove();
}
function replay(el,gap=700){el.classList.remove('is-in');setTimeout(()=>el.classList.add('is-in'),gap);}
window.UDMotion={init,transition,enter,replay,split,reduce:R,autopilot:f=>{S.auto=f;}};
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',()=>init()):init();
})();
