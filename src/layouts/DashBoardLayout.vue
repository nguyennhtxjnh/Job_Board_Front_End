<template>
  <v-toolbar dark fixed app color="primary">
    <v-toolbar-side-icon @click.stop="drawer = !drawer" title="Ẩn/Hiện thanh điều hướng"></v-toolbar-side-icon>
    <v-btn icon title="Quay lại trang" @click="$router.back()">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>
      {{title}}
    </v-toolbar-title>
    <v-spacer/>
    <span>{{username}}&nbsp; &nbsp; &nbsp;</span>
    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <slot></slot>
    </v-container>
  </v-content>
  <v-footer dark fixed app color="primary">
    <v-spacer></v-spacer>
    <span style="margin-right: 5px">&copy; 2019 by FPTU</span>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashBoardLayout'
  }
</script>

<style scoped>

</style>
