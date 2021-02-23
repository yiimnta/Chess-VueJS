<template>
  <section class="board m-auto text-center">
    <BoardLine v-for="(line, index) in board" :key="index" :line-key="index" :line="line" />
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
$width: 640px;
.board {
    width:$width;
    border: 10px solid;
    border-color: #277580;
    box-sizing: content-box;
    box-shadow: 0 0 5px 10px #23707b;
    margin-top: 50px;
}
.board-line {
    background:white;
    &:nth-child(odd) div:nth-child(even), &:nth-child(even) div:nth-child(odd) {
        background:#5cb7bb;
    }
}
</style>
