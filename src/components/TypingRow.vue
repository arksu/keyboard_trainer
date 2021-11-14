<template>
  <p>
    <b class="completed">{{completed.replace(" ","&nbsp;")}}</b>
    <b :class="'nextkey' + (error ? ' error' : '')">{{current.replace(" ","&nbsp;")}}</b>
    <b class="next">{{next.replace(" ","&nbsp;")}}</b>
  </p>
</template>

<script>
export default {
  name: "TypingRow",
  props : {
    completed : { type: String, required : true},
    current : { type: String, required : true},
    next : { type: String, required : true},
    error : { type: Boolean, required : true},
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

.error {
  background: #920E0E	 !important;
}
</style>
