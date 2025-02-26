/*
* imports in this file can't be imported with an alias because this file is used for pre-generating
* Routes inside the nuxt config.
* */

import { Unit } from "../models/Unit.Class";
import {
  UnitDataModel,
  LengthUnitId,
  UnitType,
  MassUnitId,
  UnitTypeObject,
  UnitGroup,
  VelocityUnitId, DataVelocityUnitId, DataSizeUnitId
} from "../models/Unit.Models";

export const getLengthUnits = (): UnitTypeObject => {
    const groups: UnitGroup[] = [
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
  const groups: UnitGroup[] = [
    {
      label: "group.metric",
      code: "metric",
      items: [
        new Unit(MassUnitId.Megaton, "unit.megaton", "symbol.megaton", UnitType.Weight, 1 / 1e9), // 1,000,000,000 kg
        new Unit(MassUnitId.Kiloton, "unit.kiloton", "symbol.kiloton", UnitType.Weight, 1 / 1e6), // 1,000,000 kg
        new Unit(MassUnitId.Tonne, "unit.tonne", "symbol.tonne", UnitType.Weight, 1 / 1000), // 1,000 kg (also called a "metric ton")
        new Unit(MassUnitId.Megagram, "unit.megagram", "symbol.megagram", UnitType.Weight, 1 / 1000), // 1,000 Mg (also called a "metric ton")
        new Unit(MassUnitId.Quintal, "unit.quintal", "symbol.quintal", UnitType.Weight, 1 / 100), // 100 kg (used in agriculture)
        new Unit(MassUnitId.Kilo, "unit.kilo", "symbol.kilo", UnitType.Weight,  1), // 1 kg
        new Unit(MassUnitId.Hectogram, "unit.hectogram", "symbol.hectogram", UnitType.Weight, 1 / 0.1), // 100 g
        new Unit(MassUnitId.Decagram, "unit.decagram", "symbol.decagram", UnitType.Weight, 1 / 0.01), // 10 g
        new Unit(MassUnitId.Gram, "unit.gram", "symbol.gram", UnitType.Weight, 1 / 0.001), // 1 g
        new Unit(MassUnitId.Decigram, "unit.decigram", "symbol.decigram", UnitType.Weight, 1 / 0.0001), // 0.1 g
        new Unit(MassUnitId.Centigram, "unit.centigram", "symbol.centigram", UnitType.Weight, 1 / 0.00001), // 0.01 g
        new Unit(MassUnitId.Milligram, "unit.milligram", "symbol.milligram", UnitType.Weight, 1 / 0.000001), // 0.001 g
        new Unit(MassUnitId.Microgram, "unit.microgram", "symbol.microgram", UnitType.Weight, 1 / 0.000000001), // 1 µg
        new Unit(MassUnitId.Nanogram, "unit.nanogram", "symbol.nanogram", UnitType.Weight, 1 / 0.000000000001), // 1 ng
        new Unit(MassUnitId.Picogram, "unit.picogram", "symbol.picogram", UnitType.Weight, 1 / 0.000000000000001), // 1 pg
        new Unit(MassUnitId.Femtogram, "unit.femtogram", "symbol.femtogram", UnitType.Weight, 1 / 0.000000000000000001), // 1 fg
        new Unit(MassUnitId.Attogram, "unit.attogram", "symbol.attogram", UnitType.Weight, 1 / 0.000000000000000000001), // 1 ag
      ],
    },
    {
      label: "group.imperial",
      code: "imperial",
      items: [
        new Unit(MassUnitId.Ounce, "unit.ounce", "symbol.ounce", UnitType.Weight, 1 / 0.0283495),
        new Unit(MassUnitId.Pound, "unit.pound", "symbol.pound", UnitType.Weight, 1 / 0.453592),
        new Unit(MassUnitId.Stone, "unit.stone", "symbol.stone", UnitType.Weight, 1 / 6.35029),
        new Unit(MassUnitId.QuarterImperial, "unit.quarter-imperial", "symbol.quarter-imperial", UnitType.Weight, 1 / 28.3495),
        new Unit(MassUnitId.QuarterUS, "unit.quarter-us", "symbol.quarter-us", UnitType.Weight, 1 / 25),
        new Unit(MassUnitId.HundredweightUK, "unit.hundredweight-uk", "symbol.hundredweight-uk", UnitType.Weight, 1 / 50.8023),
        new Unit(MassUnitId.HundredweightUS, "unit.hundredweight-us", "symbol.hundredweight-us", UnitType.Weight, 1 / 45.3592),
        new Unit(MassUnitId.ShortTonUS, "unit.short-ton", "symbol.short-ton", UnitType.Weight, 1 / 907.1847),
        new Unit(MassUnitId.LongTonUK, "unit.long-ton", "symbol.long-ton", UnitType.Weight, 1 / 1016.05),
      ],
    },
    {
      label: "group.troy-weight",
      code: "troy_weight",
      items: [
        new Unit(MassUnitId.Grain, "unit.grain", "symbol.grain", UnitType.Weight, 1 / 0.0000647989),
        new Unit(MassUnitId.Carat, "unit.carat", "symbol.carat", UnitType.Weight, 1 / 0.0002),
        new Unit(MassUnitId.TroyOunce, "unit.troy-ounce", "symbol.troy-ounce", UnitType.Weight, 1 / 0.0311035),
        new Unit(MassUnitId.TroyPound, "unit.troy-pound", "symbol.troy-pound", UnitType.Weight, 1 / 0.373242),
        new Unit(MassUnitId.Pennyweight, "unit.pennyweight", "symbol.pennyweight", UnitType.Weight, 1 / 0.00155517),
      ],
    },
    {
      label: "group.apothecaries",
      code: "apothecaries",
      items: [
        new Unit(MassUnitId.Grain, "unit.grain", "symbol.grain", UnitType.Weight, 1 / 0.0000647989),
        new Unit(MassUnitId.Scruple, "unit.scruple", "symbol.scruple", UnitType.Weight, 1 / 0.00129598),
        new Unit(MassUnitId.Dram, "unit.dram", "symbol.dram", UnitType.Weight, 1 / 0.00388794),
        new Unit(MassUnitId.Ounce, "unit.ounce", "symbol.ounce", UnitType.Weight, 1 / 0.0283495),
        new Unit(MassUnitId.Pound, "unit.pound", "symbol.pound", UnitType.Weight, 1 / 0.453592),
      ],
    },
    {
      label: "group.asian",
      code: "asian",
      items: [
        new Unit(MassUnitId.Liang, "unit.liang", "symbol.liang", UnitType.Weight, 1 / 0.05),
        new Unit(MassUnitId.Jin, "unit.jin", "symbol.jin", UnitType.Weight, 1 / 0.5),
        new Unit(MassUnitId.Dan, "unit.dan", "symbol.dan", UnitType.Weight, 1 / 50),
        new Unit(MassUnitId.Momme, "unit.momme", "symbol.momme", UnitType.Weight, 1 / 0.00375),
        new Unit(MassUnitId.Chang, "unit.chang", "symbol.chang", UnitType.Weight, 1 / 0.6),
        new Unit(MassUnitId.Catties, "unit.catties", "symbol.catties", UnitType.Weight, 1 / 0.60478982),
        new Unit(MassUnitId.Tael, "unit.tael", "symbol.tael", UnitType.Weight, 1 / 0.0378),
        new Unit(MassUnitId.Picul, "unit.picul", "symbol.picul", UnitType.Weight, 1 / 60.478982),
        new Unit(MassUnitId.Baht, "unit.baht", "symbol.baht", UnitType.Weight, 1 / 0.015244),
      ],
    },
    {
      label: "group.ancient",
      code: "ancient",
      items: [
        new Unit(MassUnitId.Shekel, "unit.shekel", "symbol.shekel", UnitType.Weight, 1 / 0.01134),
        new Unit(MassUnitId.Mina, "unit.mina", "symbol.mina", UnitType.Weight, 1 / 0.505),
        new Unit(MassUnitId.Talent, "unit.talent", "symbol.talent", UnitType.Weight, 1 / 30.3),
        new Unit(MassUnitId.Carat, "unit.carat", "symbol.carat", UnitType.Weight, 1 / 0.0002),
        new Unit(MassUnitId.Obolus, "unit.obolus", "symbol.obolus", UnitType.Weight, 1 / 0.00057),
        new Unit(MassUnitId.Drachma, "unit.obolus", "symbol.obolus", UnitType.Weight, 1 / 0.0043),
      ],
    },
  ];

  groups.forEach(group => {
    group.items.sort((a, b) => a.conversionFactor - b.conversionFactor);
  });

  return {
    id: UnitType.Weight,
    label: 'type.weight',
    unitGroups: groups
  };
}

export const getVelocityUnits = (): UnitTypeObject => {
  const groups: UnitGroup[] = [
    {
      label: "group.metric",
      code: "metric",
      items: [
        new Unit(VelocityUnitId.MetersPerSecond, "unit.meters-per-second", "symbol.meters-per-second", UnitType.Velocity, 1),
        new Unit(VelocityUnitId.KilometersPerHour, "unit.kilometers-per-hour", "symbol.kilometers-per-hour", UnitType.Velocity, 1 / 3.6),
        new Unit(VelocityUnitId.CentimetersPerSecond, "unit.centimeters-per-second", "symbol.centimeters-per-second", UnitType.Velocity, 1 / 100),
        new Unit(VelocityUnitId.MillimetersPerSecond, "unit.millimeters-per-second", "symbol.millimeters-per-second", UnitType.Velocity, 1 / 1000),
        new Unit(VelocityUnitId.KilometersPerSecond, "unit.kilometers-per-second", "symbol.kilometers-per-second", UnitType.Velocity, 1 / 1000),
      ],
    },
    {
      label: "group.imperial",
      code: "imperial",
      items: [
        new Unit(VelocityUnitId.FeetPerSecond, "unit.feet-per-second", "symbol.feet-per-second", UnitType.Velocity, 1 / 0.3048),
        new Unit(VelocityUnitId.MilesPerHour, "unit.miles-per-hour", "symbol.miles-per-hour", UnitType.Velocity, 1 / 2.23694),
        new Unit(VelocityUnitId.InchesPerSecond, "unit.inches-per-second", "symbol.inches-per-second", UnitType.Velocity, 1 / 39.3701),
        new Unit(VelocityUnitId.Knots, "unit.knots", "symbol.knots", UnitType.Velocity, 1 / 1.94384),
        new Unit(VelocityUnitId.FurlongsPerFortnight, "unit.furlongs-per-fortnight", "symbol.furlongs-per-fortnight", UnitType.Velocity, 1 / 0.000166309),
      ],
    },
    {
      label: "group.scientific",
      code: "scientific",
      items: [
        new Unit(VelocityUnitId.SpeedOfLight, "unit.speed-of-light", "symbol.speed-of-light", UnitType.Velocity, 1 / 299792458),
        new Unit(VelocityUnitId.Mach, "unit.mach", "symbol.mach", UnitType.Velocity, 1 / 343),
        new Unit(VelocityUnitId.AstronomicalUnitsPerDay, "unit.astronomical-units-per-day", "symbol.astronomical-units-per-day", UnitType.Velocity, 1 / 1731456),
      ],
    },
    {
      label: "group.miscellaneous",
      code: "miscellaneous",
      items: [
        new Unit(VelocityUnitId.YardsPerSecond, "unit.yards-per-second", "symbol.yards-per-second", UnitType.Velocity, 1 / 1.09361),
        new Unit(VelocityUnitId.LunarVelocity, "unit.lunar-velocity", "symbol.lunar-velocity", UnitType.Velocity, 1 / 1022),
      ],
    },
    {
      label: "group.astronomical",
      code: "astronomical",
      items: [
        new Unit(VelocityUnitId.LightYearsPerDay, "unit.light-years-per-day", "symbol.light-years-per-day", UnitType.Velocity, 1 / 9.461e+12),
        new Unit(VelocityUnitId.AstronomicalUnitsPerHour, "unit.astronomical-units-per-hour", "symbol.astronomical-units-per-hour", UnitType.Velocity, 1 / 1731456 / 24),
      ],
    },
    {
      label: "group.timeBased",
      code: "time-based",
      items: [
        new Unit(VelocityUnitId.MetersPerMinute, "unit.meters-per-minute", "symbol.meters-per-minute", UnitType.Velocity, 1 / 60),
        new Unit(VelocityUnitId.KilometersPerDay, "unit.kilometers-per-day", "symbol.kilometers-per-day", UnitType.Velocity, 1 / 86400),
        new Unit(VelocityUnitId.MilesPerSecond, "unit.miles-per-second", "symbol.miles-per-second", UnitType.Velocity, 1 / 0.44704),
      ],
    },
    {
      label: "group.engineering",
      code: "engineering",
      items: [
        new Unit(VelocityUnitId.RevolutionsPerMinute, "unit.revolutions-per-minute", "symbol.revolutions-per-minute", UnitType.Velocity, 1 / 60),
        new Unit(VelocityUnitId.FeetPerMinute, "unit.feet-per-minute", "symbol.feet-per-minute", UnitType.Velocity, 1 / 18.288),
      ],
    },
    {
      label: "group.navigation",
      code: "navigation",
      items: [
        new Unit(VelocityUnitId.NauticalMilesPerHour, "unit.nautical-miles-per-hour", "symbol.nautical-miles-per-hour", UnitType.Velocity, 1 / 1.852),
        new Unit(VelocityUnitId.KilometersPerMinute, "unit.kilometers-per-minute", "symbol.kilometers-per-minute", UnitType.Velocity, 1 / 60),
      ],
    },
    {
      label: "group.biomechanical",
      code: "biomechanical",
      items: [
        new Unit(VelocityUnitId.StepsPerSecond, "unit.steps-per-second", "symbol.steps-per-second", UnitType.Velocity, 1 / 1.4),
        new Unit(VelocityUnitId.KilometersPerHourWalking, "unit.kilometers-per-hour-walking", "symbol.kilometers-per-hour-walking", UnitType.Velocity, 1 / 5),
      ],
    },
    {
      label: "group.virtual",
      code: "virtual",
      items: [
        new Unit(VelocityUnitId.PixelsPerSecond, "unit.pixels-per-second", "symbol.pixels-per-second", UnitType.Velocity, 1),
        new Unit(VelocityUnitId.VirtualUnitsPerSecond, "unit.virtual-units-per-second", "symbol.virtual-units-per-second", UnitType.Velocity, 1),
      ],
    },
    {
      label: "group.weather",
      code: "weather",
      items: [
        new Unit(VelocityUnitId.WindSpeedMetersPerSecond, "unit.wind-speed-meters-per-second", "symbol.wind-speed-meters-per-second", UnitType.Velocity, 1),
        new Unit(VelocityUnitId.WindSpeedKilometersPerHour, "unit.wind-speed-kilometers-per-hour", "symbol.wind-speed-kilometers-per-hour", UnitType.Velocity, 1 / 3.6),
      ],
    }
  ];

  groups.forEach(group => {
    group.items.sort((a, b) => a.conversionFactor - b.conversionFactor);
  });

  return {
    id: UnitType.Velocity,
    label: 'type.velocity',
    unitGroups: groups
  };
};

export const getDataVelocityUnits = (): UnitTypeObject => {
  const groups: UnitGroup[] = [
    {
      label: "group.bits",
      code: "dataBitsVelocity",
      items: [
        new Unit(DataVelocityUnitId.BitsPerSecond, "unit.bits-per-second", "symbol.bits-per-second", UnitType.DataVelocity, 1),
        new Unit(DataVelocityUnitId.KilobitsPerSecond, "unit.kilobits-per-second", "symbol.kilobits-per-second", UnitType.DataVelocity, 1 / 1_000),
        new Unit(DataVelocityUnitId.MegabitsPerSecond, "unit.megabits-per-second", "symbol.megabits-per-second", UnitType.DataVelocity, 1 / 1_000_000),
        new Unit(DataVelocityUnitId.GigabitsPerSecond, "unit.gigabits-per-second", "symbol.gigabits-per-second", UnitType.DataVelocity, 1 / 1_000_000_000),
        new Unit(DataVelocityUnitId.TerabitsPerSecond, "unit.terabits-per-second", "symbol.terabits-per-second", UnitType.DataVelocity, 1 / 1_000_000_000_000),
      ],
    },
    {
      label: "group.bytes",
      code: "dataBytesVelocity",
      items: [
        new Unit(DataVelocityUnitId.BytesPerSecond, "unit.bytes-per-second", "symbol.bytes-per-second", UnitType.DataVelocity, 1 / 8),
        new Unit(DataVelocityUnitId.KilobytesPerSecond, "unit.kilobytes-per-second", "symbol.kilobytes-per-second", UnitType.DataVelocity, 1 / 8_000),
        new Unit(DataVelocityUnitId.MegabytesPerSecond, "unit.megabytes-per-second", "symbol.megabytes-per-second", UnitType.DataVelocity, 1 / 8_000_000),
        new Unit(DataVelocityUnitId.GigabytesPerSecond, "unit.gigabytes-per-second", "symbol.gigabytes-per-second", UnitType.DataVelocity, 1 / 8_000_000_000),
        new Unit(DataVelocityUnitId.TerabytesPerSecond, "unit.terabytes-per-second", "symbol.terabytes-per-second", UnitType.DataVelocity, 1 / 8_000_000_000_000)
      ],
    },
  ]

  return {
    id: UnitType.DataVelocity,
    label: 'type.data-velocity',
    unitGroups: groups
  };
};

export const getDataSizeUnits = (): UnitTypeObject => {
  const groups: UnitGroup[] = [
    {
      label: "group.bits",
      code: "dataBitsSize",
      items: [
        new Unit(DataSizeUnitId.Bit, "unit.bit", "symbol.bit", UnitType.DataSize, 1),
        new Unit(DataSizeUnitId.Kilobit, "unit.kilobit", "symbol.kilobit", UnitType.DataSize, 1 / 1_000),
        new Unit(DataSizeUnitId.Megabit, "unit.megabit", "symbol.megabit", UnitType.DataSize, 1 / 1_000_000),
        new Unit(DataSizeUnitId.Gigabit, "unit.gigabit", "symbol.gigabit", UnitType.DataSize, 1 / 1_000_000_000),
        new Unit(DataSizeUnitId.Terabit, "unit.terabit", "symbol.terabit", UnitType.DataSize, 1 / 1_000_000_000_000),
      ],
    },
    {
      label: "group.bytes",
      code: "dataBytesSize",
      items: [
        new Unit(DataSizeUnitId.Byte, "unit.byte", "symbol.byte", UnitType.DataSize, 1 / 8),
        new Unit(DataSizeUnitId.Kilobyte, "unit.kilobyte", "symbol.kilobyte", UnitType.DataSize, 1 / 8_000),
        new Unit(DataSizeUnitId.Megabyte, "unit.megabyte", "symbol.megabyte", UnitType.DataSize, 1 / 8_000_000),
        new Unit(DataSizeUnitId.Gigabyte, "unit.gigabyte", "symbol.gigabyte", UnitType.DataSize, 1 / 8_000_000_000),
        new Unit(DataSizeUnitId.Terabyte, "unit.terabyte", "symbol.terabyte", UnitType.DataSize, 1 / 8_000_000_000_000)
      ],
    },
  ]

  return {
    id: UnitType.DataSize,
    label: 'type.data-size',
    unitGroups: groups
  };
};


export const createUnitDataModel = (): UnitDataModel => {
  return {
    [UnitType.Length]: getLengthUnits(),
    [UnitType.Weight]: getWeightUnits(),
    [UnitType.Velocity]: getVelocityUnits(),
    [UnitType.DataVelocity]: getDataVelocityUnits(),
    [UnitType.DataSize]: getDataSizeUnits(),
  };
}