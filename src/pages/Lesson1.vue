<template>
  lesson1
  <button ref="btn1" @click="start('ВаВа\nПапа Dada')">Start 1.1</button>
  <button ref="btn2" @click="start(
      'авэ ав ав ав ав ав ав ав ав ав ав ав ав \n' +
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
      for (let k in this.$refs) {
        if (this.$refs[k].blur) this.$refs[k].blur()
      }
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
