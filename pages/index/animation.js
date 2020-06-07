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

const getProjectAni = (no = '', isInit = false) => {
  const prefix = isInit ? '' : 'animation.'
  return {
    [`${prefix}project${no}HeadTitle`]: isInit ? '' : animation.headTitle,
    [`${prefix}project${no}HeadSplit`]: isInit ? '' : animation.headSplit,
    [`${prefix}project${no}TitleImg`]: isInit ? '' : animation.titleImg,
    [`${prefix}project${no}TimelinePoint`]: isInit ? '' : animation.timelinePoint,
    [`${prefix}project${no}TimelinePeriod`]: isInit ? '' : animation.timelinePeriod,
    [`${prefix}project${no}TimelineInfo`]: isInit ? '' : animation.timelineInfo,
    [`${prefix}project${no}TimelineLine`]: isInit ? '' : animation.timelineLine
  }
}

const getWorkAni = (no = '', isInit = false) => {
  const prefix = isInit ? '' : 'animation.'
  return {
    [`${prefix}works${no}HeadTitle`]: isInit ? '' : animation.headTitle,
    [`${prefix}works${no}HeadSplit`]: isInit ? '' : animation.headSplit,
    [`${prefix}works${no}TitleImg`]: isInit ? '' : animation.titleImg,
    [`${prefix}works${no}Img`]: isInit ? '' : animation.worksImg
  }
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
  ...getProjectAni('', true),
  ...getProjectAni(1, true),
  skillHeadTitle: '',
  skillHeadSplit: '',
  skillTitleImg: '',
  ...getWorkAni('', true),
  ...getWorkAni(1, true),
  ...getWorkAni(2, true),
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
      curAnimation = getProjectAni()
      break;
    case 'project1':
      curAnimation = getProjectAni(1)
      break;
    case 'skill':
      curAnimation = {
        'animation.skillHeadTitle': animation.headTitle,
        'animation.skillHeadSplit': animation.headSplit,
        'animation.skillTitleImg': animation.titleImg,
      }
      break;
    case 'works':
      curAnimation = getWorkAni()
      break;
    case 'works1':
      curAnimation = getWorkAni(1)
      break;
    case 'works2':
      curAnimation = getWorkAni(2)
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