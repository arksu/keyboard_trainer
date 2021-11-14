<template>
  <div class="hello">
    <typing-row v-for="(r) in rows" ref="row" :key="r"
                :completed="r.completed"
                :current="r.current"
                :next="r.next"
    ></typing-row>

  </div>
</template>

<script>
import TypingRow from "@/components/TypingRow";

export default {
  name: 'TypingText',
  props: {
    rows: Array
  },
  components: {TypingRow},
  data() {
    return {
      activeRow: 0
    }
  },
  methods: {

    onKeyDown(k) {
      console.log(this.$refs)
      console.log("key: " + k)

    }
  },
  mounted() {
    console.log("mounted TypingText. rows: " + this.rows)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
