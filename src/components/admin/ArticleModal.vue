<template>
  <div
    class="modal fade"
    id="articleModal"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="articleModalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <button
                  type="button"
                  class="btn btn-sm btn-success ms-2"
                  @click="$refs.fileInput.click()"
                >
                  上傳圖片
                  <input
                    type="file"
                    class="form-control"
                    id="imageFile"
                    @change="uploadImage"
                    ref="fileInput"
                    accept="image/png, image/gif, image/jpeg"
                    style="display:none;"
                  />
                </button>
                <input
                  id="imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="articleInfo.imageUrl"
                >
                <img class="img-fluid" :src="articleInfo.imageUrl" />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">
                  文章標題<span class="text-red">&nbsp;*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章標題"
                  v-model="articleInfo.title"
                >
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="author" class="form-label">
                    作者<span class="text-red">&nbsp;*</span>
                  </label>
                  <input
                    id="author"
                    type="text"
                    class="form-control"
                    placeholder="請輸入作者"
                    v-model="articleInfo.author"
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <div class="mb-2">發佈狀態</div>
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="isPublic"
                      autocomplete="off"
                      :checked="articleInfo.isPublic"
                      @click="articleInfo.isPublic = true"
                    />
                    <label class="btn btn-outline-success" for="isPublic">發佈</label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="notPublic"
                      autocomplete="off"
                      :checked="!articleInfo.isPublic"
                      @click="articleInfo.isPublic = false"
                    />
                    <label class="btn btn-outline-secondary" for="notPublic">下架</label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <label for="content" class="form-label">
                  文章內容<span class="text-red">&nbsp;*</span>
                </label>
                <ckeditor
                  v-model="articleInfo.article"
                  :editor="editor"
                  :config="editorConfig"
                ></ckeditor>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-primary"  @click="$emit('modify-article')">
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        height: 500,
      },
      modal: '',
      articleInfo: {},
    };
  },
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
  },
  methods: {
    uploadImage() {
      const file = this.$refs.fileInput.files[0];
      this.$emit('upload-image', file);
    },
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  watch: {
    article() {
      this.articleInfo = this.article;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
    });
  },
};
</script>
