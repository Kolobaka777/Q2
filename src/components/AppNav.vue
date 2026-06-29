<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.id">
        <a :href="item.href" :class="{ active: active === item.id }">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useScrollNav } from '../composables/useScrollNav.js'

const items = [
  { href: '#hero', id: 'hero', label: 'Главная' },
  { href: '#p1',  id: 'p1',   label: '01 Погружение' },
  { href: '#p2',  id: 'p2',   label: '02 Лекции' },
  { href: '#p3',  id: 'p3',   label: '03 Трекинг' },
  { href: '#p4',  id: 'p4',   label: '04 Контроль' },
]

const active = useScrollNav(['hero', 'p1', 'p2', 'p3', 'p4'])
</script>
