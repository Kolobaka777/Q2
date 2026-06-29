<template>
  <div class="plan-col full">
    <div class="col-label">
      {{ label }}
      <span v-if="showAddLink" style="font-size:9px;color:var(--muted);text-transform:none;letter-spacing:0">— добавить ссылки</span>
    </div>
    <div class="checks-grid">
      <CheckItem v-for="item in items" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<script setup>
import CheckItem from './CheckItem.vue'
defineProps({ label: String, items: Array, showAddLink: Boolean })
</script>
