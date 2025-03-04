<template>
  <Tabs :value="0">
    <TabList>
      <Tab
        v-for="(unit, index) in units"
        :value="index">
        {{ $t(`unit.${unit.id}`)}} ({{ $t(`symbol.${unit.id}`) }})
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel
        v-for="(unitDescription, index) in unitData"
        :value="index">
        <MarkdownRenderer
          :value="unitDescription"
          :key="unitDescription"
          tag="article" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Unit} from "@/models/Unit.Class";

const props = defineProps({
  units: {
    type: Array as PropType<Unit[]>,
    required: true
  },
});

const unitData = ref<string[]>();

// Lazy load markdown on the client (CSR)
if (process.client) {
  const markdownFiles = import.meta.glob('@/i18n/en/unit-details/*.md', { eager: false, as: "raw" });

  const fetchMarkdown = async () => {
    const unit1File = await markdownFiles[`/i18n/en/unit-details/${props.units[0].id}.md`]();
    const unit2File = await markdownFiles[`/i18n/en/unit-details/${props.units[1].id}.md`]();
    unitData.value = [unit1File, unit2File];
  };

  fetchMarkdown();
}

/*
const markdownContent = ref(preloadedContent.value);

const { data: preloadedContent } = await useAsyncData(
    "unit-markdown",
    async () => {
      // Read markdown from server-side at build time
      const unitData1 = await import(`@/i18n/en/unit-details/${route.params.unit1}.md?raw`);
      const unitData2 = await import(`/i18n/en/unit-details/${route.params.unit2}.md?raw`);
      return {
        unitData1: unitData1,
        unitData2: unitData2,
      };
    }
);*/

/*useHead({
  title: "Unit conversion",
  meta: [
    {
      hid: "description",
      name: "description",
      content: markdownContent.value?.substring(0, 150) || "Loading...",
    },
  ],
});*/

</script>

<style scoped>

</style>