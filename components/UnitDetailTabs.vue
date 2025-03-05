<template>
  <Tabs :value="tabValue">
    <TabList>
      <template
        v-for="(entry, index) in unitData"
        :key="index">
        <Tab
          v-if="entry.description.length"
          :value="index">
          {{ $t(`unit.${entry.unit.id}`)}} ({{ $t(`symbol.${entry.unit.id}`) }})
        </Tab>

      </template>
    </TabList>
    <TabPanels>
      <TabPanel
        v-for="(entry, index) in unitData"
        :value="index">
        <MarkdownRenderer
          :value="entry.description"
          :key="entry.id"
          tag="article" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Unit} from "@/models/Unit.Class";
import {UnitDataDescriptionData} from "@/models/Unit.Models";

const props = defineProps({
  units: {
    type: Array as PropType<Unit[]>,
    required: true
  },
});

const unitData = ref<UnitDataDescriptionData[]>([]);
const tabValue = ref(0);

/**
 * This method goes through the fetched unit details and checked which of the units has details to find which tab should be
 * preselected by default
 */
const setTabValue = (): void => {
  unitData.value.find((entry, index) => {
    if (entry.description.length) {
      tabValue.value = index;
    }

    return !!entry.description.length;
  });
}

if (process.client) {
  const markdownFiles = import.meta.glob('@/i18n/en/unit-details/*.md', { eager: false, as: "raw" });

  const fetchMarkdown = async () => {
    const unitDataArray: UnitDataDescriptionData[] = [];

    for (const unit of props.units) {
      const filePath = `/i18n/en/unit-details/${unit.id}.md`;

      if (filePath in markdownFiles) {
        const fileContent = await markdownFiles[filePath]();
        unitDataArray.push({
          unit: unit,
          description: fileContent as string
        });
      } else {
        unitDataArray.push({
          unit: unit,
          description: ''
        });
      }
    }

    unitData.value = unitDataArray;
  };

  fetchMarkdown();
}

watch(
    () => unitData.value,
    (newValue: UnitDataDescriptionData[]) => {
      if (newValue && Array.isArray(newValue) && newValue.length) {
        setTabValue();
      }
    }
);

</script>

<style scoped>

</style>