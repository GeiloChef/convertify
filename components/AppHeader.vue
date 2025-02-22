<template>
  <Menubar :model="items">
    <template #item="{ item, props }">
      <div class="cursor-pointer px-2" v-bind="props">
        <Icon v-if="item.icon" :icon="item.icon" class="mr-2" />
        <span>{{ item.label }}</span>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import {MenuItem} from "primevue/menuitem";

const items = ref<MenuItem[]>([
  {
    label: 'File',
    icon: 'cog',
    items: [
      {
        label: 'New',
        icon: 'cog',
      },
      {
        label: 'Print',
        icon: 'cog',
      }
    ]
  },
]);
</script>