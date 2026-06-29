<template>
  <div class="plan-section" :id="id">
    <div class="plan-header">
      <div class="plan-num">{{ num }}</div>
      <div class="plan-htitle">{{ title }}</div>
      <div class="badge corners" :class="status === 'done' ? 'badge-done' : 'badge-wip'">
        {{ status === 'done' ? 'Завершено' : 'В работе' }}
        <span class="c3"></span><span class="c4"></span>
      </div>
    </div>

    <div class="plan-body">
      <div class="plan-col">
        <div class="col-label">Задачи</div>
        <ul class="task-list">
          <li v-for="task in tasks" :key="task">{{ task }}</li>
        </ul>
      </div>

      <div class="plan-col">
        <div class="col-label">Детали</div>
        <div v-for="d in details" :key="d.key" class="info-row">
          <span class="info-key">{{ d.key }}</span>
          <span class="info-val" :class="d.color">{{ d.val }}</span>
        </div>
        <template v-if="secondaryLabel">
          <br>
          <div class="col-label">{{ secondaryLabel }}</div>
          <div style="font-size:11px;color:var(--muted);line-height:1.8">{{ secondaryText }}</div>
        </template>
      </div>

      <!-- Слот для полноширинных колонок внутри plan-body (лекции, чек-листы) -->
      <slot name="body-extra" />
    </div>

    <div class="result-grid">
      <div class="result-block exp corners">
        <div class="col-label" style="color:var(--orange)">Ожидалось</div>
        <ul class="result-items">
          <li v-for="item in expected" :key="item">{{ item }}</li>
        </ul>
        <span class="c3"></span><span class="c4"></span>
      </div>
      <div class="result-block act corners">
        <div class="col-label">{{ achievedLabel || 'Достигнуто' }}</div>
        <ul class="result-items">
          <li v-for="item in achieved" :key="item">{{ item }}</li>
        </ul>
        <span class="c3"></span><span class="c4"></span>
      </div>
    </div>

    <!-- Слот для контента после result-grid (карточки команды) -->
    <slot name="after" />
  </div>
</template>

<script setup>
defineProps({
  id:             String,
  num:            String,
  title:          String,
  status:         String,
  tasks:          Array,
  details:        Array,
  secondaryLabel: String,
  secondaryText:  String,
  expected:       Array,
  achieved:       Array,
  achievedLabel:  String,
})
</script>
