<script setup lang="ts"></script>

<template>
  <div class="main">
    <img class="hero-img" src="../assets/illustration-hero.svg" />
    <h1 class="header">Order Summary</h1>
    <p class="description">
      You can now listen to millions of songs, audiobooks, and podcasts on any
      device anywhere you like!
    </p>

    <div class="plan">
      <div class="icon"><img src="../assets/icon-music.svg" /></div>
      <div class="text">
        <h1 class="plan-header">Annual Plan</h1>
        <p class="plan-price">$59.99/year</p>
      </div>
      <button class="change">Change</button>
    </div>

    <button class="submit">Proceed to Payment</button>

    <button class="cancel">Cancel Order</button>
  </div>
</template>

<style scoped>
.main {
  width: calc(100vw - 48px);
  max-width: 450px;
  height: calc(100vh - 142px);
  max-height: 697px;

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);

  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: auto;
}

.header {
  margin: 0 auto;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
  color: #1f2e55;

  width: 100%;
}

.description {
  margin: 0 auto;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #717fa6;
}

.icon {
  width: 48px;
  height: 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.plan {
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.text {
  margin-left: 20px;

  display: flex;
  flex-direction: column;
}

.plan-header {
  margin: 0;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 21px;
  color: #1f2e55;
}

.plan-price {
  margin: 0;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #717fa6;
}

.change {
  margin-left: auto;

  background: transparent;
  border: none;
  outline: none;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #382ae1;

  cursor: pointer;
}

.change:hover {
  color: #766cf1;
  text-decoration-line: none;
}

.cancel {
  display: block;

  margin: 0 auto;

  background: transparent;
  border: none;
  outline: none;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: #717fa6;

  cursor: pointer;
}

.cancel:hover {
  color: #1f2e55;
}

.submit {
  display: block;

  margin: 0 auto;
  padding: 15px 0;

  background: #382ae1;
  box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
  border-radius: 11px;

  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;

  cursor: pointer;

  border: none;
  outline: none;
}

.submit:hover {
  background: #766cf1;
}

@media screen and (orientation: landscape) {
  .header {
    margin-top: 45px;
  }

  .description {
    margin-top: 17px;
  }

  .header,
  .description,
  .plan,
  .submit {
    width: calc(100% - 96px);
  }

  .plan {
    padding: 25px 24px;
    margin-top: 20px;
  }

  .submit,
  .cancel {
    margin-top: 32px;
  }
}

@media screen and (orientation: portrait) {
  .header {
    margin-top: 32px;

    font-size: 22px;
    line-height: 29px;
  }

  .description {
    margin-top: 16px;

    font-size: 15px;
    line-height: 25px;
  }

  .header,
  .description,
  .plan,
  .submit {
    width: calc(100% - 64px);
  }

  .plan {
    padding: 17px 16px;
    margin-top: 24px;
  }

  .plan-header {
    font-size: 14px;
    line-height: 19px;
  }

  .plan-price {
    font-size: 14px;
    line-height: 19px;
  }

  .change {
    font-size: 13px;
    line-height: 17px;
  }

  .submit,
  .cancel {
    margin-top: 24px;
  }
}
</style>
