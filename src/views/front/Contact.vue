<template>
  <div>
    <section class="page-banner bg-primary">
      <div class="container">
        <h2><i class="fas fa-phone"></i>&emsp;聯絡我們</h2>
      </div>
    </section>
    <section class="path">
      <div class="container">
        <div class="pathway">
          <span><router-link to="/">首頁</router-link></span>
          <i class="fa fa-caret-right"></i>
          <span>聯絡我們</span>
        </div>
      </div>
    </section>
    <section class="contact container my-4">
      <div class="row justify-content-center">
        <Form
          v-slot="{ errors }"
          ref="form"
          class="col-xs-12 col-md-6 p-4 bg-white rounded-2 bd-top box-shadow"
          @submit="send"
        >
          <p>
            若您有任何問題或建議歡迎來電
            <a href="tel:0912345678">0912-345-678</a>
            或填寫以下表單與我們聯繫，客服人員將儘速回覆您。
          </p>
          <div class="mb-3">
            <label for="name" class="form-label">
              姓名
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">
              聯絡電話
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="tel"
              name="聯絡電話"
              type="tel"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['聯絡電話'] }"
              placeholder="請輸入聯絡電話"
              rules="min:8|required"
              v-model="user.tel"
            ></Field>
            <ErrorMessage name="聯絡電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              電子信箱
              <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="email"
              name="電子信箱"
              type="email"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['電子信箱'] }"
              placeholder="請輸入電子信箱"
              rules="email|required"
              v-model="user.email"
            ></Field>
            <ErrorMessage name="電子信箱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              詢問內容 <span class="badge bg-danger">必填</span>
            </label>
            <Field
              id="message"
              name="詢問內容"
              as="textarea"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors['詢問內容'] }"
              placeholder="請輸入詢問內容"
              rules="required"
              v-model="user.message"
              cols="30"
              rows="5"
            ></Field>
            <ErrorMessage name="詢問內容" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">
              聯絡我們
            </button>
          </div>
        </Form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    send() {
      this.$refs.form.resetForm();
      this.$moshaToast('您的訊息已送出，客服會儘速回覆您！', {
        type: 'success',
        showIcon: true,
        position: 'bottom-right',
      });
    },
  },
};
</script>
