<template>
  <router-link to="/lesson/1">Lesson 1</router-link><br>
  <router-link to="/lesson/2">Lesson 2</router-link><br>
  <router-link to="/lesson/3">Lesson 3</router-link><br>
</template>

<script>

export default {
  name: "Main",

  data() {
    return {
      text: "Some \nmore",
    }
  },

  methods: {
  },
}
</script>

<style scoped>

</style>
