//index.js
const { imageCDN } = require('../../config')

//获取应用实例
const app = getApp()

Page({
  data: {
    resume: {},
    avatar: app.globalData.avatar,
    startImg: `${imageCDN}resume.png`,
    profileImg: `${imageCDN}profile.png`,
    educationImg: `${imageCDN}education.png`,
    jobImg: `${imageCDN}job.png`,
    skillImg: `${imageCDN}skill.png`,
    worksImg: `${imageCDN}works.png`,
    contactImg: `${imageCDN}contact.png`
  },
  onLoad: function () {
    const resume = app.globalData.resume
    if (resume) {
      this.setData({
        resume
      })
    } else {
      app.resumeReadyCallback = res => {
        this.setData({
          resume: res.data
        })
      }
    }
  }
})
