<script setup lang="ts">
import type { OpenWeather } from '@/types';
import WeatherInfo from './WeatherInfo.vue';
import WeatherHighlights from './WeatherHighlights.vue';
import WeatherCoords from './WeatherCoords.vue';
import WeatherHumidity from './WeatherHumidity.vue';
import { onMounted, ref, watchEffect } from 'vue';
import WeatherService from '@/api/services/WeatherService';

const search = ref('Paris');
const weatherInfo = ref<OpenWeather.ResponseByCity | null>(null);

function getWeather(){
  WeatherService.getWeatherByCity(search.value)
  .then((response) => response.json())
  .then((json) => weatherInfo.value = json);
}

onMounted(getWeather);

watchEffect(() => console.log(weatherInfo.value))
</script>

<template>
  <main class="flex justify-center items-center window-height" style="background-color: #0e100f">
    <div :class="$style.container">
      <WeatherInfo v-model:search="search" />
      <WeatherHighlights />
      <WeatherCoords />
      <WeatherHumidity />
    </div>
  </main>
</template>

<style lang="scss" module>
.container {
  max-width: 1024px;
  padding: 10px;
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  display: grid;
  color: var(--color-white);
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    'a a b b b b'
    'c c c d d d';
  gap: 20px;
}
</style>
