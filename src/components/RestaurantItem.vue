<template>
  <div class="restaurant-item">
    <p>{{item.name}}</p>
    <div class="restaurant-item__review-list">
      <review-item
          v-for="review in item.reviews"
          :key="review.id"
          :item="review"
      />
    </div>
  </div>
</template>

<script>
import ReviewItem from "@/components/ReviewItem";
export default {
  name: "RestaurantItem",
  components: {ReviewItem},
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
.restaurant-item {

}

.restaurant-item__review-list {

}
</style>
