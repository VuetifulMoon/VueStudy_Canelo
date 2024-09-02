<template>
  <div>
    <div v-for="item in news" :key="item.id">
      저자 :{{ item.author }}<br />
      내용 : {{ item.title }}<br />
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    news() {
      return this.$store.state.news.news;
    },
  },
};
</script>