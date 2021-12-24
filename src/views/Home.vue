<template>
  <div class="home">
    <p>
      <span class="seasonNum">05</span>
      <span class="B br">Br</span>eaking
    </p>
    <p class="bad">
      <span class="episodeNum">09</span>
      <span class="B">Ba</span>d
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* Credit: Nate Griffin design https://codepen.io/NateGriffin/pen/alEqg */
p {
  font-size: 140px;
  font-family: sans-serif;
  color: #fff;
  margin: 0;
}
.seasonNum,
.episodeNum {
  font-size: 14px;
  display: inline-block;
  position: absolute;
  margin-left: 165px;
}
.episodeNum {
  margin-left: 170px;
}
.bad {
  margin: 24px 189px;
}
.B {
  padding: 10px;
  background: green;
  border: 3px solid #fff;
  width: 200px;
  height: 200px;
  background: #46a08c; /* Old browsers */
  background: -webkit-linear-gradient(
    130deg,
    #46a08c 0%,
    #1c3f1d 100%,
    #303030 90%
  );
  background: -moz-linear-gradient(
    130deg,
    #46a08c 0%,
    #1c3f1d 100%,
    #303030 90%
  );
  background: -o-linear-gradient(130deg, #46a08c 0%, #1c3f1d 100%, #303030 90%);
  background: linear-gradient(130deg, #46a08c 0%, #1c3f1d 100%, #303030 90%);
  box-shadow: inset 0px 2px 2px rgba(50, 50, 50, 0.6);
}
.br {
  padding: 10px 22px;
}
</style>
