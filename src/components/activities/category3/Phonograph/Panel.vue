<template lang="pug">
  div(class="panel")
    div(v-if="title" class="title") {{title}}
    slot
</template>

<script>

export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.panel{
  box-sizing: border-box;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 20px;
  height: 500px;
  width: 60%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title{
  font-size: 30px;
  font-weight: 900;
  color: #0c3759;
  border-radius: 97px;
  padding: 14px 24px;
  margin-bottom: 20px;
}
</style>
