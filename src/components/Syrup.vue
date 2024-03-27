<template>
  <div class="syrup" :style="{background: syrupColor}"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Syrup = {
  name: string;
  color: string;
};
const Syrups: Syrup[] = [
  {
    name: "Vanilla",
    color: "repeating-linear-gradient( 45deg, white, white 10px, rgba(225, 207, 149, 1) 10px, rgba(225, 207, 149, 1) 20px)",
  },
  {
    name: "Caramel",
    color: "#DAA520",
  },
  {
    name: "Hazelnut",
    color: "#6B4423",
  },
];

const props = defineProps({
  name: String,
  color: String
})

const syrupColor = computed(() => {
  const syrupFinder = Syrups.find(syrup => syrup.name === props.name);

  if (syrupFinder){
    return syrupFinder.color;
  } else {
    return props.color;
  }
});
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
.vanilla {
  transform: translateY(400%);
  position: relative;
  background: repeating-linear-gradient(
    45deg,
    white,
    white 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
