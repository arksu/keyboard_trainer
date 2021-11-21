<template>
  <div v-if="visible">
    <div class="overlay">
      <div class="window">
        <div class="workspace">
          <div class="block-left">
            <div class="frame-fingers">
              <ul class="fingers">
                <li class="finger">
                  <span class="finger1"></span> Мизинец
                </li>
                <li class="finger">
                  <span class="finger2"></span> Безымянный
                </li>
                <li class="finger">
                  <span class="finger3"></span> Средний
                </li>
                <li class="finger">
                  <span class="finger4"></span> Указ. левый
                </li>
                <li class="finger">
                  <span class="finger6"></span> Указ. правый
                </li>
                <li class="finger">
                  <span class="finger5"></span> Большой
                </li>
              </ul>
            </div>
          </div>

          <div class="block-center">
            <div class="text-area">

              <typing-row v-for="(r) in rows" ref="row" :key="r"
                          :num="r.num"
                          :completed="r.completed"
                          :current="r.current"
                          :next="r.next"
                          :error="r.error"
              ></typing-row>
            </div>
            <div>Ошибок: {{ errorsCounter }}</div>
          </div>

          <div class="block-right">

          </div>

        </div>
        <div
            class="v-keyboard v-layout-ru_MAC v-scheme-ISO v-opt-nextkey v-opt-misprint v-opt-colors v-opt-labels v-opt-useyo v-opt-cursor v-opt-locale">

          <div class="v-rows">
            {{ this.current }}
            <div class="v-row">
              <div class="v-key double finger1" data-key="BACKQUOTE"><span class="major">&gt;</span><sup class="major">&lt;</sup>
              </div>
              <div :class="'v-key double finger1 ' + (this.current === '1' ? 'next' : '')" data-key="1"><span
                  class="major">1</span><sup class="major">!</sup>
              </div>
              <div :class="'v-key double finger2 ' + (this.current === '2' ? 'next' : '')" data-key="2"><span
                  class="major">2</span><sup class="major">"</sup>
              </div>
              <div :class="'v-key double finger3 ' + (this.current === '3' ? 'next' : '')" data-key="3"><span
                  class="major">3</span><sup class="major">№</sup>
              </div>
              <div :class="'v-key double finger4 ' + (this.current === '4' ? 'next' : '')" data-key="4"><span
                  class="major">4</span><sup class="major">%</sup>
              </div>
              <div :class="'v-key double finger4 ' + (this.current === '5' ? 'next' : '')" data-key="5"><span
                  class="major">5</span><sup class="major">:</sup>
              </div>
              <div :class="'v-key double finger4 ' + (this.current === '6' ? 'next' : '')" data-key="6"><span
                  class="major">6</span><sup class="major">,</sup>
              </div>
              <div :class="'v-key double finger7 ' + (this.current === '7' ? 'next' : '')" data-key="7"><span
                  class="major">7</span><sup class="major">.</sup>
              </div>
              <div :class="'v-key double finger8 ' + (this.current === '8' ? 'next' : '')" data-key="8"><span
                  class="major">8</span><sup class="major">;</sup>
              </div>
              <div :class="'v-key double finger9 ' + (this.current === '9' ? 'next' : '')" data-key="9"><span
                  class="major">9</span><sup class="major">(</sup>
              </div>
              <div :class="'v-key double finger10 ' + (this.current === '0' ? 'next' : '')" data-key="0"><span
                  class="major">0</span><sup class="major">)</sup>
              </div>
              <div :class="'v-key double finger10 ' + (this.current === '-' ? 'next' : '')" data-key="HYPHENMINUS"><span
                  class="major">-</span><sup
                  class="major">_</sup></div>
              <div :class="'v-key double finger10 ' + (this.current === '=' ? 'next' : '')" data-key="EQUALS"><span
                  class="major">=</span><sup
                  class="major">+</sup></div>
              <div class="v-key left system" data-key="BACKSPACE"><span class="major">Backsp</span></div>
              <div class="v-key separator left system" data-key="INSERT"><span class="major">Ins</span></div>
              <div class="v-key left system" data-key="HOME"><span class="major">Home</span></div>
              <div class="v-key left system" data-key="PAGEUP"><span class="major">Page Up</span></div>
              <div class="v-key separator left system" data-key="NUMLOCK"><span class="major">Num Lock</span></div>
              <div class="v-key single finger8" data-key="DIVIDE"><span class="major">/</span></div>
              <div class="v-key single finger9" data-key="MULTIPLY"><span class="major">*</span></div>
              <div class="v-key single finger9" data-key="SUBTRACT"><span class="major">-</span></div>
              <div class="v-clear"></div>
            </div>
            <div class="v-row">
              <div class="v-key left system" data-key="TAB"><span class="major">Tab</span></div>
              <div :class="'v-key double_lite finger1 ' + (this.current === 'q' ? 'next' : '')" data-key="Q"><span
                  class="major">й</span></div>
              <div :class="'v-key double_lite finger2 ' + (this.current === 'w' ? 'next' : '')" data-key="W"><span
                  class="major">ц</span></div>
              <div :class="'v-key double_lite finger3 ' + (this.current === 'e' ? 'next' : '')" data-key="E"><span
                  class="major">у</span></div>
              <div :class="'v-key double_lite finger4 ' + (this.current === 'r' ? 'next' : '')" data-key="R"><span
                  class="major">к</span></div>
              <div :class="'v-key double_lite finger4 ' + (this.current === 't' ? 'next' : '')" data-key="T"><span
                  class="major">е</span></div>
              <div :class="'v-key double_lite finger7 ' + (this.current === 'y' ? 'next' : '')" data-key="Y"><span
                  class="major">н</span></div>
              <div :class="'v-key double_lite finger7 ' + (this.current === 'u' ? 'next' : '')" data-key="U"><span
                  class="major">г</span></div>
              <div :class="'v-key double_lite finger8 ' + (this.current === 'i' ? 'next' : '')" data-key="I"><span
                  class="major">ш</span></div>
              <div :class="'v-key double_lite finger9 ' + (this.current === 'o' ? 'next' : '')" data-key="O"><span
                  class="major">щ</span></div>
              <div :class="'v-key double_lite finger10 ' + (this.current === 'p' ? 'next' : '')" data-key="P"><span
                  class="major">з</span></div>
              <div :class="'v-key double_lite finger10 ' + (this.current === '[' ? 'next' : '')" data-key="OPENBRACKET">
                <span class="major">х</span></div>
              <div :class="'v-key double_lite finger10 ' + (this.current === ']' ? 'next' : '')"
                   data-key="CLOSEBRACKET"><span class="major">ъ</span></div>
              <div class="v-key ansi double_lite finger10" data-key="BACKSLASH"><span class="major">ё</span></div>
              <div class="v-key fake iso" style="width: 47px; z-index: 1">
                <div class="v-key left system" data-key="ENTER"><span class="major">Enter</span></div>
              </div>
              <div class="v-key left separator system" data-key="DELETE"><span class="major">Del</span></div>
              <div class="v-key left system" data-key="END"><span class="major">End</span></div>
              <div class="v-key left system" data-key="PAGEDOWN"><span class="major">Page Down</span></div>
              <div class="v-key separator single finger7" data-key="NUMPAD7"><span class="major">7</span></div>
              <div class="v-key single finger8" data-key="NUMPAD8"><span class="major">8</span></div>
              <div class="v-key single finger9" data-key="NUMPAD9"><span class="major">9</span></div>
              <div class="v-key fake">
                <div class="v-key single finger9" data-key="ADD"><span class="major">+</span></div>
              </div>
              <div class="v-clear"></div>
            </div>
            <div class="v-row">
              <div class="v-key left system" data-key="CAPSLOCK"><span class="major">Caps Lock</span></div>
              <div :class="'v-key double_lite finger1 ' + (this.current === 'a' ? 'next' : '')" data-key="A"><span
                  class="major">ф</span></div>
              <div :class="'v-key double_lite finger2 ' + (this.current === 's' ? 'next' : '')" data-key="S"><span
                  class="major">ы</span></div>
              <div :class="'v-key double_lite finger3 ' + (this.current === 'd' ? 'next' : '')" data-key="D"><span
                  class="major">в</span></div>
              <div :class="'v-key double_lite finger4 ' + (this.current === 'f' ? 'next' : '')" data-key="F"><span
                  class="major">а</span></div>
              <div :class="'v-key double_lite finger4 ' + (this.current === 'g' ? 'next' : '')" data-key="G"><span
                  class="major">п</span></div>
              <div :class="'v-key double_lite finger7 ' + (this.current === 'h' ? 'next' : '')" data-key="H"><span
                  class="major">р</span></div>
              <div :class="'v-key double_lite finger7 ' + (this.current === 'j' ? 'next' : '')" data-key="J"><span
                  class="major">о</span></div>
              <div :class="'v-key double_lite finger8 ' + (this.current === 'k' ? 'next' : '')" data-key="K"><span
                  class="major">л</span></div>
              <div :class="'v-key double_lite finger9 ' + (this.current === 'l' ? 'next' : '')" data-key="L"><span
                  class="major">д</span></div>
              <div :class="'v-key double_lite finger10 ' + (this.current === ';' ? 'next' : '')" data-key="SEMICOLON">
                <span class="major">ж</span></div>
              <div :class="'v-key double_lite finger10 ' + (this.current === '\'' ? 'next' : '')" data-key="QUOTE"><span
                  class="major">э</span></div>
              <div class="v-key fake iso" style="width: 76px">
                <div class="v-key double_lite finger10" data-key="BACKSLASH"><span class="major">ё</span></div>
              </div>
              <div class="v-key right ansi system" data-key="ENTER"><span class="major">Enter</span></div>
              <div class="v-key fake separator"></div>
              <div class="v-key fake"></div>
              <div class="v-key fake"></div>
              <div class="v-key separator single finger7" data-key="NUMPAD4"><span class="major">4</span></div>
              <div class="v-key single finger8" data-key="NUMPAD5"><span class="major">5</span></div>
              <div class="v-key single finger9" data-key="NUMPAD6"><span class="major">6</span></div>
              <div class="v-clear"></div>
            </div>
            <div class="v-row">
              <div class="v-key left system" data-key="SHIFT"><span class="major">Shift</span></div>
              <div class="v-key iso double finger1" data-key="ANGLE"><span class="major">`</span><sup
                  class="major">~</sup></div>
              <div :class="'v-key double_lite finger1 ' + (this.current === 'z' ? 'next' : '')" data-key="Z"><span
                  class="major">я</span></div>
              <div :class="'v-key double_lite finger2 ' + (this.current === 'x' ? 'next' : '')" data-key="X"><span
                  class="major">ч</span></div>
              <div :class="'v-key double_lite finger3 ' + (this.current === 'c' ? 'next' : '')" data-key="C"><span
                  class="major">с</span></div>
              <div :class="'v-key double_lite finger4 ' + (this.current === 'v' ? 'next' : '')" data-key="V"><span
                  class="major">м</span></div>
              <div :class="'v-key double_lite finger4 ' + (this.current === 'b' ? 'next' : '')" data-key="B"><span
                  class="major">и</span></div>
              <div :class="'v-key double_lite finger7 ' + (this.current === 'n' ? 'next' : '')" data-key="N"><span
                  class="major">т</span></div>
              <div :class="'v-key double_lite finger7 ' + (this.current === 'm' ? 'next' : '')" data-key="M"><span
                  class="major">ь</span></div>
              <div :class="'v-key double_lite finger8 ' + (this.current === ',' ? 'next' : '')" data-key="COMMA"><span
                  class="major">б</span></div>
              <div :class="'v-key double_lite finger9 ' + (this.current === '.' ? 'next' : '')" data-key="PERIOD"><span
                  class="major">ю</span></div>
              <div class="v-key double finger10" data-key="SLASH"><span class="major">/</span><sup class="major">?</sup>
              </div>
              <div class="v-key right system" data-key="SHIFT"><span class="major">Shift</span></div>
              <div class="v-key fake separator"></div>
              <div class="v-key center system" data-key="UP"><span class="major">↑</span></div>
              <div class="v-key fake"></div>
              <div class="v-key separator single finger7" data-key="NUMPAD1"><span class="major">1</span></div>
              <div class="v-key single finger8" data-key="NUMPAD2"><span class="major">2</span></div>
              <div class="v-key single finger9" data-key="NUMPAD3"><span class="major">3</span></div>
              <div class="v-key fake">
                <div class="v-key left system" data-key="ENTER"><span class="major">Enter</span></div>
              </div>
              <div class="v-clear"></div>
            </div>
            <div class="v-row">
              <div class="v-key left system" data-key="CONTROL"><span class="major">Ctrl</span></div>
              <div class="v-key left system" data-key="WIN"><span class="major"></span></div>
              <div class="v-key left system" data-key="ALT"><span class="major">Alt</span></div>
              <div :class="'v-key center double finger5 ' + (this.current === ' ' ? 'next' : '')" data-key="SPACE"><span
                  class="major"> </span><sup class="major">&nbsp;</sup>
              </div>
              <div class="v-key right system" data-key="ALT"><span class="major">Alt</span></div>
              <div class="v-key right system" data-key="ALTGR"><span class="major">AltGr</span></div>
              <div class="v-key right system" data-key="CONTEXTMENU"><span class="major"></span></div>
              <div class="v-key right system" data-key="CONTROL"><span class="major">Ctrl</span></div>
              <div class="v-key center separator system" data-key="LEFT"><span class="major">←</span></div>
              <div class="v-key center system" data-key="DOWN"><span class="major">↓</span></div>
              <div class="v-key center system" data-key="RIGHT"><span class="major">→</span></div>
              <div class="v-key separator single finger6" data-key="NUMPAD0"><span class="major">0</span></div>
              <div class="v-key single finger9" data-key="DECIMAL"><span class="major">,</span></div>
              <div class="v-clear"></div>
            </div>
          </div>
        </div>
        <a href="#" class="closer" title="Закрыть" style="display: inline;" @click="close"></a>

      </div>
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
  emits: ['typing-success', 'typing-error'],
  components: {TypingRow},
  data() {
    return {
      // по умолчанию скрываем окно набора текста
      visible: false,
      // ожидание таймера ошибки (пока не истек - не реагируем на клавиши)
      waitError: false,
      activeRow: 0,
      rows: [],
      errorsCounter: 0,
      // следующий символ
      current: ""
    }
  },
  methods: {
    /**
     * распарсить и установить текст
     */
    start(text) {
      this.visible = true
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
          this.setCurrentKey(r.current.toLowerCase())
          r.next = r.next.slice(1)
        }
        rows.push(r)
      }
      console.log(rows)
      this.rows = rows
      this.activeRow = 0
    },
    close() {
      this.visible = false
    },
    onKeyDown: function (e) {
      // пока ждем таймер ошибки - не обрабатываем ввод
      if (this.waitError) return

      // только если ввели 1 символ (исключаем системные клавиши)
      if (e.key.length !== 1) return;

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
            this.setCurrentKey(row.current.toLowerCase())
            row.next = row.next.slice(1)
          } else {
            // в предыдущей строке убираем текущий символ. она закончена
            row.current = ""
            this.activeRow++
            if (this.activeRow >= this.rows.length) {
              this.$emit("typing-success", this.errorsCounter)
            } else {
              let nextRow = this.rows[this.activeRow]
              nextRow.current = nextRow.next.slice(0, 1)
              this.setCurrentKey(nextRow.current.toLowerCase())
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
          this.errorsCounter++
        }
      }
    },
    setCurrentKey(c) {
      switch (c) {
        case  'й':
          this.current = 'q'
          break;
        case  'ц':
          this.current = 'w'
          break;
        case  'у':
          this.current = 'e'
          break;
        case  'к':
          this.current = 'r'
          break;
        case  'е':
          this.current = 't'
          break;
        case  'н':
          this.current = 'y'
          break;
        case  'г':
          this.current = 'u'
          break;
        case  'ш':
          this.current = 'i'
          break;
        case  'щ':
          this.current = 'o'
          break;
        case  'з':
          this.current = 'p'
          break;
        case  'х':
          this.current = '['
          break;
        case  'ъ':
          this.current = ']'
          break;
        case  'ф':
          this.current = 'a'
          break;
        case  'ы':
          this.current = 's'
          break;
        case  'в':
          this.current = 'd'
          break;
        case  'а':
          this.current = 'f'
          break;
        case  'п':
          this.current = 'g'
          break;
        case  'р':
          this.current = 'h'
          break;
        case  'о':
          this.current = 'j'
          break;
        case  'л':
          this.current = 'k'
          break;
        case  'д':
          this.current = 'l'
          break;
        case  'ж':
          this.current = ';'
          break;
        case  'э':
          this.current = '\''
          break;

        case  'я':
          this.current = 'z'
          break;
        case  'ч':
          this.current = 'x'
          break;
        case  'с':
          this.current = 'c'
          break;
        case  'м':
          this.current = 'v'
          break;
        case  'и':
          this.current = 'b'
          break;
        case  'т':
          this.current = 'n'
          break;
        case  'ь':
          this.current = 'm'
          break;
        case  'б':
          this.current = ','
          break;
        case  'ю':
          this.current = '.'
          break;

        default:
          this.current = c
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown)
  },
  unmounted() {
    window.removeEventListener('keydown', this.onKeyDown)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "keyboard.css";

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
}

.window {
  font-family: Arial, Arial, Helvetica, sans-serif;
  position: absolute;
  left: 50%;
  top: 43%;
  width: 1020px;
  height: 595px;
  margin: -270px -510px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 30px #333;
}

.workspace {
  box-sizing: content-box;
}

.block-left {
  position: absolute;
  width: 180px;
  left: 20px;
  top: 20px;
}

ul.fingers {
  list-style: none;
  margin: 0;
  padding: 25px 0 0 10px
}

ul.fingers > li.finger {
  position: relative;
  font-size: 13px;
  color: #777;
  padding: 6px 0 6px 30px
}

ul.fingers > li.finger > span.finger1 {
  background: #f4b3c2
}

ul.fingers > li.finger > span.finger2 {
  background: #fdcf8c
}

ul.fingers > li.finger > span.finger3 {
  background: #bcdd9c
}

ul.fingers > li.finger > span.finger4 {
  background: #a3dce0
}

ul.fingers > li.finger > span.finger5 {
  background: #d2b4de
}

ul.fingers > li.finger > span.finger6 {
  background: #aec6e0
}

ul.fingers > li.finger > span {
  position: absolute;
  left: 0;
  top: 50%;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%
}

ul.fingers > li.finger:hover > span {
  filter: brightness(103%)
}

.block-center {
  position: absolute;
  float: left;
  width: 580px;
  left: 220px;
  top: 20px;
  border: 1px solid #e2e2e2;
}

.block-right {
  position: absolute;
  width: 180px;
  right: 20px;
  top: 20px
}

.text-area {

}

.window > .closer {
  position: absolute;
  width: 32px;
  height: 32px;
  background: url("../assets/b_buttons.svg") no-repeat 0 -64px;
}

.closer {
  top: 10px;
  right: 10px;
  background-position: 0 -64px;
  z-index: 101;
  display: none;
}

.closer:hover {
  background-position: -32px -64px
}

.v-keyboard {
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 980px;
  font-family: Arial, Arial, Helvetica, sans-serif;
}


</style>
