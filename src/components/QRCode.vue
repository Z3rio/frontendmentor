<script setup lang="ts"></script>

<template>
  <div class="qr">
    <div class="holder">
      <div class="qr-image"></div>
      <div class="circle one"></div>
      <div class="circle two"></div>
    </div>

    <div class="text">
      <h1 class="header">Improve your front-end skills by building projects</h1>
      <p class="description">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  </div>
</template>

<style scoped>
.qr {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 320px;
  height: 497px;

  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
}

.holder {
  position: relative;

  width: 288px;
  height: 288px;

  margin: 16px 0 0 16px;

  background: #2c7dfa;
  border-radius: 10px;

  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;

  width: 270px;
  height: 270px;

  border-radius: 100%;
  background: #3685ff;
}

.circle.one {
  right: 91.5px;
  bottom: 124.5px;
}

.circle.two {
  left: 131.5px;
  top: 204.5px;
}

.qr-image {
  background: url("../assets/image-qr-code.png");
  background-size: cover;
  background-position: center;

  width: 160px;
  height: 160px;

  z-index: 3;
}

.text {
  margin-top: 24px;
  margin-left: 16px;

  width: calc(100% - 32px);

  display: flex;
  flex-direction: column;
}

.header {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #1f314f;

  margin: 0;
}

.description {
  margin: 16px 0 0 16px;

  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
  color: #7d889e;

  width: calc(100% - 32px);
}
</style>
