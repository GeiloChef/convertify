/*
* imports in this file can't be imported with an alias because this file is used for pre-generating
* Routes inside the nuxt config.
* */

import {createUnitDataModel} from "../utils/UnitData.Utils";

const locales = ["en"];

export const getRoutesForPreRendering = (): string[] => {
  const unitDataModel = createUnitDataModel();
  const routesToGenerate: string[] = [];

  if (!unitDataModel || typeof unitDataModel !== "object") {
    console.warn("Invalid unitDataModel structure");
    return [];
  }
  locales.flatMap(locale => {


    /**
     * This generates the main entry routes for the locales like '/en' or '/es'
     */
    const routeForLocale = `/${locale}`;
    routesToGenerate.push(routeForLocale);

    Object.entries(unitDataModel).flatMap(([type, unitTypeObject]) => {
      if (!Array.isArray(unitTypeObject.unitGroups)) {
        console.warn(`Skipping invalid unit type: ${type}`);
        return [];
      }

      /**
       * This generates the main routes for each type like
       *  - '/en/convert/weight'
       *  - '/en/convert/length'
       *
       *  It automatically also generates it for each locale
       */
      const routeForType = `/${locale}/convert/${type}`;
      routesToGenerate.push(routeForType);

      unitTypeObject.unitGroups.flatMap(group => {
        if (!Array.isArray(group.items)) {
          console.warn(`Skipping invalid unit group: ${group.label}`);
          return [];
        }

        group.items.flatMap(from => {
          group.items
            .filter(to => from.id !== to.id)
            .map(to => {
              /**
               * This generates the route for each conversion, also for every single locale like:
               * 'en/convert/length/kilometer-to-meter'
               * 'es/convert/length/kilometer-to-meter'
               * 'en/convert/length/meter-to-micrometer'
               */
              routesToGenerate.push(`/${locale}/convert/${type}/${from.id}-to-${to.id}`);
            });
        });

      });
    });
  });

  return routesToGenerate;
}