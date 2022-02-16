<template lang="pug">
  div(class="column_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          router-link(v-bind:class="{ active: index===2 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
          label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSfx69xLr9XCqz6y8OEn4d8n6gc4qw3KzOn8FHb7Dm94pGwwmg/viewform'); list = false;" v-if="pc") 我要報名
    div(class="column_layout")
        div(class="column_layout_l")
            //- div(class="left_bar1" v-show="pc")
            button(v-bind:class="{ active: leftbarIndex===index }" v-for="(item, index) in leftBar" @click="leftbarIndex=index") {{item }}
        div(class="column_layout_r")
            div(class="right_show")
                div(class="film_background" v-for="(item, index) in rightShow") 
                    div(class="film")
                    p() {{item}}
    
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
      leftBar: ['考試策略','課綱新創','讀書秘籍','國際時事','經驗分享','興趣探索','心態調適','親子關係','孩子健康'],
      rightShow: ['專欄','專欄','專欄','專欄'],
      mode: 0,
      list: false,
      deptList: false,
      deptSlides: srcJson,
      pc: this.isPC(),
      leftbarIndex: 0,
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

    .column_page {
      position: absolute;
      display: flex;
      flex-direction: column;
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-width: 600px;
      z-index: 100;
      background: #CDBFEE;
      width: 100vw;
      height: 115px;
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
          background-size: 85% 43%;
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
    .column_layout {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin-top: 115px;
        align-items: flex-start;
        align-content: space-around;
        justify-items: center;
        justify-content: flex-end;
        background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
        overflow-y: scroll;
        z-index: 2;
        .column_layout_l{
          width: 30%;
          height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                justify-items: center;
                justify-content: center;
                // margin: 0px 10px 0px 0;
                button {
                    height: 60px;
                    width: 260px;
                    color: #769BFF;
                    background: white;
                    border-radius: 30px;
                    border: none;
                    box-shadow: 0px 2px 2px 1px rgba(105, 103, 103, 0.424);
                    margin-top: 6px;

                    font-size: 24px;
                    font-weight: normal;
                    letter-spacing: 0.1vh;
                    text-align: center;
                    z-index: 5;
                    &:hover {
                        filter: brightness(120%);
                    }
                    &:active {
                        filter: brightness(50%);
                    }
                }
                .active{
                    background: #769BFF;
                    color: white;
                // }
            }
        }
        .column_layout_r{
          height: 100%;
          background: #FFE9EE;
            .right_show{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 930px;
                align-items: center;
                align-content: flex-start;
                justify-items: center;
                justify-content: center;
                // background: #FFE9EE;
                .film_background{
                    width: 380px;
                    height: 280px;
                    background-color: white;
                    border-radius: 23px;
                    margin: 20px 15px 0px 15px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: space-around;
                    justify-items: center;
                    justify-content: space-around;
                    letter-spacing: 0.1em;
                    .film{
                        width: 80%;
                        height: 80%;
                        background-color: #C4C4C4;
                        border-radius: 20px;
                        margin-top: 1vh;
                    }
                    p{
                        position: relative;
                        top: -5px;
                        left: -110px;
                        font-weight: 500;
                        font-size: 20px;
                        // line-height: 20px;
                        color: #000000;
                    }
                }
            }
        }
        
    }
        
    }
</style>
