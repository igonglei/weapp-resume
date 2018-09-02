//app.js
const {
  fileHost,
  localMode
} = require('config')

App({
  onLaunch: function() {
    this.getResume()
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  //获取简历信息
  getResume() {
    wx.getNetworkType({
      success: res => {
        if (localMode || res.networkType === 'none') {
          this.globalData.resume = require('data/resume.js')
          return
        }
        wx.request({
          url: `${fileHost}resume.json`,
          success: res => {
            this.globalData.resume = res.data
            if (this.resumeReadyCallback) {
              this.resumeReadyCallback(res)
            }
          }
        })
      }
    })
  },
  globalData: {
    resume: null
  }
})