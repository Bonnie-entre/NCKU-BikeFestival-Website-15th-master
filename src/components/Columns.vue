<template lang="pug">
  div(class="column_page")
    div(class="dept_top_bar_pc")
      div(class="dept_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/")
        div(class="top_bar")
          div(class="top_bar_mobile" v-if="!pc")
            label() 主題專欄
            button( @click="dropdown_top = !dropdown_top")
              div(class="list_btn" v-for="(l, index) of 3")
          div(class="top_bar_pc" v-if="pc")
            router-link(v-bind:class="{ active: index===2 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" v-if="pc") {{text}}
            label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要報名
    div(class="column_layout" v-if="!dropdown_top")
        div(class="column_layout_l")
          button(v-if="pc" v-bind:class="{ active: leftbarIndex===index }" v-for="(item, index) in info" @click="leftbarIndex=index") {{ item.title }}
          div(class="dropdown" v-if="!pc")
            label() {{info[leftbarIndex].title}}
            button(class="dropdown_btn" @click="dropdown=!dropdown;") ˇ
        label(class="dropdown_list" v-if="dropdown" v-for="(item, index) in info" @click="leftbarIndex=index, dropdown=false;") {{ item.title }}
        div(class="column_layout_r" v-if="pc | !dropdown")
            div(class="right_show")
                div(class="film_background" v-for="(item, index) in info[leftbarIndex].content")
                    a(:href="item.url")
                        div(class="film" :style="{ backgroundImage: 'url(' + item.imagePreivew + ')' }")
                        p() {{ item.text }}
<<<<<<< HEAD
    div(class="column_layout_dropdown_top" v-if="dropdown_top")
      router-link(class="dropdown_top_list" v-for="(item, index) in menuText" tag="label"  v-bind:key="text" v-bind:to="'/' + urlText[index]" v-bind:class="{ active: index==2 }") {{item}}
      label(class="dropdown_top_list" @click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
    
=======

>>>>>>> ef22b21cc5397f18315676be01e5fbbc43f98247
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
      info: [
        {
          title: '考試策略',
          content: [
            {
              text: '考前衝刺三步驟',
              url: 'https://bit.ly/考前衝刺三步驟​',
              imagePreivew: require('@/assets/columns/1-1.png')
            },
            {
              text: '讀書帳 x 科系探索網站 x 實用資訊',
              url: 'https://bit.ly/實用網站和應用程式',
              imagePreivew: require('@/assets/columns/1-2.png')
            }
          ]
        },
        {
          title: '課綱新制',
          content: [
            {
              text: '什麼是學習歷程檔案？',
              url: 'https://bit.ly/學習歷程小撇步​',
              imagePreivew: require('@/assets/columns/2-1.png')
            },
            {
              text: '戰勝108課綱-國英數',
              url: 'https://bit.ly/戰勝國英數​',
              imagePreivew: require('@/assets/columns/2-2.png')
            },
            {
              text: '成大四大班群-文法財經',
              url: 'https://bit.ly/文法財經篇',
              imagePreivew: require('@/assets/columns/2-3.png')
            },
            {
              text: '成大四大班群-理工1',
              url: 'https://bit.ly/理工類上篇',
              imagePreivew: require('@/assets/columns/2-4.png')
            },
            {
              text: '成大四大班群-理工2',
              url: 'https://bit.ly/理工類下偏',
              imagePreivew: require('@/assets/columns/2-5.png')
            },
            {
              text: '成大四大班群-醫護',
              url: 'https://www.facebook.com/NCKUbikefestival/posts/4553270128134446',
              imagePreivew: require('@/assets/columns/2-6.png')
            },
            {
              text: '108課綱新手懶人包',
              url: 'https://www.facebook.com/NCKUbikefestival/posts/3339211246207013',
              imagePreivew: require('@/assets/columns/2-7.png')
            }
          ]
        },
        {
          title: '讀書秘笈',
          content: [
            {
              text: '正確目標，更正確的方向',
              url: 'https://bit.ly/偉大的目標伴你走更镸的路',
              imagePreivew: require('@/assets/columns/3-1.png')
            },
            {
              text: '高中生的時間管理術',
              url: 'https://bit.ly/好想成為時間管理大師',
              imagePreivew: require('@/assets/columns/3-2.png')
            },
            {
              text: '休息，是為了更長遠的路',
              url: 'https://bit.ly/適當的放鬆可以走更長的路',
              imagePreivew: require('@/assets/columns/3-2.png')
            },
            {
              text: '保持專注的方法',
              url: 'https://www.facebook.com/248448688616633/posts/4486862748108518/',
              imagePreivew: require('@/assets/columns/3-4.png')
            }
          ]
        },
        {
          title: '國際時事',
          content: [
            {
              text: '祖克柏的元宇宙世界',
              url: 'https://bit.ly/Metaverse英文專欄​',
              imagePreivew: require('@/assets/columns/4-1.png')
            },
            {
              text: '風靡全球的魷魚遊戲',
              url: 'https://bit.ly/SquidGame魷魚遊戲英文專欄',
              imagePreivew: require('@/assets/columns/4-2.png')
            },
            {
              text: '貝佐斯的月球夢',
              url: 'https://bit.ly/SpaceTravel臉書專欄',
              imagePreivew: require('@/assets/columns/4-3.png')
            },
            {
              text: '阿富汗難民問題',
              url: 'https://www.facebook.com/NCKUbikefestival/posts/4512943412167118/',
              imagePreivew: require('@/assets/columns/4-4.png')
            }
          ]
        },
        {
          title: '經驗分享',
          content: [
            {
              text: '大學新生手冊',
              url: 'https://bit.ly/實際大學生活',
              imagePreivew: require('@/assets/columns/5-1.png')
            },
            {
              text: '成大交換學生懶人包',
              url: 'https://bit.ly/交換學生大補帖',
              imagePreivew: require('@/assets/columns/5-2.png')
            },
            {
              text: '成大雙主修/輔系/轉系/學程指南',
              url: 'https://www.facebook.com/248448688616633/posts/4467307496730710/',
              imagePreivew: require('@/assets/columns/5-3.png')
            },
            {
              text: '過來人說-管道選擇',
              url: 'http://bit.ly/2QrXumy',
              imagePreivew: require('@/assets/columns/5-4.png')
            },
            {
              text: '過來人說-志向選擇',
              url: 'https://reurl.cc/yy84XE',
              imagePreivew: require('@/assets/columns/5-5.png')
            },
            {
              text: '過來人說-心路歷程',
              url: 'https://www.facebook.com/story.php?story_fbid=2484325735028906&id=248448688616633',
              imagePreivew: require('@/assets/columns/5-6.png')
            }
          ]
        },
        {
          title: '興趣探索',
          content: [
            {
              text: '興趣是什麼？',
              url: 'https://bit.ly/3tsTXJO',
              imagePreivew: require('@/assets/columns/6-1.png')
            },
            {
              text: '如何找到自己的興趣？',
              url: 'https://bit.ly/3JqrWIn',
              imagePreivew: require('@/assets/columns/6-2.png')
            },
            {
              text: '性向 vs. 興趣',
              url: 'https://bit.ly/3I4wX7P',
              imagePreivew: require('@/assets/columns/6-3.png')
            }
          ]
        },
        {
          title: '心態調適',
          content: [
            {
              text: '應對成敗掌',
              url: 'https://www.facebook.com/248448688616633/posts/3329524207175717/',
              imagePreivew: require('@/assets/columns/7-1.png')
            },
            {
              text: '焦慮退散拳',
              url: 'https://www.facebook.com/248448688616633/posts/3356553297806141/',
              imagePreivew: require('@/assets/columns/7-2.png')
            },
            {
              text: '忘憂寶典',
              url: 'https://www.facebook.com/248448688616633/posts/3423617827766354/',
              imagePreivew: require('@/assets/columns/7-3.png')
            }
          ]
        },
        {
          title: '親子關係',
          content: [
            {
              text: '家長陣線-親子交流',
              url: 'https://bit.ly/親子交流真經',
              imagePreivew: require('@/assets/columns/8-1.png')
            },
            {
              text: '家長陣線-作戰策略',
              url: 'https://www.facebook.com/NCKUbikefestival/posts/1811853425609477',
              imagePreivew: require('@/assets/columns/8-2.jpeg')
            },
            {
              text: '家長陣線-考前備戰',
              url: 'https://www.facebook.com/NCKUbikefestival/posts/1872819752846177',
              imagePreivew: require('@/assets/columns/8-3.jpeg')
            }
          ]
        }
      ],
      mode: 0,
      dropdown: false,
      dropdown_top: false,
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
  @media only screen and (max-width: 599px) {
    .column_page {
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
    .dept_top_bar_pc {
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
    .column_layout{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 90vh;
      .column_layout_l{
        .dropdown{
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
      }
      .dropdown_list{
        width: 60vw;
        height: 6vh;
        margin: 0.3vh 0 0.3vh 0;
        color: #769BFF;
        background: #FFFBCE;
        font-size: 180%;
        line-height: 6vh;
      }
      .column_layout_r{
        overflow-y: scroll;
        .right_show{
          // height: 100%;
          width: 90vw;
          display: flex;
          flex-direction: column;
          // overflow-y: scroll;
          .film_background a{
            width: 100%;
            height: 30vh;
            background-color: white;
            border-radius: 23px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: 1vh 1vw 1vh 1vw;
            text-decoration: none;
            .film{
                width: 90%;
                height: 75%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 20px;
            }
            p{
                width: 90%;
                text-align: left;
                font-weight: 500;
                font-size: 120%;
                color: #000000;
            }
          }
        }
      }
    }
    .column_layout_dropdown_top{
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
  @media only screen and (min-width: 600px) {
    .column_page {
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #CDBFEE;
      width: 100%;
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
    .column_layout {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 84vh;
      align-items: flex-start;
      justify-content: flex-start;
      background: linear-gradient(180deg, #FCDBE3 0%, #DAD0F2 100%);
      // overflow-y: scroll;
      z-index: 2;
      .column_layout_l{
        width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-items: center;
        justify-content: center;
        button {
            height: 60px;
            width: 260px;
            color: #769BFF;
            background: white;
            border-radius: 30px;
            border: none;
            box-shadow: 0px 2px 2px 1px rgba(105, 103, 103, 0.424);
            margin: 0.8vh;

            font-size: 24px;
            text-align: center;
            z-index: 5;
            cursor: pointer;
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
        }
      }
      .column_layout_r{
        height: 100%;
        width: 80vw;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: #FFE9EE;
        overflow-y: scroll;
        .right_show{
          width: 70vw;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
          .film_background a{
            height: 400px;
            background-color: white;
            border-radius: 23px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: 1vh 1vw 1vh 1vw;
            text-decoration: none;
            .film{
                width: 90%;
                height: 75%;
<<<<<<< HEAD
                // background-color: #C4C4C4;
=======
                background-color: transparent;
>>>>>>> ef22b21cc5397f18315676be01e5fbbc43f98247
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                border-radius: 20px;
            }
            p{
                width: 90%;
                text-align: left;
                font-weight: 500;
                font-size: 24px;
                color: #000000;
            }
          }
        }
      }
    }
  }

</style>
