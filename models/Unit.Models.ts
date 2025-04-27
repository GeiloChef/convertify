import {Unit} from "./Unit.Class";

export type UnitId = LengthUnitId | MassUnitId | VelocityUnitId | DataVelocityUnitId | DataSizeUnitId | TimeUnitId | AreaUnitId;

export enum LengthUnitId {
  Meter = "meter",
  KiloMeter = "kilometer",
  CentiMeter = "centimeter",
  MilliMeter = "millimeter",
  MicroMeter = "micrometer",
  NanoMeter = "nanometer",
  Mile = "mile",
  Yard = "yard",
  Foot = "foot",
  Inch = "inch",
  LightYear = "light-year",
  Parsec = "parsec",
  Fathom = "fathom",
  Link = "link",
  Rod = "rod",
  NauticalMile = "nautical-mile",
  AstronomicalUnit = "astronomical-unit",
  Kiloparsec = "kiloparsec",
  DeciMeter = "decimeter",
  HectoMeter = "hectometer",
  MegaMeter = "megameter",
  GigaMeter = "gigameter",
  Furlong = "furlong",
  Chain = "chain",
  Hand = "hand",
  League = "league",
  SolarRadius = "solar-radius",
  LunarDistance = "lunar-distance",
  MegaParsec = "megaparsec",
  PlanckLength = "planck-length",
  Cubit = "cubit",
  Smoot = "smoot"
}

export enum MassUnitId {
  Kilo = "kilo",
  Gram = "gram",
  Pound = "pound",
  Stone = "stone",
  Megaton = "megaton",
  Kiloton = "kiloton",
  Tonne = "tonne",
  Megagram = "megagram",
  Quintal = "quintal",
  Hectogram = "hectogram",
  Decagram = "deca-gram",
  Decigram = "deci-gram",
  Centigram = "centigram",
  Milligram = "milligram",
  Microgram = "micro-gram",
  Nanogram = "nano-gram",
  Picogram = "pico-gram",
  Femtogram = "femto-gram",
  Attogram = "atto-gram",
  Ounce = "ounce",
  QuarterImperial = "quarter-imperial",
  QuarterUS = "quarter-us",
  HundredweightUK = "hundredweight-uk",
  HundredweightUS = "hundredweight-us",
  ShortTonUS = "short-ton",
  LongTonUK = "long-ton",
  Grain = "grain",
  Carat = "carat",
  TroyOunce = "troy-ounce",
  TroyPound = "troy-pound",
  Pennyweight = "pennyweight",
  Scruple = "scruple",
  Liang = "liang",
  Jin = "jin",
  Dan = "dan",
  Momme = "momme",
  Chang = "chang",
  Catties = "catties",
  Tael = "tael",
  Picul = "picul",
  Baht = "baht",
  Shekel = "shekel",
  Mina = "mina",
  Talent = "talent",
  Obolus = "obolus",
  Drachma = "drachma",
  Dram = "dram",
}

export enum VelocityUnitId {
  MetersPerSecond = "meters-per-second",
  KilometersPerHour = "kilometers-per-hour",
  CentimetersPerSecond = "centimeters-per-second",
  MillimetersPerSecond = "millimeters-per-second",
  KilometersPerSecond = "kilometers-per-second",
  FeetPerSecond = "feet-per-second",
  MilesPerHour = "miles-per-hour",
  InchesPerSecond = "inches-per-second",
  Knots = "knots",
  FurlongsPerFortnight = "furlongs-per-fortnight",
  SpeedOfLight = "speed-of-light",
  Mach = "mach",
  AstronomicalUnitsPerDay = "astronomical-units-per-day",
  YardsPerSecond = "yards-per-second",
  LunarVelocity = "lunar-velocity",
  LightYearsPerDay = "light-years-per-day",
  AstronomicalUnitsPerHour = "astronomical-units-per-hour",
  MetersPerMinute = "meters-per-minute",
  KilometersPerDay = "kilometers-per-day",
  MilesPerSecond = "miles-per-second",
  RevolutionsPerMinute = "revolutions-per-minute",
  FeetPerMinute = "feet-per-minute",
  NauticalMilesPerHour = "nautical-miles-per-hour",
  KilometersPerMinute = "kilometers-per-minute",
  StepsPerSecond = "steps-per-second",
  KilometersPerHourWalking = "kilometers-per-hour-walking",
  PixelsPerSecond = "pixels-per-second",
  VirtualUnitsPerSecond = "virtual-units-per-second",
  WindSpeedMetersPerSecond = "wind-speed-meters-per-second",
  WindSpeedKilometersPerHour = "wind-speed-kilometers-per-hour"
}

export enum DataVelocityUnitId {
  BitsPerSecond = "bits-per-second",
  KilobitsPerSecond = "kilobits-per-second",
  MegabitsPerSecond = "megabits-per-second",
  GigabitsPerSecond = "gigabits-per-second",
  TerabitsPerSecond = "terabits-per-second",
  BytesPerSecond = "bytes-per-second",
  KilobytesPerSecond = "kilobytes-per-second",
  MegabytesPerSecond = "megabytes-per-second",
  GigabytesPerSecond = "gigabytes-per-second",
  TerabytesPerSecond = "terabytes-per-second"
}

export enum DataSizeUnitId {
  Bit = "bit",
  Kilobit = "kilo-bit",
  Megabit = "megabit",
  Gigabit = "gigabit",
  Terabit = "terabit",
  Byte = "byte",
  Kilobyte = "kilobyte",
  Megabyte = "megabyte",
  Gigabyte = "gigabyte",
  Terabyte = "terabyte",
}

export enum TimeUnitId {
  Second = "second",
  Minute = "minute",
  Hour = "hour",
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
  Millisecond = "millisecond",
  Microsecond = "microsecond",
  Nanosecond = "nanosecond",
  Decade = "decade",
  Century = "century",
  Millennium = "millennium",
}

export enum AreaUnitId {
  SquareMillimeter = "square-millimeter",
  SquareCentimeter = "square-centimeter",
  SquareMeter = "square-meter",
  SquareKilometer = "square-kilometer",
  Are = "are",
  Hectare = "hectare",
  Decare = "decare",
  Dunam = "dunam",
  SquareInch = "square-inch",
  SquareFoot = "square-foot",
  SquareYard = "square-yard",
  Acre = "acre",
  SquareMile = "square-mile",
  Rood = "rood",
  Perch = "perch",
  Barn = "barn",
}



export enum UnitType {
  Length = "length",
  Weight = "weight",
  Velocity = "velocity",
  DataVelocity = "data-velocity",
  DataSize = "data-size",
  Time = "time",
  Area = "area"
}

export interface UnitGroup {
  code: string,
  label: string,
  items: Unit[]
}

export interface UnitTypeObject {
  id: string,
  label: string,
  unitGroups: UnitGroup[]
}

export type UnitDataModel = {
  [key in UnitType]: UnitTypeObject;
};

export interface UnitDataDescriptionData {
  unit: Unit;
  description: string;
}