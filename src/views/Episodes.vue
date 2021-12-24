<template>
  <div class="episodes">
    <div class="content">
      <ul>
        <li v-for="episode in episodes" :key="episode.episode_id">
          <router-link
            :to="{ name: 'EpisodeDetails', params: { id: episode.episode_id } }"
          >
            {{ episode.title }}
          </router-link>
        </li>
      </ul>
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Episodes",
  data() {
    return {
      episodes: [],
    };
  },
  beforeMount() {
    fetch("https://breakingbadapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => (this.episodes = data));
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/list.scss";

.episodes {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.content {
  display: flex;
}

a {
  text-decoration: none;
  color: white;
}
</style>
