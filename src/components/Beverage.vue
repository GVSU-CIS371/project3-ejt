<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer :name="creamer"/>
      </template>
      <template v-slot:mid>
        <Syrup :name="syrup" :color="baseColor"/>
      </template>
      <template v-slot:bottom>
        <Base :name="beverage" @update-color="updateBaseColor"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { ref } from 'vue';

const baseColor = ref<string>('#6F4E37')

type Props = {
  isIced: boolean;
  creamer: string;
  syrup: string;
  beverage: string;
};

defineProps<Props>();

const updateBaseColor = (color: string) => {
  baseColor.value = color
}
</script>
