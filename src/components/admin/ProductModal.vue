<template>
  <!-- Modal -->
<div class="modal fade" ref="modal"
id="PorductModal" tabindex="-1"
 aria-labelledby="PorductModal"
 aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"
        id="proModal">{{isNew?'新增產品':'編輯產品'}}</h5>
        <button type="button" class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"
        data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
    props: ['isNew'],
    data() {
        return {
            modal: '',
        };
    },
    methods: {
        openModal() {
            this.modal.show();
        },
    },
    mounted() {
        this.modal = new Modal(this.$refs.modal);
    },
};
</script>
