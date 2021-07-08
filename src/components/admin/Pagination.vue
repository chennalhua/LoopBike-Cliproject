<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination m-0">
      <li class="page-item">
          <a class="page-link" href="#"
          @click.prevent="$emit('updatePage',page.current_page-1)">
          <i class="bi bi-arrow-left"></i></a>
      </li>
      <li class="page-item" v-for="(item) in page.total_pages" :key="item"
      :class="{'active': item === page.current_page}">
          <a class="page-link" href="#" @click.prevent="$emit('updatePage',item)">
              {{item}}
          </a>
        </li>
      <li class="page-item">
          <a class="page-link" href="#"
          @click.prevent="$emit('updatePage',page.current_page+1)">
          <i class="bi bi-arrow-right"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    props: ['page'],
};
</script>
