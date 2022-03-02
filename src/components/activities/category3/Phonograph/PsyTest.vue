<template lang="pug">
  Panel(:title="ansNum === 0 ? '心理測驗' : '心理測驗結果'")
    div.container(v-if="ansNum === 0")
      p {{content}}
      div.answers
        img(
          :src="require('@/assets/activity/phonograph/psyQ1.png')"
          style="width: 50%"
          @click="handleOnClick(1)"
        )
        img(
          :src="require('@/assets/activity/phonograph/psyQ2.png')"
          style="width: 46%"
          @click="handleOnClick(2)"
        )
    div.answer-container(v-else)
      p.content(v-for="text in answers[ansNum-1]") {{text}}
</template>

<script>
import Panel from './Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      content: '來做個簡單輕鬆的心理測驗吧~',
      ansNum: 0,
      answers: [
        [
          '選擇A，你最害怕的是「迷茫」你有很多想法，卻從來不敢去嘗試，你害怕走錯路，因為你輸不起。一直以來，你的命運好像被安排好了一樣，從來都不會出錯。然而當這種安排戛然而止的時候，你就感到手足無措。因為你習慣了接受安排，卻從來沒有真正考慮過自己想要什麼，於是你陷入了迷茫。很多時候，你的問題就在於輸不起，如果你能夠拋開這樣的想法，你或許就不會再迷茫了。',
          '選擇B，你最害怕的是「缺乏歸屬感」長期以來，你過著遊牧式的生活，從來沒有真正在一個地方紮根，因此你內心缺乏一種歸屬感。事實上，你很享受這種遊牧式的生活，因為沒有任何牽絆和約束。你不喜歡和他人產生聯系，你覺得他們靠近你都是帶有目的的，你為此感到焦慮，幹脆就放棄建立親密的關系。事實上，這是你的錯覺，或許你在小的時候受到過背叛或者欺騙，但那已經過去了，如果你想要獲得歸屬感，就一定要學會信任他人。',
          '選擇C，你最害怕的是「承擔責任」你總是把自己當成孩子一樣，至少在你的父母來看是這樣的。在很多覆雜的問題上面，你習慣了讓父母來替你承擔責任，而父母也因為極力保護你而承擔了過多的責任。以至於現在的你雖然年齡不小，但是內心卻不成熟，害怕承擔責任。事實上，你並沒有必要為此埋怨誰，而是將眼光看向未來，自己學著承擔責任，從最小的方面開始，直到你不再害怕承擔責任時，你才真正長大了。',
          '選擇D，你最害怕的是「被人看透自己」你總是喜歡給人一種神秘的感覺，不想讓別人真正看透你。你的內心藏了很多秘密，只能夠獨自體會。你在自己的內心深處，設置了重重關卡，以便於抵禦試圖進入你內心的「壞人」。因此看出你是一個極為內斂的人，不喜歡暴露自己的情感狀態，擔心一旦被人看透之後，就失去了自己的尊嚴。雖然有些誇大，但是事實就是如此，你覺得如果別人不了解你時，還能夠給你一定的尊重。'
        ],
        [
          '選項A:你擁有「高敏感天賦」，感官敏銳且有豐富的精神生活，但不了解你的人會為你冠上神經質的稱號。你能很快地察覺別人的心理狀態和心情變化，但不喜歡與人爭論，覺得很沒意義，甚至為了避免紛爭，你會選擇說一些無關緊要的謊，表現出獨善其身的樣子。',
          '選項B:你是個情緒化的人，喜形於色，因此給人一種難以親近的疏離感。你也樂於維持這樣的安全距離，在別人面前不輕易展現脆弱的一面，你的防備心使人無法了解真正的你，只有被認定是可以坦然相對的對象，才能變得跟你很熟，其實你是很好懂，只是有點孤僻的人，想和你當上好朋友，得先分得清你的脾氣是真壞還是裝的才行。',
          '選項C:你是個兼具知性和理性的人，非常的有能力且優秀，但你並不以此為傲，這樣的默默發光讓你深受眾人喜愛。雖然你對於自己的才能很有自信，但內心也渴望他人的肯定和讚美，你很懂得隱藏你的內在慾望，而且能掩蓋得很好，不當高調的領導者，卻能讓很多人在不知不覺中真心的認同你。',
          '選樣D:你是個對於生活非常積極的人，你總覺得人生充滿無限的期待～不但有著豐富的人生規劃，也有強大的執行力與毅力，即使遇上了挫折也不會輕易放棄，反而能促使你更快爬起來迎戰，外人看來你就是活力滿滿好相處的人，但心底卻有著不服輸的頑固個性，也造就了你精彩的人生閱歷。'
        ]
      ]
    }
  },
  methods: {
    handleOnClick: function (clickIndex) {
      this.ansNum = clickIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    letter-spacing: 0.1em;
    font-size: 18px;
    text-align: justify;
    display: block;
    margin: 0 20px;
    line-height: 20px;
  }
  .answers {
    margin-top: 20px;
    flex-grow: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    img {
      object-fit: contain;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
  }
}
.content {
  text-align: justify;
  margin: 20px 0;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #0C3759;
}
</style>
