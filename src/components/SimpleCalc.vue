<template>
  <p>
    This calulcator has calulated a result {{ $store.state.counter }} times.
  </p>
  <form>
    <div class="form-group">
      <label
        >Kilometers: (km)
        <input
          class="form-control"
          type="number"
          min="0"
          placeholder="Km"
          v-model.number="length"
          @keyup="kmh"
          @change="kmh"
      /></label>
    </div>
    <div class="form-group">
      <label
        >Time: (h)
        <input
          class="form-control"
          type="number"
          min="0"
          placeholder="h"
          v-model.number="time"
          @keyup="kmh"
          @change="kmh"
      /></label>
    </div>
    <hr />
    <div>
      <label
        >Kilometers per hour
        <input
          type="number"
          min="0"
          class="form-control"
          v-model.number="kph"
          @keyup="kph2attr"
          @change="kph2attr"
      /></label>
    </div>
    <p>
      which is <b>{{ mps }}</b> meters per second
    </p>
    <div>
      <p>Fixed value:</p>
      <label class="btn">
        <input
          type="radio"
          name="attr"
          id="length"
          checked
          @change="attrChange"
        />Length</label
      >
      <label class="btn">
        <input
          type="radio"
          name="attr"
          id="time"
          @change="attrChange"
        />Time</label
      >
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      length: 0,
      time: 1,
      kph: 0,
      attr: "length",
    };
  },
  emits: ["recalculated"],
  name: "Speed calculator",
  methods: {
    attrChange(event) {
      this.attr = event.target.id;
    },
    kmh() {
      this.$emit("recalculated");
      this.kph = this.time != 0 ? this.length / this.time : 0;
    },
    kph2attr() {
      this.$emit("recalculated");
      if (this.attr === "time") {
        this.length = this.kph * this.time;
      } else {
        this.time = this.kph != 0 ? this.length / this.kph : 0;
      }
    },
  },
  computed: {
    mps: function () {
      return new Number(this.kph * 0.277777778).toFixed(2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
