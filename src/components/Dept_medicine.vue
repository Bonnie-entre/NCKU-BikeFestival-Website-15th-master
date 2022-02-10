<template lang="pug">
  div(class="Dept_design_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          router-link(v-bind:class="{ active: index===1 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
          label(@click="openTab('hhttps://docs.google.com/forms/d/e/1FAIpQLSfx69xLr9XCqz6y8OEn4d8n6gc4qw3KzOn8FHb7Dm94pGwwmg/viewform'); list = false;" v-if="pc") 我要報名
    //- div(class="dept_decoration")
    div(class="dept_layout" )
      div(class="dept_menu")
          div(class="dept_title") -醫學院-
          div(class="dept_class" v-show="pc")
            p(class="dept_class_item" v-for="(iter, index) in dept" @click="deptIndex=index" v-bind:class="{active: deptIndex === index}" ) {{iter}}
              
      div(class="dept_right_show")
        div(class="dept_intro")
        div(class="dept_guide")
          button() 系館導覽報名表單
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
      deptIndex: 0,
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
      dept: [ '醫學系', '藥學系', '護理學系', '牙醫學系', '物理治療學系', '職能治療學系', '醫學檢驗生物技術學系','學院ＱＡ影片','回上頁'],
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

  /*
    mobile layout css
  */
  
  /*
    computer layout css
  */
  @media only screen and (min-width: 600px) {
      @font-face {
    font-family: 'GenYoGothicTW-Bold';
    src: url('../assets/fonts/GenYoGothicTW-Bold.woff') format("woff"),
          url('../assets/fonts/GenYoGothicTW-Bold.ttf') format("truetype"),
          url('../assets/fonts/GenYoGothicTW-Bold.eot') format("embedded-opentype");
    }
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
    *{
      font-family: 'Noto Sans TC'!important;
    }

    .Dept_design_page {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      min-width: 1000px;
      margin: 0;
      padding: 0;
      background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
    }
    .dept_top_bar_pc {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-width: 600px;
      z-index: 100;
      // top: 0%;
      // left: 0%;
      background: #CDBFEE;
      width: 100vw;
      height: 16vh;
      box-shadow: 0 0 3px 1px rgba(51, 51, 51, 0.5);
      &:hover {
        box-shadow: 0 0 4px 2px rgba(51, 51, 51, 0.5);
      }
      .dept_top_bar_layout {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        justify-items: center;
        align-items: center;
        align-content: center;
        .top_logo{
          width: 35vw;
          height: 70%;
          background-image: url("../assets//logoHome.svg");
          background-repeat: no-repeat;
          background-size: 90% 90%;
          transition: filter .8s ease;
          cursor: pointer;
            &:hover {
              filter: brightness(150%);
            }
            &:active {
              filter: brightness(80%);
            }
        }
        .top_bar{
          width: 60vw;
          height: 50%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;

          font-family: GenSenRounded TW;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          color: #0C3759;
          background: linear-gradient(to right, #FCDBE3 0%, #f6eec2 100%);
          box-shadow: 0 0 2px 1px rgba(214, 214, 214, 0.678);
          border-radius: 147px;
          label {
            margin: 10px;
            letter-spacing: 0.2vw;
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
            font-size: 26px;
            font-weight: 700;
            text-decoration: underline;
            text-decoration-color: #0c38597a;
            text-decoration-thickness: 2px;
          }
        }
      }
    }
    .dept_layout{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      margin-top: 16vh;
      align-items: center;
      justify-items: center;
      justify-content: space-around;
      background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
      // overflow-y: scroll;
      .dept_menu {
        width: 360px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        margin-top: 20px;
        background: linear-gradient(180deg, #ebe3f5 0%, #FCDBE3 100%);
        border-radius: 30px;
        overflow-y: scroll;
        z-index: 100;
        .dept_title{
            letter-spacing: 0.1em;
            width: 100%;
            // height: 6vw;
            margin-top: 30px;
            margin-bottom: 20px;
            color: #769BFF;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
        }
        .dept_class{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          margin: 10px;
          p {
            width: 100%;
            margin: 20px;

            color: #0C3759;
            font-weight: 500;
            font-size: 24px;
            &:last-child {
                background-position: 60% 15%;
                background-size: 75% 75%;
            }
            transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;
            cursor: pointer;
            &:hover {
                // border-width: 0.2vw;
                // border-radius: 2vw;
                // background-size: 90% 90%;
                filter: brightness(150%);
            }
            &:active {
                filter: brightness(50%);
            }
            // }
        
          }
          .active{
            text-decoration: underline;
            text-decoration-color: #FCF6B8;
            text-decoration-thickness: 6px;
            font-weight: 800;
          }
        }
      }
      .dept_right_show{
        width: 60%;
        // height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        margin-top: 20px;
        .dept_intro{
          width: 700px;
          height: 400px;
          margin-top: 20px;
          margin-bottom: 20px;
          background-color: #C4C4C4;
        }
        .dept_guide{
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-start;
          justify-items: flex-start;
          // align-items: center;
          // align-content: flex-start;
          button{
            height: 50px;
            width: 240px;
            background: #C4C4C4;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 64px;
            margin: 20px;

            font-size: 20px;
            text-align: center;
            text-decoration: none;
          }
        }
      }
    }
    
    
  }
</style>
