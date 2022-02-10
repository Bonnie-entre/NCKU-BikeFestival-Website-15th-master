<template lang="pug">
  div(class="column_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          router-link(v-bind:class="{ active: index===0 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
          label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSfx69xLr9XCqz6y8OEn4d8n6gc4qw3KzOn8FHb7Dm94pGwwmg/viewform'); list = false;" v-if="pc") 我要報名
        //- div(class="activity_layout" @click="list = false;") 
    div(class="activity_layout" )
        div(class="top_bar" v-show="pc") 
          button(v-bind:class="{ active: layout1Index===index }" v-for="(item, index) in introduceSrc" @click="currentIndex=index") {{item.topic}} 
            div( v-if="layout1Index===index" )
        div(class="content")
            div(class="left_bar")
                button(v-for="(leftBar, index) in voiceSrc" @click=" leftbarIndex=index, phsyPage2=false;" v-bind:class="{ active: leftbarIndex===index }") {{leftBar.left_bar}}
            div(class="right_show0" v-show="leftbarIndex===0")
                div(class="right_show_title") 
                    p() {{leftBar[leftbarIndex]}}
                div(class="right_show_content")
                div(class="right_show_intro") {{voiceSrc[leftbarIndex].intro}}
            div(class="right_show_story" v-show="leftbarIndex===1")
                div(class="right_show_title") 
                    p() {{leftBar[leftbarIndex]}}
                div(class="right_show_intro") {{voiceSrc[leftbarIndex].intro}}
                div(class="right_show_content")
                    div(class="img" v-for="(img, imgIndex) in voiceSrc[leftbarIndex].content") {{img}}
            div(class="right_show_people"  v-show="leftbarIndex===2")
                div(class="right_show_title") 
                    p() {{leftBar[leftbarIndex]}}
                div(class="right_show_intro") {{voiceSrc[leftbarIndex].intro}}
                div(class="right_show_content")
                    div(class="img" v-for="(img, imgIndex) in voiceSrc[leftbarIndex].content") {{img}}
            div(class="right_show_phsy"  v-show="leftbarIndex===3 && phsyPage2===false")
                div(class="right_show_title") 
                    p() {{leftBar[leftbarIndex]}}
                div(class="right_show_intro" ) {{voiceSrc[leftbarIndex].intro}}
                div(class="right_show_content")
                    div(class="phsy_content" v-for="(phsy, phsyIndex) in voiceSrc[leftbarIndex].content") {{phsy}}
                    button(@click="phsyPage2=!phsyPage2;") 產生結果
            div(class="right_show_phsyPage2"  v-show="leftbarIndex===3, phsyPage2!==false")
                div(class="right_show_title") 
                    p() 心理測驗結果
                div(class="phsyPage2_content")
                
    
</template>

<script>
import srcJson from '../assets//activity/activity.json'
// import srcJson from '../assets//dept/dept.json'
export default {
  created () {
    window.addEventListener('resize', this.windowSizeChange)
  },
  destroyed () {
    window.removeEventListener('resize', this.windowSizeChange)
  },
  data: function () {
    return {
        currentIndex: -1,
        leftbarIndex: 0,
        phsyPage2: false,
        menuText: [ '活動介紹', '科系資訊', '主題專欄', '合作單位'],
        urlText: ['activity', 'department', 'column', 'sponsor'],
        leftBar: ['留聲機初衷','他們的故事','擺渡人們','心理測驗'],
        rightShow: ['專欄','專欄','專欄','專欄'],
        introduceSrc: srcJson.introduce,
        voiceSrc: srcJson.voice,
        layout1Index: 0,
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
    //   top: 0%;
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
    .activity_layout {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-items: flex-start;
        justify-content: flex-start;
        min-width: 600px;
        width: 100%;
        background: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
        margin-top: 16vh;
        overflow-y: scroll;
        z-index: 100;
        .top_bar {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          align-content: space-around;
          width: 100%;
          margin-top: 27px;
          button {
            width: 280px;
            height: 6vh;
            // margin: 10px;

            color: #0C3759;
            background: white;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            border-color: white;

            font-size: 2.5vh;
            font-weight: normal;
            letter-spacing: 0.1vh;
            text-align: center;

            // display: grid;
            // grid-template-rows: 8vh 8vh;
            grid-template-areas: "." "bottom";
            z-index: 5;
            &:hover {
              font-size: 2.1vh;
              filter: brightness(120%);
            }
            &:active {
              filter: brightness(50%);
            }
            div {
              height: 106px;
              grid: bottom;
              // background-color: #CDBFEE;
              background: #CDBFEE;
              // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              // border-radius: 30px
            }
          }
        // }
        }
        .content{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            justify-items: flex-start;
            align-content: flex-start;
            align-items: flex-start;
            width: 100%;
            overflow-y: scroll;
            margin-top: 10px;
            .left_bar{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                justify-items: center;
                align-content: center;
                align-items: center;
                width: 20%;
                margin-top: 60px;
                button{
                    height: 76px;
                    width: 270px;
                    background: white;
                    border: none;
                    margin: 10px;
                    font-size: 24px;
                    color: #769BFF;
                }
                .active{
                    background: #769BFF;
                    color: #FFFBFC;
                }
            }
            .right_show0{
                width: 760px;
                height: 500px;
                background: #FFFFFF;
                border-radius: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                justify-items: flex-start;
                align-content: center;
                align-items: center;
                .right_show_title{
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    justify-items: flex-start;
                    margin: 30px;
                    margin-left: 10px;
                    p{
                    font-size: 28px;
                    font-weight: 600;
                    left: 2vw;
                    }
                }
                .right_show_content{
                    width: 85%;
                    height: 250px;
                    background: gray;
                    margin: 10px;
                }
                .right_show_intro{
                    width: 85%;
                    height: 80px;
                    background: gray;
                    margin: 10px;

                    font-size: 20px;
                    text-align: left;
                }
            }
            .right_show_story{
                width: 760px;
                height: 500px;
                background: #FFFFFF;
                border-radius: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                justify-items: flex-start;
                align-content: center;
                align-items: center;
                .right_show_title{
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    justify-items: flex-start;
                    margin: 30px;
                    margin-left: 10px;
                    p{
                    font-size: 28px;
                    font-weight: 600;
                    left: 2vw;
                    }
                }
                .right_show_intro{
                    width: 85%;
                    height: 60px;
                    background: gray;
                    margin: 10px;

                    font-size: 20px;
                    text-align: left;
                }
                .right_show_content{
                    width: 90%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: center;
                    justify-items: center;
                    align-content: flex-start;
                    align-items: flex-start;
                    margin: 20px;
                    .img{
                        width: 170px;
                        height: 120px;
                        margin: 15px;
                        // margin-left: 10px;
                        background: gainsboro;
                    }
                }
            }
            .right_show_people{
                width: 760px;
                height: 500px;
                background: #FFFFFF;
                border-radius: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                justify-items: flex-start;
                align-content: center;
                align-items: center;
                .right_show_title{
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    justify-items: flex-start;
                    margin: 30px;
                    margin-left: 10px;
                    p{
                    font-size: 28px;
                    font-weight: 600;
                    left: 2vw;
                    }
                }
                .right_show_intro{
                    width: 85%;
                    height: 60px;
                    background: gray;
                    margin: 10px;

                    font-size: 20px;
                    text-align: left;
                }
                .right_show_content{
                    width: 90%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: center;
                    justify-items: center;
                    align-content: flex-start;
                    align-items: flex-start;
                    margin: 10px;
                    .img{
                        width: 120px;
                        height: 130px;
                        margin: 12px;
                        // margin-left: 10px;
                        background: gainsboro;
                    }
                }
            }
            .right_show_phsy{
                width: 760px;
                height: 1000px;
                background: #FFFFFF;
                border-radius: 20px;
                margin-top: 30px;
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                justify-items: flex-start;
                align-content: center;
                align-items: center;
                .right_show_title{
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    justify-items: flex-start;
                    margin: 30px;
                    margin-left: 10px;
                    p{
                    font-size: 28px;
                    font-weight: 600;
                    left: 2vw;
                    }
                }
                .right_show_intro{
                    width: 85%;
                    height: 60px;
                    background: gray;
                    margin: 10px;

                    font-size: 20px;
                    text-align: left;
                }
                .right_show_content{
                    width: 90%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: flex-start;
                    justify-items: flex-start;
                    align-content: center;
                    align-items: center;
                    margin: 20px;
                    .phsy_content{
                        width: 100%;
                        height: 120px;
                        margin: 15px;
                        // margin-left: 10px;
                        background: gainsboro;
                    }
                    button{
                        width: 180px;
                        height: 50px;
                        background: #769BFF;
                        margin: 20px;
                        font-size: 24px;
                        font-weight: 400;
                        color: white;
                        cursor: pointer;
                        &:hover {
                            filter: brightness(120%);
                        }
                        &:active {
                            filter: brightness(60%);
                            font-size: 2.6vh;
                        }
                    }
                }
            }
            .right_show_phsyPage2{
                width: 760px;
                height: 500px;
                background: #FFFFFF;
                border-radius: 20px;
                margin-top: 30px;
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                justify-items: flex-start;
                align-content: center;
                align-items: center;
                .right_show_title{
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    justify-items: flex-start;
                    margin: 30px;
                    margin-left: 10px;
                    p{
                    font-size: 28px;
                    font-weight: 600;
                    left: 2vw;
                    }
                }
                .phsyPage2_content{
                    width: 80%;
                    height: 360px;
                    background: #DAD0F2;
                }
            }
        }
    }   
}
</style>
