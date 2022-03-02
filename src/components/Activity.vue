<template lang="pug">
.activity_page
  Header(v-if="pc")
  div(class="top_bar" v-if="!pc")
    div(class="top_bar_layout" @click="scroll()")
      router-link(class="top_logo" to="/")
      div(class="top_bar" )
        div(class="top_bar_mobile" )
          label() 活動介紹
          button( @click="dropdown_top = !dropdown_top;")
            div(class="list_btn" v-for="(l, index) of 3")
  .activity_layout(@click="list = false")

    .activity_layout_dropdown(v-if="!pc && dropdown_top")
      router-link(class="dropdown_top_list" v-for="(item, index) in menuText" tag="label"  v-bind:key="text" v-bind:to="'/' + urlText[index]" v-bind:class="{ active: index==0 }") {{item}}
      label(class="dropdown_top_list" @click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名
    // 活動介紹
    .activity_layout1(v-show="currentIndex===0 && !dropdown_top")
    
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

        div.categorylist_mobile(v-if="!pc")
          div.left_bar( )
            label(v-if="currentIndex==0") 主題活動介紹 
            label(v-if="currentIndex==1") 時程表
            label(v-if="currentIndex==2") 地圖
            button(class="dropdown_btn" @click=" dropdown=!dropdown;") ˇ
          label.right_category(v-if="currentIndex==0") {{leftBar_mobile[currentIndex][categoryIndex].title}}
          label.right_category(v-if="currentIndex==1") {{leftBar_mobile[currentIndex][timeDate].title}}
        
        div.right_show1_categoryList_mobile(v-if="!pc && !dropdown && currentIndex==0 && categoryList")
          div.list(v-for="(item, index) in leftBar[categoryIndex].catgories" @click="categoryList=!categoryList, listSelector2(index)") {{item}}
        
        div.right_show1_mobile(v-if="!pc && dropdown")
          label(class="dropdown_list" ) 活動介紹
          label(class="dropdown_list_category" v-for="(category, Index) in leftBar" @click="currentIndex=0, categoryIndex=Index, categoryList=true, dropdown=false;") {{category.title}}
          label(class="dropdown_list" ) 時程表
          label(class="dropdown_list_category" v-for="(category, Index) in timeSrc" @click="currentIndex=1, timeDate = Index, dropdown=false;") {{category.topic}}
          label(class="dropdown_list" @click="currentIndex=2, dropdown=false") 地圖

        right_show1(v-if="!dropdown && (!categoryList | pc)")
          Stage(v-if="categoryIndex === 0 && categorylistIndex === 1 ")
          Exhibition(v-if="categoryIndex === 0 && categorylistIndex === 2")
          Interview(v-if="categoryIndex === 0 && categorylistIndex === 3")
          School(v-if="categoryIndex === 1 && categorylistIndex === 0")
          Education(v-if="categoryIndex === 1 && categorylistIndex === 1")
          Show(v-if="categoryIndex === 1 && categorylistIndex === 2")
          BikeEx(v-if="categoryIndex === 1 && categorylistIndex === 3")
          Phonograph(v-if="categoryIndex === 2 && categorylistIndex === 0" :handleOnClick="toggleVoice")
          Exploration(v-if="categoryIndex === 2 && categorylistIndex === 1")
      .content1_voice(v-show="voice!==false")
        .left_bar
          button(
            v-for="(leftBar, index) in voiceSrc",
            @click="(leftbarIndex = index), (phsyPage2 = false)",
            v-bind:class="{ active: leftbarIndex === index }"
          ) {{ leftBar.left_bar }}
        Motivation(v-show="leftbarIndex===0")
        Story(v-show="leftbarIndex===1")
        People(v-show="leftbarIndex===2")
        PsyTest(v-show="leftbarIndex===3")

    // 時程表
    .activity_layout2(v-bind:key="currentIndex", v-show="currentIndex===1" v-if="!dropdown_top")
      

    
      .top_bar2(v-show="pc")
        button(
          v-bind:class="{ active: currentIndex === index }",
          v-for="(item, index) in introduceSrc",
          @click="selectPageTopic(1, index), (currentIndex = index)"
        ) {{ item.topic }}
      .content2(@click="titleBlock = false")
        div.left_bar2(v-show="pc && currentIndex===1")
          button(
            v-for="(item, index) in timeSrc",
            @click="timeDate = index",
            v-bind:class="{ active: timeDate === index }"
          ) {{ item.topic }}

        div.categorylist_mobile(v-if="!pc")
          div.left_bar( )
            label(v-if="currentIndex==0") 主題活動介紹 
            label(v-if="currentIndex==1") 時程表
            label(v-if="currentIndex==2") 地圖
            button(class="dropdown_btn" @click=" dropdown=!dropdown;") ˇ
          label.right_category(v-if="currentIndex==0") {{leftBar_mobile[currentIndex][categoryIndex].title}}
          label.right_category(v-if="currentIndex==1") 
            label() {{leftBar_mobile[currentIndex][timeDate].title}}
        div.right_show1_mobile(v-if="!pc && dropdown")
          label(class="dropdown_list" ) 活動介紹
          label(class="dropdown_list_category" v-for="(category, Index) in leftBar" @click="currentIndex=0, categoryIndex=Index, dropdown=false;") {{category.title}}
          label(class="dropdown_list" ) 時程表
          label(class="dropdown_list_category" v-for="(category, Index) in timeSrc" @click="currentIndex=1, timeDate = Index, dropdown=false;") {{category.topic}}
          label(class="dropdown_list" @click="currentIndex=2, dropdown=false") 地圖

        Schedule(:date="timeDate" v-if="!dropdown").right_show2 

    // 地圖
    .activity_layout3(
      v-show="currentIndex===2",
      @click="list = false; titleBlock = false"
      v-if="!dropdown_top"
    )
      .top_bar3(v-show="pc")
        button(
          v-bind:class="{ active: currentIndex === index }",
          v-for="(item, index) in introduceSrc",
          @click="selectPageTopic(2, index), (currentIndex = index)"
        ) {{ item.topic }}
      .content3
        div.categorylist_mobile(v-if="!pc")
          div.left_bar( )
            label(v-if="currentIndex==0") 主題活動介紹 
            label(v-if="currentIndex==1") 時程表
            label(v-if="currentIndex==2") 地圖
            button(class="dropdown_btn" @click=" dropdown=!dropdown;") ˇ
        div.right_show1_mobile(v-if="!pc && dropdown")
          label(class="dropdown_list" ) 活動介紹
          label(class="dropdown_list_category" v-for="(category, Index) in leftBar" @click="currentIndex=0, categoryIndex=Index, dropdown=false;") {{category.title}}
          label(class="dropdown_list" ) 時程表
          label(class="dropdown_list_category" v-for="(category, Index) in timeSrc" @click="currentIndex=1, timeDate = Index, dropdown=false;") {{category.topic}}
          label(class="dropdown_list" @click="currentIndex=2, dropdown=false") 地圖
        div.map_block(v-if="!pc && !dropdown")
          img.map_img(
            v-bind:src="layout3MapSrc",
            :src="require('@/assets/activity/map.png')",
            @click="layout3Index = !layout3Index"
          )

      div.map_block
        img.map_img(
          :src="require('@/assets/activity/map.png')",
          @click="layout3Index = !layout3Index"
        )
</template>

<script>
import srcJson from '../assets/activity/activity.json'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

import Header from '@/components/common/Header.vue'
import Stage from '@/components/activities/category1/Stage.vue'
import Exhibition from '@/components/activities/category1/Exhibition.vue'
import Interview from '@/components/activities/category1/Interview.vue'
import School from '@/components/activities/category2/School.vue'
import Show from '@/components/activities/category2/Show.vue'
import Education from '@/components/activities/category2/Education.vue'
import BikeEx from '@/components/activities/category2/BikeEx.vue'
import Phonograph from '@/components/activities/category3/Phonograph.vue'
import Exploration from '@/components/activities/category3/Exploration.vue'

import Motivation from '@/components/activities/category3/Phonograph/Motivation'
import Story from '@/components/activities/category3/Phonograph/Story'
import People from '@/components/activities/category3/Phonograph/People'
import PsyTest from '@/components/activities/category3/Phonograph/PsyTest'

import Schedule from '@/components/activities/Schedule'

export default {
  components: {
    Waterfall,
    WaterfallSlot,
    Interview,
    Exploration,
    Show,
    Header,
    Stage,
    Exhibition,
    School,
    BikeEx,
    Phonograph,
    Education,
    Motivation,
    Story,
    People,
    PsyTest,
    Schedule
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
      dropdown_top: false,
      dropdown: false,
      categoryList: true,
      topbar: ['主題活動介紹', '時程表', '地圖'],
      leftBar_mobile:[
        [
          {
            title: '扎根九十，學思賦能'
          },
          {
            title: '南方智匯，成就登程'
          },
          {
            title: '未來想像，視界共好'
          }
        ],
        [
          {
            title: '3/05 （六）'
          },
          {
            title: '3/06 （日）'
          }
        ]
      ],
      leftBar: [
        {
          title: '扎根九十，學思賦能',
          catgories: ['科系攤位系所諮詢平台', '舞台活動—燭華', '日常展覽', '模擬面試']
        },
        {
          title: '南方智匯，成就登程',
          catgories: ['校園巡禮暨系館導覽', '教育創新攤位', '閃電秀經驗分享', '單車體驗']
        },
        {
          title: '未來想像，視界共好',
          catgories: ['時空膠囊沈浸式體驗展區', '跨領域探索學習']
        }
      ],
      menuText: [ '活動介紹', '科系資訊', '主題專欄', '合作單位'],
      urlText: ['activity', 'department', 'column', 'sponsor'],
      // voice_leftBar: ['留聲機初衷', '他們的故事', '擺渡人們', '心理測驗'],
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
      showListIndex: -1,
      departmentGtUrl: 'https://app.gather.town/app/pQkmYUusyLNB6jhN/sampletest3'
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
      if (category === 0 && index === 0) {
        this.openTab(this.departmentGtUrl)
      }
    },
    listSelector2: function (index) {
      this.categorylistIndex = index
      if ( index === 0 && categoryIndex===0) {
        this.openTab(this.departmentGtUrl)
        this.categoryList = true
      }
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
    },
    toggleVoice: function () {
      this.voice = !this.voice
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px) {
    .activity_page {
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
      .top_bar{
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #FCDBE3;
      width: 100%;
      height: 10vh;
      .top_bar_layout{
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
    }
    .activity_layout_dropdown{
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
    .activity_layout1{
      height: 90vh;
      .content1{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .categorylist_mobile{
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          .left_bar{
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;
            justify-items: center;
            justify-content: center;
            margin: 2vh 1.5vw 1vh 0;
            width: 50vw;
            height: 5vh;
            background: #FCF6B8;
            border-radius: 30px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
            label{
              color: #769BFF;
              font-size: 130%;
              margin: 0 2vw 0 0;
              line-height: 12vh;
            }
            .dropdown_btn{
              width: 10vw;
              color: white;
              background: transparent;
              font-size: 180%;
              border: none;
              margin-top: 1.8vh;
            }
          }
          .right_category{
            // width: 42vw;
            margin-top: 1vh;
            font-size: 110%;
            border-bottom: 1.5mm solid #FCF6B8;
          }
        }
        .right_show1_categoryList_mobile{
          display: flex;
          flex-direction: column;
          .list{
            height: 16vh;
            width: 88vw;
            background: #FFE9EE;
            border-radius: 10px;
            margin: 1.2vh;
            line-height: 16vh;
            letter-spacing: 0.5vw;
            font-size: 130%;
            font-weight: 590;
          }
        }
        .right_show1_mobile{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1.5vh;
          .dropdown_list{
            width: 63vw;
            height: 6vh;
            color: #0C3759;
            background-color: #CDBFEE;
            font-size: 140%;
            line-height: 6vh;
            // margin: 0.5vh;
          }
          .dropdown_list_category{
            width: 63vw;
            height: 6vh;
            color: #0C3759;
            background-color: #FFE9EE;
            font-size: 120%;
            line-height: 6vh;
            // margin: 0.5vh;
          }
        }
      }
    }
    .activity_layout2{
      height: 90vh;
      .content2{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        .categorylist_mobile{
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-content: space-around;
          .left_bar{
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;
            justify-items: center;
            justify-content: center;
            margin: 2vh 1.5vw 1vh 0;
            width: 50vw;
            height: 5vh;
            background: #FCF6B8;
            border-radius: 30px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
            label{
              color: #769BFF;
              font-size: 130%;
              margin: 0 -5vw 0 0;
              line-height: 12vh;
            }
            .dropdown_btn{
              position: relative;
              right: -13vw;
              top: 0.8vh;
              width: 10vw;
              color: white;
              background: transparent;
              font-size: 180%;
              border: none;
            }
          }
          .right_category{
            width: 42vw;
            margin-top: 1vh;
            font-size: 110%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            label{
              width: 28vw;
              border-bottom: 1.5mm solid #FCF6B8;
              letter-spacing: 0.2vw;
            }
            
            
            // border-bottom- 
          }
        }
        .right_show1_mobile{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1.5vh;
          .dropdown_list{
            width: 63vw;
            height: 6vh;
            color: #0C3759;
            background-color: #CDBFEE;
            font-size: 140%;
            line-height: 6vh;
            // margin: 0.5vh;
          }
          .dropdown_list_category{
            width: 63vw;
            height: 6vh;
            color: #0C3759;
            background-color: #FFE9EE;
            font-size: 120%;
            line-height: 6vh;
            // margin: 0.5vh;
          }
        }
        .right_show2{
          width: 88vw;
          height: 70vh;
          background: #FFE9EE;
          border-radius: 15px;
          margin-top: 2vh;

        }
      }
    }
    .activity_layout3{
      height: 90vh;
      .content3{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        .categorylist_mobile{
          display: flex;
          flex-direction: row;
          .left_bar{
            position: relative;
            left: -20vw;
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;
            justify-items: center;
            justify-content: center;
            margin: 2vh 1.5vw 1vh 0;
            width: 50vw;
            height: 5vh;
            background: #FCF6B8;
            border-radius: 30px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
            label{
              color: #769BFF;
              font-size: 130%;
              margin: 0 -4vw 0 0;
              line-height: 12vh;
            }
            .dropdown_btn{
              position: relative;
              right: -14.5vw;
              top: 0.8vh;
              width: 10vw;
              color: white;
              background: transparent;
              font-size: 180%;
              border: none;
            }
          }
        }
        .right_show1_mobile{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1.5vh;
          .dropdown_list{
            width: 63vw;
            height: 6vh;
            color: #0C3759;
            background-color: #CDBFEE;
            font-size: 140%;
            line-height: 6vh;
            // margin: 0.5vh;
          }
          .dropdown_list_category{
            width: 63vw;
            height: 6vh;
            color: #0C3759;
            background-color: #FFE9EE;
            font-size: 120%;
            line-height: 6vh;
            // margin: 0.5vh;
          }
        }
        .map_block {
          margin: 2vh 0vw 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          z-index: 5;
          width: 92vw;
          height: 30vh;
          border-radius: 2vh;
          .map_img {
            border-radius: 2vh;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
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
        width: 65%;
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
        width: 65%;
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
        width: 65%;
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
        width: 65%;
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
        width: 70%;
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
        width: 900px;
        height: 500px;
        border-radius: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 0 20px;
      }
    }
  }
  .activity_layout3 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    overflow-y: scroll;
    padding-bottom: 20px;
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
  }

</style>