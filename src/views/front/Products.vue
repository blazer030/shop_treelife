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
          <span>商品列表</span>
        </div>
      </div>
    </section>
    <section class="container my-4">
      <div class="row">
        <div class="col-lg-2 col-md-3 mb-4">
          <ul class="filter list-group rounded-0">
            <li
              class="list-group-item pointer"
              :class="{ active: filterCategory === '' }"
              @click.prevent="filterCategory = ''"
            >
              全部商品
            </li>
            <li
              class="list-group-item pointer"
              v-for="item in categoryList"
              :key="item"
              :class="{ active: filterCategory === item }"
              @click.prevent="filterCategory = item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="col-lg-10 col-md-9">
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4" v-for="product in filterProducts" :key="product.id">
              <div class="card product-grid">
                <router-link class="product-link" :to="`/product/${product.id}`">
                  <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />
                </router-link>
                <div class="card-body">
                  <h5 class="card-title name">
                    {{ product.title }}
                    <span class="badge rounded-pill bg-secondary">{{ product.category }}</span>
                  </h5>
                  <div class="text-right mb-3 price">{{ currency(product.price) }}</div>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-add-to-cart"
                    @click="addToCart(product.id, 1)"
                    :disabled="loadingStatus.loadingItem === product.id"
                  >
                    <i
                      class="fas fa-spinner fa-pulse"
                      v-if="loadingStatus.loadingItem === product.id"
                    ></i>
                    <i class="fa fa-cart-plus" v-if="loadingStatus.loadingItem !== product.id"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
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
      products: [],
      categoryList: ['盆栽', '盆器', '圓藝器具', '種子'],
      filterCategory: '',
      isLoading: false,
      loadingStatus: {
        loadingItem: '',
      },
    };
  },
  mixins: [methodMixin],
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/products`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.products = response.data.products;
        }
        this.isLoading = false;
      });
    },
    addToCart(id, qty = 1) {
      this.loadingStatus.loadingItem = id;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/cart`;
      const postData = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: postData }).then((response) => {
        this.loadingStatus.loadingItem = '';
        this.$moshaToast(response.data.message, {
          type: response.data.success ? 'success' : 'danger',
          showIcon: true,
          position: 'bottom-right',
        });
      });
    },
    goToPage(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  computed: {
    filterProducts() {
      if (this.filterCategory) {
        return this.products.filter((item) => item.category.includes(this.filterCategory));
      }

      return this.products;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
