<template>
    <div class="container-fluid">
        <div class="bg-third py-3 row">
            <div class="col-1 p-0">
                <h1 class="h5 text-light m-0 text-center">後台</h1>
            </div>
            <div class="col-11 d-flex justify-content-end pe-4">
                <a href="#" class="logout rounded" @click.prevent="logout">
                    <i class="bi bi-box-arrow-left pe-2"></i>登出</a>
            </div>
        </div>
        <div class="row">
            <div class="col-1 p-0">
                <nav class="bg-third p-3 text-center" style="min-height:100%">
                    <div class="d-flex flex-column">
                        <ul class="list-unstyled">
                            <li class="nav-item">
                                <router-link class="sidebar-link
                                p-0 py-2 mb-3 d-block rounded"
                                to="/admin/products">
                                <i class="bi bi-box-seam d-block"></i>
                                產品管理
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="sidebar-link
                                p-0 py-2 mb-3 d-block rounded"
                                to="/admin/order">
                                <i class="bi bi-file-earmark-person d-block"></i>
                                客戶訂單
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            const api = `${process.env.VUE_APP_URL}/logout`;
            this.$http.post(api)
            .then((res) => {
                if (res.data.success) {
                    alert('已登出');
                    this.$router.push('/login');
                }
            });
        },
    },
    created() {
        // 取得 token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)MyToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        if (!token) {
            alert('您尚未登入，請先登入！！');
            // 跳轉回 login 頁面
            this.$router.push('/login');
        }
        // 將 token 加到 headers 表頭裡
        this.$http.defaults.headers.common.Authorization = token;
    },
};
</script>
