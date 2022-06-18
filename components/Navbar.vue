<template>
  <div class="main">
    <b-button class="btn btn-success" @click="to('/question1')"
      >Question 1</b-button
    >
    <b-button class="btn btn-success" @click="to('/question2')"
      >Question 2</b-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    to(link_page) {
      this.$router.push(link_page)
    },
  },
}
</script>

<style scoped>
.main {
  padding: 20px 10px;
  background: rgb(128, 200, 255);
  margin-bottom: 5px;
}
.btn {
  border-radius: 8px;
  background-color: white;
  color: black;
}
</style>
