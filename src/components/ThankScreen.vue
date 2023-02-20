<script setup lang="ts">
defineProps(["selected"]);
</script>

<template>
  <div class="content">
    <img
      src="../assets/illustration-thank-you.svg"
      alt="Thank you illustration"
      class="icon"
    />

    <h1 class="selected">You selected {{ selected }} out of 5</h1>

    <h1 class="header">Thank you!</h1>

    <p class="description">
      We appreciate you taking the time to give a rating. If you ever need more
      support, don’t hesitate to get in touch!
    </p>
  </div>
</template>

<style scoped>
.icon {
  margin: 34px auto 0 auto;
}

.selected {
  background: #262e38;
  border-radius: 22.5px;

  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #fc7614;

  width: fit-content;

  margin: 32px auto 0 auto;

  padding: 5px 12px;
}

.header {
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;

  margin: 32px auto 0 auto;
}

.description {
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #969fad;

  width: calc(100% - 32px - 40px);

  margin: 7px 0 0 32px;
}
</style>
