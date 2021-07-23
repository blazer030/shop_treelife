<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="couponModalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="name" class="form-label">
                  折價券標題<span class="text-red">&nbsp;*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="請輸入折價券標題"
                  v-model="couponInfo.title"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  折價券代碼<span class="text-red">&nbsp;*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="請輸入折價券代碼"
                  v-model="couponInfo.code"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  折扣數<span class="text-red">&nbsp;*</span>
                </label>
                <input
                  id="name"
                  type="number"
                  class="form-control"
                  placeholder="請輸入折扣數"
                  v-model.number="couponInfo.percent"
                  max="100"
                  min="0"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  到期日<span class="text-red">&nbsp;*</span>
                </label>
                <v-date-picker
                  :update-on-input="false"
                  placeholder="請輸入到期日"
                  v-model="couponInfo.due_date"
                  :model-config="modelConfig"
                  mode="datetime"
                >
                  <template v-slot="{ inputValue, inputEvents }">
                    <input
                      id="name"
                      class="form-control"
                      placeholder="請輸入到期日"
                      :value="inputValue"
                      v-on="inputEvents"
                    />
                  </template>
                </v-date-picker>
              </div>
              <div class="mb-3 col-md-6">
                <div class="mb-2">是否啟用</div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="is_enabled"
                    autocomplete="off"
                    :checked="couponInfo.is_enabled"
                    @click="couponInfo.is_enabled = true"
                  />
                  <label class="btn btn-outline-success" for="is_enabled">ON</label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="not_enable"
                    autocomplete="off"
                    :checked="!couponInfo.is_enabled"
                    @click="couponInfo.is_enabled = false"
                  />
                  <label class="btn btn-outline-secondary" for="not_enable">OFF</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('modify-coupon')">
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: '',
      couponInfo: {},
      modelConfig: {
        type: 'number',
      },
    };
  },
  props: {
    coupon: {
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
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  watch: {
    coupon() {
      this.couponInfo = this.coupon;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
    });
  },
};
</script>
