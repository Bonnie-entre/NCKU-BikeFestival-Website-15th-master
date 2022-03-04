<template lang="pug">
  div(class="top_bar")
    div(class="top_bar_layout" @click="scroll()")
      router-link(class="top_logo" to="/")
      
      div(class="top_bar_pc" v-if="pc") 
        router-link(v-bind:class="{ active: index===0 }" tag="label" v-for="(text, index) of menuText" v-bind:key="text" v-bind:to="'/' + urlText[index]") {{text}}
        label(@click="openTab('https://docs.google.com/forms/d/e/1FAIpQLSdBW8m8SVm5YqwtsOGWAaMYwOWiMJ_RbjZTNMq4dJYYWCg85Q/viewform'); list = false;") 我要報名

</template>

<script>
export default {
  data: function () {
    return {
      urlText: ['activity', 'department', 'column', 'sponsor'],
      menuText: [ '活動介紹', '科系資訊', '主題專欄', '合作單位'],
      dropdown_top: false,
      pc: this.isPC()
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px) {
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
          background-image: url("../../assets/logoHome_white2.png");
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
  @media only screen and (min-width: 600px) {
    .top_bar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      z-index: 100;
      background: #CDBFEE;
      width: 100vw;
      height: 16vh;
      box-shadow: 0 0 3px 1px rgba(51, 51, 51, 0.5);
      .top_bar_layout {
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
          background-image: url("../../assets/logoHome_white.png");
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
        .top_bar_pc{
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
  }
  
        
</style>