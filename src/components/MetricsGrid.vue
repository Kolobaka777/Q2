<template>
  <div class="metrics">
    <div v-for="m in metrics" :key="m.label" class="metric corners">
      <div class="metric-label">{{ m.label }}</div>
      <div class="metric-val">{{ m.val }}</div>
      <template v-if="Array.isArray(m.sub)">
        <div v-for="s in m.sub" :key="s" class="metric-sub">{{ s }}</div>
      </template>
      <div v-else class="metric-sub">{{ m.sub }}</div>
      <span class="c3"></span><span class="c4"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({ metrics: Array })
</script>
