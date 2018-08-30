//index.js
const {
  imageCDN
} = require('../../config')

const animation = {
  startImg: 'start-img-ani',
  startText: 'start-text-ani',
  avatar: 'avatar-ani',
  avatarCircle: 'avatar-circle-ani',
  userName: 'userinfo-name-ani',
  userEdu: 'userinfo-edu-ani',
  userWorkYear: 'userinfo-workYear-ani',
  userAddress: 'userinfo-address-ani',
  userJob: 'userinfo-job-ani',
  headTitle: 'head-title-ani',
  headSplit: 'head-split-ani',
  titleImg: 'title-img-ani',
  profileContent: 'profile-content-ani',
  timelinePoint: 'timeline-point-ani',
  timelinePeriod: 'timeline-period-ani',
  timelineInfo: 'timeline-info-ani',
  timelineLine: 'timeline-line-ani',
  worksImg: 'works-image-ani',
  qrcode: 'qrcode-ani',
  callme: 'call-me-ani',
  contactTitle: 'contact-title-ani',
  contactValue: 'contact-value-ani'
}

//获取应用实例
const app = getApp()

Page({
  data: {
    resume: {},
    avatar: app.globalData.avatar,
    image: {
      cdn: imageCDN,
      start: `${imageCDN}resume.png`,
      about: `${imageCDN}about.png`,
      profile: `${imageCDN}profile.png`,
      education: `${imageCDN}education.png`,
      job: `${imageCDN}job.png`,
      project: `${imageCDN}project.png`,
      skill: `${imageCDN}skill.png`,
      works: `${imageCDN}works.png`,
      contact: `${imageCDN}contact.png`,
      qrcode: `${imageCDN}qrcode.jpg`
    },
    animation: {
      startImg: '',
      startText: '',
      avatar: '',
      avatarCircle: '',
      userName: '',
      userEdu: '',
      userWorkYear: '',
      userAddress: '',
      userJob: '',
      aboutHeadTitle: '',
      aboutHeadSplit: '',
      aboutTitleImg: '',
      profileHeadTitle: '',
      profileHeadSplit: '',
      profileTitleImg: '',
      profileContent: '',
      eduHeadTitle: '',
      eduHeadSplit: '',
      eduTitleImg: '',
      eduTimelinePoint: '',
      eduTimelinePeriod: '',
      eduTimelineInfo: '',
      eduTimelineLine: '',
      jobHeadTitle: '',
      jobHeadSplit: '',
      jobTitleImg: '',
      jobTimelinePoint: '',
      jobTimelinePeriod: '',
      jobTimelineInfo: '',
      jobTimelineLine: '',
      projectHeadTitle: '',
      projectHeadSplit: '',
      projectTitleImg: '',
      projectTimelinePoint: '',
      projectTimelinePeriod: '',
      projectTimelineInfo: '',
      projectTimelineLine: '',
      skillHeadTitle: '',
      skillHeadSplit: '',
      skillTitleImg: '',
      worksHeadTitle: '',
      worksHeadSplit: '',
      worksTitleImg: '',
      worksImg: '',
      contactHeadTitle: '',
      contactHeadSplit: '',
      contactTitleImg: '',
      qrcode: '',
      callme: '',
      contactTitle: '',
      contactValue: ''
    },
    current: 0,
    skills: [],
    timeouts: []
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
  setAnimation: function(current) {
    current = current || this.data.current
    this.setData({
      'animation.startImg': current === 0 ? animation.startImg : '',
      'animation.startText': current === 0 ? animation.startText : '',
      'animation.avatar': current === 1 ? animation.avatar : '',
      'animation.avatarCircle': current === 1 ? animation.avatarCircle : '',
      'animation.userName': current === 1 ? animation.userName : '',
      'animation.userEdu': current === 1 ? animation.userEdu : '',
      'animation.userWorkYear': current === 1 ? animation.userWorkYear : '',
      'animation.userAddress': current === 1 ? animation.userAddress : '',
      'animation.userJob': current === 1 ? animation.userJob : '',
      'animation.aboutHeadTitle': current === 1 ? animation.headTitle : '',
      'animation.aboutHeadSplit': current === 1 ? animation.headSplit : '',
      'animation.aboutTitleImg': current === 1 ? animation.titleImg : '',
      'animation.profileHeadTitle': current === 2 ? animation.headTitle : '',
      'animation.profileHeadSplit': current === 2 ? animation.headSplit : '',
      'animation.profileTitleImg': current === 2 ? animation.titleImg : '',
      'animation.profileContent': current === 2 ? animation.profileContent : '',
      'animation.eduHeadTitle': current === 3 ? animation.headTitle : '',
      'animation.eduHeadSplit': current === 3 ? animation.headSplit : '',
      'animation.eduTitleImg': current === 3 ? animation.titleImg : '',
      'animation.eduTimelinePoint': current === 3 ? animation.timelinePoint : '',
      'animation.eduTimelinePeriod': current === 3 ? animation.timelinePeriod : '',
      'animation.eduTimelineInfo': current === 3 ? animation.timelineInfo : '',
      'animation.eduTimelineLine': current === 3 ? animation.timelineLine : '',
      'animation.jobHeadTitle': current === 4 ? animation.headTitle : '',
      'animation.jobHeadSplit': current === 4 ? animation.headSplit : '',
      'animation.jobTitleImg': current === 4 ? animation.titleImg : '',
      'animation.jobTimelinePoint': current === 4 ? animation.timelinePoint : '',
      'animation.jobTimelinePeriod': current === 4 ? animation.timelinePeriod : '',
      'animation.jobTimelineInfo': current === 4 ? animation.timelineInfo : '',
      'animation.jobTimelineLine': current === 4 ? animation.timelineLine : '',
      'animation.projectHeadTitle': current === 5 ? animation.headTitle : '',
      'animation.projectHeadSplit': current === 5 ? animation.headSplit : '',
      'animation.projectTitleImg': current === 5 ? animation.titleImg : '',
      'animation.projectTimelinePoint': current === 5 ? animation.timelinePoint : '',
      'animation.projectTimelinePeriod': current === 5 ? animation.timelinePeriod : '',
      'animation.projectTimelineInfo': current === 5 ? animation.timelineInfo : '',
      'animation.projectTimelineLine': current === 5 ? animation.timelineLine : '',
      'animation.skillHeadTitle': current === 6 ? animation.headTitle : '',
      'animation.skillHeadSplit': current === 6 ? animation.headSplit : '',
      'animation.skillTitleImg': current === 6 ? animation.titleImg : '',
      'animation.worksHeadTitle': current === 7 ? animation.headTitle : '',
      'animation.worksHeadSplit': current === 7 ? animation.headSplit : '',
      'animation.worksTitleImg': current === 7 ? animation.titleImg : '',
      'animation.worksImg': current === 7 ? animation.worksImg : '',
      'animation.contactHeadTitle': current === 8 ? animation.headTitle : '',
      'animation.contactHeadSplit': current === 8 ? animation.headSplit : '',
      'animation.contactTitleImg': current === 8 ? animation.titleImg : '',
      'animation.qrcode': current === 8 ? animation.qrcode : '',
      'animation.callme': current === 8 ? animation.callme : '',
      'animation.contactTitle': current === 8 ? animation.contactTitle : '',
      'animation.contactValue': current === 8 ? animation.contactValue : ''
    })
    this.setProgressAnimation(current)
  },
  setProgressAnimation: function(current) {
    if (current === 6) {
      for (let i of this.data.timeouts) {
        clearTimeout(i)
      }
      const skills = this.data.resume.skills
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
    }
  },
  bindchange: function(e) {
    this.setData({
      current: e.detail.current,
      skills: []
    })
    this.setAnimation()
  },
  previewImg: function(e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.resume.works.map(n => imageCDN + n),
      success: res => {
        console.log(res)
      }
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
    wx.downloadFile({
      url: this.data.image.qrcode,
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