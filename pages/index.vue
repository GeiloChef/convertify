<template>
  <div />
</template>

<script setup>
import {navigateToConverterPage} from "@/utils/Routing.Utils.js";
import {LengthUnitId, UnitType} from "@/models/Unit.Models.js";

navigateToConverterPage({
  fromUnit: LengthUnitId.CentiMeter,
  toUnit: LengthUnitId.Inch,
  unitType: UnitType.Length
});
</script>