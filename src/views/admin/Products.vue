<template>
    <div class="container">
        <div class="p-4">
            <h2 class="h4">產品管理</h2>
            <div class="bg-light p-4 rounded">
                <button type="button" class="btn btn-primary
                text-light d-block ms-auto mb-4">新增產品</button>
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
                            <td v-text="toCurrency(item.origin_price)" class="text-end"></td>
                            <td v-text="toCurrency(item.price)" class="text-end"></td>
                            <td class="text-center">
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-else>不啟用</span>
                            </td>
                            <td class="text-center"></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="border-0">
                                <button type="button" class="btn btn-outline-danger">刪除全部</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
            };
        },
        methods: {
            getProducts() {
                const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products`;
                this.$http.get(api)
                .then((res) => {
                    this.products = res.data.products;
                });
            },
        },
        mounted() {
            this.getProducts();
        },
    };
</script>
