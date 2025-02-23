import {ConverterNavigationValueType, ConverterPageNavigationOptions} from "@/models/Routing.Models";

export const navigateToConverterPage = (options: ConverterPageNavigationOptions): void => {

  const router = useRouter();

  const valueParam = getValueParam(options);

  router.push(`/convert/${options.unitType}/${options.fromUnit}-to-${options.toUnit}?${valueParam}`);
}

const getValueParam = (options: ConverterPageNavigationOptions): string => {
  if (!options.valueType || !options.preSetValue) {
    return '';
  }

  const valueTypeString = options.valueType === ConverterNavigationValueType.FromValue ? 'fromValue' : 'toValue';

  return `${valueTypeString}=${options.preSetValue}`;
}