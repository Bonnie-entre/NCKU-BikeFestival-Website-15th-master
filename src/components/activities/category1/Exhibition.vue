<template lang="pug">
  Panel(:title="title")
    div(class="secondary-title") {{secondaryTitle}}
    Block(
      v-for="block in blocks",
      :title="block.title",
      :content="block.content"
    )
      div(class="embed-container")
        iframe(
          v-if="block.title === '科系書展－上課'"
          :src="embedUrl"
          class="embed"
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
      title: '日常展覽',
      secondaryTitle: '【全日活動｜地點：多功能廳】',
      blocks: [
        {
          title: '什麼是日常？',
          content: '每天老師說：「同學上課！」哭啊聽到爛。OH WOW 這就是日常！顧盼過往的成大，告訴你一些成大的 ＃軼聞凝視未來的選擇，讓你直接翻閱各科系教科書，看看他們在 ＃學什麼'
        },
        {
          title: '軼聞展－OH WOW',
          content: '成大學生有育樂街、漁光島、踏溯台南，那你有聽過成大的奇聞軼事嗎？黑十字、穿牆人、MP3 事件？想知道只有成大學生聽過的悄悄話嗎？單車節就來軼聞展體驗一下吧！'
        },
        {
          title: '科系書展－上課',
          content: '不是國英數社自的課本長什麼樣子？這裡有成大各系所的書籍和大學生筆記，現場還有從每本課本出的問答題庫，翻完書可以挑戰看看哦！學生圖鑑－同學蒐集成大 9 個學院 41 個科系的學生的快問快答。想知道的東西，大學生來告訴你！'
        }
      ],
      embedUrl: 'https://www.youtube.com/embed/vnEUFMG5e1I'
    }
  }
}
</script>

<style lang="scss" scoped>
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
.embed-container{
  width: 100%;
  display: flex;
  justify-content: center;
  .embed {
    margin-top: 20px;
    width: 560px;
    height: 315px;
  }
}
</style>
