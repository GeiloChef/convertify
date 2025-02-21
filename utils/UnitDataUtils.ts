import {Unit} from "../models/Unit.Class";
import {UnitDataModel, UnitId, UnitType} from "../models/Units.Models";

export const getLengthUnits = (): Unit[] => {
  if (useI18n) {
    const { t } = useI18n();
    return [
      new Unit(UnitId.Meter, t('unit.meter'), t('symbol.meter'), UnitType.Length, 1),
      new Unit(UnitId.KiloMeter, t('unit.kilo-meter'), t('symbol.kilo-meter'), UnitType.Length, 1000),
    ]
  } else {
    return []
  }
}

export const createUnitDataModel = (): UnitDataModel => {
  return {
    length: getLengthUnits()
  }
}