<template lang="pug">
  Panel(title="他們的故事")
    div.container
      p {{content}}
      div.btn-group
        button(v-for="btn_img in btn_imgs")
          img(:src="btn_img")
</template>

<script>
import Panel from './Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      content: '收集了四位高中生的煩惱，以及他們的錄音，描述他們當時遇到的問題，這些問題你我都可能經驗過，或是正在經歷，或許你可以從他們的故事中看見自己的影子，告訴你：你並不孤單。',
      btn_imgs: [
        require('@/assets/activity/phonograph/schoolWork.png'),
        require('@/assets/activity/phonograph/future.png'),
        require('@/assets/activity/phonograph/relationship.png'),
        require('@/assets/activity/phonograph/emotion.png')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  p {
    letter-spacing: 0.1em;
    font-size: 18px;
    text-align: justify;
    display: block;
    margin: 0 20px;
    line-height: 20px;
  }
  .btn-group {
    flex-grow: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 20px;
    padding: 20px;
    button {
      background: transparent;
      border: none;
      img {
        width: 200px;
        cursor: pointer;
      }
    }
  }
}
</style>
