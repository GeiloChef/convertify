<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4">
      <h1>
        {{ $t('convertify') }}
      </h1>

      <h2>
        {{ $t('select-the-group-you-want-to-convert') }}
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 items-center justify-center">
      <div
        v-for="unitGroup in unitGroups"
        :key="unitGroup.id"
        class="flex flex-row gap-2 justify-center items-center rounded-md border-gray-400 hover:border-green-500 hover:font-bold border-2 p-4 cursor-pointer"
        @click="navigateToTypePage(unitGroup.id)">
        <span>
          {{ $t(unitGroup.label) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createUnitDataModel } from "@/utils/UnitData.Utils.js";
import {UnitGroup} from "@/models/Unit.Models";

const unitDataModel = ref(createUnitDataModel());

const unitGroups = computed((): UnitGroup[] => {
  return Object.values(unitDataModel.value)
});
</script>