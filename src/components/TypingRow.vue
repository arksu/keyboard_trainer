<template>
  <p>
    <sup>{{num}}</sup>
    <b class="completed typing-text">{{completed.replace(" ","&nbsp;")}}</b>
    <b :class="'next-key typing-text' + (error ? ' error' : '')">{{current.replace(" ","&nbsp;")}}</b>
    <b class="next typing-text">{{next.replace(" ","&nbsp;")}}</b>
  </p>
</template>

<script>
export default {
  name: "TypingRow",
  props : {
    num : Number,
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
.typing-text {
}
.completed {
  color: #000;
}

.next-key {
  color: #fff;
  background: #444;
}

.next {
  color: #bbb;
}

.error {
  background: #920E0E	 !important;
}

p {
  font-family: "Cousine", "Courier New", Courier, monospace;

  position: relative;
  padding: 0;
  margin: 0;
  font-size: 17px;
  letter-spacing: 0.1em;
  line-height: 1.2;
}

p>sup {
  font-weight: bold;
  text-indent: 0;
  position: absolute;
  right: 0;
  top: 5px;
  color: #61ad24;
  font-size: 10px;
  line-height: 1;
  opacity: 0.5;
}
</style>
