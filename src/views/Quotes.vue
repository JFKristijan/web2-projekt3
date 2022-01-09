<template>
  <h3>Chuck Norris joke below:</h3>
    <h4>Powered by async fetch</h4>
  <quote :theJoke="theJoke"></quote>
</template>

<script>
import Quote from '../components/Quote.vue';
export default {
  components: { Quote },
  data() {
    return {
      theJoke: undefined,
    };
  },
  methods: {
    async getTheJoke() {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((res) => (this.theJoke = res.value))
        .catch((err) => "An error occurred." + err);
    },
  },
  mounted() {
    this.getTheJoke();
  },
};
</script>

<style></style>
