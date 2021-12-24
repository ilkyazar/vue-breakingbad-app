<template>
  <div class="characters">
    <CardList :items="characterList" />
  </div>
</template>

<script>
import CardList from "../components/CardList.vue";

export default {
  name: "Characters",
  components: {
    CardList,
  },
  data() {
    return {
      characterList: [],
    };
  },
  beforeMount() {
    fetch("https://breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered
          this.characterList = data;
        });
      });
  },
};
</script>
