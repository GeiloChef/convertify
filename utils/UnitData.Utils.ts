import { Unit } from "../models/Unit.Class";
import {UnitDataModel, UnitGroup, UnitId, UnitType} from "../models/Unit.Models";

export const getLengthUnits = (): UnitGroup[] => {
  if (useI18n) {
    const { t } = useI18n();
    const groups = [
      {
        label: t("group.metric"),
        code: "metric",
        items: [
          new Unit(UnitId.NanoMeter, t("unit.nanometer"), t("symbol.nanometer"), UnitType.Length, 1_000_000_000),
          new Unit(UnitId.MicroMeter, t("unit.micrometer"), t("symbol.micrometer"), UnitType.Length, 1_000_000),
          new Unit(UnitId.MilliMeter, t("unit.millimeter"), t("symbol.millimeter"), UnitType.Length, 1000),
          new Unit(UnitId.CentiMeter, t("unit.centimeter"), t("symbol.centimeter"), UnitType.Length, 100),
          new Unit(UnitId.DeciMeter, t("unit.decimeter"), t("symbol.decimeter"), UnitType.Length, 10),
          new Unit(UnitId.Meter, t("unit.meter"), t("symbol.meter"), UnitType.Length, 1),
          new Unit(UnitId.KiloMeter, t("unit.kilometer"), t("symbol.kilometer"), UnitType.Length, 0.001),
          new Unit(UnitId.HectoMeter, t("unit.hectometer"), t("symbol.hectometer"), UnitType.Length, 0.01),
          new Unit(UnitId.MegaMeter, t("unit.megameter"), t("symbol.megameter"), UnitType.Length, 0.000001),
          new Unit(UnitId.GigaMeter, t("unit.gigameter"), t("symbol.gigameter"), UnitType.Length, 0.000000001),
        ],
      },
      {
        label: t("group.imperial"),
        code: "imperial",
        items: [
          new Unit(UnitId.Inch, t("unit.inch"), t("symbol.inch"), UnitType.Length, 39.3701),
          new Unit(UnitId.Hand, t("unit.hand"), t("symbol.hand"), UnitType.Length, 9.84252),
          new Unit(UnitId.Foot, t("unit.foot"), t("symbol.foot"), UnitType.Length, 3.28084),
          new Unit(UnitId.Cubit, t("unit.cubit"), t("symbol.cubit"), UnitType.Length, 2.18723),
          new Unit(UnitId.Yard, t("unit.yard"), t("symbol.yard"), UnitType.Length, 1.09361),
          new Unit(UnitId.Smoot, t("unit.smoot"), t("symbol.smoot"), UnitType.Length, 0.587613),
          new Unit(UnitId.Fathom, t("unit.fathom"), t("symbol.fathom"), UnitType.Length, 0.546807),
          new Unit(UnitId.Link, t("unit.link"), t("symbol.link"), UnitType.Length, 0.201168),
          new Unit(UnitId.Rod, t("unit.rod"), t("symbol.rod"), UnitType.Length, 0.198838),
          new Unit(UnitId.Chain, t("unit.chain"), t("symbol.chain"), UnitType.Length, 0.0497097),
          new Unit(UnitId.Furlong, t("unit.furlong"), t("symbol.furlong"), UnitType.Length, 0.00497097),
          new Unit(UnitId.League, t("unit.league"), t("symbol.league"), UnitType.Length, 0.000207123),
          new Unit(UnitId.Mile, t("unit.mile"), t("symbol.mile"), UnitType.Length, 0.000621371),
        ],
      },
      {
        label: t("group.nautical"),
        code: "nautical",
        items: [
          new Unit(UnitId.NauticalMile, t("unit.nauticalmile"), t("symbol.nauticalmile"), UnitType.Length, 0.000539957),
        ],
      },
      {
        label: t("group.astronomical"),
        code: "astronomical",
        items: [
          new Unit(UnitId.LightYear, t("unit.lightyear"), t("symbol.lightyear"), UnitType.Length, 1.057e-16),
          new Unit(UnitId.Parsec, t("unit.parsec"), t("symbol.parsec"), UnitType.Length, 3.26156e-17),
          new Unit(UnitId.AstronomicalUnit, t("unit.astronomicalunit"), t("symbol.astronomicalunit"), UnitType.Length, 6.68459e-12),
          new Unit(UnitId.Kiloparsec, t("unit.kiloparsec"), t("symbol.kiloparsec"), UnitType.Length, 3.26156e-14),
          new Unit(UnitId.MegaParsec, t("unit.megaparsec"), t("symbol.megaparsec"), UnitType.Length, 3.26156e-20),
          new Unit(UnitId.SolarRadius, t("unit.solarradius"), t("symbol.solarradius"), UnitType.Length, 1.43785e-9),
          new Unit(UnitId.LunarDistance, t("unit.lunardistance"), t("symbol.lunardistance"), UnitType.Length, 2.60416e-9),
        ],
      },
      {
        label: t("group.quantum"),
        code: "quantum",
        items: [
          new Unit(UnitId.PlanckLength, t("unit.plancklength"), t("symbol.plancklength"), UnitType.Length, 6.187e+34),
        ],
      },
    ];

    groups.forEach(group => {
      group.items.sort((a, b) => a.conversionFactor - b.conversionFactor);
    });

    return groups;
  } else {
    return []
  }
}

export const createUnitDataModel = (): UnitDataModel => {
  return {
    [UnitType.Length]: getLengthUnits(),
  };
}