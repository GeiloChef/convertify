<template>
  <div class="flex flex-col gap-4 px-36">
    <div class="flex flex-col gap-4 mt-10 text-center">
      <h1 class="text-4xl text-primary">{{ $t('convertify') }}</h1>
      <h2 class="text-xl">{{ $t('best-way-to-convert', {from: fromUnit.name, to: toUnit.name}) }}</h2>
    </div>

    <Card>
      <template #content>
        <div class="flex flex-row gap-8 justify-center items-center">
          <div class="flex-auto">
            <label for="valueFrom" class="font-bold block mb-2">
              {{ fromUnit.name }}
            </label>

            <InputGroup>
              <InputNumber
                  v-model="valueFrom"
                  inputId="valueFrom"
                  inputClass="text-right"
                  size="large"
                  mode="decimal"
                  :minFractionDigits="0"
                  :maxFractionDigits="12"
                  fluid
                  @input="onInputFrom($event.value)" />
              <InputGroupAddon>
                <Select
                    v-model="fromUnit"
                    :options="selectableFromUnitOptions"
                    class="border-0"
                    optionLabel="name"
                    @change="onChangeSelectedFromUnit($event.value)" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <Button
              class="mt-8"
              severity="secondary"
              @click="switchConversion">
            <Icon
                icon="right-left"
                size="2xl" />
          </Button>

          <div class="flex-auto">
            <label for="valueTo" class="font-bold block mb-2">
              {{ toUnit.name }}
            </label>
            <InputGroup>
              <InputNumber
                  v-model="valueTo"
                  inputId="valueTo"
                  inputClass="text-right"
                  size="large"
                  mode="decimal"
                  :minFractionDigits="0"
                  :maxFractionDigits="12"
                  fluid
                  @input="onInputTo($event.value)" />
              <InputGroupAddon>
                <Select
                    v-model="toUnit"
                    :options="selectableToUnitOptions"
                    class="border-0"
                    optionLabel="name"
                    @change="onChangeSelectedToUnit($event.value)" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {useRoute} from "nuxt/app";
import {UnitDataModel, UnitGroup, UnitType} from "../../../models/Unit.Models";
import {Unit} from "../../../models/Unit.Class";


const route = useRoute();
const router = useRouter();

const unitStore = useUnitStore();

const valueFrom = ref(0);
const valueTo = ref(0);

const units = ref<UnitDataModel>(createUnitDataModel());

const unitType = computed((): UnitType => {
  return route.params.type as UnitType;
});

const unitsForCurrentType = computed((): UnitGroup[] => {
  return units.value[unitType.value];
})

const fromUnit = computed((): Unit => {
  return unitsForCurrentType.value
      .flatMap(group => group.items) // Flatten all units into a single array
      .find(unit => unit.id === route.params.from);
});

const toUnit = computed((): Unit => {
  return unitsForCurrentType.value
      .flatMap(group => group.items) // Flatten all units into a single array
      .find(unit => unit.id === route.params.to);
})

const selectableFromUnitOptions = computed(() => {
  return unitsForCurrentType.value
      .map(group => ({
        ...group, // Keep the original group properties
        items: group.items.filter((unit: Unit) => unit.id !== toUnit.value?.id) // Filter units within the group
      }))
      .filter(group => group.items.length > 0); // Remove empty groups
});

const selectableToUnitOptions = computed(() => {
  return unitsForCurrentType.value
      .map(group => ({
        ...group,
        items: group.items.filter((unit: Unit) => unit.id !== fromUnit.value?.id)
      }))
      .filter(group => group.items.length > 0);
});

const onInputFrom = (value: number): void => {
  valueTo.value = fromUnit.value.convert(value, toUnit.value)
}

const onInputTo = (value: number): void => {
  valueFrom.value = toUnit.value.convert(value, fromUnit.value)
}
const onChangeSelectedToUnit = (newSelectedUnit: Unit): void => {
  if (route.params.to !== newSelectedUnit.id) {
    router.push(`/convert/${fromUnit.value.id}-to-${newSelectedUnit.id}?toValue=${valueTo.value}`);
  }
}
const onChangeSelectedFromUnit = (newSelectedUnit: Unit): void => {
  if (route.params.from !== newSelectedUnit.id) {
    router.push(`/convert/${newSelectedUnit.id}-to-${route.params.to}?fromValue=${valueFrom.value}`);
  }
}

const switchConversion = (): void => {
  router.push(`/convert/${route.params.to}-to-${route.params.from}?fromValue=${valueTo.value}`);
}

if (watchEffect) {
  watchEffect(() => {
    console.log(route.query);
    console.log(route);
    if (route.query.fromValue) {
      valueFrom.value = route.query.fromValue;
      onInputFrom(route.query.fromValue as Number);
    }

    if (route.query.toValue) {
      valueTo.value = route.query.toValue;
      onInputTo(route.query.toValue as Number);
    }
  })
}
</script>