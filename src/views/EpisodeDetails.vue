<template>
  <div>Episode {{ currentId }}</div>
</template>

<script>
export default {
  name: "EpisodeDetails",
  data() {
    return {
      currentId: null,
    };
  },
  beforeMount() {
    this.currentId = this.$route.params.id;
  },
};
</script>
