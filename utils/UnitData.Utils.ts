import { Unit } from "../models/Unit.Class";
import { UnitId, UnitType} from "../models/Unit.Models";

export const getLengthUnits = (): Unit[] => {
  if (useI18n) {
    const { t } = useI18n();
    return [
      new Unit(UnitId.Meter, t('unit.meter'), t('symbol.meter'), UnitType.Length, 1),
      new Unit(UnitId.KiloMeter, t('unit.kilometer'), t('symbol.kilometer'), UnitType.Length, 0.001),
      new Unit(UnitId.CentiMeter, t('unit.centimeter'), t('symbol.centimeter'), UnitType.Length, 100),
    ]
  } else {
    return []
  }
}

export const createUnitDataModel = (): Unit[] => {
  return getLengthUnits();
}