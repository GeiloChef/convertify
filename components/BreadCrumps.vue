<template>
  <Breadcrumb
    :home="home"
    :model="items">
    <template #item="{ item, props }">
      <router-link v-if="item.route"
                   v-slot="{ href, navigate }"
                   :to="item.route"
                   custom>
        <a :href="href"
           v-bind="props.action"
           @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary font-semibold">{{ item.label }}</span>
        </a>
      </router-link>
      <span
        v-else
        class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
    </template>
  </Breadcrumb>
</template>

<script setup lang="ts">
import {BreadcrumbItem} from "@redocly/config";

const {t} = useI18n();
const route = useRoute();

interface CustomBreadCrumbItem {
  label: string;
  route?: string;
}

const home = {
  label: t("home"),
  route: '/'
};

const items = computed((): CustomBreadCrumbItem[] => {
  let  breadCrumbItems: CustomBreadCrumbItem[] = [];

  if (route.params && route.params.type) {
    const typeLabel = t(`type.${route.params.type}`);

    breadCrumbItems.push({
      label: typeLabel,
      route: `/en/convert/${route.params.type}`
    });
  }

  if (route.params && route.params.from && route.params.to) {
    const fromLabel = t(`unit.${route.params.from}`);
    const toLabel = t(`unit.${route.params.to}`);
    const breadCrumbLabel = `${fromLabel} to ${toLabel}`;

    breadCrumbItems.push({
      label: breadCrumbLabel,
    });
  }

  return breadCrumbItems;
})
</script>