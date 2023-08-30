<script setup lang="ts">
import Icon from './Icon.vue';

interface Props {
  humidity?: number;
}

defineProps<Props>();
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.icon">
      <Icon icon="humidity.png" width="70" height="70" />
    </div>
    <div style="grid-area: b">
      <h4 :class="$style.subtitle">Humiditi: {{ humidity ? humidity + ' %' : '---' }}</h4>
      <div class="text-body2">
        Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous
        state of water, is generally invisible to the human eye.
      </div>
    </div>
    <div class="text-body2" style="grid-area: c">
      The same amount of water vapor results in higher relative humidity in cool air than warm air.
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: d;
  border-radius: 15px;
  background-image: url('@/assets/icons/gradient-2.jpg');
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
