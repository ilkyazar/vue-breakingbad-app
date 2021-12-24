<template>
  <div>Episode {{ currentId }}</div>
  <Video />
</template>

<script>
import Video from "@/views/Video.vue";

export default {
  name: "EpisodeDetails",
  components: {
    Video,
  },
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

<style scoped>
div {
  margin-right: 30px;
}
</style>
