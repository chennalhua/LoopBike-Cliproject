<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-1 p-0">
                <nav class="bg-third p-3 text-center vh-100">
                    <h1 class="h5 text-light mb-4">後台</h1>
                    <div class="d-flex flex-column">
                        <ul class="list-unstyled">
                            <li class="nav-item">
                                <a class="text-third nav-link p-0 btn btn-light py-2 mb-3">產品管理</a>
                            </li>
                            <li class="nav-item">
                                <a class="text-third nav-link p-0 btn btn-light py-2 mb-3">顧客</a>
                            </li>
                        </ul>
                        <router-link class="text-light nav-link p-0 btn btn-secondary py-2"
                        to="/">回前台</router-link>
                    </div>
                </nav>
            </div>
            <router-view class="col-11"></router-view>
        </div>
    </div>
</template>
