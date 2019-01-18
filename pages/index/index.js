//index.js
import {
  initAnimation,
  getAnimation
} from 'animation'

//获取应用实例
const app = getApp()

Page({
  data: {
    resume: {
      startPage: 0,
      pages: [],
      cdn: '',
      bg: ''
    },
    current: 0,
    animation: initAnimation,
    skills: []
  },
  customData: {
    timeouts: []
  },
  onLoad: function() {
    const resume = app.globalData.resume
    if (resume) {
      this.setResumeData(resume)
    } else {
      app.resumeReadyCallback = res => {
        this.setResumeData(res.data)
      }
    }
  },
  setResumeData: function(resume) {
    resume = { ...this.data.resume,
      ...resume
    }
    this.setData({
      resume,
      ...this.getCurrent(resume.startPage)
    })
    this.setAnimation()
  },
  getCurrent: function(current) {
    return {
      current,
      [`resume.pages[${current}].show`]: true
    }
  },
  setAnimation: function() {
    this.setData({
      animation: {}
    })
    const {
      resume: {
        pages
      },
      current
    } = this.data
    const {
      name: curPage
    } = pages[current] || {}
    if (!curPage) {
      return
    }
    const curAnimation = getAnimation(curPage)
    this.setData(curAnimation)
    if (curPage === 'skill') {
      this.setSkillAnimation()
    }
  },
  setSkillAnimation: function() {
    const skills = this.data.resume.skills || []
    const temp = []
    const timeouts = []
    for (let i = 0; i < skills.length; i++) {
      let timeout = setTimeout(() => {
        temp.push(skills[i])
        this.setData({
          skills: temp
        })
      }, 1300 + i * 500)
      timeouts.push(timeout)
    }
    this.customData.timeouts = timeouts
  },
  clearSkillAnimation: function() {
    for (let i of this.customData.timeouts) {
      clearTimeout(i)
    }
    this.customData.timeouts = []
  },
  bindchange: function(e) {
    this.clearSkillAnimation()
    this.setData({
      ...this.getCurrent(e.detail.current),
      skills: []
    })
    this.setAnimation()
  },
  onShareAppMessage: function() {
    const {
      cdn,
      shareImage
    } = this.data.resume
    return {
      imageUrl: cdn + shareImage
    }
  },
  previewImage: function(e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.src]
    })
  },
  previewWorks: function(e) {
    const {
      cdn
    } = this.data.resume
    const {
      src,
      works
    } = e.currentTarget.dataset
    wx.previewImage({
      current: src,
      urls: works.map(n => cdn + n.src)
    })
  },
  callMe: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.resume.phone
    })
  },
  saveQrcode: function() {
    wx.showActionSheet({
      itemList: ['保存图片'],
      success: () => {
        wx.getSetting({
          success: res => {
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success: res => {
                  this.downloadAndSaveQrcode()
                }
              })
            } else {
              this.downloadAndSaveQrcode()
            }
          }
        })
      }
    })
  },
  downloadAndSaveQrcode: function() {
    const {
      cdn,
      qrcode
    } = this.data.resume
    wx.downloadFile({
      url: cdn + qrcode,
      success: res => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }
})