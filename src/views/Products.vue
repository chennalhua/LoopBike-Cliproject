<template>
    <div class="container">
        <div class="front-product-list row p-0 mt-5 px-5">
            <div class="col-md-6 col-lg-4 px-4 mb-4 border-0"
            v-for="(item) in products" :key="item.id" @click="goToPage(item)">
                <div class="card h-100 border-0">
                    <div class="img-mask"><img class="img-fluid" :src="item.imageUrl"></div>
                    <div class="card-body text-gray">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p>{{item.content}}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0 p-0">
                        <div class="d-flex justify-content-between align-items-center mb-3 px-3">
                            <del class="small">原價：NT ${{ toCurrency(item.origin_price) }}</del>
                            <p class="m-0 text-primary h6">特價：NT ${{ toCurrency(item.price) }}</p>
                        </div>
                        <button type="button" class="btn btn-third w-100 rounded-0">加入購物車</button>
                    </div>
                </div>
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
        goToPage(item) {
            this.$router.push(`/product-info/${item.id}`);
        },
    },
    created() {
        const api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
        this.$http.get(api)
        .then((res) => {
            this.products = res.data.products;
            console.log(res.data.products);
        });
    },
};
</script>
