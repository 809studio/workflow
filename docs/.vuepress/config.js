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
      title: '项目工程化',
      path: '/ci/',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['/ci/css-styleguide', 'css编码规范'],
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
