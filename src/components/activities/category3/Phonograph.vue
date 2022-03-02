<template lang="pug">
  Panel(title="留聲機")
    div.content
      div.inner-container
        p 歡迎光臨留聲機！
        p 現在的你，
        p 是否對未知的將來感到迷惘，希望他人能給予建議或鼓勵?
        p 或是，
        p 覺得無人能理解你的煩惱，而備感孤單？
        p 抑或是，
        p 在人生的路途上背負沉重期望，被壓得喘不過氣？
        p 別擔心！
        p 我們將帶領你走訪心靈深處、尋獲共鳴及慰藉💕
        br
        b 你，準備好了嗎？
    button.entry(@click="handleOnClick") 進入留聲機
</template>

<script>
import Panel from '../Panel.vue'
export default {
  components: {
    Panel
  },
  props: {
    handleOnClick: {type: Function}
  },
  methods: {
    execute () {
      if (this.handleOnClick) {
        this.handleOnClick()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    background: #DAD0F2;
    border-radius: 80px;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 20px;
    margin: 20px 0;
    .inner-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 40px;
      p, b {
        display: block;
        text-align: start;
      }
      b {
        font-weight: bold;
      }
    }
  }
  .entry {
    align-self: flex-end;
    color: #7B61FF;
    background: #FCD1DE;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
    border-radius: 100px;
    font-size: 30px;
    padding: 10px 25px;
    cursor: pointer;
  }
</style>
