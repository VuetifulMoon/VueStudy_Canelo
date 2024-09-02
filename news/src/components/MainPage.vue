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
    <div v-for="page in totalPage" :key="page">
      <button @click="pageNumber(page)">
        {{ page }}
      </button>
    </div>
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
      pageNum: 1,
      totalPage: 1,
    };
  },
  created() {
    //뉴스 가져오기
    this.$store.commit("getNews", {
      category: "business",
      pageNum: 1,
    });
    //총 페이지 개수 저장
    this.totalPage = this.$store.state.news.totalPage;
  },
  beforeUpdate() {
    this.$store.commit("getNews", {
      category: "business",
      pageNum: this.pageNum,
    });
  },

  methods: {
    pageNumber(page) {
      this.pageNum = page;
      this.getNews();
    },
    getNews() {
      this.$store.commit("getNews", {
        category: this.category,
        pageNum: this.pageNum,
      });
      this.totalPage = this.$store.state.news.totalPage;
    },
  },
};
</script>