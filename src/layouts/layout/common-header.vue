<template>
  <div class="fr header-right">
    <v-button :tip="screen?'退出全屏':'全屏'" class="hidden-xs-only" @click="toggleScreen">
      <a-iconfont :type="screen?'icon-smallscreen':'icon-send'" />
    </v-button>
    <v-button tip="锁屏" @click="$router.push('/lock')" class="hidden-xs-only">
      <a-iconfont type="icon-lock" />
    </v-button>
    <a-divider type="vertical" />
    <a-dropdown>
      <a class="ant-dropdown-link" href="#">
        <a-badge>
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-badge>Dorado
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="2">
          <a rel="noopener noreferrer" href="javascript:;" @click="$router.replace('/login')">退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-divider type="vertical" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      screen: false
    }
  },
  methods: {
    toggleScreen () {
      if (!this.screen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen()
        } else {
          this.$message.error({
            content: '除了让你升级浏览器对方没什么好说的！',
            duration: 3
          })
        }
        this.screen = true
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else {
          this.$message.error({
            content: '请升级浏览器，不然我是不会理你的！',
            duration: 3
          })
        }
        this.screen = false
      }
    }
  }
}
</script>

<style scoped>
.header-right {
  height: 64px;
  overflow: hidden;
  padding-right: 20px;
}
</style>
