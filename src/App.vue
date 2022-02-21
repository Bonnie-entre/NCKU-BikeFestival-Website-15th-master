<template lang="pug">
  div(id="app")
    transition-page
      router-view
</template>

<script>
import TransitionPage from './components/TransitionPage'

const DEFAULT_TRANSITION = 'fade'
const DEFAULT_TRANSITION_MODE = 'in-out'

export default {
  name: 'App',
  components: {
    TransitionPage
  },
  data: function () {
    return {
      pc: this.isPC(),
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: ''
    }
  },
  created: function () {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION
      this.transitionMode = DEFAULT_TRANSITION_MODE
      this.transitionEnterActiveClass = `${transitionName}-enter-active`

      if (to.meta.transitionName === 'zoom-in') {
        this.transitionMode = 'in-out'
        this.transitionEnterActiveClass = 'zoom-enter-active'
        // Disable scrolling in the background.
        document.body.style.overflow = 'hidden'
      }
      if (from.meta.transitionName === 'zoom-out') {
        this.transitionMode = null
        this.transitionEnterActiveClass = null
        // Enable scrolling again.
        document.body.style.overflow = null
      }
      this.transitionName = transitionName
      next()
    })
  },
  mounted: function () {
    // config click event
    document.addEventListener('click', this.clickEffect)
    const self = this
    var startup
    if (this.pc) {
      startup = this.$el.querySelector('#startup_computer')
      startup.addEventListener('ended', myHandler, false)
      startup.parentNode.removeChild(startup)
    }
    function myHandler (e) {
      setTimeout(function () {
        startup.classList.add('slide-up')
        const transEndEvent = function () {
          startup.removeEventListener('transitionend', transEndEvent)
          startup.parentNode.removeChild(startup)
        }
        startup.addEventListener('transitionend', transEndEvent)
      }, 500)
    }
  },
  methods: {
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
    clickEffect: function (e) {
      const d = document.createElement('div')
      d.className = 'clickEffect'
      d.style.top = `${e.clientY - 100}px`
      d.style.left = `${e.clientX - 100}px`
      document.body.appendChild(d)
      d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d)
        d.removeEventListener('animationend', this)
      })
    },
    beforeLeave: function () {

    },
    enter: function () {

    },
    afterEnter: function () {

    }
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
  @import 'reset-css';

  @font-face {
  font-family: 'GenSenRounded-M';
  src: url('./assets/fonts/GenSenRoundedTW-M.ttf') format("truetype");
  font-weight: 500;
  }
  
  * {
    font-family: 'GenSenRounded-M'!important;
  }

  @keyframes clickEffect {
    0% {
      opacity: 1;
      transform: scale(0.1);
      border-width: 2.5em;
    }
    100% {
      opacity: 0.2;
      transform: scale(1);
      border-width: 0.03em;
    }
  }

  @keyframes dot-loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes up {
    0% { top: 0%;}
    100% {top: -120vh;}
  }

  @keyframes fill-text {
    0% {
      fill-opacity: 0;
      stroke: #942323;
      stroke-width: 2px;
    }
    85% {
      fill-opacity: 0;
      stroke: #942323;
      stroke-width: 1.8px;
    }
    100% {
      fill-opacity: 1;
      stroke: white;
      stroke-width: 1px;
    }
  }

    .zoom-enter-active,
    .zoom-leave-active {
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-name: zoom;
    }

    .zoom-leave-active {
      animation-direction: reverse;
    }

    @keyframes zoom {
      from {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }

      100% {
        opacity: 1;
      }
    }

    body {
      margin: 0;
      padding: 0;
      transform-origin: 0 0;
      font-family: ‘cwTeXYen’, sans-serif;
      overflow: hidden;
    }

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
      overflow: hidden;
      margin: 0;
      padding: 0;

      // self add
      width: 100%;
      height: 100vh;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items:center;
    }

    #test{
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      object-fit: cover;
      z-index: 20;
    }

    #startup_computer{
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      object-fit: cover;
      video::-webkit-media-controls-fullscreen-button{display: none !important;}
      video::-webkit-media-controls-mute-button { display: none !important;}
      video::-internal-media-controls-overflow-button{ display: none !important;}
    }
    .cls-1, .cls-4 {
      fill: #942323;
    }
    .cls-1, .cls-2, .cls-3, .cls-4 {
      stroke-width: 1.5px;
      stroke: #942323;
      stroke-miterlimit: 10;
      fill-opacity: 0;
    }
    .cls-2{
      fill: #1e556d;
    }
    .cls-3{
      fill: #133180;
    }
    .cls-4{
      stroke-width: 0.5px;
    }

    .clickEffect {
      position: fixed;
      width: 200px;
      height: 200px;
      box-sizing: border-box;
      border-style: solid;
      border-color: rgba(255, 255, 255, 1);
      border-radius: 50%;
      animation: clickEffect 0.4s ease-in-out;
      transform-origin: center;
      z-index: 99999;
      will-change: opacity, transform, border-width;
      pointer-events: none;
    }
    .slide-up {
      animation: up .5s ease;
      animation-fill-mode:forwards;
      -webkit-animation-fill-mode:forwards;
    }
  
</style>
