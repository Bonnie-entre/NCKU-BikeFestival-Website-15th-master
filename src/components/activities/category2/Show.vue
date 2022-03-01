<template lang="pug">
  Panel(title="閃電秀")
    div.menu
      div.menu_item(@click="activeIndex = 0" :class="{ active: activeIndex === 0 }") 大演講
      div.menu_item(@click="activeIndex = 1" :class="{ active: activeIndex === 1 }") 小演講
    div.container
      a.column_item(
        v-for="col in columns"
        :href="activeIndex === 0 ? col.link_1 : col.link_2"
      )
        img(:src="col.img")
        p.title {{ col.title }}
</template>

<script>
import Panel from '../Panel.vue'
export default {
  components: {
    Panel
  },
  data: function () {
    return {
      activeIndex: 0,
      columns: [
        {
          title: '迷思',
          img: require('@/assets/activity/4.png'),
          link_1: 'https://www.youtube.com/playlist?list=PLqUuGuTWwe_UImv0wTZr-PcNgZp3Xbr04',
          link_2: 'https://www.youtube.com/playlist?list=PLqUuGuTWwe_UXxmigD4P2TmO1jlis1NJX'
        },
        {
          title: '學業',
          img: require('@/assets/activity/5.png'),
          link_1: 'https://www.youtube.com/playlist?list=PLqUuGuTWwe_Vuj15EKmpjaG6I4dnJvID3',
          link_2: 'https://www.youtube.com/playlist?list=PLqUuGuTWwe_WHmQVMF1A7qsKLXEgPBpwL'
        },
        {
          title: '校內外活動',
          img: require('@/assets/activity/6.png'),
          link_1: 'https://www.youtube.com/playlist?list=PLqUuGuTWwe_UaYeMiKJ64lFgJunD4xPw6',
          link_2: 'https://www.youtube.com/playlist?list=PLqUuGuTWwe_WGMUS2xxKHF7v9n_F-0SbF'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    font-size: 40px;
    text-align: left;
  }

  .menu {
    display: flex;
    justify-content: flex-start;
    .menu_item {
      background-color: #C4C4C4;
      cursor: pointer;
      padding: 10px 26px;
      margin: 20px;
      font-size: 24px;
      &.active {
        background-color: #DAD0F2;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    .column_item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 25%;
      height: 90%;
      text-decoration: none;
      .title {
        font-size: 28px;
        color: #769BFF;
        font-weight: 700;
      }
      img {
        height: 50%;
      }
    }
  }
</style>
