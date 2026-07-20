const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});
document.querySelectorAll('.card').forEach(c=>obs.observe(c));
const b=document.getElementById('b');
window.addEventListener('mousemove',e=>{b.style.transform=`translate(${e.clientX-110}px,${e.clientY-110}px)`});