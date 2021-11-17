<template>
  <div class="outer-box">
    <div class="text-area">

      <typing-row v-for="(r) in rows" ref="row" :key="r"
                  :num="r.num"
                  :completed="r.completed"
                  :current="r.current"
                  :next="r.next"
                  :error="r.error"

      ></typing-row>
    </div>

  </div>
</template>

<script>
import TypingRow from "@/components/TypingRow";

export default {
  name: 'TypingText',
  props: {
    // rows: Array
  },
  components: {TypingRow},
  data() {
    return {
      // ожидание таймера ошибки (пока не истек - не реагируем на клавиши)
      waitError: false,
      activeRow: 0,
      rows: []
    }
  },
  methods: {
    /**
     * распарсить и установить текст
     */
    setText(text) {
      this.errorsCounter = 0
      let arr = text.split("\n")
      let rows = []
      for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        let r = {
          num: i + 1,
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
      this.rows = rows
      this.activeRow = 0
    },
    onKeyDown: function (e) {
      // пока ждем таймер ошибки - не обрабатываем ввод
      if (this.waitError) return

      // если еще не закончили набор текста
      if (this.activeRow < this.rows.length) {
        // берем текущую активную строку
        let row = this.rows[this.activeRow]

        // если набрали нужный символ с клавиатуры
        if (row.current === e.key || (row.current === " " && !row.next && e.key === "Enter")) {
          // if (row.current === e.key) {
          // добавляем к набранному тексту текущий символ из строки
          row.completed += row.current
          // если в строке еще есть символы?
          if (row.next) {
            row.current = row.next.slice(0, 1)
            row.next = row.next.slice(1)
          } else {
            console.log("next row!")
            // в предыдущей строке убираем текущий символ. она закончена
            row.current = ""
            this.activeRow++
            if (this.activeRow >= this.rows.length) {
              this.$emit("typing-success")
            } else {
              let nextRow = this.rows[this.activeRow]
              nextRow.current = nextRow.next.slice(0, 1)
              nextRow.next = nextRow.next.slice(1)
            }
          }
        } else {
          // ошибка в наборе текста, запомним старую букву
          const prev = row.current
          // воткнем ошибочный символ
          row.current = e.key
          // запустим таймер
          this.waitError = true
          row.error = true
          setTimeout(() => {
            // по истечении таймер - вернем оригинальный символ
            row.current = prev
            this.waitError = false
            row.error = false
          }, 600)

          // кинем событие
          this.$emit("typing-error")
        }
      }
    },
  },
  mounted() {
    console.log("mounted TypingText. rows: " + this.rows)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.outer-box {
  width: 400px;
  border: 1px solid #4e4e4e;
  padding: 10px 15px;
}
.text-area {

}

</style>
