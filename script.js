const birthday = new Date(2026, 9, 29, 0, 0, 0);
function update() { const n = new Date(); let t = birthday; if (n > t) t = new Date(2027, 9, 29); let x = t - n; days.textContent = String(Math.floor(x / 864e5)).padStart(2, '0'); hours.textContent = String(Math.floor(x / 36e5) % 24).padStart(2, '0'); minutes.textContent = String(Math.floor(x / 6e4) % 60).padStart(2, '0'); seconds.textContent = String(Math.floor(x / 1e3) % 60).padStart(2, '0'); if (n >= birthday && n < new Date(2026, 9, 30)) birthdayMessage.textContent = 'Today is the day. Chapter 23 begins.' }
update(); setInterval(update, 1000);

const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(x => io.observe(x));

confettiBtn.onclick = () => { for (let i = 0; i < 120; i++) { let e = document.createElement('i'); e.style.cssText = `position:fixed;left:${Math.random() * 100}vw;top:-10px;width:7px;height:12px;background:${['#a855f7', '#6ee7b7', '#34d399', '#fff'][i % 4]};z-index:100`; document.body.append(e); let d = 1600 + Math.random() * 1600; e.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${(Math.random() - .5) * 300}px,${innerHeight + 100}px) rotate(720deg)`, opacity: 0 }], { duration: d }); setTimeout(() => e.remove(), d) } };

const musicBtn = document.getElementById('musicBtn');
if (musicBtn && bgMusic) {
  musicBtn.onclick = () => {
    if (bgMusic.paused) { bgMusic.play(); musicBtn.textContent = '♪'; }
    else { bgMusic.pause(); musicBtn.textContent = '⏸'; }
  };
}