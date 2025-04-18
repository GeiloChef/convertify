<template>
  <div class="card">
    <DataTable
      :value="tableData"
      paginator
      :rows="10"
      tableStyle="min-width: 50rem">
      <Column
        field="type"
        sortable
        header="Type">
        <template #body="slotProps">
          {{ $t(slotProps.data.type) }}
        </template>
      </Column>
      <Column
        field="groupLabel"
        sortable
        header="Group">
        <template #body="slotProps">
          {{ $t(slotProps.data.groupLabel) }}
        </template>
      </Column>
      <Column
        field="name"
        sortable
        header="Name">
        <template #body="slotProps">
          {{ $t(slotProps.data.name) }}
        </template>
      </Column>
      <Column
        field="symbol"
        header="Symbol">
        <template #body="slotProps">
          {{ $t(slotProps.data.symbol) }}
        </template>
      </Column>
      <Column
        sortable
        field="hasDescription"
        header="Description">
        <template #body="slotProps">
          <Icon
            :icon="slotProps.data.hasDescription ? 'circle-check' : 'circle-xmark'"
            :class="slotProps.data.hasDescription ? 'text-green-500' : 'text-red-600'" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import {type UnitDataModel, type UnitTypeObject} from "@/models/Unit.Models";
import {Unit} from "@/models/Unit.Class";
import {createUnitDataModel} from "@/utils/UnitData.Utils";

export interface UnitWithGroupLabel extends Omit<Unit, 'convert'> {
  groupLabel: string;
  hasDescription: boolean;
}

const dataModel: UnitDataModel = createUnitDataModel();


const getAllUnitsWithGroup = (): UnitWithGroupLabel[] => {
  return Object.values(dataModel).flatMap((unitTypeObject) =>
      unitTypeObject.unitGroups.flatMap((group) =>
          group.items.map((unit) => ({
            ...unit,
            groupLabel: group.label,
            hasDescription: hasUnitDescription(unit),
          }))
      )
  );
};

const tableData = computed((): UnitWithGroupLabel[] => {
  return getAllUnitsWithGroup();
});

const markdownFiles = ref<string[]>([]);

onMounted(() => {
  if (process.client) {
    const foundFiles = import.meta.glob(`@/i18n/en/markdown/!*!/!*.md`, { eager: false, as: 'raw' });

    const setFiles = (): void => {
      markdownFiles.value = Object.keys(foundFiles).flatMap(filePath => filePath);
    }

    setFiles();
    console.log(markdownFiles.value)
  }
})

const hasUnitDescription = (unit: Unit): boolean => {
  return markdownFiles.value.includes(`/i18n/en/markdown/${unit.type}/${unit.id}.md`);
}
</script>