<template lang="pug">
  Panel(:title="title")
    div(class="secondary-title") {{secondaryTitle}}
    div(class="content") {{content}}
    img(class="bike-rent" :src="bikeRent")
</template>

<script>
import Panel from '../Panel.vue'
import bikeRent from '../../../assets/activity/bikeRent.png'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      title: '單車體驗',
      secondaryTitle: '【全日活動｜地點：中正堂】',
      content: '不想用走的逛成大校園嗎？我們提供免費租借 CK-BIKE！不知道午餐要吃什麼？成大美食清單和校園景點地圖等你來拿！',
      bikeRent
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
    .bike-rent {
      width: 100%;
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
    .bike-rent {
      width: 100%;
    }
  }
</style>
