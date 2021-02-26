<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
.tooltip {
  &.popover {
    $color: #f9f9f9;
    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }
    .popover-arrow {
      border-color: $color;
    }
  }
}

.tooltip-arrow {
  z-index: 1;
}
</style>
