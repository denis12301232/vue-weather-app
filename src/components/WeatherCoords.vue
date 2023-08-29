<template>
  <div :class="$style.main">
    <div :class="$style.icon">
      <img src="@/assets/images/compass.png" alt="" style="height: 60px" />
    </div>
    <div style="grid-area: b">
      <h3>Humiditi 60</h3>
      <div>Humiditi .........</div>
    </div>
    <div style="grid-area: c">ff</div>
  </div>
</template>

<style lang="scss" module>
.main {
  grid-area: c;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #27293a;
  display: grid;
  grid-template-areas:
    'a b b b b b b'
    'a c c c c c c';
  padding: 10px;
  gap: 10px;
}

.icon {
  grid-row: 1/3;
  padding: 60px 0;
  grid-area: a;
  justify-self: center;
}
</style>
