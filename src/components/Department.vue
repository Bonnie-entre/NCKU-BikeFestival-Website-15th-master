<template lang="pug">
  div(class="dept_page")
    div(class="dept_top_bar")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          div(class="top_bar_mobile" v-if="!pc")
            label() 科系資訊
            button( @click="dropdown_top = !dropdown_top")
              div(class="list_btn" v-for="(l, index) of 3")
          div(class="top_bar_pc" v-if="pc")
            router-link(v-bind:class="{ active: index===1 }" tag="label" v-for="(text, index) of menuText" v-bind:key="index" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
            label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要報名
    div(class="dept_layout_mobile" v-if="!pc & !dropdown_top")
      div(class="dropdown_top" )
        label() {{tempClass}}
        button(class="dropdown_btn" @click="dropdown=!dropdown;") ˇ
      div(class="dropdown_dept__menu" v-if="dropdown")
        router-link(tag="label" v-for="(dept, index) of classes" v-bind:to="'/Dept_' + classKeys[index]" v-bind:key="index" ) {{dept}}
    div(class="dept_layout_dropdown_top" v-if="dropdown_top")
      router-link(class="dropdown_top_list" v-for="(item, index) in menuText" tag="label"  v-bind:key="text" v-bind:to="'/' + urlText[index]" v-bind:class="{ active: index==1 }") {{item}}
      label(class="dropdown_top_list" @click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
    
    div(class="dept_layout_pc" v-if="pc" v-show="mode===0" @click="list = false;")
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
      menuText: ['活動介紹', '科系資訊', '主題專欄', '合作單位'],
      urlText: ['activity', 'department', 'column', 'sponsor'],
      mode: 0,
      dropdown: false,
      dropdown_top: false,
      list: false,
      deptList: false,
      deptSlides: srcJson,
      tempClassKey: '',
      tempClass: '選擇學院',
      tempDept: '',
      tempDeptFormal: '',
      pc: this.isPC(),
      classes: ['文學院','理學院', '管理學院', '生物科學與科技學院', '電機資訊學院',  '工學院',  '醫學院', '社會科學院', '規劃與設計學院', '不分學院'],
      classKeys: [  'humanity', 'science', 'management', 'biological', 'computer', 'engineer', 'medicine', 'social', 'design', 'undeclear'],
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
  @media only screen and (max-width: 599px){
    .dept_page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      justify-items: flex-start;
      height: 100vh;
      width: 100vw;
      min-width: 1000px;
      background-image: url("../assets/rwd_background.svg");
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    .dept_top_bar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #FCDBE3;
      width: 100%;
      height: 10vh;
      .dept_top_bar_layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        .top_logo{
          width: 10%;
          height: 100%;
          margin: 0 2vw 0 2vw;
          background-image: url("../assets/logoHome_white2.png");
          background-repeat: no-repeat;
          background-size: 45% 45%;
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
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .top_bar_mobile{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-content: center;
            label{
              width: 60%;
              font-size: 230%;
              font-weight: 600;
              letter-spacing: 1.5vw;
              color: #769BFF;
            }
            button{
              width: 20%;
              height: 100%;
              margin-right: 3vw;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-content: center;
              border: none;
              background: transparent;
              .list_btn{
                width: 100%;
                height: 0.4vh;
                background: white;
              }
            }
          }
        }
      }
    }
    .dept_layout_mobile{
      .dropdown_top{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-items: center;
        justify-content: center;
        margin: 2vh 0 1vh 0;
        width: 68vw;
        height: 8vh;
        background: #FCF6B8;
        border-radius: 15px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        label{
          color: #0C3759;
          font-size: 200%;
          margin: 0 2vw 0 0;
        }
        .dropdown_btn{
          position: relative;
          width: 10vw;
          color: white;
          background: transparent;
          font-size: 200%;
          border: none;
          right: -10vw;
          top: 1vh;
        }
      }
      .dropdown_dept__menu{
        display: flex;
        flex-direction: column;
        label{
          width: 68vw;
          height: 6vh;
          margin: 0.3vh 0 0.3vh 0;
          background: #DAD0F2;
          color: #769BFF;
          font-size: 140%;
          line-height: 6vh;
        }
      }
    }
    .dept_layout_dropdown_top{
      display: flex;
      flex-direction: column;
      width: 50vw;
      height: 70vh;
      margin-top: 5vh;
      align-items: center;
      .dropdown_top_list{
        width: 100%;
        color: #0C3759;
        font-size: 220%;
        letter-spacing: 1.5vw;
        margin: 3vh;
        line-height: 8vh;
        
      }
      .active{
        font-weight: 700;
        border-bottom: 1mm solid #0C3759;
        }
    }
  }
  @media only screen and (min-width: 600px){
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
    .dept_top_bar {
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
    .dept_layout_pc {
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
  }
</style>
