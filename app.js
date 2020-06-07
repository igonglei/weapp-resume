//app.js
import config from 'config'

App({
  onLaunch: function () {
    this.getResume()
  },
  //获取简历信息
  getResume() {
    wx.getNetworkType({
      success: res => {
        const setResume = data => {
          this.globalData.resume = data
          if (this.resumeReadyCallback) {
            this.resumeReadyCallback(data)
          }
        }
        const {
          dataPath,
          dataFile,
          localMode
        } = config
        if (localMode || res.networkType === 'none') {
          setResume(require('data/resume.js'))
          return
        }
        wx.request({
          url: dataPath + dataFile,
          success: res => {
            setResume(res.data)
          }
        })
      }
    })
  },
  globalData: {
    resume: null
  }
})