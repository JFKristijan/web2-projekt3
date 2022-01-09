<template>
  <h1>Stopwatch</h1>
  <p>Time spent on this page this session: <br />{{ timeSpent }} s</p>
</template>

<script>
export default {
  data() {
    return {
      startedAt: undefined,
      timeSpent: 0,
    };
  },
  mounted() {
    this.startedAt = new Date();
    window.setInterval(
      () => (this.timeSpent = Math.round((new Date() - this.startedAt) / 1000)),
      1000
    );
  },
};
</script>

<style scoped>
h1{
  color: red;
}
</style>