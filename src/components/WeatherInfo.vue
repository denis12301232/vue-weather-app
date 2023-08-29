<script setup lang="ts">
import WeatherInput from './WeatherInput.vue';
</script>

<template>
  <div :class="$style.main">
    <WeatherInput />
    <img src="@/assets/images/weather/thunderstorm.png" alt="" style="height: 50px; width: 50px; margin-top: 20px;" />
    <h2 style="margin-top: 50px;">15 C</h2>
    <div>Thunderstorm</div>
    <hr />
    <div>Paris, fr</div>
    <div>Thu</div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: a;
  padding: 20px 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #27293a;
}
</style>
