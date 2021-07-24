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
          <span>
            <router-link :to="'/products?category=' + product.category">
              {{ product.category }}
            </router-link>
          </span>
          <i class="fa fa-caret-right"></i>
          <span>{{ product.title }}</span>
        </div>
      </div>
    </section>
    <section class="container my-4">
      <div class="row product-info justify-content-center">
        <div class="col-lg-10 col-xs-12">
            <div class="row">
            <div class="col-sm-12 col-md-5 mb-4">
              <div class="image" :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
            </div>
            <div class="col-sm-12 col-md-7">
              <h1 class="name">
                {{ product.title }}
                <router-link
                  :to="'/products?category=' + product.category"
                  class="category badge rounded-pill bg-secondary"
                >
                  {{ product.category }}
                </router-link>
              </h1>
              <div class="mb-4 price">
                <span>{{ currency(product.price) }} </span> / {{ product.unit }}
              </div>
              <p class="description">{{ product.description }}</p>
              <div class="d-flex">
                <div class="w-50 me-3">
                  <select name="num" class="form-select rounded-0" v-model="num">
                    <option v-for="num in 5" :value="num" :key="num">
                      {{ num }} {{ product.unit }}
                    </option>
                  </select>
                </div>
                <button
                  type="button"
                  class="btn btn-primary col-xs-5 rounded-0 w-50"
                  @click.prevent="addToCart(product.id, num)"
                  :disabled="isProcessing"
                >
                  <i class="fas fa-spinner fa-spin" v-if="isProcessing"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line_button mt-5">
        <router-link to="/products" class="btn btn-primary">
          <i class="fa fa-chevron-left"></i>&nbsp;返回
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import methodMixin from '@/mixins/methodMixin';

export default {
  data() {
    return {
      num: 1,
      product: {},
      isLoading: false,
      isProcessing: false,
    };
  },
  mixins: [methodMixin],
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/product/${id}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.product = response.data.product;
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
    addToCart(id, qty = 1) {
      this.isProcessing = true;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/cart`;
      const postData = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: postData }).then((response) => {
        this.isProcessing = false;
        this.$moshaToast(response.data.message, {
          type: response.data.success ? 'success' : 'danger',
          showIcon: true,
          position: 'bottom-right',
        });
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
