<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <h1 class="test">
      {{ $t('convert-different-units-of-type', {type: unitType}) }}
    </h1>
    <h2>
      {{ $t('select-two-units-to-start') }}
    </h2>

    <div>

      <InputGroup>
        <InputText
          v-model="unitSearchText"
          size="large"
          fluid />
        <InputGroupAddon>
          <Icon icon="magnifying-glass"/>
        </InputGroupAddon>
      </InputGroup>
    </div>


    <div v-if="filteredUnitGroups.length">
      <template v-for="(group, index) in filteredUnitGroups"
                :key="group.label">
        <div v-show="group.items.length">
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
      </template>
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
  const unitSearchText = ref('');

  const unitType = computed((): string => {
    return route.params.type
  })

  const unitGroupsForCurrentUnitType = computed((): UnitGroup[] => {
    return unitDataModel.value[unitType.value].unitGroups;
  })

  const filteredUnitGroups = computed((): UnitGroup[] => {
    if (unitSearchText.value.length) {
      return unitGroupsForCurrentUnitType.value.map((unitGroup) => {
        const unitGroupItems = unitGroup.items.filter((unit) => {
          return (
              unit.name.toLowerCase().includes(unitSearchText.value.toLowerCase())
          );
        });

        return {
          ...unitGroup,
          items: unitGroupItems
        };
      });
    } else {
      return unitGroupsForCurrentUnitType.value;
    }
  });

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