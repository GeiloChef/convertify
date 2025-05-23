<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 mt-10 text-center">
      <h1>
        {{ $t('convertify') }}
      </h1>
      <h2 class="text-lg md:text-2xl px-2">
        {{ $t('best-way-to-convert', {from: $t(fromUnit.name), to: $t(toUnit.name)}) }}
      </h2>
    </div>
    <Card>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center">
            <UnitConverterInput
              v-model:input-value="valueFrom"
              v-model:selected-unit="fromUnit"
              input-id="fromValue"
              :selectableUnitOptions="selectableFromUnitOptions"
              @update:selectedUnit="onChangeSelectedFromUnit"
              @update:inputValue="onInputFrom"/>

            <Button
              class="mt-8"
              severity="secondary"
              @click="switchConversion">
              <Icon
                icon="right-left"
                size="2xl" />
            </Button>

            <UnitConverterInput
              v-model:input-value="valueTo"
              v-model:selected-unit="toUnit"
              input-id="toValue"
              :selectableUnitOptions="selectableToUnitOptions"
              @update:selectedUnit="onChangeSelectedToUnit"
              @update:inputValue="onInputTo"/>
          </div>
          <UnitDetailTabs :units="[fromUnit, toUnit]" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {UnitDataModel, UnitGroup, UnitType} from "@/models/Unit.Models";
import {Unit} from "@/models/Unit.Class";
import {navigateToConverterPage} from "@/utils/Routing.Utils";
import {ConverterNavigationValueType} from "@/models/Routing.Models";


const route = useRoute();
const router = useRouter();

const SettingsStore = useSettingsStore();
const { conversionSettings } = storeToRefs(SettingsStore);


const valueFrom = ref<number>(0);
const valueTo = ref<number>(0);

const unitData = ref<UnitDataModel>(createUnitDataModel());

const unitType = computed((): UnitType => {
  return route.params.type as UnitType;
});

const unitsForCurrentType = computed((): UnitGroup[] => {
  return unitData.value[unitType.value].unitGroups;
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
    navigateToConverterPage({
      fromUnit: route.params.from,
      toUnit: newSelectedUnit.id,
      unitType: fromUnit.value.type,
      valueType: conversionSettings.value.alwaysKeepFromValue ? ConverterNavigationValueType.FromValue : ConverterNavigationValueType.ToValue,
      preSetValue: conversionSettings.value.alwaysKeepFromValue ? valueFrom.value : valueTo.value
    });
  }
}
const onChangeSelectedFromUnit = (newSelectedUnit: Unit): void => {
  if (route.params.from !== newSelectedUnit.id) {
    navigateToConverterPage({
      fromUnit: newSelectedUnit.id,
      toUnit: route.params.to,
      unitType: fromUnit.value.type,
      valueType: ConverterNavigationValueType.FromValue,
      preSetValue: valueFrom.value
    });
  }
}

const switchConversion = (): void => {
  navigateToConverterPage({
    fromUnit: route.params.to,
    toUnit: route.params.from,
    unitType: fromUnit.value.type,
    valueType: ConverterNavigationValueType.FromValue,
    preSetValue: valueTo.value
  });
}

if (watchEffect) {
  watchEffect(() => {
    if (route.query.fromValue) {
      valueFrom.value = route.query.fromValue;
      onInputFrom(route.query.fromValue as number);
    }

    if (route.query.toValue) {
      valueTo.value = route.query.toValue;
      onInputTo(route.query.toValue as number);
    }
  })
}
</script>