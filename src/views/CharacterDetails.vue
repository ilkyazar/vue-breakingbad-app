<template>
  <div>
    <Card :item="details" :isListItem="false">
      <hr />
      <ul>
        <li v-for="quote in quotes" :key="quote.quote_id">
          {{ quote.quote }}
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CharacterDetails",
  components: {
    Card,
  },
  data() {
    return {
      details: null,
      quotes: null,
    };
  },
  async beforeMount() {
    await fetch(
      `https://breakingbadapi.com/api/characters/${this.$route.params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.$nextTick(function () {
          this.details = data[0];
        });
      });
    await fetch(
      `https://breakingbadapi.com/api/quote?author=${this.details.name.replaceAll(
        " ",
        "+"
      )}`
    )
      .then((quoteArr) => quoteArr.json())
      .then((quotes) => {
        this.quotes = quotes;
      });
  },
  /* beforeMount() {
    fetch(`https://breakingbadapi.com/api/characters/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.$nextTick(function () {
          this.details = data[0];
          fetch(
            `https://breakingbadapi.com/api/quote?author=${this.details.name.replaceAll(
              " ",
              "+"
            )}`
          )
            .then((quoteArr) => quoteArr.json())
            .then((quotes) => {
              this.quotes = quotes;
            });
        });
      });
  }, */
};
</script>
