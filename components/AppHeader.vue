<template>
  <Menubar :model="unitGroupItems"
           class="flex justify-center items-center">
    <template #item="{ item, props }">
      <div class="cursor-pointer px-2 h-6"
           v-bind="props">
        <Icon v-if="item.icon"
              :icon="item.icon"
              class="mr-2" />
        <span :class="{
          'text-green-500': isItemSelected(item.id),
        }">
          {{ $t(item.label) }}
        </span>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { MenuItem } from "primevue/menuitem";
import { UnitType } from "@/models/Unit.Models";

const route = useRoute();

const unitDataModel = ref(createUnitDataModel());

const unitGroupItems = computed((): MenuItem[] => {
  const unitGroups = Object.values(unitDataModel.value);

  return unitGroups.map((unitGroup) => {
    return {
      id: unitGroup.id,
      label: unitGroup.label,
      command: () => {
        navigateToTypePage(unitGroup.id);
      }
    }
  })
});

const currentSelectedType = computed((): UnitType | null => {
  return route.params.type || null;
})

const isItemSelected = (itemId: UnitType): boolean => {
  return currentSelectedType.value && currentSelectedType.value === itemId;
}
</script>