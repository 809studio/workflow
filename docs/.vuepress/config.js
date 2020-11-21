module.exports = {
  base: '/workflow/',
  title: 'WorkFlow',
  description: 'record any work',
  head: [
    ['link', { rel: 'icon', href: '/imgs/logo.png' }]
  ],
  themeConfig: {
    // logo: '/imgs/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [{
      //     text: 'Chinese',
      //     link: ''
      //   },
      //   {
      //     text: 'English',
      //     link: ''
      //   }]
      // }
    ],
    sidebar: [{
      title: '项目开发',
      path: '/develop/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['/develop/technology-selection', '技术选型'],
        ['/develop/idea', '开发工具'],
        ['/develop/js-eslint', 'js编码规范'],
        ['/develop/css-styleguide', 'css编码规范'],
        ['/develop/git', 'git规范'],
      ]
    }, {
      title: '项目工程化',
      path: '/ci/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['/ci/deploy', '部署'],
      ]
    }],
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,
    // 页面滚动
    smoothScroll: true
  }
}
