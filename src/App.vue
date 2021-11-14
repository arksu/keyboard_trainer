<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <typing-text ref="typing" @typing-error="onTypingError"/>
</template>

<script>
import TypingText from './components/TypingText.vue'

export default {
  name: 'App',
  components: {
    TypingText
  },

  methods: {
    keyDown: function (e) {
      this.$refs.typing.onKeyDown(e)
    },
    onTypingError() {
      console.log("onTypingError")
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown)
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
