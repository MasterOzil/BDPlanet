// inventoryList.js
//获取应用实例
var app = getApp()

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    wxUserInfo: null,
    userInfo: null,
    matchId: '',
    matchTalksLoaded: false, nextTalkPageUrl: null, currentTalks: [],
    page: {
      top: 489, currentTalk: null,
      matchType: null,
      matchTime: '',
      homeTeam: null, guestTeam: null,
      homeScore: 0, guestScore: 0,
      penaltyHomeScore: 0, penaltyGuestScore: 0,
      hasPenaltyShootout: false,
      playerNumber: 11,
      showLineupButtons: {
        homeEdit: false,
        guestEdit: false,
        submit: false
      },
      homeStartingCount: 0, guestStartingCount: 0,
      playersHome: [], playersGuest: [],
      showTalkButton: true,
      talkContent: '',
      matchTalks: []
    }
  },
  
  
  // 打开比赛记录表
  nav2matchSheet: function () {
    wx.navigateTo({
      url: '../matchSheet/matchSheet',
      success: function (res) {
        // success
      }
    })
  },
  
  // 切换tab页
  swiperChanged: function (e) {
    this.setData({ currentTab: e.detail.current })
  },
  swichSwiper: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.current) {
      return false;
    } else {
      this.setData({ currentTab: e.currentTarget.dataset.current })
    }
  }

})