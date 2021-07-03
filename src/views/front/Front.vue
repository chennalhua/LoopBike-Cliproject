<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <h1 class="logo m-0"><a class="navbar-brand" href="#">LoopBike</a></h1>
            <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">產品列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">登入</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <h5>規劃中......</h5>
    <router-view></router-view>
</template>
