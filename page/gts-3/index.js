const globalData = getApp()._options.globalData

function getResult(high) {  
  return Math.floor(Math.random() * high) + 1
}

Page({
  build() {

    hmUI.setStatusBarVisible(false)

    const strokeRectVertical = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 195,
      y: 0,
      w: 1,
      h: 450,
      radius: 0,
      line_width: 4,
      color: 0xffffff
    })

    const strokeRectHorizontal = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 0,
      y: 225,
      w: 390,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
    })

    const strokeRectW6 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 45,
      y: 110,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
    })

    const strokeRectW10 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 240,
      y: 110,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
    })

    const strokeRectW20 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 45,
      y: 335,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
    })

    const strokeRectW100 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 240,
      y: 335,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
    })

    const button = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 145,
      y: 195,
      w: 100,
      h: 60,
      radius: 30,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,
      text_size: 25,
      text: 'roll',
      click_func: (button_widget) => {

        textW6Result.setProperty(hmUI.prop.MORE, {
          x: 45,
          y: 115,
          w: 105,
          h: 36,
          text: getResult(6)
        })

        textW10Result.setProperty(hmUI.prop.MORE, {
          x: 240,
          y: 115,
          w: 105,
          h: 36,
          text: getResult(10)
        })

        textW20Result.setProperty(hmUI.prop.MORE, {
          x: 45,
          y: 340,
          w: 105,
          h: 36,
          text: getResult(20)
        })

        textW100Result.setProperty(hmUI.prop.MORE, {
          x: 240,
          y: 340,
          w: 105,
          h: 36,
          text: getResult(100)
        })
      }
    })

    const textW6 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 45,
      y: 64,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'D6'
    })

    const textW10 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 240,
      y: 64,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'D10'
    })

    const textW20 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 45,
      y: 289,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'D20'
    })

    const textW100 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 240,
      y: 289,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'D100'
    })

    const textW6Result = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 45,
      y: 115,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: getResult(6)
    })

    const textW10Result = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 240,
      y: 115,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: getResult(10)
    })

    const textW20Result = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 45,
      y: 340,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: getResult(20)
    })

    const textW100Result = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 240,
      y: 340,
      w: 105,
      h: 36,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: getResult(100)
    })
  },
  
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
})
