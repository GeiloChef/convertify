<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <h1 class="test">
      {{ $t('convert-different-units-of-type') }}
    </h1>
    <h2>
      {{ $t('select-two-units-to-start') }}
    </h2>
    <div v-if="unitGroupsForCurrentUnitType.length">
      <div v-for="(group, index) in unitGroupsForCurrentUnitType"
           :key="group.label">
        <h3>{{ $t(group.label) }}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
          <UnitSelectionTile
            v-for="unit in group.items"
            :key="unit.id"
            :unit="unit"
            :selected="isUnitSelected(unit)"
            @click="toggleSelectUnit(unit)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import UnitSelectionTile from "@/components/UnitSelectionTile.vue";
  import {UnitDataModel, UnitGroup} from "@/models/Unit.Models";
  import {createUnitDataModel} from "@/utils/UnitData.Utils";


  const route = useRoute();

  const unitDataModel = ref<UnitDataModel>(createUnitDataModel());

  const selectedUnits = ref<Unit[]>([]);

  const unitType = computed((): string => {
    return route.params.type
  })

  const unitGroupsForCurrentUnitType = computed((): UnitGroup[] => {
    return unitDataModel.value[unitType.value];
  })

  const toggleSelectUnit = (unit: Unit) => {
    if (!selectedUnits.value.includes(unit.id)) {
      selectedUnits.value.push(unit.id);
    } else {
      selectedUnits.value = selectedUnits.value.filter((existingUnit: string) => existingUnit !== unit.id);
    }
  }

  const isUnitSelected = (unit: Unit) => {
    return selectedUnits.value.includes(unit.id);
  }

  watchEffect(() => {
    if (selectedUnits.value.length >= 2) {
      navigateToConverterPage({
        fromUnit: selectedUnits.value[0],
        toUnit: selectedUnits.value[1],
        unitType: unitType.value
      })
    }
  })
</script>