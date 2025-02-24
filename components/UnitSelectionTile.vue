<template>
  <div
    class="flex flex-row gap-2 justify-center items-center rounded-md border-gray-400 hover:border-green-500 hover:font-bold border-2 p-4 cursor-pointer"
    :class="{'!border-green-500 !font-bold': selected}">
    <Icon
      v-show="selected"
      class="text-green-500"
      icon="circle-check" />
    <span>{{ unit.name }} ({{unit.symbol}})</span>
  </div>
</template>

<script setup lang="ts">

import {Unit} from "@/models/Unit.Class";
import {PropType} from "vue";

const props = defineProps({
  unit: {
    type: Object as PropType<Unit>,
    required: true
  },
  selected: {
    type: Boolean,
    required: true
  }
});

</script>