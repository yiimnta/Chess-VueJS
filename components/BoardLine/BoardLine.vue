<template>
  <div class="board-line grid grid-flow-col grid-cols-8">
    <Cell v-for="(cell, index) in cells" :key="index" :cell-key="lineKey + '-' + index" :cell="cell" />
  </div>
</template>
<script>
export default {
  props: {
    line: {
      type: String,
      default: '8'
    },
    lineKey: {
      type: Number
    }
  },
  computed: {
    cells () {
      let rs = []
      this.line.split('').forEach((e) => {
        const num = Number.parseInt(e)
        if (!Number.isNaN(num)) {
          rs = rs.concat(new Array(num).fill(' '))
        } else {
          rs.push(e)
        }
      })
      return rs
    }
  }
}
</script>
