<template>
    <Loading v-if="loading"></Loading>
    <div class="col-11">
        <div class="p-4">
            <h2 class="h4">客戶訂單</h2>
            <div class="bg-light p-4 rounded vh-100 table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="80">訂單日期</th>
                            <th class="text-center">訂購人</th>
                            <th>購買品項</th>
                            <th width="200" class="text-end">付款金額</th>
                            <th width="120" class="text-center">付款狀態</th>
                            <th width="150" class="text-center">編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item) in orders" :key="item.id">
                            <td>{{dateConversion(item.create_at)}}</td>
                            <td class="text-center">{{item.user.name}}</td>
                            <td>
                                <ul class="list-unstyled">
                                    <li v-for="(productItem,index) in item.products" :key="index">
                                        {{productItem.product.title}} x {{productItem.qty}}
                                    </li>
                                </ul>
                            </td>
                            <td class="text-end">
                                {{toCurrency(item.total)}}
                            </td>
                            <td class="text-center">
                                <div class="form-check form-switch">
                                    <input v-model="item.is_paid"
                                    class="form-check-input checked"
                                    type="checkbox"
                                    :id="item.id"
                                    @change="updateOrder(item)"
                                    >
                                    <label class="form-check-label text-success fw-bold"
                                    :for="item.id" v-if="item.is_paid">已付款
                                    </label>
                                    <label class="form-check-label"
                                    :for="item.id" v-else>未付款
                                    </label>
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="btn-group" role="group"
                                aria-label="Basic example">
                                    <button type="button"
                                    class="btn btn-outline-primary"
                                    @click="openModal('view', item)">檢視</button>
                                    <button type="button"
                                    class="btn btn-outline-danger"
                                    @click="openModal('delete', item)"
                                    >刪除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="border-0">
                                <Pagination :page="pagination"
                                @updatePage="getOrder"></Pagination>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <orderModal :order="tempOrder" ref="openOrderModal"
        @updateOrder="updateOrder"></orderModal>
        <deleteModal :order="tempOrder" ref="openOrderDeleteModal"
        @deleteData="deleteSingleOrder"></deleteModal>
    </div>
</template>

<script>
import Pagination from '@/components/admin/Pagination.vue';
import orderModal from '@/components/admin/orderModal.vue';
import deleteModal from '@/components/admin/DeleteModal.vue';
import Loading from '@/components/Loading.vue';

    export default {
        data() {
            return {
                orders: [],
                pagination: {},
                tempOrder: {},
                loading: true,
            };
        },
        components: {
            Pagination,
            orderModal,
            deleteModal,
            Loading,
        },
        methods: {
            getOrder(page = 1) {
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
                this.$http.get(api)
                .then((res) => {
                    if (res.data.success) {
                        this.orders = res.data.orders;
                        this.pagination = res.data.pagination;
                        this.loading = false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            },
            updateOrder(item) {
                this.tempOrder = item;
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
                this.$http.put(api, { data: this.tempOrder })
                .then((res) => {
                    if (res.data.success) {
                        alert('更新成功');
                        const { openOrderModal } = this.$refs;
                        openOrderModal.closeModal();
                        this.getOrder();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            },
            deleteSingleOrder() {
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
                this.$http.delete(api)
                .then((res) => {
                    if (res.data.success) {
                        alert('刪除成功');
                        const { openOrderDeleteModal } = this.$refs;
                        openOrderDeleteModal.closeModal();
                        this.getOrder();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            },
            openModal(option, item) {
                if (option === 'view') {
                    this.tempOrder = { ...item };
                    const { openOrderModal } = this.$refs;
                    openOrderModal.openModal();
                } else if (option === 'delete') {
                    this.tempOrder = { ...item };
                    const { openOrderDeleteModal } = this.$refs;
                    openOrderDeleteModal.openModal();
                }
            },
        },
        mounted() {
            this.getOrder();
        },
    };
</script>
