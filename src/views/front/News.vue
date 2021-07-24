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
        <ul class="news p-0">
          <li
            class="news-item card mb-4 box-shadow"
            v-for="item in newsList"
            :key="item.id"
          >
            <router-link :to="`/newsPage/${item.id}`" class="row m-0">
              <div
                class="image col-md-4"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <div class="content col-md-8 p-2 ps-4">
                <div class="badge bg-secondary d-inline"> {{ item.author }} </div>
                <p class="ms-2 d-inline"> {{ unixTimeToDate(item.create_at) }} </p>
                <h2 class="title mt-3">{{ item.title }}</h2>
              </div>
            </router-link>
          </li>
        </ul>
        <pagination :page-info="pageInfo" @page-change="getNews"></pagination>
      </div>
    </section>
  </div>
</template>

<script>
import pagination from '@/components/common/Pagination.vue';
import methodMixin from '@/mixins/methodMixin';

export default {
  data() {
    return {
      newsList: [],
      isLoading: false,
      pageInfo: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
    };
  },
  mixins: [methodMixin],
  components: {
    pagination,
  },
  methods: {
    getNews(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/articles?page=${page}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.newsList = response.data.articles;
          console.log(this.newsList);
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
