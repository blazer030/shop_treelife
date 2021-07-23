<template>
  <div class="container-fluid">
    <loading :active="isLoading" />
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800"><i class="fas fa-newspaper"></i> 文章管理</h1>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">文章列表</h6>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-sm btn-success" @click="openModal('add')">
              新增文章
            </button>

            <div class="table-responsive">
              <table class="table mt-4">
                <thead>
                  <tr>
                    <th width="60%">文章標題</th>
                    <th width="10%">作者</th>
                    <th width="10%" class="text-center">發佈狀態</th>
                    <th width="10%" class="text-center">編輯</th>
                    <th width="10%" class="text-center">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="article in articleList" :key="article.id">
                    <td>
                      {{ article.title }}
                    </td>
                    <td>
                      {{ article.author }}
                    </td>
                    <td class="text-center">
                      <span
                        class="badge pointer"
                        :class="article.isPublic ? 'bg-success' : 'bg-secondary'"
                        style="font-size:1em;"
                        @click="publicChange(article)"
                      >
                        {{ article.isPublic ? 'ON' : 'OFF' }}
                      </span>
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-success move"
                        @click="openModal('update', article)"
                      >
                        編輯
                      </button>
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-danger move"
                        @click="openModal('delete', article)"
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-center">
              <p>
                目前有 <span id="articleCount">{{ articleList.length }}</span> 項文章
              </p>
            </div>
            <pagination :page-info="pageInfo" @page-change="getArticle"></pagination>
          </div>
        </div>
      </div>
    </div>
    <article-modal
      :article="tempArticle"
      :title="articleModalTitle"
      @modify-article="modifyArticle"
      @upload-image="uploadImage"
      ref="articleModal"
    ></article-modal>
    <delete-modal :item="tempArticle" @confirm="deleteArticle" ref="deleteModal"></delete-modal>
  </div>
</template>

<script>
import articleModal from '@/components/admin/ArticleModal.vue';
import pagination from '@/components/admin/Pagination.vue';
import deleteModal from '@/components/admin/DeleteModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      updateId: -1,
      articleList: [],
      tempArticle: {
        title: '',
        author: '',
        content: '',
        imageUrl: '',
        isPublic: true,
      },
      pageInfo: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
      articleModalTitle: '新增文章',
    };
  },
  components: {
    pagination,
    articleModal,
    deleteModal,
  },
  methods: {
    getArticle(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/articles?page=${page}`,
        )
        .then((response) => {
          if (response.data.success) {
            this.articleList = response.data.articles;
            this.pageInfo = response.data.pagination;
          } else {
            this.$moshaToast(response.data.message, {
              type: 'danger',
              showIcon: true,
              position: 'bottom-right',
            });
          }
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal(action, article) {
      switch (action) {
        case 'add':
        case 'update':
          if (article) {
            this.articleModalTitle = '修改文章';
            this.tempArticle = { ...article };
          } else {
            this.updateId = -1;
            this.articleModalTitle = '新增文章';

            this.tempArticle = {
              title: '',
              author: '',
              article: '',
              imageUrl: '',
              isPublic: true,
            };
          }
          this.$refs.articleModal.openModal();
          break;
        case 'delete':
          this.tempArticle = { ...article };
          this.$refs.deleteModal.openModal();
          break;
        default:
          break;
      }
    },
    modifyArticle() {
      let errorCount = 0;

      if (this.tempArticle.title === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入文章標題', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (this.tempArticle.author === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入作者', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (this.tempArticle.article === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入文章內容', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (errorCount === 0) {
        const article = {
          data: {
            title: this.tempArticle.title.trim(),
            author: this.tempArticle.author.trim(),
            content: 'article',
            isPublic: this.tempArticle.isPublic,
            imageUrl: this.tempArticle.imageUrl,
            article: this.tempArticle.article,
          },
        };

        if (this.tempArticle.create_at) {
          article.data.create_at = this.tempArticle.create_at;
        } else {
          article.data.create_at = Date.now();
        }

        if (this.tempArticle.id) {
          this.editArticle(this.tempArticle.id, article, () => {
            this.$refs.articleModal.hideModal();
          });
        } else {
          this.addArticle(article, () => {
            this.$refs.articleModal.hideModal();
          });
        }
      }
    },
    publicChange(article) {
      const updateArticle = {
        data: {
          title: article.title,
          author: article.author,
          content: 'article',
          create_at: article.create_at,
          isPublic: !article.isPublic,
        },
      };
      this.editArticle(article.id, updateArticle);
    },
    addArticle(article, callback) {
      this.isLoading = true;
      this.$http
        .post(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/article`,
          article,
        )
        .then((response) => {
          if (response.data.success) {
            this.$moshaToast(response.data.message, {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.getArticle();
          } else {
            this.$moshaToast(response.data.message, {
              type: 'danger',
              showIcon: true,
              position: 'bottom-right',
            });
            this.isLoading = false;
          }

          if (callback) {
            callback();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editArticle(articleId, article, callback) {
      this.isLoading = true;
      this.$http
        .put(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/article/${articleId}`,
          article,
        )
        .then((response) => {
          if (response.data.success) {
            this.$moshaToast(response.data.message, {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.getArticle();
          } else {
            this.$moshaToast(response.data.message, {
              type: 'danger',
              showIcon: true,
              position: 'bottom-right',
            });
            this.isLoading = false;
          }

          if (callback) {
            callback();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteArticle(articleId) {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/article/${articleId}`,
        )
        .then((response) => {
          if (response.data.success) {
            this.$refs.deleteModal.hideModal();
            this.$moshaToast(response.data.message, {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.getArticle();
          } else {
            this.$moshaToast(response.data.message, {
              type: 'danger',
              showIcon: true,
              position: 'bottom-right',
            });
            this.isLoading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadImage(file) {
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.$http
        .post(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/upload`,
          formData,
        )
        .then((response) => {
          if (response.data.success) {
            this.$moshaToast('上傳成功', {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.tempArticle.imageUrl = response.data.imageUrl;
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
    this.getArticle();
  },
};
</script>
