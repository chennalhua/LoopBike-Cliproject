<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination m-0">
      <li class="page-item">
          <a class="page-link" href="#"
          @click.prevent="$emit('getProducts',page.current_page-1)">Previous</a>
      </li>
      <li class="page-item" v-for="(item) in page.total_pages" :key="item"
      :class="{'active': item === page.current_page}">
          <a class="page-link" href="#" @click.prevent="$emit('getProducts',item)">
              {{item}}
          </a>
        </li>
      <li class="page-item">
          <a class="page-link" href="#"
          @click.prevent="$emit('getProducts',page.current_page+1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    props: ['page'],
};
</script>
