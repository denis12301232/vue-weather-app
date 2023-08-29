<template>
  <div :class="$style.main">
    <h3>Today's highlight</h3>
    <div :class="$style.content">
      <div :class="$style.card">Wind</div>
      <div :class="$style.card">Pressure</div>
      <div :class="$style.card">Sunrise and sunset</div>
      <div :class="$style.card">Wind guts</div>
      <div :class="$style.card">Feels like</div>
      <div :class="$style.card">Cloudiness</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: b;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #27293a;
  padding: 10px 20px;
}

.content {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #1b242d;
}
</style>
