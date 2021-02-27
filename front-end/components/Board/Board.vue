<template>
  <section class="board m-auto text-center">
    <div class="grid grid-flow-col">
      <div class="cell-alias-number" />
      <div v-for="(label_top, index) in labels" :key="index + '_top'" class="cell-alias">
        {{ label_top }}
      </div>
      <div class="cell-alias-number" />
    </div>
    <div v-for="(line, index) in board" :key="index" class="table-line grid grid-flow-col">
      <div class="cell-alias-number">
        {{ 8-index }}
      </div>
      <BoardLine :line-key="index" :line="line" />
      <div class="cell-alias-number">
        {{ 8-index }}
      </div>
    </div>
    <div class="grid grid-flow-col">
      <div class="cell-alias-number" />
      <div v-for="(label_bot, index) in labels" :key="index + '_bottom'" class="cell-alias">
        {{ label_bot }}
      </div>
      <div class="cell-alias-number" />
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    board: ['rnbqkbnr', 'pppppppp', '8', '8', '8', '8', 'PPPPPPPP', 'RNBQKBNR']
  })
}
</script>

<style lang="scss">
$width: 688px;
.board {
    width:$width;
    border: 10px solid;
    border-color: #277580;
    box-sizing: content-box;
    box-shadow: 0 0 5px 10px #23707b;
    margin-top: 50px;
}
.table-line {
  .board-line {
    background:white;
  }
  &:nth-child(odd) .board-line div:nth-child(even), &:nth-child(even) .board-line div:nth-child(odd) {
    background:#5cb7bb;
  }
}
.cell-alias {
  min-width: 80px;
  max-width: 80px;
  min-height:20px;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background: #0006058c;
}
.cell-alias-number {
  width: 24px;
  text-align: center;
  padding-top: 100%;
  font-weight: bold;
  color: #ffffff;
  background: #0006058c;
}
</style>
