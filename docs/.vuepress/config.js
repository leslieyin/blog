const nav = require('./config/nav.js');

module.exports = {
  title: "阿猫阿狗",
  description: '我一直都在流浪，可我不曾见过海洋。', // 描述,以 <meta> 标签渲染到页面html中
  base: '/', // '/<github仓库名>/'， 默认'/' 
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '个人博客,记录生活,技术文档,支付业务,互联网金融,产品经理,网站收藏,app分享,电影记录,音乐,python,css3,html5,Node,git,github,markdown'}],
//    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc'}],// 百度统计博主验证
    ['meta', { name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
	['script', {  src: "https://cdn.jsdelivr.net/npm/artitalk" }],//说说
    ['script', {  src: "https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/js/jquery.min.js" }],//引入jqurey	
	['script', {  src: "https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/js/FooterFish.js" }],//引入底部鱼儿动画
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: 'https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/icons/dog_1271664_easyicon.net.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }] 
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },

  theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: 'https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/img/yt.png', // 导航栏logo
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: false, // 启用编辑
    editLinkText: '编辑',
    // 以下配置是Vdoing主题改动和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    //* bodyBgImg: [
     //  'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
     //  'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
     //  'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
	 
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    
    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
	
	//Algolia搜索
//   themeConfig: { 
//     algolia: {
//        apiKey: '<API_KEY>',
//        indexName: '<INDEX_NAME>'
//      }
//    }    
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: '阿猫阿狗', // 必需
     // link: 'https://github.com/miluluyo' // 可选的
    },
    blogger:{ // 博主信息，显示在首页侧边栏
      avatar: 'https://cdn.jsdelivr.net/gh/leslieyin/dns@master/blog/public/img/tx.jpg',
      name: '阿猫阿狗',
      slogan: '那时的天很蓝'
    },
    footer:{ // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: '阿猫阿狗 | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    }
  },
  plugins: [ 
//    'vuepress-plugin-baidu-autopush', // 百度自动推送

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: true // whether to display on the mobile side, default: false.
    }
	],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: true, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }
	],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector:'.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
	[
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        options: {
          el: '#valine-vuepress-comment',
          appId: 'XwjYUUxkQIDTc6noMiUdARtf-MdYXbMMI',
          appKey: 'TvKjc19BT4N6vffWXYa8cXxF',
          path: '<%- frontmatter.commentid || frontmatter.permalink %>',
		  requiredFields: ['nick','mail'],
          avatar: 'retro',		  
          recordIP: true,
          visitor: true,// 阅读量统计
		  enableQQ: true,
          placeholder: '在昵称处输入QQ号回车可同步QQ名称与邮箱，并可直接在此处留言！'		  
        }
      }
    ],
    [
      "ribbon",//背景彩带
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }
    ],
	[
    require.resolve('../../myPlugins/fullSearchBox/') //全局搜索
    ],
    ['baidu-tongji', {
    hm: '8523f93002754ce80cf62a8964487d6f'  //百度统计
    }
	],
	[
    'vuepress-plugin-baidu-autopush' //百度推送
    ]
  ],

}
