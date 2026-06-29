<template>
  <div v-if="item.isSection" class="check-section">{{ item.name }}</div>
  <div v-else class="check-item">
    <div style="flex-shrink:0;margin-top:2px">
      <canvas
        ref="canvasRef"
        width="14"
        height="16"
        style="image-rendering:pixelated;cursor:pointer;display:block"
      ></canvas>
    </div>
    <div class="check-name">
      <strong>{{ item.name }}</strong>
      <a v-if="item.link" :href="item.link">добавить ссылку</a>
      <template v-else>{{ item.desc }}</template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { drawBug } from '../composables/usePixelBug.js'

const props = defineProps({ item: Object })
const canvasRef = ref(null)

onMounted(() => {
  const c = canvasRef.value
  if (!c) return
  const ctx = c.getContext('2d')
  const color = props.item.status === 'done' ? '#1cdb66'
    : props.item.status === 'wip' ? '#ff9f39'
    : '#2b2b2b'
  let f = 0, hov = false

  c.addEventListener('mouseenter', () => { hov = true })
  c.addEventListener('mouseleave', () => { hov = false })

  function anim() {
    ctx.clearRect(0, 0, 14, 16)
    drawBug(ctx, 1, 0, 1, f, color, hov)
    f = 1 - f
    setTimeout(() => requestAnimationFrame(anim), hov ? 80 : 500)
  }
  anim()
})
</script>
