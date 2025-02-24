/*
* Links in this file can't be imported with an alias because this file is used for pre-generating
* Routes inside the nuxt config.
* */

import { Unit } from "../models/Unit.Class";
import {UnitDataModel, UnitGroup, UnitId, UnitType} from "../models/Unit.Models";

export const getLengthUnits = (): UnitGroup[] => {
    const groups = [
      {
        label: "group.metric",
        code: "metric",
        items: [
          new Unit(UnitId.NanoMeter, "unit.nanometer", "symbol.nanometer", UnitType.Length, 1_000_000_000),
          new Unit(UnitId.MicroMeter, "unit.micrometer", "symbol.micrometer", UnitType.Length, 1_000_000),
          new Unit(UnitId.MilliMeter, "unit.millimeter", "symbol.millimeter", UnitType.Length, 1000),
          new Unit(UnitId.CentiMeter, "unit.centimeter", "symbol.centimeter", UnitType.Length, 100),
          new Unit(UnitId.DeciMeter, "unit.decimeter", "symbol.decimeter", UnitType.Length, 10),
          new Unit(UnitId.Meter, "unit.meter", "symbol.meter", UnitType.Length, 1),
          new Unit(UnitId.KiloMeter, "unit.kilometer", "symbol.kilometer", UnitType.Length, 0.001),
          new Unit(UnitId.HectoMeter, "unit.hectometer", "symbol.hectometer", UnitType.Length, 0.01),
          new Unit(UnitId.MegaMeter, "unit.megameter", "symbol.megameter", UnitType.Length, 0.000001),
          new Unit(UnitId.GigaMeter, "unit.gigameter", "symbol.gigameter", UnitType.Length, 0.000000001),
        ],
      },
      {
        label: "group.imperial",
        code: "imperial",
        items: [
          new Unit(UnitId.Inch, "unit.inch", "symbol.inch", UnitType.Length, 39.3701),
          new Unit(UnitId.Hand, "unit.hand", "symbol.hand", UnitType.Length, 9.84252),
          new Unit(UnitId.Foot, "unit.foot", "symbol.foot", UnitType.Length, 3.28084),
          new Unit(UnitId.Cubit, "unit.cubit", "symbol.cubit", UnitType.Length, 2.18723),
          new Unit(UnitId.Yard, "unit.yard", "symbol.yard", UnitType.Length, 1.09361),
          new Unit(UnitId.Smoot, "unit.smoot", "symbol.smoot", UnitType.Length, 0.587613),
          new Unit(UnitId.Fathom, "unit.fathom", "symbol.fathom", UnitType.Length, 0.546807),
          new Unit(UnitId.Link, "unit.link", "symbol.link", UnitType.Length, 0.201168),
          new Unit(UnitId.Rod, "unit.rod", "symbol.rod", UnitType.Length, 0.198838),
          new Unit(UnitId.Chain, "unit.chain", "symbol.chain", UnitType.Length, 0.0497097),
          new Unit(UnitId.Furlong, "unit.furlong", "symbol.furlong", UnitType.Length, 0.00497097),
          new Unit(UnitId.League, "unit.league", "symbol.league", UnitType.Length, 0.000207123),
          new Unit(UnitId.Mile, "unit.mile", "symbol.mile", UnitType.Length, 0.000621371),
        ],
      },
      {
        label: "group.nautical",
        code: "nautical",
        items: [
          new Unit(UnitId.NauticalMile, "unit.nauticalmile", "symbol.nauticalmile", UnitType.Length, 0.000539957),
        ],
      },
      {
        label: "group.astronomical",
        code: "astronomical",
        items: [
          new Unit(UnitId.LightYear, "unit.lightyear", "symbol.lightyear", UnitType.Length, 1.057e-16),
          new Unit(UnitId.Parsec, "unit.parsec", "symbol.parsec", UnitType.Length, 3.26156e-17),
          new Unit(UnitId.AstronomicalUnit, "unit.astronomicalunit", "symbol.astronomicalunit", UnitType.Length, 6.68459e-12),
          new Unit(UnitId.Kiloparsec, "unit.kiloparsec", "symbol.kiloparsec", UnitType.Length, 3.26156e-14),
          new Unit(UnitId.MegaParsec, "unit.megaparsec", "symbol.megaparsec", UnitType.Length, 3.26156e-20),
          new Unit(UnitId.SolarRadius, "unit.solarradius", "symbol.solarradius", UnitType.Length, 1.43785e-9),
          new Unit(UnitId.LunarDistance, "unit.lunardistance", "symbol.lunardistance", UnitType.Length, 2.60416e-9),
        ],
      },
      {
        label: "group.quantum",
        code: "quantum",
        items: [
          new Unit(UnitId.PlanckLength, "unit.plancklength", "symbol.plancklength", UnitType.Length, 6.187e+34),
        ],
      },
    ];

    groups.forEach(group => {
      group.items.sort((a, b) => a.conversionFactor - b.conversionFactor);
    });

    return groups;
}

export const createUnitDataModel = (): UnitDataModel => {
  return {
    [UnitType.Length]: getLengthUnits(),
  };
}