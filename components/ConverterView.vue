<template>
  <div class="flex flex-col gap-4 px-36">
    <h1>{{ $t('convertify') }}</h1>
    <h2>{{ $t('best-way-to-convert') }}</h2>

    <Card>
      <template #content>
        <div class="flex flex-row gap-8 justify-center items-center">
          <div class="flex-auto">
            <label for="valueFrom" class="font-bold block mb-2">
              {{ fromUnit.name }}
            </label>
            <InputNumber
                v-model="valueFrom"
                inputId="valueFrom"
                fluid
                @input="onInputFrom($event.value)" />
          </div>

          <Icon icon="right-left" size="2xl" class="mt-7"></Icon>

          <div class="flex-auto">
            <label for="valueTo" class="font-bold block mb-2">
              {{ toUnit.name }}
            </label>
            <InputNumber
                v-model="valueTo"
                inputId="valueTo"
                fluid
                @input="onInputTo($event.value)" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {useRoute} from "nuxt/app";
import {UnitId} from "../models/Unit.Models";
import {createUnitDataModel, useUnitStore} from "../.nuxt/imports";
import {Unit} from "../models/Unit.Class";


const route = useRoute();
const router = useRouter();

const unitStore = useUnitStore();

const valueFrom = ref(0);
const valueTo = ref(0);

const test = 'test';

const units = ref(createUnitDataModel());

const fromUnit = computed((): Unit => {
  return units.value.find(unit => unit.id === UnitId.Meter)
})

const toUnit = computed((): Unit => {
  return units.value.find(unit => unit.id === UnitId.KiloMeter)
})

const onInputFrom = (value: number): void => {
  valueTo.value = fromUnit.value.convert(value, toUnit.value)
}

const onInputTo = (value: number): void => {
  valueFrom.value = toUnit.value.convert(value, fromUnit.value)
}

if (onMounted) {
  onMounted(() => {
    if (!route.query.from || !route.query.to) {
      router.replace({query: {from: UnitId.Meter, to: UnitId.KiloMeter}});
    }
  });
}
</script>