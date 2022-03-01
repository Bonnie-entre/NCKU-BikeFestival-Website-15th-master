<template lang="pug">
  div(class="panel")
    div(class="title") {{title}}
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
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title{
  font-size: 40px;
  font-weight: 900;
  color: #0c3759;
  background: linear-gradient(90deg, #CDBFEE 0%, #FCDBE3 100%);
  border-radius: 97px;
  padding: 14px 24px;
  margin-bottom: 20px;
}
</style>
