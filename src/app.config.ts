export default defineAppConfig({
  pages: ['pages/home/index', 'pages/mine/index', 'pages/boardcast/index', 'pages/favorite/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTextStyle: 'white',
    backgroundColor: '#ffffff',
    navigationBarBackgroundColor: '#d43c33',
  },
  requiredBackgroundModes: ['audio'],
  tabBar: {
    color: '#979797',
    selectedColor: '#d43c33',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '发现',
        iconPath: 'static/images/tab-bar/netease.png',
        selectedIconPath: 'static/images/tab-bar/netease-selected.png',
      },
      {
        pagePath: 'pages/boardcast/index',
        text: '播客',
        iconPath: 'static/images/tab-bar/boardcast.png',
        selectedIconPath: 'static/images/tab-bar/boardcast-selected.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'static/images/tab-bar/music.png',
        selectedIconPath: 'static/images/tab-bar/music-selected.png',
      },
      {
        pagePath: 'pages/favorite/index',
        text: '关注',
        iconPath: 'static/images/tab-bar/people.png',
        selectedIconPath: 'static/images/tab-bar/people-selected.png',
      },
    ],
  },
});
