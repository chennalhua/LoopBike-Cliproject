<template>
    <div class="loading-bg position-absolute vh-100">
        <div class="spinner-border position-absolute loading-box" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true
        };
    },
}
</script>
