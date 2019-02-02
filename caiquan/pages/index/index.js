//share.js
//分享页
const defaultTriggerLeft = '80rpx'

var app = getApp()
Page({
  data: {
    triggerLeft: defaultTriggerLeft,
    windowHeight: 0,
    windowWidth: 0
  },
  onLoad() {
    this.getWindowInfo()
  },
  getWindowInfo() {
    const _this = this
    wx.getSystemInfo({
      success(res) {
        const { windowWidth, windowHeight } = res
        _this.setData({
          windowWidth,
          windowHeight
        })
      }
    }) 
  },
  //前往游戏界面
  gotoGame: function () {
    wx.navigateTo({
      url: '../game/game'
    })
  },
  //事件处理函数
  handleTouchstart(e) {
    const { changedTouches = [], timeStamp } = e
    const { clientX, clientY } = changedTouches[0]
    this.setData({ touchBeginX: clientX, touchBeginY: clientY })
  },
  handleTouchend(e) {
    const { windowWidth }  = this.data
    const { changedTouches = [] } = e
    const { clientX } = changedTouches[0]
    if (clientX >= windowWidth - 130) {
      this.gotoGame()
    } else {
      this.setData({ triggerLeft: defaultTriggerLeft })
    }
  },
  handleTouchmove(e) {
    const { changedTouches = [] } = e
    const { clientX, clientY } = changedTouches[0]
    console.log(clientX)
    this.setData({ triggerLeft: clientX })
  },
})

