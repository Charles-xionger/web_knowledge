<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  mounted: function(){
    this.createValine()
  },
  methods: {
    createValine() {
      const Valine = require('valine');
      window.AV = require('leancloud-storage')
      const valine =  new Valine({
        el: '#vcomments',
        appId: 'LNH1tVxpgyuiXNg6azxozhvX-gzGzoHsz',
        appKey: 'dRKz3WEnIyVFk96ejTHBVq6X',
        notify: false,
        verify: false,
        avatar: 'monsterid',
        path: window.location.pathname,
        placeholder: '欢迎留言与我分享您的想法...',
      });
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path !==  from.path){
        setTimeout(() => {
          //重新刷新valine
          this.createValine()
        }, 300)
      }
      
      /**
       * TODO:
       * 1. 使用其他方法更新评论组件 或者使用其他较为好用的评论组件
       * 2. 添加categories and tag
       * 3. 更换其他主题
       */
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>

/**
 * ```
<ClientOnly>
  <v-comment></v-comment>
</ClientOnly>

```
 */
