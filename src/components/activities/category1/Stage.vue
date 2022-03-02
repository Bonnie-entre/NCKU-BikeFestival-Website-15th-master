<template lang="pug">
  Panel(:title="title")
    div(class="secondary-title") {{secondaryTitle}}
    div(class="content") {{content}}
    Block(
      v-for="block in blocks",
      :title="block.title",
      :content="block.content"
    )
</template>

<script>
import Panel from '../Panel.vue'
import Block from '../Block.vue'
export default {
  components: {
    Panel,
    Block
  },
  data: function () {
    return {
      title: '燭華｜舞台活動',
      secondaryTitle: '【全日活動｜地點：榕園】',
      content: '單車節大型舞台《燭華》 將在3/5.3/6隆重登場，現場除了校內外社團精彩表演，還有神秘嘉賓將登場，並不定時舉辦有獎徵答，當天隨時關注舞台活動，好禮送不完！',
      blocks: [
        {
          title: '燭華',
          content: '主題意象—蠟燭：成大90周年校慶精神之一－「藏行顯光」的意象之衍伸，希望能夠點燃參與者心中的蠟燭，讓溫暖的光芒在每個迷惘的心中，默默地燃燒，為其驅散迷霧。'
        },
        {
          title: '酒水吧',
          content: '參與當日活動問答或是打卡，即可參與抽獎活動，獎品豐富，千萬別錯過！'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px){
    .secondary-title {
      font-weight: bold;
      font-size: 120%;
      line-height: 36px;
      letter-spacing: 0.1em;
      color: #769BFF;
      padding: 0 20px;
    }
    .content {
      text-align: start;
      margin: 20px 0;
      font-size: 100%;
      line-height: 30px;
      letter-spacing: 0.1em;
      color: #0C3759;
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 600px){
    .secondary-title {
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0.1em;
      color: #769BFF;
      padding: 0 20px;
    }
    .content {
      text-align: start;
      margin: 20px 0;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.1em;
      color: #0C3759;
      padding: 0 20px;
    }
  }
</style>
