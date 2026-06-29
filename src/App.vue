<template>
  <AppNav />

  <HeroSection />

  <div class="wrap">
    <MetricsGrid :metrics="metrics" />
    <MarkerLine text="//////// ТЕСТИРОВАНИЕ · Q2 · 2026 · ADTECH · QA_DEPT · ТЕСТИРОВАНИЕ · Q2 · 2026 · ADTECH · QA_DEPT ////////" />

    <!-- П1: Погружение в команду -->
    <PlanSection v-bind="plans[0]">
      <template #after>
        <div class="plan-col full" style="padding:1.5rem 2rem 0">
          <div class="col-label">Команда · 4 сотрудника</div>
        </div>
        <div class="team-list">
          <TeamCard v-for="m in team" :key="m.name" :member="m" />
        </div>
      </template>
    </PlanSection>

    <!-- П2: Серия лекций -->
    <PlanSection v-bind="plans[1]">
      <template #body-extra>
        <div class="plan-col full">
          <div class="col-label">Прогресс лекций</div>
          <div style="border:1px solid var(--border);border-bottom:none">
            <LectureItem
              v-for="(lec, i) in lectures"
              :key="lec.num"
              :lecture="lec"
              :style="i === lectures.length - 1 ? 'border-bottom:1px solid var(--border)' : ''"
            />
          </div>
        </div>
      </template>
    </PlanSection>

    <!-- П3: Оптимизация трекинга -->
    <PlanSection v-bind="plans[2]">
      <template #after>
        <div style="padding:0 2rem 2rem">
          <div class="col-label" style="margin-bottom:1rem">Борда в действии</div>
          <img src="/img/board.png" alt="Bugtest special — борда нелинейных задач" style="width:100%;border:1px solid var(--border);border-radius:4px;display:block" />
        </div>
      </template>
    </PlanSection>

    <!-- П4: Технический контроль -->
    <PlanSection v-bind="plans[3]">
      <template #body-extra>
        <CheckGrid label="Передано в автотесты вёрстки" :items="autoTests" />
        <CheckGrid label="Тестировщики теперь проверяют сами" :items="manualTests" />
        <CheckGrid label="Добавлено в чеклист прелендов" :items="checklistAdded" />
        <CheckGrid label="Убрано из чеклиста прелендов" :items="checklistRemoved" />
        <CheckGrid label="Чеклист вайтов — добавлено" :items="whiteChecklistAdded" />
        <CheckGrid label="Новый чеклист: WordPress" :items="wordpressChecklist" />
        <CheckGrid label="Новый чеклист: Gambling White" :items="gamblingWhiteChecklist" />
        <CheckGrid label="Новый чеклист: Yodga (специфический спай)" :items="yodgaChecklist" />
        <CheckGrid label="Новый чеклист: Динамические комментарии" :items="dynamicCommentsChecklist" />
        <CheckGrid label="Автотесты — ручная проверка при сбое" :items="autoTestsManualChecklist" />
        <CheckGrid label="Полностью сняты с проверок на этапе верстки" :items="checklistDropped" />
      </template>
    </PlanSection>

    <MarkerLine text="//////// QA_DEPT · ТЕСТИРОВАНИЕ · ADTECH · Q2 · 2026 · QA_DEPT · ТЕСТИРОВАНИЕ · ADTECH · Q2 · 2026 ////////" />
  </div>

  <AppFooter />
</template>

<script setup>
import { metrics, team, lectures, autoTests, manualTests, checklistAdded, checklistRemoved, checklistDropped, whiteChecklistAdded, wordpressChecklist, gamblingWhiteChecklist, yodgaChecklist, dynamicCommentsChecklist, autoTestsManualChecklist, plans } from './data/index.js'

import AppNav      from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import MetricsGrid from './components/MetricsGrid.vue'
import MarkerLine  from './components/MarkerLine.vue'
import PlanSection from './components/PlanSection.vue'
import TeamCard    from './components/TeamCard.vue'
import LectureItem from './components/LectureItem.vue'
import CheckGrid   from './components/CheckGrid.vue'
import AppFooter   from './components/AppFooter.vue'
</script>
