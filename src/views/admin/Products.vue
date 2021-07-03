<template>
    <div class="col-11">
        <div class="p-4">
            <h2 class="h4">產品管理</h2>
            <div class="bg-light p-4 rounded">
                <button type="button" class="btn btn-primary
                text-light d-block ms-auto mb-4"
                @click="openModal('add')"
                >新增產品</button>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="120">分類</th>
                            <th>產品名稱</th>
                            <th width="120" class="text-end">原價</th>
                            <th width="120" class="text-end">售價</th>
                            <th width="180" class="text-center">啟用狀態</th>
                            <th width="180" class="text-center">編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item) in products" :key="item.id">
                            <td>{{item.category}}</td>
                            <td>{{item.title}}</td>
                            <td v-text="toCurrency(item.origin_price)"
                            class="text-end"></td>
                            <td v-text="toCurrency(item.price)"
                            class="text-end"></td>
                            <td class="text-center">
                                <span v-if="item.is_enabled"
                                class="text-success">啟用</span>
                                <span v-else>不啟用</span>
                            </td>
                            <td class="text-center">
                                <div class="btn-group" role="group"
                                aria-label="Basic example">
                                    <button type="button"
                                    class="btn btn-outline-primary"
                                    @click="openModal('edit')">編輯</button>
                                    <button type="button"
                                    class="btn btn-outline-danger"
                                    @click="closeModal()">刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="border-0">
                                <button type="button"
                                class="btn btn-outline-danger">刪除全部</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <ProductModal ref="productModal" :isNew='isNew'></ProductModal>
                <DeleteModal ref="deleteModal"></DeleteModal>
            </div>
        </div>
    </div>
</template>

<script>
import ProductModal from '@/components/admin/ProductModal.vue';
import DeleteModal from '@/components/admin/DeleteModal.vue';

    export default {
        data() {
            return {
                products: [],
                isNew: false, // 是否為新增產品或編輯產品為用
            };
        },
        components: {
            ProductModal,
            DeleteModal,
        },
        methods: {
            getProducts() {
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products`;
                this.$http.get(api)
                .then((res) => {
                    this.products = res.data.products;
                });
            },
            openModal(option) {
                const { productModal } = this.$refs; // 取的<ProductModal> DOM
                if (option === 'add') {
                    this.isNew = true; // 如果是「新增產品」isNew 為 true
                    productModal.openModal(); // 打開 ProductModal
                } else if (option === 'edit') {
                    this.isNew = false;
                    productModal.openModal(); // 打開 ProductModal
                }
            },
            closeModal() {
                const { deleteModal } = this.$refs;
                deleteModal.closeModal();
            },
        },
        mounted() {
            this.getProducts();
        },
    };
</script>
