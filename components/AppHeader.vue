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
    icon: 'pi pi-file',
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
  {
    label: 'Search',
    icon: 'pi pi-search',
  },
  {
    separator: true
  },
  {
    label: 'Sync',
    icon: 'pi pi-cloud',
    items: [
      {
        label: 'Import',
        icon: 'pi pi-cloud-download',
/*        command: () => {
          toast.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
        }*/
      },
      {
        label: 'Export',
        icon: 'pi pi-cloud-upload',
      }
    ]
  }
]);
</script>