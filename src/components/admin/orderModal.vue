<template>
  <!-- Modal -->
<div class="modal fade" ref="modal"
id="orderModal" tabindex="-1"
 aria-labelledby="orderModal"
 aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header bg-primary text-light">
        <h5 class="modal-title"
        id="orderModal">檢視</h5>
        <button type="button" class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <h5 class="text-primary">訂購人資訊</h5>
              <ul class="list-unstyled" v-if="tempOrder.user">
                <li class="py-2">
                  <span class="fw-bold">姓名：</span>
                  {{tempOrder.user.name}}
                </li>
                <li class="py-2">
                  <span class="fw-bold">電話：</span>
                  {{tempOrder.user.tel}}</li>
                <li class="py-2">
                  <span class="fw-bold">地址：</span>
                  {{tempOrder.user.address}}</li>
                <li class="py-2">
                  <span class="fw-bold">信箱：</span>
                  {{tempOrder.user.email}}</li>
              </ul>
            </div>
            <div class="col-8">
              <div>
                <h5 class="text-primary">訂單細節</h5>
                  <ul class="list-unstyled" v-if="tempOrder.user">
                    <li class="py-2">
                      <span class="fw-bold">訂單編號：</span>
                      {{tempOrder.id}}
                    </li>
                    <li class="py-2">
                      <span class="fw-bold">訂單日期：</span>
                      {{dateConversion(tempOrder.create_at)}}</li>
                    <li class="py-2">
                      <span class="fw-bold">付款狀態：</span>
                      <span v-if="tempOrder.is_paid" class="fw-bold text-success">已付款</span>
                      <span v-else class="fw-bold text-danger">未付款</span>
                      </li>
                    <li class="py-2">
                      <span class="fw-bold">總金額：</span>
                      {{toCurrency(tempOrder.total)}}</li>
                  </ul>
                  <hr>
              </div>
              <div>
                <h5 class="text-primary">選購商品</h5>
                <ul class="list-unstyled">
                    <li class="py-2 row" v-for="(item, index) in tempOrder.products" :key="index">
                      <div class="col-8">
                        <span class="fw-bold">{{item.product.title}}</span>
                      </div>
                      <div class="col-2">
                        <span>{{item.qty}} / {{item.product.unit}}</span>
                      </div>
                      <div class="col-2 text-end">
                        <span>{{toCurrency(item.total)}}</span>
                      </div>
                    </li>
                  </ul>
                  <hr>
              </div>
              <div>
                <div class="form-check ms-auto">
                  <input id="isPaid"
                  v-model="tempOrder.is_paid"
                  class="form-check-input checked"
                  type="checkbox">
                  <label class="form-check-label" for="isPaid">是否付款</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"
        @click="closeModal()">關閉</button>
        <button type="button" class="btn btn-primary text-light"
        @click="$emit('updateOrder',tempOrder)"
        >儲存</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
    props: ['order'],
    data() {
        return {
            modal: '',
            tempOrder: [],
        };
    },
    watch: { // 監聽
      order() {
        this.tempOrder = this.order;
      },
    },
    methods: {
        openModal() {
            this.modal.show();
        },
        closeModal() {
          this.modal.hide();
        },
    },
    mounted() {
        this.modal = new Modal(this.$refs.modal);
    },
};
</script>
