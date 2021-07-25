<template>
  <div>
    <section class="page-banner bg-primary">
      <div class="container">
        <h2><i class="far fa-question-circle"></i>&emsp;常見問題</h2>
      </div>
    </section>
    <section class="path">
      <div class="container">
        <div class="pathway">
          <span><router-link to="/">首頁</router-link></span>
          <i class="fa fa-caret-right"></i>
          <span>常見問題</span>
        </div>
      </div>
    </section>
    <section class="faq container my-4">
      <div class="card mb-4" v-for="item in faqList" :key="item.id">
        <div
          class="card-header bg-primary"
          data-bs-toggle="collapse"
          :data-bs-target="'#faq' + item.id"
          aria-expanded="true"
          :aria-controls="'#faq' + item.id"
        >
          <i class="far fa-question-circle"></i>&emsp;{{ item.question }}
        </div>
        <div class="collapse show" :id="'faq' + item.id">
          <div class="card-body">
            <p class="card-text">
              {{ item.anstion }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          id: 1,
          question: 'Special title treatment',
          anstion: 'With supporting text below as a natural lead-in to additional content.',
        },
        {
          id: 2,
          question: 'Special title treatment1',
          anstion: 'With supporting text below as a natural lead-in to additional content.',
        },
      ],
    };
  },
};
</script>
