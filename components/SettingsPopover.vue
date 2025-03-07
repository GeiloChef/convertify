<template>
  <Popover ref="SettingsPopoverRef">
    <div class="flex items-center gap-2">
      <Icon icon="cog"
            size="lg" />
      <h3>{{ $t('setting', 2) }}</h3>
    </div>
    <Divider />


    <div class="flex flex-col gap-2">
      <h4 class="pb-2">
        {{ $t('conversion-settings') }}
      </h4>

      <div class="settings-row">
        <div class="flex flex-crow gap-2">
          <span>
            {{ $t('always-keep-from-value') }}
          </span>

          <div v-tooltip.left="$t('always-keep-from-value-tooltip')">
            <Icon icon="circle-question" />
          </div>
        </div>

        <ToggleSwitch v-model="conversionSettings.alwaysKeepFromValue" />
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">

const SettingsPopoverRef = ref();

const SettingsStore = useSettingsStore();
const { conversionSettings } = storeToRefs(SettingsStore);

const toggle = (event: Event) => {
  if (SettingsPopoverRef.value) {
    SettingsPopoverRef.value.toggle(event);
  }
}

defineExpose({
  toggle
});
</script>

<style scoped>
.settings-row {
  @apply flex flex-row justify-between items-center gap-4 text-sm font-semibold italic;
}
</style>