<template lang="pug">
  div(class="panel")
    slot
</template>

<style lang="scss" scoped>
.panel{
  box-sizing: border-box;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
