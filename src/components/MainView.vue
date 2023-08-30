<script setup lang="ts">
import type { OpenWeather } from '@/types';
import WeatherInfo from './WeatherInfo.vue';
import WeatherHighlights from './WeatherHighlights.vue';
import WeatherCoords from './WeatherCoords.vue';
import WeatherHumidity from './WeatherHumidity.vue';
import { onMounted, ref, watch } from 'vue';
import WeatherService from '@/api/services/WeatherService';
import { throttle } from '@/util';

const search = ref('Paris');
const weatherInfo = ref<OpenWeather.ResponseByCity | null>(null);
const throttleWeather = throttle(getWeather, 1000);

onMounted(getWeather);
watch(search, () => throttleWeather());

function getWeather() {
  WeatherService.getWeatherByCity(search.value)
    .then((response) => response.json())
    .then((json) => (weatherInfo.value = json));
}
</script>

<template>
  <main
    class="flex justify-center items-center min-window-height"
    style="background-color: #0e100f"
  >
    <div :class="$style.container">
      <WeatherInfo
        v-model:search="search"
        :code="weatherInfo?.weather?.at(0)?.id"
        :temp="weatherInfo?.main?.temp"
        :description="weatherInfo?.weather?.at(0)?.description"
        :city="weatherInfo?.name"
        :country="weatherInfo?.sys?.country"
        :time="weatherInfo?.dt"
      />
      <WeatherHighlights
        :wind="weatherInfo?.wind"
        :pressure="weatherInfo?.main?.pressure"
        :feels-like="weatherInfo?.main?.feels_like"
        :clouds="weatherInfo?.clouds"
        :timezone="weatherInfo?.timezone"
        :sunrise="weatherInfo?.sys?.sunrise"
        :sunset="weatherInfo?.sys?.sunset"
      />
      <WeatherCoords :coords="weatherInfo?.coord" />
      <WeatherHumidity :humidity="weatherInfo?.main?.humidity" />
    </div>
  </main>
</template>

<style lang="scss" module>
.container {
  max-width: 1280px;
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
