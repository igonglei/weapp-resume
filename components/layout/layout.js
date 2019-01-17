// components/layout.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showHead: {
      type: Boolean,
      value: true
    },
    showTitleImg: {
      type: Boolean,
      value: true
    },
    headTitle: {
      type: String,
      value: ''
    },
    headTitleAni: {
      type: String,
      value: ''
    },
    headSplitAni: {
      type: String,
      value: ''
    },
    titleImgAni: {
      type: String,
      value: ''
    },
    titleImgSrc: {
      type: String,
      value: ''
    }
  }
})