<template lang="pug">
  Panel
    Block(
      v-for="data in datas[date]"
      :title="data.title"
      :content="data.content"
      style="background: transparent;"
    ).schedule-block
      img(:src="data.tableImg")
</template>

<script>
import Panel from './Panel.vue'
import Block from './Block.vue'
export default {
  components: {
    Panel,
    Block
  },
  props: ['date'],
  data: function () {
    return {
      datas: [
        [
          {
            title: '舞台活動｜燭華',
            content: '',
            tableImg: require('@/assets/activity/schedule/schedule1-1.png')
          },
          {
            title: '教育創新｜座伙來',
            content: '教育創新講座，跳脫框架，座伙來！​',
            tableImg: require('@/assets/activity/schedule/schedule1-2.png')
          },
          {
            title: '教育創新｜討論坊',
            content: '想與組織進行更深入的議題式討論？我們將透過 #辦桌 的形式，讓擁有豐富想法的你與組織零距離地爽快暢談。',
            tableImg: require('@/assets/activity/schedule/schedule1-3.png')
          }
        ],
        [
          {
            title: '舞台活動｜燭華',
            content: '',
            tableImg: require('@/assets/activity/schedule/schedule2-1.png')
          },
          {
            title: '教育創新｜討論坊',
            content: '想與組織進行更深入的議題式討論？我們將透過 #辦桌 的形式，讓擁有豐富想法的你與組織零距離地爽快暢談。',
            tableImg: require('@/assets/activity/schedule/schedule2-2.png')
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule-block {
  padding: 0px;
  img {
    width: 80%;
    align-self: center;
    padding-top: 20px;
  }
}
</style>
