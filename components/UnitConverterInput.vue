<template>
  <div class="flex-auto">
    <label :for="inputId"
           class="font-bold block mb-2">
      {{ selectedUnit.name }}
    </label>
    <InputGroup>
      <InputNumber
        :modelValue="inputValue"
        :inputId="inputId"
        inputClass="text-right"
        size="large"
        mode="decimal"
        :minFractionDigits="0"
        :maxFractionDigits="12"
        fluid
        @input="onInputValueChange($event.value as number)" />
      <InputGroupAddon>
        <Select
          :modelValue="selectedUnit"
          :options="selectableUnitOptions"
          class="border-0"
          optionLabel="name"
          optionGroupLabel="label"
          optionGroupChildren="items"
          @change="onSelectedUnitChange($event.value)">
          <template #optiongroup="slotProps">
            <div class="flex items-center">
              <span>{{ slotProps.option.label }}</span>
            </div>
          </template>
          <template #option="slotProps">
            <div class="flex items-center">
              <span class="pl-1">{{ slotProps.option.name }}</span>
            </div>
          </template>
        </Select>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>

<script setup lang="ts">
import {Unit} from "@/models/Unit.Class";
import {PropType, toRefs} from "vue";
import { UnitGroup } from "@/models/Unit.Models";

const emit = defineEmits<{
  (e: 'update:inputValue', value: number): void;
  (e: 'update:selectedUnit', value: Unit): void;
}>();

const props = defineProps({
  selectedUnit: {
    type: Object as PropType<Unit>,
    required: true
  },
  selectableUnitOptions: {
    type: Array as PropType<UnitGroup[]>,
    required: true
  },
  inputValue: {
    type: Number,
    required: true
  },
  inputId: {
    type: String,
    required: true
  }
});

const {inputId} = toRefs(props)

// Emit update events when input values change
const onInputValueChange = (value: number) => {
  emit('update:inputValue', value);
};

const onSelectedUnitChange = (value: Unit) => {
  emit('update:selectedUnit', value);
};
</script>
