<template>
  <!-- Modal -->
<div class="modal fade" ref="modal"
id="PorductModal" tabindex="-1"
 aria-labelledby="PorductModal"
 aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header bg-primary text-light">
        <h5 class="modal-title"
        id="proModal">{{isNew?'新增產品':'編輯產品'}}</h5>
        <button type="button" class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div>
                <label for="mainImg">主要圖片</label>
                <input type="text" id="mainImg" class="form-control"
                v-model="tempProduct.imageUrl">
                <img :src="tempProduct.imageUrl" alt="" class="img-fluid">
              </div>
            </div>
            <div class="col-8">
              <div class="mb-2">
                <label for="productTitle">標題</label>
                <input type="text" id="productTitle" class="form-control"
                v-model="tempProduct.title">
              </div>
              <div class="row mb-2">
                <div class="col-6">
                  <label for="productCategory">分類</label>
                  <input type="text" id="productCategory" class="form-control"
                  v-model="tempProduct.category">
                </div>
                <div class="col-6">
                  <label for="productUnit">單位</label>
                  <input type="text" id="productUnit" class="form-control"
                  v-model="tempProduct.unit">
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-6">
                  <label for="productOriginPrice">原價</label>
                  <input type="text" id="productOriginPrice" class="form-control"
                  v-model.number="tempProduct.origin_price">
                </div>
                <div class="col-6">
                  <label for="productPrice">售價</label>
                  <input type="text" id="productPrice" class="form-control"
                  v-model.number="tempProduct.price">
                </div>
              </div>
              <hr>
              <div class="mb-2">
                  <label for="productDes">產品描述</label>
                  <textarea type="text" id="productDes" class="form-control"
                  v-model="tempProduct.description"></textarea>
              </div>
              <div class="mb-2">
                  <label for="productContent">產品內容</label>
                  <textarea type="text" id="productContent" class="form-control"
                  v-model="tempProduct.content"></textarea>
              </div>
              <div class="form-check">
                <input id="isEnabled"
                v-model="tempProduct.is_enabled"
                class="form-check-input checked"
                type="checkbox" :true-value="1" :false-value="0">
                <label class="form-check-label" for="isEnabled">是否上架</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"
        @click="closeModal()">關閉</button>
        <button type="button" class="btn btn-primary text-light"
        @click="$emit('updateProduct',tempProduct)">儲存</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
    props: ['isNew', 'product'],
    data() {
        return {
            modal: '',
            tempProduct: {},
        };
    },
    watch: { // 監聽
      product() {
        this.tempProduct = this.product;
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
