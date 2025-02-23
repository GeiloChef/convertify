import {Unit} from "@/models/Unit.Class";
import {UnitType} from "@/models/Unit.Models";

export enum ConverterNavigationValueType {
  FromValue = "fromValue",
  ToValue = "toValue",
}

export interface ConverterPageNavigationOptions {
  toUnit: string,
  fromUnit: string,
  unitType: UnitType,
  preSetValue?: number,
  valueType?: ConverterNavigationValueType,
}