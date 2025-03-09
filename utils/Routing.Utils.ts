import {ConverterNavigationValueType, ConverterPageNavigationOptions} from "@/models/Routing.Models";
import {UnitType} from "@/models/Unit.Models";

export const navigateToConverterPage = (options: ConverterPageNavigationOptions): void => {
  const router = useRouter();
  const localePath = useLocalePath();
  const valueParam = getValueParam(options);

  router.push(localePath(`/convert/${options.unitType}/${options.fromUnit}-to-${options.toUnit}?${valueParam}`));
}

const getValueParam = (options: ConverterPageNavigationOptions): string => {
  if (!options.valueType || !options.preSetValue) {
    return '';
  }

  const valueTypeString = options.valueType === ConverterNavigationValueType.FromValue ? 'fromValue' : 'toValue';

  return `${valueTypeString}=${options.preSetValue}`;
}

export const navigateToTypePage = (type: UnitType): void => {
  const router = useRouter();

  router.push(`/convert/${type}`);
}

