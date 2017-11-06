<template>
  <div class="index">
    <v-search></v-search>
    <div class="content">
      <v-swipe></v-swipe>
      <v-navbar></v-navbar>
    </div>
  </div>
</template>

<script>
import vSearch from '@/components/vSearch.vue'
import vSwipe from '@/components/vSwipe.vue'
import vNavbar from '@/components/vNavbar.vue'
export default {
  name: 'index',
  components: {
    vSearch,
    vSwipe,
    vNavbar
  }
}
</script>

<style>
.content {
  position: relative;
  top: 1.0555556rem;
  margin-bottom: 1.6rem;
}
</style>
