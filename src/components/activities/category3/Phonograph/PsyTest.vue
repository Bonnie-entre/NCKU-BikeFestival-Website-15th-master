<template lang="pug">
  Panel(title="心理測驗")
    div.container
      p {{content}}
      div.answers
        img(:src="require('@/assets/activity/phonograph/psyQ1.png')" style="width: 50%")
        img(:src="require('@/assets/activity/phonograph/psyQ2.png')" style="width: 46%")
</template>

<script>
import Panel from './Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      content: '來做個簡單輕鬆的心理測驗吧~'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    letter-spacing: 0.1em;
    font-size: 18px;
    text-align: justify;
    display: block;
    margin: 0 20px;
    line-height: 20px;
  }
  .answers {
    margin-top: 20px;
    flex-grow: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    img {
      object-fit: contain;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
  }
}
</style>
