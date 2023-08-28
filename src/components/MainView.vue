<script setup lang="ts">
import WeatherInfo from './WeatherInfo.vue'
import WeatherHighlights from './WeatherHighlights.vue'
import WeatherCoords from './WeatherCoords.vue'
import WeatherHumidity from './WeatherHumidity.vue'
</script>

<template>
  <main class="flex justify-center items-center window-height">
    <div :class="$style.container">
      <WeatherInfo></WeatherInfo>
      <WeatherHighlights></WeatherHighlights>
      <WeatherCoords></WeatherCoords>
      <WeatherHumidity></WeatherHumidity>
    </div>
  </main>
</template>

<style lang="scss" module>
.container {
  max-width: 1280px;
  padding: 10px;
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    'a a b b b b'
    'c c c d d d';
  gap: 20px;
}
</style>
