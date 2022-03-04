<template lang="pug">
  Panel(title="他們的故事" style="position: relative")
    div.back-btn(
      v-show="storyIndex != -1"
      @click="storyIndex = -1"
    ) ← 回上頁
    div.container
      p {{content}}
      div.btn-group(v-if="storyIndex === -1")
        button(v-for="btn_img, index in btn_imgs")
          img(:src="btn_img" @click="handleOnClick(index)")
      div.story-container(v-else)
        img(:src="btn_imgs[storyIndex]")
        div.story-content
          p(v-for="content in storyContents[storyIndex]") {{content}}
</template>

<script>
import Panel from './Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      content: '收集了四位高中生的煩惱，以及他們的錄音，描述他們當時遇到的問題，這些問題你我都可能經驗過，或是正在經歷，或許你可以從他們的故事中看見自己的影子，告訴你：你並不孤單。',
      btn_imgs: [
        require('@/assets/activity/phonograph/schoolWork.png'),
        require('@/assets/activity/phonograph/future.png'),
        require('@/assets/activity/phonograph/relationship.png'),
        require('@/assets/activity/phonograph/emotion.png')
      ],
      storyIndex: -1,
      storyContents: [
        ['升上高三發現身旁同學成績都很好又很用功。資質本來就沒他們好，我雖然花了150%的努力，也只能追上他們的一點點。父母對我的期許經常壓得我喘不過氣，他們總認為我不夠努力才會考不好，而以責備代替鼓勵來表達他們對我的關心。在這充滿壓力的環境下，我一直過得很不快樂，甚至快得了憂鬱症。'],
        [
          '到底該選校還是選系呢？',
          '這個科系符合我的夢想職業，老師和家人卻將我勸退...',
          '未來的人生好長阿！比起薪資差異，樂於學習是否才是長久之道？',
          '旁人的話語終究動搖了我的內心，最後選校而非選系，對人生的迷茫感有增無減。',
          '未來，未來，未來，待在這個不屬於我的地方，未來到底該往何處去？'
        ],
        [
          '為了準備學測，我犧牲了許多與朋友相處的時間。',
          '然而我卻非常羨慕那些可以一起吃晚餐、一起留讀、累了一起走操場的同學。',
          '而且說來諷刺的是，他們都考得比我好，令我更加挫折...'
        ],
        [
          '高二時我瞞著父母偷偷談了戀愛',
          '但我不希望談戀愛影響到成績，也不習慣常常放閃，反而一直疏遠我的男友。',
          '學測前，感情的摩擦加上課業的壓力，讓我每天以淚洗面，整個人心態都崩了:('
        ]
      ]
    }
  },
  methods: {
    handleOnClick: function (clickIndex) {
      this.storyIndex = clickIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.back-btn{
  position: absolute;
  left: 40px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 4px #fcdbe3, 0 0 5px #dad0f2;
  }
}
  @media only screen and (max-width: 599px){
    .container {
      flex-grow: 1;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      p {
        letter-spacing: 0.1em;
        font-size: 100%;
        text-align: justify;
        display: block;
        margin: 0 20px;
        line-height: 20px;
      }
      .btn-group {
        flex-grow: 1;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 20px;
        padding: 20px;
        button {
          background: transparent;
          border: none;
          img {
            width: 38vw;
            cursor: pointer;
          }
        }
      }
      .story-container {
        flex-grow: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        img {
          width: 200px;
          position: absolute;
          left: 0;
          top: 40vh;
        }
        .story-content {
          width: 500px;
          height: 100%;
          background-image: url('../../../../assets/activity/phonograph/storyBg.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center right;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          p {
            display: block;
            font-size: 100%;
            text-align: justify;
            letter-spacing: 0.1em;
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
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      p {
        letter-spacing: 0.1em;
        font-size: 18px;
        text-align: justify;
        display: block;
        margin: 0 20px;
        line-height: 20px;
      }
      .btn-group {
        flex-grow: 1;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 20px;
        padding: 20px;
        button {
          background: transparent;
          border: none;
          img {
            width: 200px;
            cursor: pointer;
          }
        }
      }
      .story-container {
        flex-grow: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        img {
          width: 200px;
          position: absolute;
          left: 0;
        }
        .story-content {
          width: 500px;
          height: 100%;
          background-image: url('../../../../assets/activity/phonograph/storyBg.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center right;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          p {
            display: block;
            font-size: 18px;
            text-align: justify;
            letter-spacing: 0.1em;
          }
        }
      }
    }
  }
</style>
