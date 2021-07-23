<template>
  <div>
    <loading :active="isLoading" />
    <section class="page-banner bg-primary">
      <div class="container">
        <h2><i class="fas fa-shopping-basket"></i>&emsp;商品列表</h2>
      </div>
    </section>
    <section class="path">
      <div class="container">
        <div class="pathway">
          <span><router-link to="/">首頁</router-link></span>
          <i class="fa fa-caret-right"></i>
          <span><router-link to="/products">商品列表</router-link></span>
          <i class="fa fa-caret-right"></i>
          <span>{{ this.product.title }}</span>
        </div>
      </div>
    </section>
    <section class="container my-4">
      <div class="row">
        <div class="col-sm-12 col-md-5 text-center">
          <img :src="this.product.imageUrl" class="img-fluid h400" />
        </div>
        <div class="col-sm-12 col-md-7">
          <h1>{{ this.product.title }}</h1>
          <p>{{ this.product.content }}</p>
        </div>
      </div>
      <div class="line_button mt-5">
        <router-link to="/products" class="btn btn-primary"
          ><i class="fa fa-chevron-left"></i>&nbsp;返回</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/product/${id}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.product = response.data.product;
          this.isLoading = false;
        }
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
