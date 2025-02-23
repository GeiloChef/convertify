<template>
  <div />
</template>

<script setup>
import {navigateToConverterPage} from "@/utils/Routing.Utils.js";
import {UnitId, UnitType} from "@/models/Unit.Models.js";

navigateToConverterPage({
  fromUnit: UnitId.CentiMeter,
  toUnit: UnitId.Inch,
  unitType: UnitType.Length
});
</script>