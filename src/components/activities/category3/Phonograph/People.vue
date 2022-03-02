<template lang="pug">
  Panel(title="擺渡人們")
    div.container
      p {{content}}
      div.people
        div.person(v-for="(person, i) in people")
          img(:src="require(`@/assets/activity/phonograph/people${i+1}.png`)")
</template>

<script>
import Panel from './Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      content: '說明文字：現在的你擁有許多煩惱，卻不知道該找誰訴說、從什麼管道得到建議或安慰嗎？我們邀請了在課業、人際、感情及未來四大主題，累積豐富經驗及感想的學長姊，歡迎你在這裡找尋共鳴，自由抒發內心的聲音。',
      people: ['', '', '', '', '', '', '', '']
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px){
    .container {
      flex-grow: 1;
      // width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        letter-spacing: 0.1em;
        font-size: 100%;
        text-align: justify;
        display: block;
        margin: 0 20px;
        line-height: 20px;
      }
      .people {
        flex-grow: 1;
        width: 100%;
        margin: 20px 0;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(4,1fr);
        .person {
          img {
            width: 100%;
            border-radius: 15px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 600px){
    .container {
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        letter-spacing: 0.1em;
        font-size: 18px;
        text-align: justify;
        display: block;
        margin: 0 20px;
        line-height: 20px;
      }
      .people {
        flex-grow: 1;
        width: 100%;
        margin: 20px 0;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(4,1fr);
        .person {
          img {
            width: 100%;
            border-radius: 15px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  }
</style>
