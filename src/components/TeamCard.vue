<template>
  <div class="team-card" :class="{ hl: member.highlight }">

    <div class="team-intro">
      <div class="av">{{ member.initials }}</div>
      <div class="tname">{{ member.name }}</div>
      <div class="tsince">{{ member.since }}</div>
      <div class="ttags">
        <template v-for="group in tagGroups" :key="group.cat">
          <div v-if="group.tags.length" class="ttag-group">
            <span class="tcat-label">{{ group.label }}</span>
            <span v-for="tag in group.tags" :key="tag.label + (tag.sub || '')" class="ttag" :class="[tag.color, tag.cat, { spec: tag.spec }]">{{ tag.label }}<span v-if="tag.sub" class="tag-sub">·{{ tag.sub }}</span></span>
          </div>
        </template>
      </div>
      <div class="tvector">{{ member.vector }}</div>
    </div>

    <div class="team-strengths">
      <div class="t-label g">Сильные стороны</div>
      <div v-for="s in member.strengths" :key="s.title" class="strength-item">
        <div class="s-title">{{ s.title }}</div>
        <div class="s-text">{{ s.text }}</div>
      </div>
    </div>

    <div class="team-gaps">
      <div class="t-label o">Слабые стороны</div>
      <div v-for="g in member.gaps" :key="g" class="gap-item">{{ g }}</div>
    </div>

    <div class="team-footer">
      <div class="team-notes">
        <div class="t-label">Наблюдения из бесед</div>
        <div class="notes-text">{{ member.notes }}</div>
      </div>
      <div class="team-vector-row">
        <div class="t-label g">Зоны роста</div>
        <div class="vector-text">{{ member.vectorFull }}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ member: Object })

const tagGroups = computed(() => [
  { cat: 't', label: 'задачи', tags: props.member.tags.filter(t => t.cat === 't') },
  { cat: 'h', label: 'навыки', tags: props.member.tags.filter(t => t.cat === 'h') },
  { cat: 's', label: 'черты',  tags: props.member.tags.filter(t => t.cat === 's') },
])
</script>
