<template lang="pug">
  div(class="block")
    div(class="title") {{title}}
    div(class="content") {{content}}
    slot
</template>

<script>

export default {
  props: ['title', 'content']
}
</script>

<style lang="scss" scoped>
.block{
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: #FFE9EE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0;
}
.title{
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.1em;
  color: #769BFF;
}
.content {
  text-align: start;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #0C3759;
}
</style>
