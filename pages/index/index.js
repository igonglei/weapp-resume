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
  timelineLine: 'timeline-line-ani'
}

//获取应用实例
const app = getApp()

Page({
  data: {
    resume: {},
    avatar: app.globalData.avatar,
    image: {
      start: `${imageCDN}resume.png`,
      about: `${imageCDN}about.png`,
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
      jobHeadTitle: '',
      jobHeadSplit: '',
      jobTitleImg: '',
      skillHeadTitle: '',
      skillHeadSplit: '',
      skillTitleImg: '',
      worksHeadTitle: '',
      worksHeadSplit: '',
      worksTitleImg: '',
      contactHeadTitle: '',
      contactHeadSplit: '',
      contactTitleImg: '',
      eduTimelinePoint: '',
      eduTimelinePeriod: '',
      eduTimelineInfo: '',
      eduTimelineLine: '',
      jobTimelinePoint: '',
      jobTimelinePeriod: '',
      jobTimelineInfo: '',
      jobTimelineLine: ''
    },
    current: 5,
    skills: []
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
    this.setAnimation(-1)
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
      'animation.skillHeadTitle': current === 5 ? animation.headTitle : '',
      'animation.skillHeadSplit': current === 5 ? animation.headSplit : '',
      'animation.skillTitleImg': current === 5 ? animation.titleImg : '',
      'animation.worksHeadTitle': current === 6 ? animation.headTitle : '',
      'animation.worksHeadSplit': current === 6 ? animation.headSplit : '',
      'animation.worksTitleImg': current === 6 ? animation.titleImg : '',
      'animation.contactHeadTitle': current === 7 ? animation.headTitle : '',
      'animation.contactHeadSplit': current === 7 ? animation.headSplit : '',
      'animation.contactTitleImg': current === 7 ? animation.titleImg : ''
    })
    this.setProgressAnimation(current)
  },
  setProgressAnimation: function(current) {
    if (current === 5) {
      const skills = this.data.resume.skills
      for (let i = 0; i < skills.length; i++) {
        setTimeout(() => {
          this.setData({
            skills: this.data.skills.concat([skills[i]])
          })
        }, 1300 + i * 800)
      }
    } else {
      this.setData({
        skills: []
      })
    }
  },
  bindchange: function(e) {
    this.setData({
      current: e.detail.current
    })
    this.setAnimation()
  }
})