<script setup lang="ts"></script>

<template>
  <div class="nft-card">
    <div class="image">
      <div class="hover">
        <img src="../assets/icon-view.svg" />
      </div>
    </div>
    <h1 class="header">Equilibrium #3429</h1>
    <p class="description">
      Our Equilibrium collection promotes balance and calm.
    </p>

    <div class="footer">
      <div class="price">
        <img src="../assets/icon-ethereum.svg" />
        <span class="price">0.041 ETH</span>
      </div>
      <div class="time">
        <img src="../assets/icon-clock.svg" />
        <span class="time">3 days left</span>
      </div>
    </div>

    <div class="divider"></div>

    <div class="author">
      <img src="../assets/image-avatar.png" />
      <h1>Creation of <span>Jules Wyvern</span></h1>
    </div>
  </div>
</template>

<style scoped>
.nft-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 350px;
  width: calc(100% - 16px);
  max-height: 595px;
  height: calc(100% - 62px);

  background: #15263f;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;
}

.image {
  width: calc(100% - 48px);
  aspect-ratio: 1/1;

  margin: 24px 0 0 24px;

  overflow: hidden;

  background-image: url("../assets/image-equilibrium.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}

.header {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #fff;

  margin: 24px 0 0 24px;

  width: fit-content;
  max-width: calc(100% - 48px);
}

.header:hover {
  color: #00fff8;
  cursor: pointer;
}

.description {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #8bacd9;

  margin: 16px 0 0 24px;

  width: calc(100% - 48px);
}

.footer {
  margin: 24px 25px 0 24px;

  width: calc(100% - 49px);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.price,
.time {
  font-family: "Outfit";
  font-style: normal;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.price {
  font-weight: 600;
  color: #00fff8;

  gap: 6.48px;
}

.time {
  font-weight: 400;
  color: #8bacd9;

  gap: 7.7px;
}

.divider {
  width: calc(100% - 48px);
  height: 1px;

  background: #2e405a;

  margin: 24px 0 0 24px;
}

.author {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: calc(100% - 48px);
  margin: 16px 0 0 24px;
}

.author img {
  width: 33px;
  height: 33px;

  border-radius: 100%;
  border: 1px solid #fff;
}

.author span {
  color: #fff;
}

.author h1 {
  margin: 0 0 0 16px;

  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #8bacd9;
}

.author h1 span:hover {
  cursor: pointer;
  color: #00fff8;
}

.image:hover .hover {
  opacity: 1;
  cursor: pointer;

  transition: 300ms;
}

.hover {
  opacity: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #00fff880;

  transition: 300ms;
}
</style>
