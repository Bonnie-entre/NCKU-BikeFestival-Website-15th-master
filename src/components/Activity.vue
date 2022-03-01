<template lang="pug">
.activity_page
  Header
  .activity_layout(@click="list = false")
    .activity_layout1(v-show="currentIndex===0")
      .top_bar1(v-show="pc")
        button(
          v-for="(item, index) in introduceSrc",
          @click="selectPageTopic(0, index), (currentIndex = index), (voice = false)",
          v-bind:class="{ active: currentIndex === index }"
        ) {{ item.topic }}
      .content1(v-show="voice===false")
        div.left_bar1(v-show="pc")
          .left_bar_category
            .left_bar_item(
              v-for="(item, index) in leftBar",
              @mouseover="categorySelector(index)",
              @mouseleave="categorySelector(-1)"
            )
              label(v-bind:class="{ active: showListIndex === index && showSideBar }") {{ item.title }}
              .left_bar_lists1(v-show="showListIndex===index && showSideBar")
                button.lists_btn(
                  v-for="(topic, i) in item.catgories",
                  @click="listSelector(i, index)",
                  v-bind:class="{ active2: categorylistIndex === i && categoryIndex===index }"
                ) {{ topic }}
        .right_show1
          Stage(v-if="categoryIndex === 0 && categorylistIndex === 0")
          Exhibition(v-if="categoryIndex === 0 && categorylistIndex === 1")
          Interview(v-if="categoryIndex === 0 && categorylistIndex === 2")
          Exploration(v-if="categoryIndex === 2 && categorylistIndex === 1")
          Show(v-if="categoryIndex === 1 && categorylistIndex === 1")
          div(class="activities" v-if="categoryIndex===0 && categorylistIndex===3") 各種活動
          div(class="voice" v-if="categoryIndex===1 && categorylistIndex===3")
            div(class="voice_title")
              p() 留聲機
            div(class="voice_intro" ) 介紹
            div(class="voice_btn")
              button(class="btn" @click="voice=!voice;") 進入留聲機
          div(class="lightening" v-if="categoryIndex===2 && categorylistIndex===3")
            div(class="lightening_layout")
              div(class="lightening_top_bar")
                button(v-for="(btn, btn_i) in lighteningSrc" @click="lighteningIndex=btn_i" v-bind:class="{ active: lighteningIndex===btn_i}")  {{btn.topic}}
              div(class="lightening_content")
                div(class="item1")
                div(class="item2")
                div(class="item3")
          div(class="interview" v-if="categoryIndex===3 && categorylistIndex===3")
            div(class="interview_title")
              p() 模擬面試
            div(class="interview_intro" ) 介紹
            div(class="film" )
              div(class="film_lists")
                div(class="film_list") 影片一
                div(class="film_list") 影片二
                div(class="film_list") 影片三
              div(class="film_show") 影片
          div(class="discover" v-if="categoryIndex===3 && categorylistIndex===4")
            div(class="discover_title")
              p() 探索學習
            div(class="discover_content" )
              div(class="discover_show")
                div(class="discover_show_img")
                div(class="discover_show_intro")
              div(class="discover_show")
                div(class="discover_show_img")
                div(class="discover_show_intro")
              div(class="discover_show")
                div(class="discover_show_img")
                div(class="discover_show_intro")

      .content1_voice(v-show="voice!==false")
        .left_bar
          button(
            v-for="(leftBar, index) in voiceSrc",
            @click="(leftbarIndex = index), (phsyPage2 = false)",
            v-bind:class="{ active: leftbarIndex === index }"
          ) {{ leftBar.left_bar }}
        .right_show0(v-show="leftbarIndex===0")
          .right_show_title
            p {{ voice_leftBar[leftbarIndex] }}
          .right_show_content
          .right_show_intro {{ voiceSrc[leftbarIndex].intro }}
        .right_show_story(v-show="leftbarIndex===1")
          .right_show_title
            p {{ voice_leftBar[leftbarIndex] }}
          .right_show_intro {{ voiceSrc[leftbarIndex].intro }}
          .right_show_content
            .img(v-for="(img, imgIndex) in voiceSrc[leftbarIndex].content") {{ img }}
        .right_show_people(v-show="leftbarIndex===2")
          .right_show_title
            p {{ voice_leftBar[leftbarIndex] }}
          .right_show_intro {{ voiceSrc[leftbarIndex].intro }}
          .right_show_content
            .img(v-for="(img, imgIndex) in voiceSrc[leftbarIndex].content") {{ img }}
        .right_show_phsy(v-show="leftbarIndex===3 && phsyPage2===false")
          .right_show_title
            p {{ voice_leftBar[leftbarIndex] }}
          .right_show_intro {{ voiceSrc[leftbarIndex].intro }}
          .right_show_content
            .phsy_content(
              v-for="(phsy, phsyIndex) in voiceSrc[leftbarIndex].content"
            ) {{ phsy }}
            button(@click="phsyPage2 = !phsyPage2") 產生結果
        .right_show_phsyPage2(v-show="leftbarIndex===3, phsyPage2!==false")
          .right_show_title
            p 心理測驗結果
          .phsyPage2_content

    .activity_layout2(v-bind:key="currentIndex", v-show="currentIndex===1")
      .top_bar2(v-show="pc")
        button(
          v-bind:class="{ active: currentIndex === index }",
          v-for="(item, index) in introduceSrc",
          @click="selectPageTopic(1, index), (currentIndex = index)"
        ) {{ item.topic }}
      .content2(@click="titleBlock = false")
        div.left_bar2(v-show="pc, currentIndex===1")
          button(
            v-for="(item, index) in timeSrc",
            @click="timeDate = index",
            v-bind:class="{ active: timeDate === index }"
          ) {{ item.topic }}
        .right_show2

    .activity_layout3(
      v-show="currentIndex===2",
      @click="list = false; titleBlock = false"
    )
      .top_bar3(v-show="pc")
        button(
          v-bind:class="{ active: currentIndex === index }",
          v-for="(item, index) in introduceSrc",
          @click="selectPageTopic(2, index), (currentIndex = index)"
        ) {{ item.topic }}
      div.map_block
        img.map_img(
          v-bind:src="layout3MapSrc",
          @click="layout3Index = !layout3Index"
        )

    .activity_layout4(
      v-show="currentIndex===3",
      @click="list = false; titleBlock = false"
    )
      .top_bar4(v-show="pc")
        button(
          v-bind:class="{ active: currentIndex === index }",
          v-for="(item, index) in introduceSrc",
          @click="selectPageTopic(3, index), (currentIndex = index)"
        ) {{ item.topic }}
      .content4
</template>

<script>
import srcJson from '../assets//activity/activity.json'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

import Header from '@/components/common/Header.vue'
import Stage from '@/components/activities/category1/Stage.vue'
import Exhibition from '@/components/activities/category1/Exhibition.vue'
import Interview from '@/components/activities/category1/Interview.vue'
import Show from '@/components/activities/category2/Show.vue'
import Exploration from '@/components/activities/category3/Exploration.vue'

export default {
  components: {
    Waterfall,
    WaterfallSlot,
    Interview,
    Exploration,
    Show,
    Header,
    Stage,
    Exhibition
  },
  created () {
    window.addEventListener('resize', this.windowSizeChange)
  },
  destroyed () {
    window.removeEventListener('resize', this.windowSizeChange)
  },
  mounted: function () {
    var mapElement = document.getElementsByClassName('map_img')[0]
    mapElement.addEventListener('mousemove', this.mapMaxMsg)
    mapElement.addEventListener('mouseleave', this.mapMaxMsgOut)
    for (var i = 0; i < this.introduceSrc.length; i++) {
      var arr = new Array([])
      for (var j = 0; j < this.introduceSrc[i].lists.length; j++) {
        arr.push(false)
      }
      this.layout1FlagArr.push(arr)
    }
    this.pc = this.isPC()
    this.selectPageTopic(0, 0)
  },
  data: function () {
    return {
      currentIndex: -1,
      categoryIndex: 0,
      categorylistIndex: 0,
      leftbarIndex: 0,
      timeDate: 0,
      phsyPage2: false,
      lighteningIndex: 0,
      voice: false,
      leftBar: [
        {
          title: '扎根九十，學思賦能',
          catgories: ['舞台活動—燭華', '日常展覽', '模擬面試', '科系攤位系所諮詢平台']
        },
        {
          title: '南方智匯，成就登程',
          catgories: ['教育創新攤位', '閃電秀經驗分享', '單車體驗', '校園巡禮暨系館導覽']
        },
        {
          title: '未來想像，視界共好',
          catgories: ['時空膠囊沈浸式體驗展區', '跨領域探索學習']
        }
      ],
      voice_leftBar: ['留聲機初衷', '他們的故事', '擺渡人們', '心理測驗'],
      list: false,
      titleBlock: false,
      titleFlag: false,
      leftBlock: false,
      voiceSrc: srcJson.voice,
      introduceSrc: srcJson.introduce,
      timeSrc: srcJson.time,
      lighteningSrc: srcJson.lightening,
      layout1PageSrc: srcJson.introduce[0],
      // layout1Index: 0,
      layout1FlagArr: [],
      layout2DaySrc: srcJson.time[0],
      layout2Index: 0,
      layout3MapSrc: srcJson.map,
      layout3Index: false,
      layout4Index: 0,
      // layout4AboutSrc: srcJson.about,
      pc: false,
      showSideBar: false,
      showListIndex: -1
    }
  },
  updated: function () {
    var pc = this.pc
    if (this.titleFlag) {
      setTimeout(function () {
        var block = document.querySelectorAll('[data-block]')
        for (var i = 0; i < block.length; i++) {
          if (pc) {
            block[i].setAttribute(
              'style',
              'height: 28vh; transition: height .9s ease;'
            )
          } else {
            block[i].setAttribute(
              'style',
              'height: 26vw; transition: height .9s ease;'
            )
          }
        }
      }, 100)
      this.titleFlag = false
    }
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
    categorySelector: function (index) {
      if (index === -1) this.showSideBar = false
      else {
        this.showSideBar = true
        this.showListIndex = index
        this.voice = false
      }
    },
    listSelector: function (index, category) {
      this.categorylistIndex = index
      this.categoryIndex = category
      this.showSideBar = false
    },
    selectPageTopic: function (title, index) {
      var i, j
      this.currentIndex = title
      this.titleFlag = true
      var titleList = document.querySelectorAll('[data-key]')
      for (i = 0; i < titleList.length; i++) {
        if (i === title) {
          titleList[i].setAttribute(
            'style',
            `
            background-color: rgb(44,185,244);`
          )
        } else {
          titleList[i].setAttribute(
            'style',
            `
            background-color: rgb(117,210,243);`
          )
        }
      }
      if (title === 0) {
        this.layout1Index = index
        this.layout1PageSrc = srcJson.introduce[index]
        for (i = 0; i < this.layout1FlagArr.length; i++) {
          for (j = 0; j < this.layout1FlagArr[i].length; j++) {
            this.layout1FlagArr[i][j] = false
          }
        }
      }
      if (title === 1) {
        this.layout2Index = index
        this.layout2DaySrc = srcJson.time[index]
        var titles = document.querySelectorAll('[data-day]')
        for (i = 0; i < titles.length; i++) {
          if (i === index) {
            titles[i].setAttribute(
              'style',
              `
              background-color: rgb(75,196,245);`
            )
          } else {
            titles[i].setAttribute(
              'style',
              `
              background-color: rgb(196, 196, 196);`
            )
          }
        }
      }
    },
    topicStretch: function (index) {
      var topics = document.querySelectorAll('[data-topic]')
      if (topics[index].offsetHeight === 0) {
        topics[index].setAttribute('style', 'height: auto;')
      } else {
        topics[index].setAttribute('style', 'height: 0;')
      }
    },
    blockStretch: function (index) {
      var block = document.querySelectorAll('[data-block]')
      if (this.layout1FlagArr[this.layout1Index][index]) {
        this.layout1FlagArr[this.layout1Index][index] = false
        if (this.pc) {
          block[index].setAttribute(
            'style',
            'height: 28vh; transition: height .9s ease;'
          )
        } else {
          block[index].setAttribute(
            'style',
            'height: 26vw; transition: height .9s ease;'
          )
        }
      } else {
        this.layout1FlagArr[this.layout1Index][index] = true
        block[index].setAttribute(
          'style',
          'height: auto; transition: height .9s ease;'
        )
      }
    },
    isPC: function () {
      var userAgentInfo = navigator.userAgent
      var Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod'
      ]
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
  }
}
</script>

<style lang="scss" scoped>
.activity_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  min-width: 1000px;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #dad0f2 0%, #fcdbe3 100%);
  .activity_big_map {
    width: 100vw;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transition: background-color 2.5s ease;
    background-color: linear-gradient(180deg, #dad0f2 0%, #fcdbe3 100%);
    z-index: 1000;
    overflow: scroll;
    img {
      width: 95vw;
      height: 95vw;
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
  height: 84vh;
  background: linear-gradient(180deg, #fcdbe3 0%, #dad0f2 100%);
  .activity_layout1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-top: 10px;
    .top_bar1 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      align-content: space-around;
      width: 100vw;
      height: 4vh;
      margin: 3vh 0;
      button {
        width: 280px;
        height: 45px;
        color: #0c3759;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;

        font-size: 2.5vh;
        font-weight: normal;
        letter-spacing: 0.1vh;
        text-align: center;
        z-index: 5;
        &:hover {
          font-size: 2.1vh;
          filter: brightness(120%);
        }
        &:active {
          filter: brightness(50%);
        }
      }
      .active {
        background: #cdbfee;
        color: white;
      }
    }
    .content1 {
      display: flex;
      flex-direction: row;
      width: 90%;
      height: 74vh;
      box-sizing: border-box;
      padding: 20px;
      justify-content: space-between;
      align-items: flex-start;
      overflow-y: hidden;
      overflow-x: hidden;
      transition: filter 0.8s ease;
      .left_bar1 {
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        margin: 10px 10px 10px 0;
        .left_bar_category {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          .left_bar_item {
            position: relative;
            label {
              width: 35%;
              background: transparent;
              font-family: "GenSenRounded-M";
              font-size: 22px;
              font-weight: 700;
              line-height: 50px;
              letter-spacing: 0.145em;
              padding: 2px;
              margin: 10px;
              cursor: pointer;
            }
            .left_bar_lists1 {
              position: absolute;
              top: 0;
              left: 100%;
              display: flex;
              flex-direction: column;
              width: max-content;
              justify-content: flex-start;
              align-items: center;
              button {
                height: 50px;
                width: 100%;
                border-radius: nullpx;
                background: #fffbce;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 36px;
                letter-spacing: 0.1em;
                color: #769bff;
                border: none;
                box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
                margin: 8px;
                cursor: pointer;
              }
              .active {
                background: transparent;
                border: none;
                box-shadow: none;
              }
              .active2 {
                background: #769bff;
                color: #fffbce;
              }
            }
          }
          .active {
            border-bottom: 1.2mm solid white;
          }
        }
      }
      .right_show1 {
        width: 70%;
        height: 100%;
        border-radius: 20px;
        .platform {
          width: 750px;
          height: 530px;
          background: #ffffff;
        }
        .abnormal {
          width: 750px;
          height: 530px;
          background: #ffffff;
        }
        .daily {
          width: 750px;
          height: 530px;
          background: #ffffff;
        }
        .activities {
          width: 750px;
          height: 530px;
          background: #ffffff;
        }
        .voice {
          display: flex;
          flex-direction: column;
          justify-items: flex-start;
          align-content: center;
          align-items: center;
          width: 750px;
          height: 530px;
          background: #ffffff;
          .voice_title {
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            justify-items: flex-start;
            margin: 20px;
            p {
              font-size: 42px;
              left: 2vw;
            }
          }
          .voice_intro {
            width: 80%;
            height: 360px;
            background: gray;
          }
          .voice_btn {
            width: 80%;
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
            justify-items: flex-start;
            .btn {
              width: 240px;
              height: 55px;
              background: #769bff;
              margin: 20px 8px 20px 8px;
              border: none;

              font-size: 28px;
              font-weight: 500;
              color: white;
              padding: 8px;
              text-align: center;
              cursor: pointer;
              &:hover {
                filter: brightness(120%);
              }
              &:active {
                filter: brightness(50%);
              }
            }
          }
        }
        .lightening {
          display: flex;
          flex-direction: column;
          // justify-items: flex-start;
          // justify-content: center;
          width: 750px;
          height: 530px;
          background: #ffffff;
          overflow-y: scroll;
          .lightening_layout {
            .lightening_top_bar {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              justify-items: flex-start;
              align-content: center;
              align-items: center;
              width: 100%;
              height: 80px;
              margin-top: 10px;
              z-index: 20;
              button {
                width: 180px;
                height: 50px;
                background: #c4c4c4;
                margin: 2vw;
                border: none;
                font-size: 20px;
                cursor: pointer;
              }
              .active {
                background: #dad0f2;
                color: #0c3759;
              }
            }
            .lightening_content {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              justify-items: flex-start;
              align-content: center;
              align-items: center;
              width: 100%;
              .item1 {
                width: 80%;
                height: 160px;
                background: gray;
                margin: 2vh;
              }
              .item2 {
                width: 80%;
                height: 160px;
                background: gray;
                margin: 2vh;
              }
              .item3 {
                width: 80%;
                height: 160px;
                background: gray;
                margin: 2vh;
              }
            }
          }
        }
        .interview {
          width: 750px;
          height: 530px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-items: flex-start;
          align-content: center;
          align-items: center;
          .interview_title {
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            justify-items: flex-start;
            margin: 20px;
            p {
              font-size: 42px;
              left: 2vw;
            }
          }
          .interview_intro {
            width: 80%;
            height: 110px;
            background: gray;
          }
          .film {
            width: 80%;
            height: 360px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            // justify-items: ;
            margin: 20px;
            .film_lists {
              width: 20%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              justify-items: flex-start;
              .film_list {
                width: 80px;
                height: 260px;
                background: #c4c4c4;
                margin: 10px;
              }
            }
            .film_show {
              width: 80%;
              background: #f6eec2;
              // justify-items: center;
              // justify-content: center;
              // align-content: center;
              // align-items: center;
              margin: 10px;
            }
          }
        }
        .discover {
          width: 750px;
          height: 530px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          justify-items: flex-start;
          align-content: center;
          align-items: center;
          .discover_title {
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            justify-items: flex-start;
            // margin: 20px;
            p {
              font-size: 42px;
              left: 2vw;
              margin-top: 10px;
            }
          }
          .discover_content {
            width: 70%;
            height: 400px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            justify-items: center;
            align-content: center;
            align-items: center;
            .discover_show {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              justify-items: center;
              align-content: center;
              align-items: center;
              .discover_show_img {
                width: 180px;
                height: 220px;
                background: #c4c4c4;
                border-radius: 40px;
                margin: 5px;
              }
              .discover_show_intro {
                width: 180px;
                height: 100px;
                background: #c4c4c4;
                border-radius: 40px;
                margin: 5px;
              }
            }
          }
        }
      }
    }
    .content1_voice {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      justify-items: flex-start;
      align-content: flex-start;
      align-items: flex-start;
      width: 100%;
      overflow-y: scroll;
      margin-top: 10px;
      .left_bar {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        justify-items: center;
        align-content: center;
        align-items: center;
        width: 20%;
        margin-top: 60px;
        button {
          height: 76px;
          width: 270px;
          background: white;
          border: none;
          margin: 10px;
          font-size: 24px;
          color: #769bff;
        }
        .active {
          background: #769bff;
          color: #fffbfc;
        }
      }
      .right_show0 {
        width: 760px;
        height: 500px;
        background: #ffffff;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        .right_show_title {
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          justify-items: flex-start;
          margin: 30px;
          margin-left: 10px;
          p {
            font-size: 28px;
            font-weight: 600;
            left: 2vw;
          }
        }
        .right_show_content {
          width: 85%;
          height: 250px;
          background: gray;
          margin: 10px;
        }
        .right_show_intro {
          width: 85%;
          height: 80px;
          background: gray;
          margin: 10px;

          font-size: 20px;
          text-align: left;
        }
      }
      .right_show_story {
        width: 760px;
        height: 500px;
        background: #ffffff;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        .right_show_title {
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          justify-items: flex-start;
          margin: 30px;
          margin-left: 10px;
          p {
            font-size: 28px;
            font-weight: 600;
            left: 2vw;
          }
        }
        .right_show_intro {
          width: 85%;
          height: 60px;
          background: gray;
          margin: 10px;

          font-size: 20px;
          text-align: left;
        }
        .right_show_content {
          width: 90%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          justify-items: center;
          align-content: flex-start;
          align-items: flex-start;
          margin: 20px;
          .img {
            width: 170px;
            height: 120px;
            margin: 15px;
            // margin-left: 10px;
            background: gainsboro;
          }
        }
      }
      .right_show_people {
        width: 760px;
        height: 500px;
        background: #ffffff;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        .right_show_title {
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          justify-items: flex-start;
          margin: 30px;
          margin-left: 10px;
          p {
            font-size: 28px;
            font-weight: 600;
            left: 2vw;
          }
        }
        .right_show_intro {
          width: 85%;
          height: 60px;
          background: gray;
          margin: 10px;

          font-size: 20px;
          text-align: left;
        }
        .right_show_content {
          width: 90%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          justify-items: center;
          align-content: flex-start;
          align-items: flex-start;
          margin: 10px;
          .img {
            width: 120px;
            height: 130px;
            margin: 12px;
            // margin-left: 10px;
            background: gainsboro;
          }
        }
      }
      .right_show_phsy {
        width: 760px;
        height: 1000px;
        background: #ffffff;
        border-radius: 20px;
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        .right_show_title {
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          justify-items: flex-start;
          margin: 30px;
          margin-left: 10px;
          p {
            font-size: 28px;
            font-weight: 600;
            left: 2vw;
          }
        }
        .right_show_intro {
          width: 85%;
          height: 60px;
          background: gray;
          margin: 10px;

          font-size: 20px;
          text-align: left;
        }
        .right_show_content {
          width: 90%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: flex-start;
          justify-items: flex-start;
          align-content: center;
          align-items: center;
          margin: 20px;
          .phsy_content {
            width: 100%;
            height: 120px;
            margin: 15px;
            // margin-left: 10px;
            background: gainsboro;
          }
          button {
            width: 180px;
            height: 50px;
            background: #769bff;
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
      .right_show_phsyPage2 {
        width: 760px;
        height: 500px;
        background: #ffffff;
        border-radius: 20px;
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        .right_show_title {
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          justify-items: flex-start;
          margin: 30px;
          margin-left: 10px;
          p {
            font-size: 28px;
            font-weight: 600;
            left: 2vw;
          }
        }
        .phsyPage2_content {
          width: 80%;
          height: 360px;
          background: #dad0f2;
        }
      }
    }
  }
  .activity_layout2 {
    .top_bar2 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      align-content: space-around;
      width: 100vw;
      margin: 3.5vh 0 3.5vh 0;
      button {
        width: 280px;
        height: 45px;
        border: none;
        // margin: 10px;

        color: #0c3759;
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
      }
      .active {
        background: #cdbfee;
        color: white;
      }
    }
    .content2 {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      justify-items: center;
      align-items: flex-start;
      align-content: flex-start;
      overflow-y: hidden;
      overflow-x: hidden;
      transition: filter 0.8s ease;
      margin-top: 10px;
      .left_bar2 {
        width: 15%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        align-content: center;
        align-items: center;
        margin-top: 60px;
        button {
          height: 56px;
          width: 166px;
          background: #cdbfee;
          border-radius: 60px;
          border: none;

          font-size: 20px;
          color: #0c3759;
          line-height: 48px;
          letter-spacing: 0.145em;
          text-align: center;
          margin: 10px;
          cursor: pointer;
          &:hover {
            filter: brightness(120%);
          }
          &:active {
            filter: brightness(120%);
          }
        }
        .active {
          background: #769bff;
          color: white;
        }
      }
      .right_show2 {
        // display: flex;
        // flex-direction: column;
        width: 900px;
        height: 500px;
        background: #dad0f2;
        border-radius: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .activity_layout3 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    .top_bar3 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      align-content: flex-start;
      width: 100%;
      margin: 3.5vh 0 3.5vh 0;
      button {
        width: 280px;
        height: 45px;
        color: #0c3759;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;

        font-size: 2.5vh;
        font-weight: normal;
        letter-spacing: 0.1vh;
        text-align: center;
        z-index: 5;
        &:hover {
          font-size: 2.1vh;
          filter: brightness(120%);
        }
        &:active {
          filter: brightness(50%);
        }
      }
      .active {
        background: #cdbfee;
        color: white;
      }
    }
    .map_block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      justify-items: center;
      align-items: center;
      align-content: center;

      z-index: 5;
      width: 80%;
      border-radius: 2vh;
      .map_img {
        border-radius: 2vh;
        width: 80%;
        height: 100%;
      }
    }
  }
  .activity_layout4 {
    .top_bar4 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      align-content: space-around;
      width: 100vw;
      margin-top: 27px;
      button {
        width: 280px;
        height: 45px;
        border: none;
        // margin: 10px;

        color: #0c3759;
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
      }
      .active {
        background: #cdbfee;
        color: white;
      }
    }
    .content4 {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100vh;
      justify-content: space-around;
      justify-items: center;
      align-items: flex-start;
      align-content: flex-start;
      overflow-y: scroll;
      overflow-x: hidden;
      transition: filter 0.8s ease;
      margin-top: 10px;
      // background: #0C3759;
    }
  }
}
</style>
