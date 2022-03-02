<template lang="pug">
  Panel(title="模擬面試")
    div.menu
      div.menu_item(
        v-for="(item, index) in menu"
        @click="menuSelector(index)"
        :class="{ active: menuIndex === index }"
      ) {{ item }}
    div.mock_interview(v-if="menuIndex === 0")
      img(:src="require('@/assets/activity/interview.png')")
      p.p1 經驗飆升最佳途徑、追逐成功的墊腳石
      p.p2 實際模擬面試現場， 訓練你的反應能力
      p.p2 讓你第一線獲得教授、學長姐的建議與回饋！
      p.p2 經驗值大幅飆升，面試小達人就是你啦！
    div.exp_sharing(v-if="menuIndex === 1")
      div.dept_list
        div.dept(
          v-for="(dept, index) in deptMenu"
          @click="deptIndex = index"
          :class="{ active: deptIndex === index }"
        ) {{ dept }}
      <iframe width="100%" height="360" src="https://www.youtube.com/embed/videoseries?list=PLqUuGuTWwe_WTLkMgASWr8R0sH2lKurVU" title="成大單車節 | 經驗分享" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    div.speach(v-if="menuIndex === 2")
      div(v-for="(info, index) in speachInfo")
        div.section(v-if="index % 2 === 0")
          img(:src="info.img")
          div
            p.title {{ info.title }}
            br
            p.content {{ info.content }}
        div.section(v-else)
          div
            p.title {{ info.title }}
            br
            p.content {{ info.content }}
          img(:src="info.img")
        hr.divider
</template>

<script>
import Panel from '../Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      menu: ['模擬面試', '經驗分享', '教授演講'],
      menuIndex: 0,
      deptMenu: ['醫技系', '外文系', '心理系', '職治系'],
      deptIndex: 0,
      speachInfo: [
        {
          title: '會計系｜劉梧柏教授',
          content: '"你要確定欸！" 談做出負責任的選擇',
          img: require('@/assets/activity/speaker_1.png')
        },
        {
          title: '護理系｜賴維淑教授',
          content: '談護理系的面試技巧',
          img: require('@/assets/activity/speaker_2.png')
        },
        {
          title: '經濟系｜蔡群立教授',
          content: '經濟系及不分系面試注意事項之重點',
          img: require('@/assets/activity/speaker_3.png')
        }
      ]
    }
  },
  methods: {
    menuSelector: function (index) {
      if (this.menuIndex !== index) { this.deptIndex = 0 }
      this.menuIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px){
    h3 {
      font-size: 40px;
      text-align: left;
    }

    .menu {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 10px 0;
      .menu_item {
        cursor: pointer;
        padding: 16px 10px;
        font-size: 120%;
        color: #7B61FF;
        background-color: #FCF4D3;
        box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 40px;
        margin: 1vw;
        &.active {
          background-color: #7B61FF;
          color: #fff;
        }
      }
    }

    .mock_interview {
      width: 86vw;
      img{
        width: 82vw;
      }
      .p1 {
        font-size: 100%;
        margin: 16px 0;
      }
      .p2 {
        color: #C4C4C4;
      }
    }

    .exp_sharing {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 420px;
      width: 86vw;
      .dept_list {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .dept {
          cursor: pointer;
          font-size: 120%;
          padding: 0 5px;
          &.active {
            border-bottom: 1.3mm solid #CDBFEE;
          }
        }
      }
    }

    .speach {
      width: 86vw;
      margin: 0 auto;
      .section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          height: 136px;
          width: 130px;
        }
        div .title {
          color: #769BFF;
          font-size: 110%;
        }
        div .content {
          font-size: 100%;
        }
      }
      hr {
        border: solid #CDBFEE 1px;
      }
    }
  }
  @media only screen and (min-width: 600px){
    h3 {
      font-size: 40px;
      text-align: left;
    }

    .menu {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 30px 0;
      .menu_item {
        cursor: pointer;
        padding: 16px 40px;
        font-size: 24px;
        color: #7B61FF;
        background-color: #FCF4D3;
        box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 50px;
        &.active {
          background-color: #7B61FF;
          color: #fff;
        }
      }
    }

    .mock_interview {
      width: 86%;
      img{
        width: 86%;
      }
      .p1 {
        font-size: 24px;
        margin: 16px 0;
      }
      .p2 {
        color: #C4C4C4;
      }
    }

    .exp_sharing {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 420px;
      width: 56vw;
      .dept_list {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .dept {
          cursor: pointer;
          font-size: 20px;
          padding: 0 5px;
          &.active {
            border-bottom: 1.3mm solid #CDBFEE;
          }
        }
      }
    }

    .speach {
      width: 70%;
      margin: 0 auto;
      .section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          height: 150px;
        }
        div .title {
          color: #769BFF;
          font-size: 20px;
        }
        div .content {
          font-size: 18px;
        }
      }
      hr {
        border: solid #CDBFEE 1px;
      }
    }
  }
</style>
