import axios from "axios";
export default {
  state: {
    news: [],
    category: "business",
  },
  mutations: {
    getNews(state, category) {
      state.category = category;
      console.log(category);
      const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${state.category}&apiKey=639941d2503f480c8d60edd0fc81f642`;
      axios.get(url).then((res) => {
        console.log(res);
        state.news = res.data.articles;
      });
    },
  },
  actions: {},
  getters: {},
};
