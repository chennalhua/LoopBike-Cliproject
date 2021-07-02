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
                            <th>分類</th>
                            <th>產品名稱</th>
                            <th>原價</th>
                            <th>售價</th>
                            <th>啟用狀態</th>
                            <th>編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
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
                    console.log(res);
                });
            },
        },
        mounted() {
            // 取得 token
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)MyToken\s*\s*([^;]*).*$)|^.*$/, '$1');
            if (!token) {
                alert('您尚未登入，請先登入！！');
                // 跳轉回 login 頁面
                this.$router.push('/login');
            }
            // 將 token 加到 headers 表頭裡
            this.$http.defaults.headers.common.Authorization = token;
            this.getProducts();
        },
    };
</script>
