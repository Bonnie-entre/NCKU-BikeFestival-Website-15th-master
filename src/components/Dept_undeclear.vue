<template lang="pug">
  div(class="Dept_design_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(tag="label" class="dept_exit_button" to="/")
        div(class="dept_top_bar_item")
          router-link(tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
            div(id="bottom" v-if="index===1")
          label(@click="openTab('hhttps://docs.google.com/forms/d/e/1FAIpQLSfx69xLr9XCqz6y8OEn4d8n6gc4qw3KzOn8FHb7Dm94pGwwmg/viewform'); list = false;" v-if="pc") 我要報名
    div(class="dept_top_bar_mobile" @click="deptList=false")
      div(class="dept_mobile_title" @click="list = false")
      router-link(tag="div" class="dept_mobile_exit_button" to="/")
      div(class="dept_mobile_list" @click="list = !list")
    div(class="dept_mobile_list_area" v-show="list")
      router-link(tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]") {{text}}
      label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSfx69xLr9XCqz6y8OEn4d8n6gc4qw3KzOn8FHb7Dm94pGwwmg/viewform'); list = false;" v-if="!pc") 我要報名
    div(class="dept_decoration")
    div(class="dept_intro")
    button(class="dept_guide") 系館導覽報名表單
    div(class="dept_menu")
        div(class="dept_title") -不分學院-
        div(class="dept_class" v-show="pc")
          ul
            li(v-for="(iter, index) in design" v-bind:key="`${index}-${iter}`" v-bind:data-key="classKeys[index]" class="dept_class_item" v-on:click="chooseClass(index)" v-bind:class="{active: currentIndex === index}" )
              p {{iter}}
        div(class="dept_class_mobile" v-show="!pc && deptList")
          label(v-for="(iter, index) in design" v-bind:key="`${index}-${iter}`" v-bind:data-key="classKeys[index]" class="dept_class_item" v-on:click="chooseClass(index); tempClass=iter; deptList=false;" v-bind:class="{active: currentIndex === index}" ) {{iter}}


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
      design: [ '不分系', '學院ＱＡ影片','回上頁'],
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
  @media only screen and (max-width: 599px) {
    @keyframes flow-in {
      from { right: -40%; }
      to { right: 0%; }
    }
  }
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
      align-items: center;
      justify-content: flex-start;
      justify-items: flex-start;
      height: 100vh;
      width: 100vw;
      min-width: 1000px;
      background: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    .dept_top_bar_pc {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      background: #CDBFEE;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      min-width: 600px;
      z-index: 100;
      width: 100vw;
      height: 16vh;
      // &:hover {
      //   box-shadow: 0 0 4px 2px rgba(51, 51, 51, 0.5);
      // }
      .dept_top_bar_layout {
        display: grid;
        grid-template-columns: 35vw ;
        grid-template-areas: "home items .";
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        .dept_exit_button {
          grid-area: home;
          width: 40vw;
          height: 16vh;
          background-color: transparent;
          background-image: url("../assets//logoHome.svg");
          background-repeat: no-repeat;
          background-size: 70% 70%;
          background-position: center;
          transition: filter .3s ease;
          cursor: pointer;
          &:hover {
            filter: brightness(150%);
          }
          &:active {
            filter: brightness(80%);
          }
        }
        .dept_top_bar_item {
          justify-content: center;
          grid-area: items;
          display: grid;
          grid-template-columns: repeat(5, 11vw);
          
          letter-spacing: 0.1em;
          font-family: GenSenRounded TW;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          color: #0C3759;

          background-image: url("../assets//topBar.svg");
          background-repeat: no-repeat;
          background-size: 135% 135%;
          background-position: center;
          border-radius: 2vw;
          label {
            display: grid;
            grid-template-rows: 5fr 1fr;
            grid-template-areas: "." "bottom";
            width: 9vw;
            height: 6vh;
            line-height: 5.6vh;
            background-color: transparent;
            letter-spacing: 0.2vw;
            background-color: transparent;
            #bottom {
              grid-area: "bottom";
              background-color: white;
            }
            &:hover {
              filter: brightness(150%);
              font-weight: 700;
            }
            &:active {
              filter: brightness(80%);
              font-weight: 700;
            }
          }
        }
        .dept_sign_up_button {
          grid-area: sign-up;
          width: 8vw;
          height: 6vh;
          line-height: 5vh;
          font-size: 3vh;
          background-color: white;
          border: 1px solid rgba(100, 100, 100, 0.3)
        }
      }
    }
    .dept_decoration {
      position: absolute;
      top: -2vh;
      left: 4.5vw;
      height: 30vw;
      width: 32vw;

      margin-top: auto;
      margin-bottom: auto;
      padding-bottom: 38vw;

      background: url("../assets/dept/decoration_left.svg");
      background-position: bottom right;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .dept_intro{
        position: absolute;
        top: 22vh;
        right: 4.5vw;
        // height: 0.8vw;
        width: 56vw;
        margin-top: auto;
        // margin-bottom: auto;
        padding-bottom: 34vw;
        background-color: #C4C4C4;
    }
    .dept_guide{
        position: absolute;
        bottom: 7vh;
        right: 8vw;
        height: 4vw;
        width: 20vw;
        margin-top: auto;
        // margin-bottom: auto;
        // padding-bottom: 6vw;

        background: #C4C4C4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 64.5px;

        font-size: 100%;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
    }
    .dept_menu {
        width: 100%;
        height: 50%;
        
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-self: center;
        align-items: flex-start;
        z-index: 100;
        .dept_title{
            letter-spacing: 0.1em;
            width: 40vw;
            height: 6vw;
            margin: 0 1vw;
            color: #769BFF;
            font-size: 300%;
            font-style: normal;
            font-weight: 500;
        }
        ul {
            vertical-align: center;
            list-style-type: none;
            margin: 0 3vw;
            padding: 0;
            p {
            align-self: center;
            justify-content: center;
            width: 15vw;
            height: 6vw;
            margin: 0 10vw;
            box-sizing: border-box;

            color: #0C3759;
            font-size: 150%;
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
            }
        }
    }
  }
</style>
