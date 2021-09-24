<template>
  <ul v-if="items?.length" class="card-list">
    <li v-for="character in items" :key="character.char_id">
      <router-link
        v-if="character"
        :to="{ name: computedRouteNames.characterDetails, params: { id: character.char_id } }"
      >
        <Card :item="character" />
      </router-link>
    </li>
  </ul>
  <p v-else>Empty</p>
</template>

<script>
import Card from "./Card.vue";
import { routeNames } from "@/lib/constants/routes";

export default {
  name: "CardList",
  components: {
    Card,
  },
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    computedRouteNames: function() {
      return routeNames;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 100%;
    padding: 10px;
  }
}

@media only screen and (min-width: 376px) {
  .card-list {
    li {
      width: 50%;
    }
  }
}

@media only screen and (min-width: 576px) {
  .card-list {
    li {
      width: 33.33333%;
    }
  }
}

@media only screen and (min-width: 769px) {
  .card-list {
    li {
      width: 25%;
    }
  }
}
</style>
