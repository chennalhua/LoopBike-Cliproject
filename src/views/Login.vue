<template>
    <div class="container-fluid login vh-100">
        <div class="container">
            <div class="col-8 col-lg-5 mx-auto login-form text-light p-4">
                <h2 class="text-center">後台登入 Login</h2>
                <Form v-slot="{ errors }" @submit="goTopAdmin">
                <div class="mb-3">
                    <label for="email" class="form-label">帳號</label>
                    <Field id="email" name="email" type="email"
                    class="form-control" :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email" rules="email|required" v-model="user.username"></Field>
                    <error-message name="email" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">密碼</label>
                    <Field id="password" name="password" type="password"
                    class="form-control" :class="{ 'is-invalid': errors['password'] }"
                    placeholder="請輸入密碼" rules="required" v-model="user.password"></Field>
                    <error-message name="password" class="invalid-feedback"></error-message>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-secondary">登入</button>
                </div>
            </Form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
            // loading 效果
        };
    },
    methods: {
        goTopAdmin() {
            // 登入驗證
            const api = `${process.env.VUE_APP_URL}/admin/signin`;
            this.$http.post(api, this.user)
            .then((res) => {
                if (res.data.success) {
                    const { token } = res.data;
                    const { expired } = res.data;
                    document.cookie = `MyToken=${token}; expires=${new Date(expired)}`;
                    alert('登入成功～歡迎使用！');
                    // 跳轉要面
                    this.$router.push('/admin/products');
                }
            })
            .catch((err) => {
                console.log(err);
            });
        },
    },
};
</script>
