<template>
  <section class="home-page">
    <review-form />
    <div class="home-page__reviews">
      <RestaurantItem
          v-for="item in restaurants"
          :key="item.id"
          :item="item"
      />
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import RestaurantItem from "@/components/RestaurantItem";
import ReviewForm from "@/components/ReviewForm";

export default {
  name: "HomePage",
  components: {ReviewForm, RestaurantItem},
  computed: mapState({
    restaurants: state => state.restaurants
  })

}
</script>

<style scoped>
.home-page {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
