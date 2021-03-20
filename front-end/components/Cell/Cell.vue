<template>
  <div :id="cellKey" class="cell-chess">
    <img
      v-if="cell !== ' '"
      :id="cellKey+'-'+name"
      :draggable="true"
      :src="urlImage"
      @click="dragChess($event)"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    cell: {
      type: String,
      default: ' '
    },
    cellKey: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('auth', ['listGames']),
    name () {
      return (this.cell === this.cell.toLocaleLowerCase() ? 'b' : 'w') + this.cell.toLocaleUpperCase()
    },
    urlImage () {
      if (this.cell === ' ') {
        return ''
      }

      return require(`~/assets/chesspieces/${this.name}.png`)
    }
  },
  methods: {
    dragChess (e) {
      /**
       * TODO: check whether the chesspiece is of currentUser or not
       * yes: continue
       * no: do nothing => return
       */

      if (e.target.parentElement.className.includes('chess-drag')) { // the chess piece is selected?
        e.target.parentElement.className = 'cell-chess'
        return
      }

      // reset all state of chesspieces
      document.querySelectorAll('.cell-chess.chess-drag').forEach((e) => { e.className = 'cell-chess' })
      e.target.parentElement.className += ' chess-drag'

      // search selected chesspiece's moves
      const movesList = []
      switch (this.cell) {
        case 'p':
        case 'P':
          movesList.push(...this.$chess.getMovesPawn(this.cellKey, this.listGames[0].board))
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss">
$size-cell: 80px;
.cell-chess {
    max-width: $size-cell;
    min-width: $size-cell;
    min-height: $size-cell;
    max-height: $size-cell;
    border: 1px solid #585986;
    transition: all 0.3s ease-in-out;
    img {
        max-width: 90%;
        margin: auto;
        cursor: move;
    }
    &.chess-drag {
      transform: scale(1.0);
      background: #75ff8c!important;
      border: 5px solid #0ace58;
      box-shadow: -1px 5px 15px 4px #000;
    }
    &.chess-hovered {
        transform: scale(1.1);
        background: azure;
        border: 5px solid #ffdc0c;
        box-shadow: 0px -2px 10px 2px;
    }
}
</style>
