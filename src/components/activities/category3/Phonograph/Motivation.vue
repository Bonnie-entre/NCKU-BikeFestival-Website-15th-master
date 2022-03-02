<template lang="pug">
  Panel(title="留聲機初衷")
    div.container
      p {{content}}
</template>

<script>
import Panel from './Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      content: '身為學生難免會有煩惱，卻可能沒有適合的人可以訴說，也無從宣洩，進而感到徬徨無助。於是我們創立了留聲機專案，希望能幫助有相似煩惱的人們在此尋求共鳴與慰藉，感受到自己其實不孤單。'
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 599px){
    .container {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        letter-spacing: 0.1em;
        font-size: 100%;
        text-align: justify;
        line-height: 30px;
        display: block;
        margin: 0 40px;
      }
    }
  }
  @media only screen and (min-width: 600px){
    .container {
      margin-top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        letter-spacing: 0.1em;
        font-size: 20px;
        text-align: justify;
        line-height: 30px;
        display: block;
        margin: 0 40px;
      }
    }
  }
</style>
