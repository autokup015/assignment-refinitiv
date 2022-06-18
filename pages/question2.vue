<template>
  <div class="p-1">
    <input class="mx-1" type="text" v-model="search" placeholder="search" />
    <div class="main">
      <div class="box" v-for="(item, index) in newData" :key="index">
        <p class="p-2 m-0 text-center">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      data: [],
    }
  },
  computed: {
    newData() {
      let filterData = this.data.filter((x) => {
        return x.toLowerCase().match(this.search)
      })

      return filterData
    },
  },
  created() {
    this.getData()
  },
  mounted() {},
  methods: {
    async getData() {
      const fetchData = await this.$services.question2.getData()

      if (fetchData.status == 200) {
        this.data = fetchData.data.categories
      }
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.box {
  width: 200px;
  height: 100px;
  border: 1px solid darkgray;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box:hover {
  border: 2px solid pink;
}
</style>
