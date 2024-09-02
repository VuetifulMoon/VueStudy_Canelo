<template>
  <div>
    <h1>메인 페이지</h1>
    <div>카테고리</div>
    <select v-model="category" @change="getNews">
      <option value="business">business</option>
      <option value="entertainment" :selected="true">entertainment</option>
      <option value="health">health</option>
      <option value="science">science</option>
      <option value="sports">sports</option>
      <option value="technology">technology</option>
    </select>
    <h1>뉴스 피드</h1>
    <NewsItem />
  </div>
</template>
<script>
import NewsItem from "./NewsItem.vue";
export default {
  components: { NewsItem },
  data() {
    return {
      category: "",
    };
  },
  created() {
    this.$store.commit("getNews", "business");
  },
  methods: {
    getNews() {
      console.log(this.$store.state.category);
      this.$store.commit("getNews", this.category);
    },
  },
};
</script>