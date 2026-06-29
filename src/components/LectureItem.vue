<template>
  <div class="lecture-item" :class="{ 'lec-dim': lecture.status === 'plan' }">
    <div>
      <div class="lec-date-num">Лекция {{ lecture.num }}</div>
      <div v-if="lecture.date" class="lec-date" :style="lecture.dateColor === 'orange' ? 'color:var(--orange)' : ''">
        {{ lecture.date }}
      </div>
      <div class="lec-dot" :class="lecture.status"></div>
    </div>

    <div>
      <div class="lec-title">{{ lecture.title }}</div>
      <div class="lec-desc" :style="lecture.status === 'plan' ? 'color:#2a2a2a' : ''">{{ lecture.desc }}</div>
      <div v-if="lecture.lecturer" class="lec-who">// Лектор: {{ lecture.lecturer }}</div>
    </div>

    <div :class="statusClass">{{ statusText }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ lecture: Object })

const statusClass = computed(() => ({
  'lec-status-done': props.lecture.status === 'done',
  'lec-status-wip':  props.lecture.status === 'wip',
  'lec-status-plan': props.lecture.status === 'plan',
}))

const statusText = computed(() => (
  { done: 'Проведено', wip: 'В работе', plan: 'Запланировано' }[props.lecture.status] || ''
))
</script>
