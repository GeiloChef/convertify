<template>
  <Menubar
    :model="unitGroupItems"
    class="flex justify-center items-center menubar">
    <template #item="{ item, props }">
      <div
        class="cursor-pointer px-2 h-10 flex items-center justify-center"
        v-bind="props">
        <Icon
          v-if="item.icon"
          :icon="item.icon"
          class="mr-2" />
        <span :class="{ 'text-green-500': isItemSelected(item.id) }">
          {{ $t(item.label) }}
        </span>
      </div>
    </template>

    <template #end>
      <Button
        severity="secondary"
        @click="toggleSettingsPopover">
        <Icon icon="cog"/>
      </Button>
    </template>
  </Menubar>

  <SettingsPopover ref="SettingsPopoverRef" />
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

const SettingsPopoverRef = ref();

const toggleSettingsPopover = (event: Event): void => {
  if (SettingsPopoverRef.value) {
    SettingsPopoverRef.value.toggle(event)
  }
}
</script>

<style lang="scss" scoped>
.menubar {
  font-size: 1.2rem;
}
</style>