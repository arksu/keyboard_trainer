<template>
  <button @click="this.$refs.typing.setText(text)">SET</button>
  <typing-text ref="typing" @typing-error="onTypingError" @typing-success="onTypingSuccess"/>

  <div>Ошибок: {{errorsCounter}}</div>
</template>

<script>
import TypingText from "@/components/TypingText";

export default {
  name: "Main",
  components: {
    TypingText
  },
  data() {
    return {
      text: "Some \nmore",
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
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
    this.$refs.typing.setText(this.text)
  },
  unmounted() {
    window.removeEventListener('keydown', this.keyDown)
  }
}
</script>

<style scoped>

</style>
