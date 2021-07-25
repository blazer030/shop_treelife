<template>
  <div>
    <loading :active="isLoading" />
    <section class="page-banner bg-primary">
      <div class="container">
        <h2><i class="fas fa-shopping-cart"></i>&emsp;購物車</h2>
      </div>
    </section>
    <section class="path">
      <div class="container">
        <div class="pathway">
          <span><router-link to="/">首頁</router-link></span>
          <i class="fa fa-caret-right"></i>
          <span>購物車</span>
        </div>
      </div>
    </section>
    <section class="container my-4" v-show="step === 1">
      <!-- 購物車列表 -->
      <div class="p-4 bg-white rounded-2 bd-top box-shadow my-4">
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            @click="deleteAllCart"
            :disabled="cart.carts?.length === 0"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle" v-show="cart.carts?.length > 0">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="deleteCart(item)"
                  :disabled="loadingStatus.deleteItem === item.id"
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.deleteItem === item.id"
                  ></i>
                  x
                </button>
              </td>
              <td>{{ item.product.title }}</td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      type="number"
                      min="1"
                      @blur="updateCart(item)"
                      v-model.number="item.qty"
                      :disabled="loadingStatus.loadingItem === item.id"
                      class="form-control"
                    />
                    <span class="input-group-text" id="basic_addon2">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                {{ item.final_total }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="text-center" v-show="cart.carts?.length === 0">
          <p>
            購物車無商品，快去逛逛
          </p>
          <router-link to="/products" class="btn btn-primary">
            <i class="fa fa-chevron-left"></i>&nbsp;前去購物
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary" @click="step = 2" :disabled="cart.carts?.length === 0">
          下一步&nbsp;<i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
    <section class="container my-4" v-show="step === 2">
      <Form v-slot="{ errors }" ref="form" class="row justify-content-center" @submit="submitOrder">
        <div class="col-md-6 p-4 bg-white rounded-2 bd-top box-shadow mb-4">
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="email"
              name="信箱"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              收件人姓名
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="name"
              name="收件人姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['收件人姓名'] }"
              placeholder="請輸入收件人姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="收件人姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">
              收件人電話
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="tel"
              name="收件人電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['收件人電話'] }"
              placeholder="請輸入收件人電話"
              rules="min:8|required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="收件人電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">
              收件人地址
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="address"
              name="收件人地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['收件人地址'] }"
              placeholder="請輸入收件人地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="收件人地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="5"
              v-model="form.message"
            ></textarea>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <button type="button" class="btn btn-primary" @click="step = 1">
            <i class="fa fa-chevron-left"></i>&nbsp;上一步
          </button>
          <button type="submit" class="btn btn-primary" :disabled="cart.carts?.length === 0">
            送出訂單&nbsp;<i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </Form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      cart: {},
      form: {
        user: {},
        message: '',
      },
      isLoading: false,
      loadingStatus: {
        loadingItem: '',
        deleteItem: '',
      },
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/cart`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.cart = response.data.data;
        }
        this.isLoading = false;
      });
    },
    updateCart(item) {
      if (item.qty > 0) {
        this.loadingStatus.loadingItem = item.id;
        const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`;
        const cart = {
          product_id: item.product.id,
          qty: item.qty,
        };
        this.$http.put(url, { data: cart }).then((response) => {
          this.loadingStatus.loadingItem = '';
          if (response.data.success) {
            this.getCart();
          }
        });
      } else {
        this.$moshaToast('數量不可以小於1', {
          type: 'danger',
          showIcon: true,
          position: 'bottom-right',
        });
      }
    },
    deleteCart(item) {
      this.loadingStatus.deleteItem = item.id;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`;
      this.$http.delete(url).then((response) => {
        this.loadingStatus.deleteItem = '';
        if (response.data.success) {
          this.getCart();
        }
      });
    },
    deleteAllCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/carts`;
      this.$http.delete(url).then((response) => {
        if (response.data.success) {
          this.getCart();
        } else {
          this.$moshaToast(response.data.message, {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
          this.isLoading = false;
        }
      });
    },
    submitOrder() {
      const url = `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/order`;
      const order = this.form;
      this.isProcessing = true;
      this.$http.post(url, { data: order }).then((response) => {
        this.isProcessing = false;
        if (response.data.success) {
          this.$moshaToast(response.data.message, {
            type: 'success',
            showIcon: true,
            position: 'bottom-right',
          });
          this.resetForm();
          this.getCart();
        } else {
          this.$moshaToast(response.data.message, {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }
      });
    },
    resetForm() {
      this.form.message = '';
      this.$refs.form.resetForm();
    },
  },
  created() {
    this.getCart();
  },
};
</script>
