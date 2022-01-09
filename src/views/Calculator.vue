<template>
  <div class="container">
    <h3>Simple Calulator</h3>
    <p>
      This is a simple calculator that calulates speed from distance and time
    </p>
    <!-- <p>Using a second input field you can set the color of the result</p> -->
    <simple-calc @recalculated="increaseCounter"></simple-calc>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCalc from "@/components/SimpleCalc.vue";

export default {
  name: "Calculator",
  components: {
    SimpleCalc,
  },
  methods: {
    increaseCounter() {
      this.$store.commit("increaseCounter");
    },
  },
};
</script>
