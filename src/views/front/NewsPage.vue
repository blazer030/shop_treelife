<template>
  <div>
    <loading :active="isLoading" />
    <section class="page-banner bg-primary">
      <div class="container">
        <h2><i class="fas fa-bullhorn"></i>&emsp;最新消息</h2>
      </div>
    </section>
    <section class="path">
      <div class="container">
        <div class="pathway">
          <span><router-link to="/">首頁</router-link></span>
          <i class="fa fa-caret-right"></i>
          <span>最新消息</span>
        </div>
      </div>
    </section>
    <section class="news container my-4">
      <div class="p-4 bg-white rounded-2 bd-top box-shadow">
        <h1 class="text-center"> {{ news.title }} </h1>
        <p class="text-center">
          <span class="badge bg-secondary me-4"> {{ news.author }} </span>
          {{ unixTimeToDate(news.create_at) }}
        </p>
        <div class="px-4" v-html="news.article"></div>
        <div class="line_button mb-0">
          <router-link to="/news" class="btn btn-primary">
            <i class="fa fa-chevron-left"></i>&nbsp;返回
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import methodMixin from '@/mixins/methodMixin';

export default {
  data() {
    return {
      news: {},
      isLoading: false,
    };
  },
  mixins: [methodMixin],
  methods: {
    getNews() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/article/${id}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          console.log(response.data);
          this.news = response.data.article;
          this.isLoading = false;
        } else {
          this.$moshaToast(response.data.message, {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }
      });
    },
  },
  created() {
    this.getNews();
  },
};
</script>
