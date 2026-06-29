import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollNav(ids) {
  const active = ref(ids[0])

  function onScroll() {
    let cur = ids[0]
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el && window.scrollY >= el.offsetTop - 100) cur = id
    })
    active.value = cur
  }

  onMounted(() => window.addEventListener('scroll', onScroll))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return active
}
