<template>
  <div
    :id="cellKey"
    class="cell-chess"
    @dragover="dragOver($event)"
    @drop="dragDrop($event)"
    @dragenter="dragEnter($event)"
    @dragleave="dragLeave($event)"
  >
    <img
      v-if="cell !== ' '"
      :id="cellKey+'-'+name"
      :draggable="true"
      :src="urlImage"
      @dragstart="dragStart($event)"
      @dragend="dragEnd($event)"
    >
  </div>
</template>

<script>
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
    dragStart (event) {
      event.target.parentElement.className += ' chess-drag'
      event.dataTransfer.setData('chess-piece', event.target.id)
      event.dataTransfer.setData('parent-cell', event.target.parentElement.id)
      setTimeout(() => {
        event.target.className = 'invisible'
      }, 0)
    },
    dragEnd (event) {
      event.target.className = ''
    },
    dragOver (event) {
      event.preventDefault()
    },
    dragDrop (event) {
      event.preventDefault()
      event.target.className = 'cell-chess'
      const piece = event.dataTransfer.getData('chess-piece')
      const cell = event.dataTransfer.getData('parent-cell')
      event.target.appendChild(document.getElementById(piece))
      document.getElementById(cell).className = 'cell-chess'
    },
    dragEnter (event) {
      event.preventDefault()
      event.target.className += ' chess-hovered'
    },
    dragLeave (event) {
      event.target.className = 'cell-chess' + (event.target.className.includes('chess-drag') ? ' chess-drag' : '')
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
    transition: all 0.2s ease;
    img {
        max-width: 90%;
        margin: auto;
        cursor: move;
    }
    &.chess-drag {
        border: 4px solid #e49612;
    }
    &.chess-hovered {
        transform: scale(1.1);
        background: azure;
        border: 5px solid #ffdc0c;
        box-shadow: 0px -2px 10px 2px;
    }
}
</style>
