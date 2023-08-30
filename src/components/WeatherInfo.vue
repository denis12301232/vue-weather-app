<script setup lang="ts">
import WeatherInput from './WeatherInput.vue';
import Icon from './Icon.vue';
import { useVModel } from '@/composables';
import { OpenWeatherCodes } from '@/util/matching';
import { computed } from 'vue';

interface Props {
  search: string;
  code?: number;
  temp?: number;
  description?: string;
  city?: string;
  country?: string;
  time?: number;
}

const props = defineProps<Props>();
defineEmits<{ 'update:search': [value: string] }>();

const query = useVModel<string>('search');
const image = computed(() => OpenWeatherCodes[`${props.code}`]);
const date = computed(() =>
  props.time
    ? new Date((props.time || 0) * 1000).toLocaleDateString('en-EN', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '---'
);
</script>

<template>
  <div :class="$style.main">
    <WeatherInput v-model="query" />
    <Icon :icon="`weather/${image}.png`" :width="70" :height="70" style="margin-top: 20px" />
    <h1 style="margin-top: 40px">{{ temp ? Math.round(temp) : '---' }} °C</h1>
    <div class="flex items-center">
      <Icon icon="weather.svg" :width="20" :height="20" />
      <div class="first-upper" style="margin-left: 10px">
        {{ description ? description : '---' }}
      </div>
    </div>
    <hr :class="$style.divider" />
    <div class="flex items-center">
      <Icon
        icon="location.svg"
        width="15"
        height="15"
        style="transform: scale(1.3); transform-origin: center"
      />
      <div style="margin-left: 10px">{{ city ? city + ', ' + country : '---' }}</div>
    </div>
    <div class="flex items-center">
      <Icon icon="calendar.svg" width="15" height="15" />
      <div style="margin-left: 10px">{{ date }}</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: a;
  padding: 20px 20px;
  border-radius: 15px;
  background-image: url('@/assets/icons/gradient-1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.divider {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
