<template>
    <form class="create-review" @submit.prevent="onSubmit">

      <select v-model="form.restaurant">
        <option
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            :value="restaurant"
        >{{restaurant.name}}</option>
      </select>

      <textarea v-model="form.text" />

      <div class="create-review__rating">
        <input
            name="rating"
            type="radio"
            v-for="rate of maxRating"
            :key="rate"
            :value="rate"
            v-model="form.rating"
        >
      </div>

      <button type="submit">
        Add new review
      </button>
    </form>
</template>

<script>
import {mapState} from "vuex";
import {SET_REVIEW} from "@/store/config/actions.type";

export default {
  name: "ReviewForm",
  data() {
    return {
      form: {
        text: '',
        rating: 0,
        restaurant: null
      },

      maxRating: 5
    }
  },
  computed: mapState({
    restaurants: state => state.restaurants
  }),
  methods: {
    onSubmit() {
      if (!this.form.text || !this.form.rating) {
        return;
      }

      this.$store.dispatch(SET_REVIEW, this.form)
    }
  }
}
</script>

<style scoped>
.create-review {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(4, 250px);
}
</style>
