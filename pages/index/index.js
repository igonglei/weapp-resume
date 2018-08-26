//index.js
const {
  imageCDN
} = require('../../config')

const animation = {
  startImg: 'start-img-ani',
  startText: 'start-text-ani',
  avatar: 'avatar-ani',
  headTitleAni: 'head-title-ani',
  headSplitAni: 'head-split-ani',
  titleImgAni: 'title-img-ani'
}

//获取应用实例
const app = getApp()

Page({
  data: {
    resume: {},
    avatar: app.globalData.avatar,
    image: {
      start: `${imageCDN}resume.png`,
      profile: `${imageCDN}profile.png`,
      education: `${imageCDN}education.png`,
      job: `${imageCDN}job.png`,
      skill: `${imageCDN}skill.png`,
      works: `${imageCDN}works.png`,
      contact: `${imageCDN}contact.png`
    },
    animation: {
      startImg: '',
      startText: '',
      avatar: '',
      aboutHeadTitleAni: '',
      aboutHeadSplitAni: '',
      profileHeadTitleAni: '',
      profileHeadSplitAni: '',
      profileTitleImgAni: ''
    },
    current: 0
  },
  onLoad: function() {
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
  },
  onShow: function() {
    this.setAnimation()
  },
  onHide: function() {
    this.clearAnimation()
  },
  clearAnimation: function() {
    this.setData({
      'animation.startImg': '',
      'animation.startText': '',
      'animation.avatar': '',
      'animation.aboutHeadTitleAni': '',
      'animation.aboutHeadSplitAni': '',
      'animation.profileHeadTitleAni': '',
      'animation.profileHeadSplitAni': '',
      'animation.profileTitleImgAni': ''
    })
  },
  setAnimation: function() {
    const current = this.data.current
    this.setData({
      'animation.startImg': current === 0 ? animation.startImg : '',
      'animation.startText': current === 0 ? animation.startText : '',
      'animation.avatar': current === 1 ? animation.avatar : '',
      'animation.aboutHeadTitleAni': current === 1 ? animation.headTitleAni : '',
      'animation.aboutHeadSplitAni': current === 1 ? animation.headSplitAni : '',
      'animation.profileHeadTitleAni': current === 2 ? animation.headTitleAni : '',
      'animation.profileHeadSplitAni': current === 2 ? animation.headSplitAni : '',
      'animation.profileTitleImgAni': current === 2 ? animation.titleImgAni : ''
    })
  },
  bindchange: function(e) {
    this.setData({
      current: e.detail.current
    })
    this.setAnimation()
  }
})