<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-3xl md:text-4xl text-center">
        {{ $t('convert-different-units-of-type', {type: translatedUnitType}) }}
      </h1>
      <h2 class="text-center text-xl md:text-2xl">
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
    </div>


    <div
      v-if="filteredUnitGroups.length"
      class="h-auto pb-16">
      <template v-for="(group, index) in filteredUnitGroups"
                :key="group.label">
        <div v-show="group.items.length">
          <Divider />
          <h3 class="pl-4">{{ $t(group.label) }}</h3>
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

  <UnitSelectionBar
    class="hidden md:block"
    :from-unit="fromUnit"
    :to-unit="toUnit"
    @remove-from-unit="removeFromUnit"
    @remove-to-unit="removeToUnit"/>
</template>

<script setup lang="ts">
  import UnitSelectionTile from "@/components/UnitSelectionTile.vue";
  import {type UnitDataModel, type UnitGroup, UnitType} from "@/models/Unit.Models";
  import {createUnitDataModel} from "@/utils/UnitData.Utils";
  import UnitSelectionBar from "@/components/UnitSelectionBar.vue";
  import {navigateToConverterPage} from "@/utils/Routing.Utils";

  const route = useRoute();
  const {t} = useI18n();

  const unitDataModel = ref<UnitDataModel>(createUnitDataModel());
  const fromUnit = ref<Unit | undefined>(undefined)
  const toUnit = ref<Unit | undefined>(undefined)
  const unitSearchText = ref('');

  const unitType = computed((): UnitType => {
    return route.params.type as UnitType
  })

  const translatedUnitType = computed((): string => {
    return t(route.params.type as string)
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
    if (isUnitSelected(unit)) {
     if (fromUnit.value === unit) {
       fromUnit.value = undefined;
     } else if (toUnit.value === unit) {
       toUnit.value = undefined;
     }

      return;
    }

    if (!fromUnit.value) {
      fromUnit.value = unit;
    } else if(!toUnit.value) {
      toUnit.value = unit;
    }

    const breakPointsThatWillBeRedirected = ['xs', 'sm', 'md'];

    if (fromUnit.value && toUnit.value && breakPointsThatWillBeRedirected.includes(checkBreakpoint())) {
      navigateToConverterPage({
        fromUnit: fromUnit.value.id,
        toUnit: toUnit.value.id,
        unitType: fromUnit.value.type,
      })
    }
  }

  const isUnitSelected = (unit: Unit) => {
    return fromUnit.value === unit || toUnit.value === unit;
  }

  const removeFromUnit = (): void => {
    fromUnit.value = undefined;
  }

  const removeToUnit = (): void => {
    toUnit.value = undefined;
  }
</script>