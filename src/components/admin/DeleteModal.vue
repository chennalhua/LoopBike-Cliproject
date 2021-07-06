<template>
  <!-- Modal -->
<div class="modal fade" ref="modal"
id="deleteModal" tabindex="-1"
 aria-labelledby="PorductModal"
 aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger text-light">
        <h5 class="modal-title"
        id="deleteModal">刪除</h5>
        <button type="button" class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否刪除 <strong class="text-danger">{{product.title}}</strong>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal()"
        >關閉</button>
        <button type="button" class="btn btn-danger"
        @click="$emit('deleteModal')">確認刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
    props: ['product'],
    data() {
        return {
            modal: '',
        };
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
