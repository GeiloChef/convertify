import {Unit} from "./Unit.Class";

export type UnitId = LengthUnitId & MassUnitId

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
  LightYear = "lightyear",
  Parsec = "parsec",
  Fathom = "fathom",
  Link = "link",
  Rod = "rod",
  NauticalMile = "nauticalmile",
  AstronomicalUnit = "astronomicalunit",
  Kiloparsec = "kiloparsec",
  DeciMeter = "decimeter",
  HectoMeter = "hectometer",
  MegaMeter = "megameter",
  GigaMeter = "gigameter",
  Furlong = "furlong",
  Chain = "chain",
  Hand = "hand",
  League = "league",
  SolarRadius = "solarradius",
  LunarDistance = "lunardistance",
  MegaParsec = "megaparsec",
  PlanckLength = "plancklength",
  Cubit = "cubit",
  Smoot = "smoot"
}

export enum MassUnitId {
  Kilo = "kilogram",
  Gram = "gram",
  Pound = "pound",
  Stone = "stone",
  Megaton = "megaton",
  Kiloton = "kiloton",
  Tonne = "tonne",
  Megagram = "megagram",
  Quintal = "quintal",
  Hectogram = "hectogram",
  Decagram = "decagram",
  Decigram = "decigram",
  Centigram = "centigram",
  Milligram = "milligram",
  Microgram = "microgram",
  Nanogram = "nanogram",
  Picogram = "picogram",
  Femtogram = "femtogram",
  Attogram = "attogram",
  Ounce = "ounce",
  QuarterImperial = "quarterImperial",
  QuarterUS = "quarterUS",
  HundredweightUK = "hundredweightUK",
  HundredweightUS = "hundredweightUS",
  ShortTonUS = "shortTonUS",
  LongTonUK = "longTonUK",
  Grain = "grain",
  Carat = "carat",
  TroyOunce = "troyOunce",
  TroyPound = "troyPound",
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
  Dram,
}


export enum UnitType {
  Length = "length",
  Weight = "weight",
}

export interface UnitGroup {
  id: string,
  label: string,
  items: Unit[]
}

export interface UnitTypeObject {
  label: string,
  code: string,
  unitGroups: UnitGroup[]
}

export type UnitDataModel = {
  [key in UnitType]: UnitTypeObject;
};