import {ConversionSettings} from "@/models/Settings.Models";

export const useSettingsStore = defineStore('settingsStore', () => {
  const conversionSettings = ref<ConversionSettings>({
    alwaysKeepFromValue: false,
  })

  return {
    conversionSettings
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    pick: ['conversionSettings'],
  }
});