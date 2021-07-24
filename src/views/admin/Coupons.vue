<template>
  <div class="container-fluid">
    <loading :active="isLoading"/>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800"><i class="fas fa-gift"></i> 折價券管理</h1>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">折價券列表</h6>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-sm btn-success" @click="openModal('add')">
              新增折價券
            </button>

            <div class="table-responsive">
              <table class="table mt-4">
                <thead>
                  <tr>
                    <th width="30%">折價券名稱</th>
                    <th width="10%">折扣代碼</th>
                    <th width="10%" class="text-end">折扣數</th>
                    <th width="20%" class="text-center">到期日</th>
                    <th width="10%" class="text-center">是否啟用</th>
                    <th width="10%" class="text-center">編輯</th>
                    <th width="10%" class="text-center">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="coupon in couponList" :key="coupon.id">
                    <td>
                      {{ coupon.title }}
                    </td>
                    <td>
                      {{ coupon.code }}
                    </td>
                    <td class="text-end">
                      {{ coupon.percent }}%
                    </td>
                    <td class="text-center">
                      {{ convertDatetime(coupon.due_date) }}
                    </td>
                    <td class="text-center">
                      <span
                        class="badge pointer"
                        :class="coupon.is_enabled ? 'bg-success' : 'bg-secondary'"
                        style="font-size:1em;"
                        @click="enableChange(coupon)"
                      >
                        {{ coupon.is_enabled ? 'ON' : 'OFF' }}
                      </span>
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-success move"
                        @click="openModal('update', coupon)"
                      >
                        編輯
                      </button>
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-danger move"
                        @click="openModal('delete', coupon)"
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
                目前有 <span id="couponCount">{{ couponList.length }}</span> 項折價券
              </p>
            </div>
            <pagination :page-info="pageInfo" @page-change="getCoupon"></pagination>
          </div>
        </div>
      </div>
    </div>
    <coupon-modal
      :coupon="tempCoupon"
      :title="couponModalTitle"
      @modify-coupon="modifyCoupon"
      ref="couponModal"
    ></coupon-modal>
    <delete-modal :item="tempCoupon" @confirm="deleteCoupon" ref="deleteModal"></delete-modal>
  </div>
</template>

<script>
import pagination from '@/components/common/Pagination.vue';
import couponModal from '@/components/admin/CouponModal.vue';
import deleteModal from '@/components/admin/DeleteModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      updateId: -1,
      couponList: [],
      tempCoupon: {
      },
      pageInfo: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
      },
      couponModalTitle: '新增折價券',
    };
  },
  components: {
    pagination,
    couponModal,
    deleteModal,
  },
  methods: {
    getCoupon(page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/coupons?page=${page}`,
        )
        .then((response) => {
          if (response.data.success) {
            this.couponList = response.data.coupons;
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
    openModal(action, coupon) {
      switch (action) {
        case 'add':
        case 'update':
          if (coupon) {
            this.couponModalTitle = '修改折價券';
            this.tempCoupon = { ...coupon };
          } else {
            this.updateId = -1;
            this.couponModalTitle = '新增折價券';
            this.tempCoupon = {
              title: '',
              code: '',
              percent: 0,
              due_date: Date.now(),
              is_enabled: 1,
            };
          }
          this.$refs.couponModal.openModal();
          break;
        case 'delete':
          this.tempCoupon = { ...coupon };
          this.$refs.deleteModal.openModal();
          break;
        default:
          break;
      }
    },
    modifyCoupon() {
      let errorCount = 0;
      if (this.tempCoupon.title === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入折價券標題', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (this.tempCoupon.code === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入折價券代碼', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (this.tempCoupon.due_date === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入到期日', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (this.tempCoupon.percent === '') {
        setTimeout(() => {
          this.$moshaToast('請輸入折扣數', {
            type: 'danger',
            showIcon: true,
            position: 'bottom-right',
          });
        }, 1);
        errorCount += 1;
      }

      if (errorCount === 0) {
        const coupon = {
          data: {
            title: this.tempCoupon.title.trim(),
            code: this.tempCoupon.code.trim(),
            due_date: parseInt(this.tempCoupon.due_date, 10) || 0,
            percent: parseInt(this.tempCoupon.percent, 10) || 0,
            is_enabled: this.tempCoupon.is_enabled,
          },
        };
        if (this.tempCoupon.id) {
          this.editCoupon(this.tempCoupon.id, coupon, () => {
            this.$refs.couponModal.hideModal();
          });
        } else {
          this.addCoupon(coupon, () => {
            this.$refs.couponModal.hideModal();
          });
        }
      }
    },
    enableChange(coupon) {
      const updateCoupon = {
        data: {
          title: coupon.title,
          code: coupon.code,
          due_date: coupon.due_date,
          percent: coupon.percent,
          is_enabled: 1 - coupon.is_enabled,
        },
      };
      this.editCoupon(coupon.id, updateCoupon);
    },
    addCoupon(coupon, callback) {
      this.isLoading = true;
      this.$http
        .post(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/coupon`,
          coupon,
        )
        .then((response) => {
          if (response.data.success) {
            this.$moshaToast(response.data.message, {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.getCoupon();
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
    editCoupon(couponId, coupon, callback) {
      this.isLoading = true;
      this.$http
        .put(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/coupon/${couponId}`,
          coupon,
        )
        .then((response) => {
          if (response.data.success) {
            this.$moshaToast(response.data.message, {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.getCoupon();
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
    deleteCoupon(couponId) {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_API_PATH}/admin/coupon/${couponId}`,
        )
        .then((response) => {
          if (response.data.success) {
            this.$refs.deleteModal.hideModal();
            this.$moshaToast(response.data.message, {
              type: 'success',
              showIcon: true,
              position: 'bottom-right',
            });
            this.getCoupon();
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
    convertDatetime(unixtime) {
      return new Date(unixtime).toLocaleString();
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
