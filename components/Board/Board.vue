<template>
  <section class="board m-auto text-center">
    <div class="grid grid-flow-col">
      <div class="cell-alias-number" />
      <div class="cell-alias">
        a
      </div>
      <div class="cell-alias">
        b
      </div>
      <div class="cell-alias">
        c
      </div>
      <div class="cell-alias">
        d
      </div>
      <div class="cell-alias">
        e
      </div>
      <div class="cell-alias">
        f
      </div>
      <div class="cell-alias">
        g
      </div>
      <div class="cell-alias">
        h
      </div>
    </div>
    <div v-for="(line, index) in board" :key="index" class="table-line grid grid-flow-col">
      <div class="cell-alias-number">
        {{ 8-index }}
      </div>
      <BoardLine :line-key="index" :line="line" />
    </div>
    <div class="grid grid-flow-col">
      <div class="cell-alias-number" />
      <div class="cell-alias">
        a
      </div>
      <div class="cell-alias">
        b
      </div>
      <div class="cell-alias">
        c
      </div>
      <div class="cell-alias">
        d
      </div>
      <div class="cell-alias">
        e
      </div>
      <div class="cell-alias">
        f
      </div>
      <div class="cell-alias">
        g
      </div>
      <div class="cell-alias">
        h
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    board: ['rnbqkbnr', 'pppppppp', '8', '8', '8', '8', 'PPPPPPPP', 'RNBQKBNR']
  })
}
</script>

<style lang="scss">
$width: 664px;
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
