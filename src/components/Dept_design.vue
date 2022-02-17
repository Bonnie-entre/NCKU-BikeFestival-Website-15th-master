<template lang="pug">
  div(class="Dept_design_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          router-link(v-bind:class="{ active: index===1 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
          label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要報名
    div(class="dept_layout" )
      div(class="dept_menu")
          div(class="dept_title") -規劃設計學院-
          div(class="dept_class" v-show="pc")
            p(class="dept_class_item" v-for="(iter, index) in dept" @click="deptIndex=index" v-bind:class="{active: deptIndex === index}" ) {{iter}}
            router-link(tag="p" v-bind:to="'/department'") 回上頁
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
      dept: [ '工業設計學系', '都市計劃學系','建築學系','學院QA影片'],
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
  .Dept_design_page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    min-width: 1000px;
    background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
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
        margin-left: 0.5%;
        margin-right: 0.5%;

        font-family: GenSenRounded TW;
        font-style: normal;
        font-weight: 550;
        font-size: 24px;
        color: #0C3759;
        background: linear-gradient(to right, #FCDEE7 0%, #FCF4D3 100%);
        box-shadow: 0px 2px 2px 1px rgba(105, 103, 103, 0.424);
        border-radius: 147px;
        label {
          margin: 10px;
          padding: 3px;
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
          font-weight: 700;
          // text-decoration: underline;
          // text-decoration-color: white;
          // text-decoration-thickness: 2px;
          border-bottom: 1mm solid white;
          // border-bottom: solid;
        }
      }
    }
  }
  .dept_layout{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 84vh;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
    // overflow-y: scroll;
    .dept_menu {
      width: 360px;
      height: 95%;
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
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      justify-items: center;
      align-content: center;
      align-items: center;
      .dept_intro{
        width: 90%;
        height: 80%;
        background-color: #C4C4C4;
      }
      .dept_guide{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        justify-items: flex-start;
        button{
          height: 56px;
          width: 250px;
          background: #C4C4C4;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 64px;
          margin: 0 8% 0 0;
          font-size: 20px;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
</style>
