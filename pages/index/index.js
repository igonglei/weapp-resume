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
      pages: []
    },
    current: 0,
    animation: initAnimation,
    skills: [],
    timeouts: [],
    isShow: false
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
    this.setData({
      resume,
      current: resume.startPage
    })
  },
  onShow: function() {
    if (!this.data.isShow) {
      this.setAnimation()
    }
    this.setData({
      isShow: true
    })
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
    const curAnimation = getAnimation(curPage)
    this.setData(curAnimation)
    if (curPage === 'skill') {
      this.setProgressAnimation()
    }
  },
  setProgressAnimation: function() {
    for (let i of this.data.timeouts) {
      clearTimeout(i)
    }
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
    this.setData({
      timeouts
    })
  },
  bindchange: function(e) {
    this.setData({
      current: e.detail.current,
      skills: []
    })
    this.setAnimation()
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
  },
  longpressCover: function() {
    app.getResume()
  }
})