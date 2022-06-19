<template>
  <div>
    <div class="main">
      <div class="div1">
        <input type="number" v-model="number" @input="isCheck" />
      </div>
      <div class="div2">
        <select v-model="selectType" @change="isCheck">
          <option value="1">isPrime</option>
          <option value="2">IsFibanacci</option>
        </select>
      </div>
      <div class="div3">
        {{ result }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: '',
      selectType: '1',
      result: '',
    }
  },
  methods: {
    isCheck() {
      if (this.number) {
        if (this.selectType == 1) {
          this.isPrime()
        } else {
          this.isFibonacci()
        }
      }
    },
    isPrime() {
      let arr = []

      // create list to find isFibonacci
      for (let i = 0; i < this.number.length; i++) {
        arr.push(this.number[i])
      }

      for (let i = 0; i < arr.length; i++) {
        const number = arr[i]

        let isPrime = true

        // check if number is equal to 1
        if (number === 1) {
          console.log('1 is neither prime nor composite number.')
        } else if (number > 1) {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              isPrime = false
              break
            }
          }

          if (isPrime) {
            this.result = true
          } else {
            this.result = false
          }
        }
      }
    },
    isFibonacci() {
      let arr = []

      // create list to find isFibonacci
      for (let i = 0; i < this.number.length; i++) {
        arr.push(this.number[i])
      }

      for (let i = 0; i < arr.length; i++) {
        let sliceArr = arr.slice(0, 2)
        let plusNumber = parseInt(sliceArr[0]) + parseInt(sliceArr[1])
        let checkNumber = parseInt(arr.slice(2, 3)[0])
        if (plusNumber == checkNumber) {
          arr = arr.slice(1)
          this.result = true
        } else {
          this.result = false
          break
        }
      }
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  height: 100vh;
}
.div1 {
  width: 200px;
}
.div2 {
  width: calc(100% - 500px);
}
.div3 {
  width: 300px;
}
@media screen and (max-width: 600px) {
  .div2 {
    width: 100px;
  }
  .main {
    width: 600px;
    overflow-x: scroll;
  }
}
</style>
