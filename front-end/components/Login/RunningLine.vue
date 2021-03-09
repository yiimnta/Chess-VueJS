<template>
  <div class="row flex">
    <div>
      <i v-for="(chess, i) in listChess" :key="`${i}_${idLine}_1`" :class="'fas fa-'+chess.fi+' '+(chess.light?'light':'')" />
    </div>
    <div>
      <i v-for="(chess, i) in listChess" :key="`${i}_${idLine}_2`" :class="'fas fa-'+chess.fi+' '+(chess.light?'light':'')" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    idLine: { type: Number, required: true }
  },
  data () {
    return {
      usingLight: true,
      list: [
        { fi: 'chess', light: false },
        { fi: 'chess-bishop', light: false },
        { fi: 'chess-king', light: false },
        { fi: 'chess-knight', light: false },
        { fi: 'chess-pawn', light: false },
        { fi: 'chess-queen', light: false },
        { fi: 'chess-rook', light: false }
      ]
    }
  },
  computed: {
    listChess () {
      const rs = [...this.list]
      for (let i = 0; i < 8; i++) {
        rs.push(...this.randomElement())
      }
      return rs
    }
  },
  methods: {
    randomElement () {
      const array = [...this.list]
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }

      if (!this.usingLight) { return array }

      let lightnumber = 2
      return array.map((e) => {
        e.light = false
        if (lightnumber < 0) { return e }
        if (Math.floor(Math.random() * 30) === 1) {
          e.light = true
          lightnumber -= 1
        }
        return { ...e }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
    position: relative;
    top:-47%;
    left:-10%;
    width: 100%;
    padding: 10px;
    white-space: nowrap;
    font-size: 64px;
    transform: rotate(-30deg);
    div {
        animation: animate 80s linear infinite;
        animation-delay: -80s;
        i {
            color:rgba(0, 0, 0, 0.5);
            transition: 1s;
            padding: 0 5px;
            user-select: none;
            cursor: default;
          &:hover, &.light {
            transition: 0s;
            color:#0f0;
            text-shadow: 0 0 120px #0f0;
          }
        }
        &:nth-child(2){
            animation: animate2 80s linear infinite;
            animation-delay: -40s;
        }
    }
    &:nth-child(even) {
        div {
            animation: animate3 80s linear infinite;
            animation-delay: -80s;
            &:nth-child(2) {
                animation: animate4 80s linear infinite;
                animation-delay: -40s;
            }
        }
    }
}

@keyframes animate {
    0%
    {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
@keyframes animate2 {
    0%
    {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-200%);
    }
}

@keyframes animate3 {
    0%
    {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
@keyframes animate4 {
    0%
    {
        transform: translateX(-200%);
    }
    100% {
        transform: translateX(0%);
    }
}
</style>
