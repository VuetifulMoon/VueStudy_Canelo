<template>
  <div>
    <div>{{ newsData }}</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsData: [],
    };
  },
  async created() {
    this.newsData = await this.getNews();
  },
  methods: {
    getNews() {
      return axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=639941d2503f480c8d60edd0fc81f642"
        )
        .then((res) => {
          console.log(res);
          return res.data.articles;
        });
    },
  },
};
</script>