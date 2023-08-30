<script setup lang="ts">
import Icon from './Icon.vue';
import type { OpenWeather } from '@/types';

interface Props {
  coords?: OpenWeather.ResponseByCity['coord'];
}

defineProps<Props>();
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.icon">
      <Icon icon="compass.png" width="70" height="70" />
    </div>
    <div style="grid-area: b">
      <h4 :class="$style.subtitle">Longitude: {{ coords?.lon || '---' }}</h4>
      <div class="text-body2">Longitude measures distance east or west of the prime meridian.</div>
    </div>
    <div style="grid-area: c">
      <h4 :class="$style.subtitle">Latitude: {{ coords?.lat || '---' }}</h4>
      <div class="text-body2">
        Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to
        the equator.
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: c;
  border-radius: 15px;
  background-image: url('@/assets/icons/gradient-3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-areas:
    'a b b b b b b'
    'a c c c c c c';
  padding: 25px 15px;
  column-gap: 20px;
  row-gap: 10px;
}

.icon {
  grid-row: 1/3;
  grid-area: a;
  justify-self: center;
  align-self: center;
}

.subtitle {
  margin-bottom: 5px;
}
</style>
