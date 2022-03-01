<template lang="pug">
  Panel(title="探索學習")
    div.container
      div.column_item(
        v-for="col in columns"
        href="https://www.facebook.com/248448688616633/posts/4611526018975523/?d=n"
      )
        img(:src="col.img")
        p.title {{ col.title }}
        p.content {{ col.content }}
</template>

<script>
import Panel from '../Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      columns: [
        {
          title: '人生體驗遊戲',
          content: '單車節邀請了自媒體工作者及成大學姊，​透過他們的故事，讓猶豫不決的你，體驗他們人生中的轉捩點。​遊戲中不斷的選擇，將會讓你體驗到他們創業、探索的心路歷程。',
          img: require('@/assets/activity/1.png')
        },
        {
          title: '失敗展',
          content: '單車節集結了各種失敗經驗與故事，籌畫出了這次的展覽，​歡迎前來活動現場一同找尋知音、抒發你的失敗敗吧！',
          img: require('@/assets/activity/2.png')
        },
        {
          title: '探索講座',
          content: '單車節邀請了自媒體工作者及成大學姊，​透過他們的故事，讓猶豫不決的你，體驗他們人生中的轉捩點。​遊戲中不斷的選擇，將會讓你體驗到他們創業、探索的心路歷程。',
          img: require('@/assets/activity/3.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    font-size: 40px;
    text-align: left;
  }
  .container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    height: 90%;
    .column_item {
      display: flex;
      flex-direction: column;
      width: 25%;
      height: 100%;
      .title {
        font-size: 28px;
        color: #769BFF;
        font-weight: 700;
        margin: 20px 0;
      }
      .content {
        color: #000;
        text-align: left;
        letter-spacing: 0.5px;
      }
      img{
        height: 50%;
      }
    }
  }
</style>
