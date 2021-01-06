<template>
  <div id="artitalk_main" />
</template>

<script>
export default {
  mounted() {
    function addScript(url) {
      var s = document.createElement("script");
      s.id = "at";
      url.indexOf("appId") == -1 ? (s.src = url) : (s.innerHTML = url);
      document.head.appendChild(s);
    }
    addScript(`
      new Artitalk({
          appId: 'XwjYUUxkQIDTc6noMiUdARtf-MdYXbMMI',
          appKey: 'TvKjc19BT4N6vffWXYa8cXxF',
          shuoPla: '在此输入',
          bgImg: 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp',
          atEmoji: {
              huaji: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif',
              baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
              bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
              bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
              chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png'          
          },
      })
    `);
  },
  destroyed() {
    document
      .querySelectorAll("#at")
      .forEach(element => element.parentNode.removeChild(element));
    delete window.AV;
  }
};
</script>