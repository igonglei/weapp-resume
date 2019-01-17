//app.js
import config from 'config'

App({
  onShow: function() {
    this.getResume()
  },
  //获取简历信息
  getResume() {
    wx.getNetworkType({
      success: res => {
        const {
          fileHost,
          localMode
        } = config
        if (localMode || res.networkType === 'none') {
          this.globalData.resume = require('data/resume.js')
          return
        }
        wx.request({
          url: `${fileHost}resume.json`,
          data: {
            ts: new Date().valueOf()
          },
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