/*
* Links in this file can't be imported with an alias because this file is used for pre-generating
* Routes inside the nuxt config.
*/

import { Unit } from "../models/Unit.Class";
import {UnitDataModel, LengthUnitId, UnitType, MassUnitId, UnitTypeObject} from "../models/Unit.Models";

export const getLengthUnits = (): UnitTypeObject => {
    const groups = [
      {
        label: "group.metric",
        code: "metric",
        items: [
          new Unit(LengthUnitId.NanoMeter, "unit.nanometer", "symbol.nanometer", UnitType.Length, 1_000_000_000),
          new Unit(LengthUnitId.MicroMeter, "unit.micrometer", "symbol.micrometer", UnitType.Length, 1_000_000),
          new Unit(LengthUnitId.MilliMeter, "unit.millimeter", "symbol.millimeter", UnitType.Length, 1000),
          new Unit(LengthUnitId.CentiMeter, "unit.centimeter", "symbol.centimeter", UnitType.Length, 100),
          new Unit(LengthUnitId.DeciMeter, "unit.decimeter", "symbol.decimeter", UnitType.Length, 10),
          new Unit(LengthUnitId.Meter, "unit.meter", "symbol.meter", UnitType.Length, 1),
          new Unit(LengthUnitId.KiloMeter, "unit.kilometer", "symbol.kilometer", UnitType.Length, 0.001),
          new Unit(LengthUnitId.HectoMeter, "unit.hectometer", "symbol.hectometer", UnitType.Length, 0.01),
          new Unit(LengthUnitId.MegaMeter, "unit.megameter", "symbol.megameter", UnitType.Length, 0.000001),
          new Unit(LengthUnitId.GigaMeter, "unit.gigameter", "symbol.gigameter", UnitType.Length, 0.000000001),
        ],
      },
      {
        label: "group.imperial",
        code: "imperial",
        items: [
          new Unit(LengthUnitId.Inch, "unit.inch", "symbol.inch", UnitType.Length, 39.3701),
          new Unit(LengthUnitId.Hand, "unit.hand", "symbol.hand", UnitType.Length, 9.84252),
          new Unit(LengthUnitId.Foot, "unit.foot", "symbol.foot", UnitType.Length, 3.28084),
          new Unit(LengthUnitId.Cubit, "unit.cubit", "symbol.cubit", UnitType.Length, 2.18723),
          new Unit(LengthUnitId.Yard, "unit.yard", "symbol.yard", UnitType.Length, 1.09361),
          new Unit(LengthUnitId.Smoot, "unit.smoot", "symbol.smoot", UnitType.Length, 0.587613),
          new Unit(LengthUnitId.Fathom, "unit.fathom", "symbol.fathom", UnitType.Length, 0.546807),
          new Unit(LengthUnitId.Link, "unit.link", "symbol.link", UnitType.Length, 0.201168),
          new Unit(LengthUnitId.Rod, "unit.rod", "symbol.rod", UnitType.Length, 0.198838),
          new Unit(LengthUnitId.Chain, "unit.chain", "symbol.chain", UnitType.Length, 0.0497097),
          new Unit(LengthUnitId.Furlong, "unit.furlong", "symbol.furlong", UnitType.Length, 0.00497097),
          new Unit(LengthUnitId.League, "unit.league", "symbol.league", UnitType.Length, 0.000207123),
          new Unit(LengthUnitId.Mile, "unit.mile", "symbol.mile", UnitType.Length, 0.000621371),
        ],
      },
      {
        label: "group.nautical",
        code: "nautical",
        items: [
          new Unit(LengthUnitId.NauticalMile, "unit.nauticalmile", "symbol.nauticalmile", UnitType.Length, 0.000539957),
        ],
      },
      {
        label: "group.astronomical",
        code: "astronomical",
        items: [
          new Unit(LengthUnitId.LightYear, "unit.lightyear", "symbol.lightyear", UnitType.Length, 1.057e-16),
          new Unit(LengthUnitId.Parsec, "unit.parsec", "symbol.parsec", UnitType.Length, 3.26156e-17),
          new Unit(LengthUnitId.AstronomicalUnit, "unit.astronomicalunit", "symbol.astronomicalunit", UnitType.Length, 6.68459e-12),
          new Unit(LengthUnitId.Kiloparsec, "unit.kiloparsec", "symbol.kiloparsec", UnitType.Length, 3.26156e-14),
          new Unit(LengthUnitId.MegaParsec, "unit.megaparsec", "symbol.megaparsec", UnitType.Length, 3.26156e-20),
          new Unit(LengthUnitId.SolarRadius, "unit.solarradius", "symbol.solarradius", UnitType.Length, 1.43785e-9),
          new Unit(LengthUnitId.LunarDistance, "unit.lunardistance", "symbol.lunardistance", UnitType.Length, 2.60416e-9),
        ],
      },
      {
        label: "group.quantum",
        code: "quantum",
        items: [
          new Unit(LengthUnitId.PlanckLength, "unit.plancklength", "symbol.plancklength", UnitType.Length, 6.187e+34),
        ],
      },
    ];

    groups.forEach(group => {
      group.items.sort((a, b) => a.conversionFactor - b.conversionFactor);
    });

    return {
      label: 'type.length',
      id: UnitType.Length,
      unitGroups: groups
    };
}

export const getWeightUnits = (): UnitTypeObject => {
  const groups = [
    {
      label: "group.metric",
      code: "metric",
      items: [
        new Unit(MassUnitId.Megaton, "unit.megaton", "symbol.megaton", UnitType.Weight, 1e9), // 1,000,000,000 kg
        new Unit(MassUnitId.Kiloton, "unit.kiloton", "symbol.kiloton", UnitType.Weight, 1e6), // 1,000,000 kg
        new Unit(MassUnitId.Tonne, "unit.tonne", "symbol.tonne", UnitType.Weight, 1000), // 1,000 kg (also called a "metric ton")
        new Unit(MassUnitId.Megagram, "unit.megagram", "symbol.megagram", UnitType.Weight, 1000), // 1,000 Mg (also called a "metric ton")
        new Unit(MassUnitId.Quintal, "unit.quintal", "symbol.quintal", UnitType.Weight, 100), // 100 kg (used in agriculture)
        new Unit(MassUnitId.Kilo, "unit.kilo", "symbol.kilo", UnitType.Weight, 1), // 1 kg
        new Unit(MassUnitId.Hectogram, "unit.hectogram", "symbol.hectogram", UnitType.Weight, 0.1), // 100 g
        new Unit(MassUnitId.Decagram, "unit.decagram", "symbol.decagram", UnitType.Weight, 0.01), // 10 g
        new Unit(MassUnitId.Gram, "unit.gram", "symbol.gram", UnitType.Weight, 0.001), // 1 g
        new Unit(MassUnitId.Decigram, "unit.decigram", "symbol.decigram", UnitType.Weight, 0.0001), // 0.1 g
        new Unit(MassUnitId.Centigram, "unit.centigram", "symbol.centigram", UnitType.Weight, 0.00001), // 0.01 g
        new Unit(MassUnitId.Milligram, "unit.milligram", "symbol.milligram", UnitType.Weight, 0.000001), // 0.001 g
        new Unit(MassUnitId.Microgram, "unit.microgram", "symbol.microgram", UnitType.Weight, 0.000000001), // 1 µg
        new Unit(MassUnitId.Nanogram, "unit.nanogram", "symbol.nanogram", UnitType.Weight, 0.000000000001), // 1 ng
        new Unit(MassUnitId.Picogram, "unit.picogram", "symbol.picogram", UnitType.Weight, 0.000000000000001), // 1 pg
        new Unit(MassUnitId.Femtogram, "unit.femtogram", "symbol.femtogram", UnitType.Weight, 0.000000000000000001), // 1 fg
        new Unit(MassUnitId.Attogram, "unit.attogram", "symbol.attogram", UnitType.Weight, 0.000000000000000000001), // 1 ag
      ],
    },
    {
      label: "group.imperial",
      code: "imperial",
      items: [
        new Unit(MassUnitId.Ounce, "unit.ounce", "symbol.ounce", UnitType.Weight, 0.0283495),
        new Unit(MassUnitId.Pound, "unit.pound", "symbol.pound", UnitType.Weight, 0.453592),
        new Unit(MassUnitId.Stone, "unit.stone", "symbol.stone", UnitType.Weight, 6.35029),
        new Unit(MassUnitId.QuarterImperial, "unit.quarter-imperial", "symbol.quarter-imperial", UnitType.Weight, 28.3495),
        new Unit(MassUnitId.QuarterUS, "unit.quarter-us", "symbol.quarter-us", UnitType.Weight, 25),
        new Unit(MassUnitId.HundredweightUK, "unit.hundredweight-uk", "symbol.hundredweight-uk", UnitType.Weight, 50.8023),
        new Unit(MassUnitId.HundredweightUS, "unit.hundredweight-us", "symbol.hundredweight-us", UnitType.Weight, 45.3592),
        new Unit(MassUnitId.ShortTonUS, "unit.short-ton", "symbol.short-ton", UnitType.Weight, 907.1847),
        new Unit(MassUnitId.LongTonUK, "unit.long-ton", "symbol.long-ton", UnitType.Weight, 1016.05),
      ],
    },
    {
      label: "group.troy-weight",
      code: "troy_weight",
      items: [
        new Unit(MassUnitId.Grain, "unit.grain", "symbol.grain", UnitType.Weight, 0.0000647989),
        new Unit(MassUnitId.Carat, "unit.carat", "symbol.carat", UnitType.Weight, 0.0002),
        new Unit(MassUnitId.TroyOunce, "unit.troy-ounce", "symbol.troy-ounce", UnitType.Weight, 0.0311035),
        new Unit(MassUnitId.TroyPound, "unit.troy-pound", "symbol.troy-pound", UnitType.Weight, 0.373242),
        new Unit(MassUnitId.Pennyweight, "unit.pennyweight", "symbol.pennyweight", UnitType.Weight, 0.00155517),
      ],
    },
    {
      label: "group.apothecaries",
      code: "apothecaries",
      items: [
        new Unit(MassUnitId.Grain, "unit.grain", "symbol.grain", UnitType.Weight, 0.0000647989),
        new Unit(MassUnitId.Scruple, "unit.scruple", "symbol.scruple", UnitType.Weight, 0.00129598),
        new Unit(MassUnitId.Dram, "unit.dram", "symbol.dram", UnitType.Weight, 0.00388794),
        new Unit(MassUnitId.Ounce, "unit.ounce", "symbol.ounce", UnitType.Weight, 0.0283495),
        new Unit(MassUnitId.Pound, "unit.pound", "symbol.pound", UnitType.Weight, 0.453592),
      ],
    },
    {
      label: "group.asian",
      code: "asian",
      items: [
        new Unit(MassUnitId.Liang, "unit.liang", "symbol.liang", UnitType.Weight, 0.05),
        new Unit(MassUnitId.Jin, "unit.jin", "symbol.jin", UnitType.Weight, 0.5),
        new Unit(MassUnitId.Dan, "unit.dan", "symbol.dan", UnitType.Weight, 50),
        new Unit(MassUnitId.Momme, "unit.momme", "symbol.momme", UnitType.Weight, 0.00375),
        new Unit(MassUnitId.Chang, "unit.chang", "symbol.chang", UnitType.Weight, 0.6),
        new Unit(MassUnitId.Catties, "unit.catties", "symbol.catties", UnitType.Weight, 0.60478982),
        new Unit(MassUnitId.Tael, "unit.tael", "symbol.tael", UnitType.Weight, 0.0378),
        new Unit(MassUnitId.Picul, "unit.picul", "symbol.picul", UnitType.Weight, 60.478982),
        new Unit(MassUnitId.Baht, "unit.baht", "symbol.baht", UnitType.Weight, 0.015244),
      ],
    },
    {
      label: "group.ancient",
      code: "ancient",
      items: [
        new Unit(MassUnitId.Shekel, "unit.shekel", "symbol.shekel", UnitType.Weight, 0.01134),
        new Unit(MassUnitId.Mina, "unit.mina", "symbol.mina", UnitType.Weight, 0.505),
        new Unit(MassUnitId.Talent, "unit.talent", "symbol.talent", UnitType.Weight, 30.3),
        new Unit(MassUnitId.Carat, "unit.carat", "symbol.carat", UnitType.Weight, 0.0002),
        new Unit(MassUnitId.Obolus, "unit.obolus", "symbol.obolus", UnitType.Weight, 0.00057),
        new Unit(MassUnitId.Drachma, "unit.obolus", "symbol.obolus", UnitType.Weight, 0.0043),
      ],
    },
  ];

  groups.forEach(group => {
    group.items.sort((a, b) => a.conversionFactor - b.conversionFactor);
  });

  return {
    label: 'type.weight',
    id: UnitType.Weight,
    unitGroups: groups
  };
}


export const createUnitDataModel = (): UnitDataModel => {
  return {
    [UnitType.Length]: getLengthUnits(),
    [UnitType.Weight]: getWeightUnits(),
  };
}