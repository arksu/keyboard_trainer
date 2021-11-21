<template>
  lesson1
  <button @click="start('dddd\naaa')">Start 1.1</button>
  <button @click="start(
      'ав ав ав ав ав ав ав ав ав ав ав ав ав \n' +
   'ав ав ав ав ав ав ав ав ав ав ав ав ав '
   )">Start 1.2
  </button>

  <typing-text ref="typing" @typing-success="onTypingSuccess"/>

</template>

<script>
import TypingText from "@/components/TypingText";

export default {
  name: "Lesson1",
  components: {
    TypingText
  },
  methods: {
    start(text) {
      this.$refs.typing.start(text)
    },
    onTypingSuccess(errors) {
      console.log("success : " + errors)
    }
  }
}
</script>

<style scoped>

</style>
