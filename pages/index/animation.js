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

export const initAnimation = {
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
  works1HeadTitle: '',
  works1HeadSplit: '',
  works1TitleImg: '',
  works1Img: '',
  contactHeadTitle: '',
  contactHeadSplit: '',
  contactTitleImg: '',
  qrcode: '',
  callme: '',
  contactTitle: '',
  contactValue: ''
}

export function getAnimation(curPage) {
  let curAnimation = {}
  switch (curPage) {
    case 'cover':
      curAnimation = {
        'animation.startImg': animation.startImg,
        'animation.startText': animation.startText
      }
      break;
    case 'about':
      curAnimation = {
        'animation.avatar': animation.avatar,
        'animation.avatarCircle': animation.avatarCircle,
        'animation.userName': animation.userName,
        'animation.userEdu': animation.userEdu,
        'animation.userWorkYear': animation.userWorkYear,
        'animation.userAddress': animation.userAddress,
        'animation.userJob': animation.userJob,
        'animation.aboutHeadTitle': animation.headTitle,
        'animation.aboutHeadSplit': animation.headSplit,
        'animation.aboutTitleImg': animation.titleImg,
      }
      break;
    case 'profile':
      curAnimation = {
        'animation.profileHeadTitle': animation.headTitle,
        'animation.profileHeadSplit': animation.headSplit,
        'animation.profileTitleImg': animation.titleImg,
        'animation.profileContent': animation.profileContent,
      }
      break;
    case 'education':
      curAnimation = {
        'animation.eduHeadTitle': animation.headTitle,
        'animation.eduHeadSplit': animation.headSplit,
        'animation.eduTitleImg': animation.titleImg,
        'animation.eduTimelinePoint': animation.timelinePoint,
        'animation.eduTimelinePeriod': animation.timelinePeriod,
        'animation.eduTimelineInfo': animation.timelineInfo,
        'animation.eduTimelineLine': animation.timelineLine,
      }
      break;
    case 'job':
      curAnimation = {
        'animation.jobHeadTitle': animation.headTitle,
        'animation.jobHeadSplit': animation.headSplit,
        'animation.jobTitleImg': animation.titleImg,
        'animation.jobTimelinePoint': animation.timelinePoint,
        'animation.jobTimelinePeriod': animation.timelinePeriod,
        'animation.jobTimelineInfo': animation.timelineInfo,
        'animation.jobTimelineLine': animation.timelineLine,
      }
      break;
    case 'project':
      curAnimation = {
        'animation.projectHeadTitle': animation.headTitle,
        'animation.projectHeadSplit': animation.headSplit,
        'animation.projectTitleImg': animation.titleImg,
        'animation.projectTimelinePoint': animation.timelinePoint,
        'animation.projectTimelinePeriod': animation.timelinePeriod,
        'animation.projectTimelineInfo': animation.timelineInfo,
        'animation.projectTimelineLine': animation.timelineLine,
      }
      break;
    case 'skill':
      curAnimation = {
        'animation.skillHeadTitle': animation.headTitle,
        'animation.skillHeadSplit': animation.headSplit,
        'animation.skillTitleImg': animation.titleImg,
      }
      break;
    case 'works':
      curAnimation = {
        'animation.worksHeadTitle': animation.headTitle,
        'animation.worksHeadSplit': animation.headSplit,
        'animation.worksTitleImg': animation.titleImg,
        'animation.worksImg': animation.worksImg,
      }
      break;
    case 'works1':
      curAnimation = {
        'animation.works1HeadTitle': animation.headTitle,
        'animation.works1HeadSplit': animation.headSplit,
        'animation.works1TitleImg': animation.titleImg,
        'animation.works1Img': animation.worksImg,
      }
      break;
    case 'contact':
      curAnimation = {
        'animation.contactHeadTitle': animation.headTitle,
        'animation.contactHeadSplit': animation.headSplit,
        'animation.contactTitleImg': animation.titleImg,
        'animation.qrcode': animation.qrcode,
        'animation.callme': animation.callme,
        'animation.contactTitle': animation.contactTitle,
        'animation.contactValue': animation.contactValue
      }
      break;
  }
  return curAnimation
}