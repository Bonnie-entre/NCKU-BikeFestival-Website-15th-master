<template lang="pug">
  div(class="main_page")
    div(class="news_top_bar_pc")
      div(class="news_top_bar_layout" @click="scroll()")
        router-link(class="top_logo" to="/" @click="dropdown = false;")
        div(class="top_bar")
          button(v-if="!pc" @click="dropdown = !dropdown")
            div(class="list_btn" v-for="(l, index) of 3")
          div(v-if="pc")
            router-link(tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" ) {{text}}
            label(@click=" openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
    div(class="intro_layout")
      div(class="intro_layout1")
        div(class="test")
          div.preview
            div.monitor(v-if="PM25 !== 0 && population !== 0")
              div.block 
                span 空氣品質 
                span.loader(v-if="PM25 === 0")
                span.data(v-else) &nbsp;{{ PM25 }} &nbsp;
                span.data.unit {{ ` (pm2.5)` }}
              div.block 入場人數 
                span.loader(v-if="population === 0")
                span.data(v-else) &nbsp;{{ population }} &nbsp;
                span.data.unit {{ ` (人)` }}
            iframe(class="intro_film" v-if="pc | dropdown==false" src='https://www.youtube.com/embed/KsXRN7AKDUI')
          div(class="intro_menu" v-if="pc | dropdown==true" @click="dropdown=false;" )
            div(class="list" v-if="dropdown==true" @click="dropdown=false;")
              router-link(tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]" ) {{text}}
              label(@click=" openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
            div(class="intro_menu_l" v-if="pc")
              router-link(tag="button" v-bind:to="'/activity'" ) 活動<br>介紹
              router-link(tag="button" v-bind:to="'/department'") 科系<br>資訊
              router-link(tag="button" v-bind:to="'/live'") 影片<br>專區
            div(class="intro_menu_r" v-if="pc")
              button(tag="button" @click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;" v-if="pc") 我要<br>報名
              router-link(tag="button" v-bind:to="'/column'") 主題<br>專欄
              router-link(tag="button" v-bind:to="'/sponsor'") 合作<br>單位
      div(class="arrow") ▼
      div(class="intro_layout2" v-if="pc | dropdown==false")
        img(class="show_info1" :src="frontImg")
        img(class="show_info2" :src="backImg")
</template>

<script>
import frontImg from '../assets/main/front.png'
import backImg from '../assets/main/back.png'
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
      list: false,
      airQuality: 0,
      pc: this.isPC(),
      currentIndex: -1,
      loader: null,
      dropdown: false,
      frontImg,
      backImg,
      population: 0,
      PM25: 0
    }
  },
  mounted: async function () {
    this.pc = this.isPC()
    setInterval(this.timeCounter, 1000)
    this.numberDom1 = document.querySelector('#news_number_1')
    this.numberDom2 = document.querySelector('#news_number_2')
    this.timeCounter()
    this.loader = this.$loading.show()
    this.loader.hide()

    fetch('https://nckubike.ainimal.io/').then((res) => {
      return res.json().then((jsonData) => {
        const fields = ['光復', '光復到榕園', '榕園']
        this.population = 0;
        for (let field in fields) {
          if (jsonData[field]) {
            this.population += jsonData[field]
          }
        }

        this.PM25 = 0
        if (jsonData['PM2.5']) {
          this.PM25 = jsonData['PM2.5']
        }
      })
    })
  },
  methods: {
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
    timeCounter: function () {
      const timeStr = '2019/1/26 00:00'
      const startDate = new Date()
      const endDate = new Date(timeStr)
      const spantime = (endDate - startDate) / 1000
      const day = Math.floor(spantime / (24 * 3600))
      if (spantime > 0) {
        let number = require(`../assets/number_${Math.floor(day / 10)}.svg`)
        this.numberDom1.style.setProperty('background-image', `url(${number})`)
        number = require(`../assets/number_${Math.floor(day % 10)}.svg`)
        this.numberDom2.style.setProperty('background-image', `url(${number})`)
      }
    },
    parseTimestamp: function (timestamp) {
      const time = new Date(timestamp._seconds * 1000)
      const str = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
  .arrow{
    position: relative;
    bottom: 40px;
    font-size: 50px;
    color: #CDBFEE;
    -webkit-text-stroke: 5px white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
   @media only screen and (max-width: 599px) {
     .main_page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, #dcd4ee 0%, #FCDBE3 100%);
    }
    .news_top_bar_pc {
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #FCDBE3;
      width: 100%;
      height: 10vh;
      .news_top_bar_layout {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        .top_logo{
          width: 70%;
          height: 100%;
          margin: 0 2vw 0 2vw;
          background-image: url("../assets//logoHome_white.png");
          background-repeat: no-repeat;
          background-size: 80% 46%;
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
          width: 20%;
          height: 50%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          button{
            width: 60%;
            height: 100%;
            margin-right: 2vw;
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
    .intro_layout {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      align-items: center;
      align-content: center;
      justify-items: flex-start;
      justify-content: flex-start;
      background: linear-gradient(180deg, #dcd4ee 0%, #FCDBE3 100%);
      overflow-y: scroll;
      overflow-x: hidden;
      .intro_layout1{
        .test{
          .monitor{
            margin: 2vh 0 0 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .block{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 48%;
              background-color: #fff;
              line-height: 30px;
              border-radius: 30px;
              font-size: 15px;
              color: #7B61FF;
              .data{
                color: #FF6187;
              }
              .unit{
                font-size: 10px;
              }
            }
          }
          .intro_film{
            margin: 4vh 1vw 2vh 0;
            height: 26vh;
            width: 80vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            justify-items: flex-start;
            border-radius: 0px;
            background-color: white;
            z-index: 100;
            .black1{
              height: 8vh;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              justify-items: center;
              align-content: center;
              align-items: center;
              background: #0C3759;
              .white_block{
                height: 60%;
                width: 2%;
                background: white;
              }
            }
            .black2{
              margin-top: 24vh;
              height: 8vh;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              justify-items: center;
              align-content: center;
              align-items: center;
              background: #0C3759;
              .white_block{
                height: 60%;
                width: 2%;
                background: white;
              }
            }
          }
          .intro_menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 70vh;
            align-content: center;
            align-items: center;
            margin: 3vh 0 3vh 1vw;
            z-index: 5;
            .list{
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 100%;
              height: 100%;
              color: #0C3759;
              font-size: 220%;
              letter-spacing: 1.5vw;
              .label{
                margin: 2vh;
                padding: 20px;
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
            }
          }
        }
      }
        .intro_layout2{
          .show_info1{
            width: 80vw;
            margin: 2vh 0 2vh 0;
            background-color: #C4C4C4;
            background-size: cover;
          }
          .show_info2{
            width: 80vw;
            margin: 2vh 0 2vh 0;
            background-color: #584848;
            background-size: cover;
          }
        }
      }
   }
  @media only screen and (min-width: 600px) {
    .main_page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      min-width: 1000px;
      background: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
    }
    .news_top_bar_pc {
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #FCDBE3;
      width: 100%;
      height: 16vh;
      box-shadow: 0 0 3px 1px rgba(51, 51, 51, 0.5);
      .news_top_bar_layout {
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
    .intro_layout {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 84vh;
      align-items: center;
      align-content: center;
      justify-items: flex-start;
      justify-content: flex-start;
      background: linear-gradient(180deg, #DAD0F2 0%, #FCDBE3 100%);
      overflow-y: scroll;
      overflow-x: hidden;
      // margin: 3vh;

      .intro_layout1{
        .test{
          .preview{
            margin: 5vh 0 0 0;
          }
          .monitor{
            margin: 0 1vw 0 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .block{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 30%;
              background-color: #fff;
              line-height: 60px;
              border-radius: 30px;
              font-size: 24px;
              color: #7B61FF;
              .data{
                color: #FF6187;
              }
            }
          }
          display: flex;
          flex-direction: row;
          height: 100%;
          width: 100%;
          justify-items: center;
          justify-content: center;
          margin: 3vh 0 3vh 0;
          .intro_film{
            margin: 3vh 1vw 3vh 0;
            height: 60vh;
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            justify-items: flex-start;
            border-radius: 0px;
            background-color: white;
            z-index: 100;
            .black1{
              height: 8vh;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              justify-items: center;
              align-content: center;
              align-items: center;
              background: #0C3759;
              .white_block{
                height: 60%;
                width: 2%;
                background: white;
              }
            }
            .black2{
              margin-top: 62vh;
              height: 8vh;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              justify-items: center;
              align-content: center;
              align-items: center;
              background: #0C3759;
              .white_block{
                height: 60%;
                width: 2%;
                background: white;
              }
            }
          }
          .intro_menu {
          display: flex;
          flex-direction: row;
          width: 35%;
          height: 70vh;
          justify-content: center;
          justify-items: center;
          align-content: center;
          align-items: center;
          margin: 3vh 0 3vh 1vw;
          z-index: 5;
          .intro_menu_l {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            height: 100%;
            button{
              height: 170px;
              width: 170px;
              margin: 0.5vw;
              border-radius: 68px;
              border: 0px solid rgb(103, 192, 225);
              background-color: white;
              font-size: 240%;
              line-height: 67px;
              color: #769BFF;
              text-shadow: 0px 4px 4px rgba(12, 55, 89, 0.25);
              transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;
              cursor: pointer;
              &:hover {
                border-width: 0.2vw;
                background-size: 90% 90%;
              }
              &:active {
                filter: brightness(50%);
              }
            }
          }
          .intro_menu_r {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            height: 100%;
            button{
              height: 170px;
              width: 170px;
              margin: 0.5vw;
              border-radius: 68px;
              border: 0px solid rgb(103, 192, 225);
              background-color: white;
              font-size: 240%;
              line-height: 67px;
              color: #769BFF;
              text-shadow: 0px 4px 4px rgba(12, 55, 89, 0.25);
              transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;
              cursor: pointer;
              &:hover {
                border-width: 0.2vw;
                background-size: 90% 90%;
              }
              &:active {
                filter: brightness(50%);
              }
            }
          }
          }
        }
      }
      .intro_layout2{
        .show_info1{
          width: 80vw;
          margin: 4vh 0 4vh 0;
          background-color: #C4C4C4;
          background-size: cover;
        }
        .show_info2{
          width: 80vw;
          margin: 4vh 0 4vh 0;
          background-color: #584848;
          background-size: cover;
        }
      }
    }
  }

.loader {
  font-size: 8px;
  margin: 3px;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: #FF6187;
  background: -moz-linear-gradient(left, #FF6187 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #FF6187 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #FF6187 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #FF6187 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #FF6187 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #FF6187;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
