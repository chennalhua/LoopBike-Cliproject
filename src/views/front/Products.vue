<template>
    <div class="container">
        <div class="front-product-list row p-0 mt-5 position-relative">
            <Loading v-if="loading"></Loading>
            <div class="col-12 col-md-6 col-lg-4 mb-4 border-0"
            v-for="(item) in products" :key="item.id">
                <div class="card h-100 border-0">
                    <div @click="goToPage(item)" class="h-100">
                        <div class="img-mask">
                        <img class="img-fluid card-img-top" :src="item.imageUrl" :alt="item.title">
                    </div>
                    <div class="card-body text-gray">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p>{{item.content}}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 p-0">
                        <div class="d-flex justify-content-between align-items-center mb-3 px-3">
                            <del class="small">原價：NT ${{ toCurrency(item.origin_price) }}</del>
                            <p class="m-0 text-primary h6">特價：NT ${{ toCurrency(item.price) }}</p>
                        </div>
                    </div>
                    </div>
                    <button type="button"
                    class="btn btn-third w-100 rounded-0"
                    ref="aa"
                    >加入購物車</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
    data() {
        return {
            products: [],
            loading: true,
        };
    },
    components: {
        Loading,
    },
    methods: {
        getProduct() {
            const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
            this.$http.get(api)
            .then((res) => {
                if (res.data.success) {
                    this.products = res.data.products;
                    this.loading = false;
                }
            });
        },
        goToPage(item) {
            this.$router.push(`/product-info/${item.id}`);
        },
    },
    mounted() {
        this.getProduct();
    },
};
</script>
