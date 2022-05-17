<template>
  <div class="review-item">
    {{ item.text }}
    {{ item.rating }}
  </div>
</template>

<script>
export default {
  name: "ReviewItem",
  props: {
    item: {
      type: Object,
      default() {
        return null;
      }
    }
  }
}
</script>

<style scoped>
.review-item {

}
</style>
