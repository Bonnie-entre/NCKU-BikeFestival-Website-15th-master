<template lang="pug">
  div(class="dept_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          router-link(v-bind:class="{ active: index===1 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
          label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要報名
    div(class="dept_layout" v-show="mode===0" @click="list = false;")
      div(class="dept_layout_l")
        div(class="dept_menu_l")
          router-link(tag="button" v-bind:to="'/Dept_humanity'" ) 文學院
          router-link(tag="button" v-bind:to="'/Dept_science'" ) 理學院
          router-link(tag="button" v-bind:to="'/Dept_management'" ) 管理學院
          router-link(tag="button" v-bind:to="'/Dept_biological'" ) 生物科學<br>與科技學院
          router-link(tag="button" v-bind:to="'/Dept_computer'" ) 電機資訊<br>學院
      div(class="dept_layout_mid")
        dept(class="dept_mid")
      div(class="dept_layout_r")
        div(class="dept_menu_r")
          router-link(tag="button" v-bind:to="'/Dept_engineer'") 工學院
          router-link(tag="button" v-bind:to="'/Dept_medicine'" ) 醫學院
          router-link(tag="button" v-bind:to="'/Dept_social'" ) 社會科學院
          router-link(tag="button" v-bind:to="'/Dept_design'" ) 規劃設計<br>學院
          router-link(tag="button" v-bind:to="'/Dept_undeclear'" ) 不分學院
</template>

<script>
import srcJson from '../assets//dept/dept.json'
export default {
  created () {
    window.addEventListener('resize', this.windowSizeChange)
  },
  destroyed () {
    window.removeEventListener('resize', this.windowSizeChange)
  },
  data: function () {
    return {
      menuText: [ '活動介紹', '科系資訊', '主題專欄', '合作單位'],
      urlText: ['activity', 'department', 'column', 'sponsor'],
      mode: 0,
      list: false,
      deptList: false,
      deptSlides: srcJson,
      tempClassKey: '',
      tempClass: '選擇學院',
      tempDept: '',
      tempDeptFormal: '',
      pc: this.isPC(),
      classes: ['規劃與設計學院', '社會科學院', '不分學院', '工學院', '理學院', '文學院', '醫學院', '管理學院', '電機資訊學院', '生物科學與科技學院'],
      classKeys: ['design', 'social', 'undeclear', 'engineer', 'science', 'humanity', 'medicine', 'management', 'computer', 'biological'],
      colleges: {
        design: ['建築', '都計', '工設'],
        social: ['政治', '經濟', '法律', '心理'],
        undeclear: ['不分系學程'],
        engineer: ['航太', '機械', '材料', '化工', '土木', '水利', '測量', '環工', '資源', '醫工', '能源', '工科', '系統'],
        science: ['數學', '化學', '物理', '地科', '光電'],
        humanity: ['中文', '外文', '歷史', '台文'],
        medicine: ['醫學', '牙醫', '藥學', '護理', '物治', '職治', '醫技'],
        management: ['會計', '統計', '企管', '交管', '工資管'],
        computer: ['資訊', '電機'],
        biological: ['生科', '生技']
      },
      collegesFormal: {
        design: ['建築學系', '都市計劃學系', '工業設計學系'],
        social: ['政治學系', '經濟學系', '法律學系', '心理學系'],
        undeclear: ['全校不分系學士學位學程'],
        engineer: ['航空太空工程學系', '機械工程學系', '材料科學及工程學系', '化學工程學系', '土木工程學系', '水利及海洋工程學系', '測量及空間資訊學系', '環境工程學系', '資源工程學系', '生物醫學工程學系', '能源國際學士學位學程', '工程科學系', '系統及船舶機電工程學系'],
        science: ['數學系', '化學系', '物理學系', '地球科學系', '光電科學與工程學系'],
        humanity: ['中國文學系', '外國語文學系', '歷史學系', '台灣文學系'],
        medicine: ['醫學系', '牙醫學系', '藥學系', '護理學系', '物理治療學系', '職能治療學系', '醫學檢驗生物技術學系'],
        management: ['會計學系', '統計學系', '企業管理學系', '交通管理科學系', '工業與資訊管理學系'],
        computer: ['資訊工程學系', '電機工程學系'],
        biological: ['生命科學系', '生物科技與產業科學系']
      },
      currentIndex: -1,
      check: false
    }
  },
  computed: {
    showDeptCollege: function () {
      return this.check
    }
  },
  mounted: function () {
    const self = this
    this.pc = this.isPC()
    this.setBarHeight()
    setTimeout(function () {
      self.check = true
    }, 500)
  },
  methods: {
    showSlide: function () {
      var slide = document.getElementById('dept_slide')
      slide.classList.add('show-slide')
      const endEvent = function () {
        slide.classList.remove('show-slide')
        slide.removeEventListener('animationend', endEvent)
      }
      slide.addEventListener('animationend', endEvent)
    },
    windowSizeChange: function (event) {
      if (window.innerWidth > 599) {
        this.pc = true
      } else {
        this.pc = false
      }
    },
    openTab: function (url) {
      window.open(url, '_blank')
    },
    isPC: function () {
      var userAgentInfo = navigator.userAgent
      var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    },
    chooseClass: function (index) {
      if (this.currentIndex === index) {
        return
      }
      const chainPath = this.$el.querySelector('#chain_path path')
      const smallChain = this.$el.querySelector('#small_chain')
      const largeChain = this.$el.querySelector('#large_chain')
      const animEndEvent = function () {
        chainPath.classList.remove('chain-path-anim')
        smallChain.classList.remove('chain-rotate-anim')
        largeChain.classList.remove('chain-rotate-anim')
        chainPath.removeEventListener('animationend', animEndEvent)
        smallChain.removeEventListener('animationend', animEndEvent)
        largeChain.removeEventListener('animationend', animEndEvent)
      }
      // remove animation class
      animEndEvent()
      this.currentIndex = index
      // animate the chain path
      chainPath.classList.add('chain-path-anim')
      // animate the chain
      smallChain.classList.add('chain-rotate-anim')
      largeChain.classList.add('chain-rotate-anim')
      // config animation end event to remove animation class
      chainPath.addEventListener('animationend', animEndEvent)
      smallChain.addEventListener('animationend', animEndEvent)
      largeChain.addEventListener('animationend', animEndEvent)
    },
    deptBinding: function (index) {
      const displayName = `rotate-${this.classKeys[index]}`
      const disappearName = `rotate-${this.classKeys[index]}-disappear`
      const result = {}
      result[displayName] = this.currentIndex === index
      result[disappearName] = this.currentIndex !== index
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
    .dept_page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      min-width: 1000px;
      margin: 0;
      padding: 0;
      background: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
      // overflow-y: scroll;
    }
    .dept_top_bar_pc {
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-width: 600px;
      z-index: 100;
      background: #CDBFEE;
      width: 100vw;
      height: 16vh;
      box-shadow: 0 0 3px 1px rgba(51, 51, 51, 0.5);
      .dept_top_bar_layout {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
      .top_logo{
        width: 30%;
        height: 100%;
        margin-left: 0.5%;
        margin-right: 0.5%;
        background-image: url("../assets//logoHome_white.png");
        background-repeat: no-repeat;
        background-size: 85% 46%;
        background-position: center;
        transition: filter .8s ease;
        cursor: pointer;
          &:hover {
            filter: brightness(105%);
          }
          &:active {
            filter: brightness(80%);
          }
      }
      .top_bar{
        width: 60%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
        
        color: #0C3759;
        background: linear-gradient(to right, #FCDEE7 0%, #FCF4D3 100%);
        box-shadow: 0px 2px 2px 1px rgba(105, 103, 103, 0.424);
        border-radius: 147px;
        label {
          margin: 0.8vw;
          font-size: 180%;
          background-color: transparent;
          &:hover {
            filter: brightness(150%);
            font-weight: 700;
          }
          &:active {
            filter: brightness(80%);
            font-weight: 700;
          }
        }
        .active{
          font-weight: 700;
          border-bottom: 1mm solid white;
        }
      }
    }
    }
    .dept_layout {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 84vh;
      align-items: center;
      justify-items: center;
      justify-content: space-around;
      background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
      overflow-y: scroll;
      .dept_layout_l{
        height: 100%;
        display: flex;
        justify-content: center;
        .dept_menu_l{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          justify-content: space-around;
          button {
            height: 90px;
            width: 200px;
            border-radius: 120px;
            margin: 10px;

            color: #769BFF;
            font-size: 28px;
            background-color: white;

            &:last-child {
              background-position: 60% 15%;
              background-size: 75% 75%;
            }
            border: 0px solid rgb(103, 192, 225);
            border-radius: 2vw;
            transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;
            cursor: pointer;
            &:hover {
              border-width: 0.2vw;
              background-size: 90% 90%;
            }
            &:active {
              filter: brightness(50%);
            }
            p {
              font-size: 1.2vw;
              color: rgb(116, 240, 240);
              font-weight: 500;
            }
          }
        }
      }
      .dept_layout_r{
        height: 100%;
        display: flex;
        justify-content: center;
        .dept_menu_r{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          justify-content: space-around;
          button {
            height: 90px;
            width: 200px;
            border-radius: 120px;
            margin: 10px;

            color: #769BFF;
            font-size: 28px;
            background-color: white;

            &:last-child {
              background-position: 60% 15%;
              background-size: 75% 75%;
            }
            border: 0px solid rgb(103, 192, 225);
            border-radius: 2vw;
            transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;
            cursor: pointer;
            &:hover {
              border-width: 0.2vw;
              background-size: 90% 90%;
            }
            &:active {
              filter: brightness(50%);
            }
            p {
              font-size: 1.2vw;
              color: rgb(116, 240, 240);
              font-weight: 500;
            }
          }
        }
      }
    }
</style>
