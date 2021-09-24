<template>
  <div v-if="item" class="card" :class="{ 'card-row': !isListItem }">
    <div class="card-header">{{ item.name }}</div>
    <div class="card-body">
      <div class="image-holder">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="info-holder">
        <p><strong>Occupation</strong>: {{ item.occupation.join(", ") }}</p>
        <p><strong>Status</strong>: {{ item.status }}</p>
        <p><strong>Nickname</strong>: {{ item.nickname }}</p>
        <p><strong>Category</strong>: {{ item.category }}</p>
        <p>
          <strong>Birthday</strong>:
          {{ new Date(item.birthday).toLocaleDateString() }}
        </p>
        <p><strong>Portrayed</strong>: {{ item.portrayed }}</p>
        <slot/>
      </div>
    </div>
    <div class="card-footer"></div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    isListItem: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  box-shadow: 6px 9px 21px 0px rgba(0, 0, 0, 0.75);

  &:not(.card-row) {
    .card-body {
      .image-holder {
        height: 250px;
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;

    .image-holder {
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center top;
      }
    }

    .info-holder {
      padding: 10px;
    }
  }
  &.card-row {
    .card-body {
      flex-direction: row;
    }
  }
}
</style>
