//index.js
//获取应用实例
Page({
  data: {
    swiperUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    dates: [
      { date: '16', week: '今天', checked: true }, 
      { date: '17', week: '明天', checked: false },
      { date: '18', week: '周四', checked: false },
      { date: '19', week: '周五', checked: false },
      { date: '20', week: '周六', checked: false },
      { date: '21', week: '周日', checked: false },
      { date: '22', week: '周一', checked: false }
    ],
    currentDateIndex: 0,
    clubs: [
      { name: '将府公园球场', cover: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', checked: true },
      { name: '大黄庄球场', cover: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', checked: false }
    ],
    currentClubIndex: 0,
  },

  dateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.currentTarget.dataset.value)
    this.data.dates[this.data.currentDateIndex].checked = false
    this.data.currentDateIndex = e.currentTarget.dataset.value
    this.data.dates[this.data.currentDateIndex].checked = true
    this.setData({
      dates: this.data.dates
    })
  },

  clubChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.currentTarget.dataset.value)
    this.data.clubs[this.data.currentClubIndex].checked = false
    this.data.currentClubIndex = e.currentTarget.dataset.value
    this.data.clubs[this.data.currentClubIndex].checked = true
    this.setData({
      clubs: this.data.clubs
    })
  }
  
})

