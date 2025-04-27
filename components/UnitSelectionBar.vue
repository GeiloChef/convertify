<template>
  <div class="fixed h-16 bottom-0 w-screen -ml-2 sm:-ml-6 xl:-ml-32 bg-primary bg-green-500 flex justify-around items-center px-4 md:px-4 xl:px-32 select-none">
    <div class="flex flex-row justify-around items-center gap-8 h-full">
      <span class="small-text">Convert from</span>

      <div
          v-if="fromUnit"
          class="flex flex-row gap-2 justify-center items-center">
        <span class="unit-text hidden md:block">
          {{ $t(fromUnit.name) }}
        </span>
        <span class="unit-text block md:hidden">
          {{ $t(fromUnit.symbol) }}
        </span>
        <Icon
            class="cursor-pointer hover:text-red-500"
            size="sm"
            icon="trash"
            @click="removeFromUnit"/>
      </div>
      <span v-else class="unit-not-selected-text">
        {{ $t('select-unit') }}
      </span>

      <span class="small-text">to</span>

      <div
          v-if="toUnit"
          class="flex flex-row gap-2 justify-center items-center">
        <span class="unit-text hidden md:block">

          {{ $t(toUnit.name) }}
        </span>
        <span class="unit-text block md:hidden">
          {{ $t(toUnit.symbol) }}
        </span>
        <Icon
            class="cursor-pointer hover:text-red-500"
            size="sm"
            icon="trash"
            @click="removeToUnit"/>
      </div>
      <span v-else class="unit-not-selected-text">
        {{ $t('select-unit') }}
      </span>

      <Button
        variant="text"
        severity="contrast"
        :disabled="!hasBothUnitsSelected"
        @click="onClickStartConverting">
        <span>
        {{ $t('start-now') }}
        </span>
        <Icon icon="arrow-right" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import {Unit} from "@/models/Unit.Class";
import {navigateToConverterPage} from "../utils/Routing.Utils";

const props = defineProps({
  fromUnit: {
    type: Object as PropType<Unit>,
    required: false,
    default: undefined
  },
  toUnit: {
    type: Object as PropType<Unit>,
    required: false,
    default: undefined
  },
});

const {fromUnit, toUnit} = toRefs(props);

const hasAtLeastOneUnitSelected = computed((): boolean => {
  return !!fromUnit?.value || !!toUnit?.value;
})

const hasBothUnitsSelected = computed((): boolean => {
  return !!fromUnit?.value && !!toUnit?.value;
})

const onClickStartConverting = (): void => {
  if (!hasBothUnitsSelected.value) return;

  navigateToConverterPage({
    fromUnit: fromUnit.value.id,
    toUnit: toUnit.value.id,
    unitType: fromUnit.value.type,
  })
}

const emit = defineEmits<{
  (e: 'removeFromUnit'): void;
  (e: 'removeToUnit'): void;
}>();

const removeFromUnit = (): void => {
  emit("removeFromUnit");
}

const removeToUnit = (): void => {
  emit("removeToUnit");
}


</script>

<style scoped lang="scss">

.small-text {
  @apply text-sm pt-0.5
}

.unit-text {
  @apply text-xl font-semibold italic
}

.unit-not-selected-text {
  @apply text-xl italic opacity-70
}

</style>
