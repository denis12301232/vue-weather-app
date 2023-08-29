<script setup lang="ts">

</script>

<template>
  <div :class="[$style.container, 'flex', 'items-center']">
    <input :class="$style.input" type="text" />
    <div :class="$style.search">
      <img src="@/assets/images/search.svg" alt="" style="height: 30px; width: 30px" />
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  background-color: black;
  border-radius: 10px;
  height: 50px;

  & .input {
    background-color: transparent;
    width: 100%;
    color: var(--color-white);
    border: none;
    appearance: none;
    outline: none;
    margin-left: 10px;
  }

  & .search {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
