import axios from "axios";
export default {
  state: {
    news: [],
    category: "business",
    pageCount: 1,
    totalPage: 1,
  },
  mutations: {
    getNews(state, { category, pageNum }) {
      state.category = category;
      state.pageCount = pageNum;
      const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${state.category}&page=${state.pageCount}&apiKey=639941d2503f480c8d60edd0fc81f642`;
      return axios.get(url).then((res) => {
        console.log(res);
        state.totalPage = Math.ceil(res.data.totalResults / 20);
        state.news = res.data;
      });
    },
  },
  actions: {},
  getters: {
    // calcPage(state) {
    //   const totalPage = state.news.totalResults / 20;
    //   console.log(totalPage);
    //   return totalPage < 1 && "NaN" && "undefined" ? 1 : Math.ceil(totalPage);
    // },
  },
};
