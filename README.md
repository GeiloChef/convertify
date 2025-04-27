# 🧮 Unit Converter Web App

A flexible, multilingual unit converter web application built with TypeScript.

## Features

- Convert between Length, Weight, Velocity, Data Size & Velocity, Time, Temperature, Area, and more
- Clean, modular code structure with unit types, groups, and units
- Internationalized labels and symbols (i18n) for easy localization
- Designed for easy expansion with new units and categories

## How to Use
The app provides intuitive UI to select unit types and convert between different units within those categories.

Example usage internally (for reference):

```typescript
const timeUnits = getTimeUnits();
console.log(timeUnits.unitGroups);
```

## Structure Overview
- UnitTypeObject: Represents a category with an ID, label, and groups of units
- UnitGroup: Groups units into logical sets (e.g., "Imperial", "Metric", ...)
- Unit: Represents an individual unit with IDs, i18n labels, symbols, and conversion factors


## Contributing
Feel free to open issues or submit pull requests to improve the app!



