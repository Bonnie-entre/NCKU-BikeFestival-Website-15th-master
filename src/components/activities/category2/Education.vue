<template lang="pug">
  Panel(:title="title")
    div(class="content") {{content}}
    Block(
      v-for="block in blocks",
      :title="block.title",
      :content="block.content"
    )
      div(class="embed-container")
        img(
          v-if="block.image"
          :src="block.image"
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
      title: '教育創新',
      content: '教育創新展設計各式講座、邀請眾多組織，讓高中生在單車節了解大學科系以外，更能透過多元探索的過程，激發學習潛能，進而找到自己的興趣所在，發掘未來的更多可能性。',
      blocks: [
        {
          title: '「座伙來」',
          content: '教育創新講座，跳脫框架，座伙來！​本次教育創新講座我們設計三大主題自主學習、斜槓青年​、創新教育，並且邀請到五位專家：【爆學力 許秉軒老師】、【敏迪選讀創辦人 敏迪】、【TFT 為臺灣而教 歐冠廷】、【所在教育工作室 周佳盈】、 【共下寮 黃郁璇】，一同在教育創新講座中找到自己的人生藍圖。',
          image: require('@/assets/activity/edu_img_1.png')
        },
        {
          title: '「來續攤」',
          content: '四大主題、十七組織，透過攤位展覽近距離與組織對話，滿足你對多元領域的好奇心，創造出精彩的學習旅途！'
        },
        {
          title: '「討論坊」',
          content: '想與組織進行更深入的議題式討論？我們將透過 #辦桌 的形式，讓擁有豐富想法的你與組織零距離地爽快暢談。本次邀請六個組織與我們共談十大議題',
          image: require('@/assets/activity/edu_img_2.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
    width: 85%;
  }
}
</style>
