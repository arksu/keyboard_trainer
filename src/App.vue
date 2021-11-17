<template>
  <!--    <img alt="Vue logo" src="./assets/logo.png">-->
  <button @click="setText(this.text)">SET</button>
  <typing-text ref="typing" @typing-error="onTypingError" @typing-success="onTypingSuccess"/>

  <div>Ошибок: {{errorsCounter}}</div>
</template>

<script>
import TypingText from './components/TypingText.vue'

export default {
  name: 'App',
  components: {
    TypingText
  },
  data() {
    return {
      text: "some some val\nmore else",
      errorsCounter : 0
    }
  },

  methods: {
    keyDown: function (e) {
      // только если ввели 1 символ (исключаем системные клавиши)
      if (e.key.length === 1) {
        this.$refs.typing.onKeyDown(e)
      }
    },
    onTypingError() {
      this.errorsCounter++
      console.log("onTypingError")
    },
    onTypingSuccess() {
      console.log("success")
    },
    /**
     * установить текст в поле набора текста
     */
    setText(text) {
      this.errorsCounter = 0
      let arr = text.split("\n")
      console.log(arr)
      let rows = []
      for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        let r = {
          completed: "",
          current: "",
          next: str,
          error: false
        }
        if (i === 0) {
          r.current = r.next.slice(0, 1)
          r.next = r.next.slice(1)
        }
        rows.push(r)
      }
      console.log(rows)
      this.$refs.typing.rows = rows
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
    this.setText(this.text)
  },
  unmounted() {
    window.removeEventListener('keydown', this.keyDown)
  }
}
</script>

<style>
#app {
  font-family: "Cousine", "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
