<template lang="pug">
  div(class="Dept_design_page")
    div(class="dept_top_bar")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          div(class="top_bar_mobile" v-if="!pc")
            label() 科系資訊
            button( @click="dropdown_top = !dropdown_top")
              div(class="list_btn" v-for="(l, index) of 3")
          div(class="top_bar_pc" v-if="pc")
            router-link(v-bind:class="{ active: index===1 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
            label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要報名
    div(class="dept_layout" )
      div(class="dept_layout_dropdown_top" v-if="dropdown_top")
        router-link(class="dropdown_top_list" v-for="(item, index) in menuText" tag="label"  v-bind:key="text" v-bind:to="'/' + urlText[index]" v-bind:class="{ active: index==1 }") {{item}}
        label(class="dropdown_top_list" @click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
      div(class="dept_menu_mobile" v-if="!pc & !dropdown_top & !rightshow")
        div(class="dropdown_top" )
          label() 規劃設計學院
          button(class="dropdown_btn" @click="dropdown=!dropdown;") ˇ
        div(class="dropdown_dept__menu" v-if="dropdown")
          label(v-for="(item, index) of dept" @click="deptIndex=index, rightshow=true; dropdown=false;") {{item}}
      div(class="dept_menu" v-if="pc")
          div(class="dept_title") -規劃設計學院-
          div(class="dept_class" v-show="pc")
            p(class="dept_class_item" v-for="(iter, index) in dept" @click="deptIndex=index" v-bind:class="{active: deptIndex === index}" ) {{iter}}
            router-link(tag="p" v-bind:to="'/department'") 回上頁
      div(class="dept_right_show" v-if="pc | (!dropdown_top & rightshow &!dropdown)")
        button(@click="rightshow=!rightshow;" v-if="!pc") 回上頁
        iframe(v-if="iframeSrc[deptIndex]" class="dept_intro" :src="iframeSrc[deptIndex]")
        ComingSoon(v-else class="dept_intro")
        div(class="dept_guide" v-if="pc")
          button(v-show="guildForm[deptIndex]" @click="openTab(guildForm[deptIndex])") 系館導覽報名表單
</template>

<script>
import srcJson from '../assets//dept/dept.json'
import ComingSoon from './common/ComingSoon.vue'
export default {
  components: {
    ComingSoon
  },
  created () {
    window.addEventListener('resize', this.windowSizeChange)
  },
  destroyed () {
    window.removeEventListener('resize', this.windowSizeChange)
  },
  data: function () {
    return {
      deptIndex: 0,
      menuText: ['活動介紹', '科系資訊', '主題專欄', '合作單位'],
      urlText: ['activity', 'department', 'column', 'sponsor'],
      mode: 0,
      dropdown: false,
      dropdown_top: false,
      rightshow: false,
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
      dept: ['工業設計學系', '都市計劃學系', '建築學系', '學院QA影片'],
      currentIndex: -1,
      check: false,
      iframeSrc: [
        'https://drive.google.com/file/d/1qcHSVvbM8TzO7RZfijuc4dI6sqrbhxoS/preview',
        'https://drive.google.com/file/d/1jdP9QDRKT4AdZL-DPvk_a43auEzsDwf7/preview',
        'https://drive.google.com/file/d/1lzeIhZa0XlqT5jrLzmPTOsXiieWJFT5M/preview',
        'https://drive.google.com/file/d/1hDZC9svL0WEBbwC3g-zSyj_ZeLFXo1jQ/preview'
      ],
      guildForm: [
        'https://reurl.cc/8WDWYj',
        'https://reurl.cc/Y9Y9na',
        '',
        ''
      ]
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
    .Dept_design_page {
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
    .dept_top_bar{
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #FCDBE3;
      width: 100%;
      height: 10vh;
      .dept_top_bar_layout{
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
    
    .dept_layout{
      display: flex;
      flex-direction: column;
      height: 90vh;
      align-items: center;
      align-content: center;
      .dept_layout_dropdown_top{
        display: flex;
        flex-direction: column;
        width: 50vw;
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
      .dept_menu_mobile{
        display: flex;
        flex-direction: column;
        .dropdown_top{
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-items: center;
          justify-content: center;
          margin: 2vh 0 1vh 0;
          width: 80vw;
          height: 8vh;
          background: #FCF6B8;
          border-radius: 15px;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
          label{
            color: #0C3759;
            font-size: 170%;
            margin: 0 2vw 0 0;
          }
          .dropdown_btn{
            position: relative;
            width: 6vw;
            color: white;
            background: transparent;
            font-size: 200%;
            border: none;
            right: -8.5vw;
            top: 1vh;
          }
        }
        .dropdown_dept__menu{
          display: flex;
          flex-direction: column;
          align-items: center;
          label{
            width: 60vw;
            height: 6vh;
            margin: 0.3vh 0 0.3vh 0;
            background: white;
            color: #769BFF;
            font-size: 180%;
            line-height: 6vh;
            border: #769BFF 1px solid;
            // border-color: #769BFF;
            border-radius: 15px;
          }
        }
      }
      .dept_right_show{
        display: flex;
        flex-direction: column;
        button{
          position: relative;
          left: 52vw;
          width: 38vw;
          height: 5vh;
          background: #769BFF;
          border-radius: 15px;
          border: none;
          color: white;
          font-size: 120%;
          margin: 5vh 0 0.5vh 0;
        }
        .dept_intro{
          width: 90vw;
          height: 66vh;
          background: #C4C4C4;
          margin: 2vh 0 2vh 0;
          border-radius: 10px;
        }
      }
    }
  }
  @media only screen and (min-width: 600px){
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
          background-size: contain;
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
            background: #FFFBCE;
            color: #7B61FF;
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
  }
</style>
