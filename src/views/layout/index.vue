<template>
<el-container class="layout-container">
  <el-header>
    <header-index/>
  </el-header>
  <el-main>
    <router-view/>
  </el-main>
</el-container>
</template>
<script>
import HeaderIndex from '@/views/layout/head/index.vue'
export default {
  name: "LayoutIndex",
  components: {
    HeaderIndex
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='less'>
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>