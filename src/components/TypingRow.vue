<template>
  <p>
    <b class="completed">{{completed}}</b>
    <b class="nextkey">{{current}}</b>
    <b class="next">{{next}}</b>
  </p>
</template>

<script>
export default {
  name: "TypingRow",
  props : {
    completed : { type: String, required : true},
    current : { type: String, required : true},
    next : { type: String, required : true}
  },
  methods: {
  },
}
</script>

<style>
.completed {
  color: #000;
}

.nextkey {
  color: #fff;
  background: #444;
}

.next {
  color: #bbb;
}
</style>
