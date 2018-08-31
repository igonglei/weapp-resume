//app.js
const { fileHost, imageCDN, localMode } = require('config')

App({
  onLaunch: function () {
    this.getResume()
  },
  //获取简历信息
  getResume() {
    if (localMode) {
      this.globalData.resume = require('data/resume.js')
      return
    }
    wx.showNavigationBarLoading()
    wx.request({
      url: `${fileHost}resume.json`,
      success: res => {
        wx.hideNavigationBarLoading()
        this.globalData.resume = res.data
        if (this.resumeReadyCallback) {
          this.resumeReadyCallback(res)
        }
      }
    })
  },
  globalData: {
    resume: null,
    avatar: `${imageCDN}avatar.jpg`
  }
})