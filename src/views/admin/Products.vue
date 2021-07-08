<template>
    <Loading v-if="loading"></Loading>
    <div class="col-11">
        <div class="p-4">
            <h2 class="h4">產品管理</h2>
            <div class="bg-light p-4 rounded vh-100">
                <button type="button" class="btn btn-primary
                text-light d-block ms-auto mb-4"
                @click="openModal('add',item)"
                >新增產品</button>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="120">分類</th>
                            <th>產品名稱</th>
                            <th width="120" class="text-end">原價</th>
                            <th width="120" class="text-end">售價</th>
                            <th width="120" class="text-center">上架狀態</th>
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
                                <div class="form-check form-switch">
                                    <input v-model="item.is_enabled"
                                    class="form-check-input checked"
                                    type="checkbox"
                                    :id="item.id"
                                    :true-value="1"
                                    :false-value="0"
                                    @change="updateProduct(item)"
                                    >
                                    <label class="form-check-label text-success fw-bold"
                                    :for="item.id" v-if="item.is_enabled">上架
                                    </label>
                                    <label class="form-check-label"
                                    :for="item.id" v-else>未上架
                                    </label>
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="btn-group" role="group"
                                aria-label="Basic example">
                                    <button type="button"
                                    class="btn btn-outline-primary"
                                    @click="openModal('edit',item)">編輯</button>
                                    <button type="button"
                                    class="btn btn-outline-danger"
                                    @click="openModal('del',item)">刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="border-0">
                                <Pagination :page="pagination"
                                @updatePage="getProducts"></Pagination>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <ProductModal ref="productModal" :isNew='isNew'
                :product="tempProduct"
                @updateProduct="updateProduct"></ProductModal>
                <DeleteModal ref="deleteModal"
                :product="tempProduct"
                @deleteData="deletePeoduct">
                </DeleteModal>
            </div>
        </div>
    </div>
</template>

<script>
import ProductModal from '@/components/admin/ProductModal.vue';
import DeleteModal from '@/components/admin/DeleteModal.vue';
import Pagination from '@/components/admin/Pagination.vue';
import Loading from '@/components/Loading.vue';

    export default {
        data() {
            return {
                products: [],
                isNew: false, // 是否為新增產品或編輯產品為用
                tempProduct: {
                    imagesUrl: [],
                },
                pagination: {},
                loading: true,
            };
        },
        components: {
            ProductModal,
            DeleteModal,
            Pagination,
            Loading,
        },
        methods: {
            getProducts(page = 1) { // 預設 page 參數為 1
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
                this.$http.get(api)
                .then((res) => {
                    if (res.data.success) {
                        this.products = res.data.products;
                        this.pagination = res.data.pagination;
                        this.loading = false;
                    }
                });
            },
            updateProduct(item) {
                this.tempProduct = item;
                let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/`;
                let httpMethods = 'post';
                if (!this.isNew) {
                    api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
                    httpMethods = 'put';
                }
                this.$http[httpMethods](api, { data: this.tempProduct })
                .then((res) => {
                    console.log(res);
                    if (res.data.success) {
                        const { productModal } = this.$refs; // 取的<ProductModal> DOM
                        productModal.closeModal();
                        this.getProducts();
                        this.loading = false;
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            },
            deletePeoduct() {
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
                this.$http.delete(api)
                .then((res) => {
                    if (res.data.success) {
                        const { deleteModal } = this.$refs;
                        deleteModal.closeModal();
                        this.getProducts();
                        this.loading = false;
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            },
            openModal(option, item) {
                const { productModal } = this.$refs; // 取的<ProductModal> DOM
                if (option === 'add') {
                    this.tempProduct = {};
                    this.isNew = true; // 如果是「新增產品」isNew 為 true
                    productModal.openModal(); // 打開 ProductModal
                } else if (option === 'edit') {
                    this.tempProduct = JSON.parse(JSON.stringify(item)); // 深拷貝
                    this.isNew = false;
                    productModal.openModal(); // 打開 ProductModal
                } else if (option === 'del') {
                    this.tempProduct = { ...item };
                    const { deleteModal } = this.$refs;
                    deleteModal.openModal(); // 打開 deleteModal
                }
            },
        },
        mounted() {
            this.getProducts();
        },
    };
</script>
