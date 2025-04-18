import {type UnitId, UnitType} from '@/models/Unit.Models';

export class Unit {
  id: UnitId;
  name: string;
  symbol: string;
  type: UnitType;
  conversionFactor: number;

  constructor(id: UnitId, name: string, symbol: string, type: UnitType, conversionFactor: number) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.type = type;
    this.conversionFactor = conversionFactor;
  }

  convert(value: number, toUnit: Unit): number {
    if (this.type !== toUnit.type) {
      throw new Error(`Cannot convert between different unit types: ${this.type} and ${toUnit.type}`);
    }
    return (value / this.conversionFactor) * toUnit.conversionFactor;
  }
}