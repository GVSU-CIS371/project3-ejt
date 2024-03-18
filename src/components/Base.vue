<template>
  <div class="baseBeverage" :style="{'backgroundColor': baseColor}"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type BaseBeverage = {
  name: string;
  color: string;
};
const Bases: BaseBeverage[] = [
  {
    name: "Black Tea",
    color: "#8B4513",
  },
  {
    name: "Green Tea",
    color: "#C8E6C9",
  },
  {
    name: "Coffee",
    color: "#6F4E37",
  },
];

const emit = defineEmits(['updateColor'])
const baseColor = computed(() => {
  const baseFinder = Bases.find(base => base.name === props.name);

  if (baseFinder){
    emit('updateColor', baseFinder.color)
    return baseFinder.color;
  } else {
    return "#6F4E37";
  }
});

const props = defineProps({
  name: String,
});



</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>