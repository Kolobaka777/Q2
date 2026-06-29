<template>
  <div class="hero" id="hero">
    <div>
      <div class="hero-label">Отдел тестирования · <span>Q2 2026</span></div>
      <h1>Квартальный<br><em>отчёт</em></h1>
      <p>Отчет за второй квартал 2026 года (апрель-июнь). Задачи, исполнители, дедлайны, ожидаемые и реальные результаты.</p>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;padding:1rem">
      <canvas
        ref="canvasRef"
        width="160"
        height="160"
        style="image-rendering:pixelated;cursor:pointer"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { drawBug } from '../composables/usePixelBug.js'

const canvasRef = ref(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let frame = 0, hover = false, angle = 0, clicks = 0, escaping = false
  let escX = 0, escY = 0, escVX = 0, escVY = 0

  canvas.addEventListener('mouseenter', () => { hover = true })
  canvas.addEventListener('mouseleave', () => { hover = false })
  canvas.addEventListener('click', () => {
    clicks++
    if (clicks >= 7 && !escaping) {
      escaping = true
      const rect = canvas.getBoundingClientRect()
      canvas.style.position = 'fixed'
      canvas.style.zIndex = '9999'
      canvas.style.left = rect.left + 'px'
      canvas.style.top = rect.top + 'px'
      escX = rect.left; escY = rect.top
      const cx = rect.left + 80, cy = rect.top + 80
      const d = [window.innerWidth - cx, cx, cy, window.innerHeight - cy]
      const mi = d.indexOf(Math.min(...d))
      const vecs = [[6,0],[-6,0],[0,-6],[0,6]]
      escVX = vecs[mi][0]; escVY = vecs[mi][1]
    } else if (!escaping) {
      angle += 45
    }
  })

  function animHero() {
    ctx.clearRect(0, 0, 160, 160)
    if (escaping) {
      escVX *= 1.08; escVY *= 1.08
      escX += escVX; escY += escVY
      canvas.style.left = Math.round(escX) + 'px'
      canvas.style.top = Math.round(escY) + 'px'
      if (escX < -200 || escX > window.innerWidth + 200 || escY < -200 || escY > window.innerHeight + 200) {
        escaping = false; clicks = 0
        canvas.style.position = ''
        canvas.style.left = ''
        canvas.style.top = ''
        canvas.style.zIndex = ''
      }
    }
    ctx.save()
    ctx.translate(80, 80)
    ctx.rotate(angle * Math.PI / 180)
    ctx.translate(-40, -45)
    drawBug(ctx, 0, 0, 5, frame, '#1cdb66', hover)
    ctx.restore()
    frame = 1 - frame
    setTimeout(() => requestAnimationFrame(animHero), hover || escaping ? 80 : 400)
  }
  animHero()
})
</script>
