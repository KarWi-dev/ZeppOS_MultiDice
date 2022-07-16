const globalData = getApp()._options.globalData

function getResult(w) {  
  return Math.floor(Math.random() * w) + 1
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
    
    //#######################################################################
    //#######################################################################

    const textW6Clicker = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 0,
      w: 195,
      h: 225,
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

    const strokeRectW6 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 45,
      y: 110,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
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

    textW6Clicker.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW6()     
    })

    textW6.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW6()     
    })

    strokeRectW6.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW6()     
    })

    textW6Result.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW6()    
    })

    function setPropertiesW6() {
      textW6Result.setProperty(hmUI.prop.MORE, {
        x: 45,
        y: 115,
        w: 105,
        h: 36,
        text: getResult(6)
      })
    }

    //#######################################################################
    //#######################################################################
    
    const textW10Clicker = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 195,
      y: 0,
      w: 195,
      h: 225,
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
    
    const strokeRectW10 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 240,
      y: 110,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
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

    textW10Clicker.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW10()     
    })

    textW10.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW10()     
    })

    strokeRectW10.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW10()    
    })

    textW10Result.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW10()    
    })

    function setPropertiesW10() {
      textW10Result.setProperty(hmUI.prop.MORE, {
        x: 240,
        y: 115,
        w: 105,
        h: 36,
        text: getResult(10)
      })
    }
    
    //#######################################################################
    //#######################################################################

    const textW20Clicker = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 225,
      w: 195,
      h: 225,
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

    const strokeRectW20 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 45,
      y: 335,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
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

    textW20Clicker.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW20()    
    })

    textW20.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW20()    
    })

    strokeRectW20.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW20()   
    })

    textW20Result.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW20()    
    })

    function setPropertiesW20() {
      textW20Result.setProperty(hmUI.prop.MORE, {
        x: 45,
        y: 340,
        w: 105,
        h: 36,
        text: getResult(20)
      })
    }
    
    //#######################################################################
    //#######################################################################

    const textW100Clicker = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 195,
      y: 225,
      w: 195,
      h: 225,
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

    const strokeRectW100 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 240,
      y: 335,
      w: 105,
      h: 1,
      radius: 0,
      line_width: 4,
      color: 0xffffff
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
        
    textW100Clicker.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW100()
    })

    textW100.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW100()
    })

    strokeRectW100.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW100()     
    })

    textW100Result.addEventListener(hmUI.event.CLICK_DOWN, function () {
      setPropertiesW100()   
    })

    function setPropertiesW100() {
      textW100Result.setProperty(hmUI.prop.MORE, {
        x: 240,
        y: 340,
        w: 105,
        h: 36,
        text: getResult(100)
      })
    }

    //#######################################################################
    //#######################################################################
    
    const button = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 145,
      y: 195,
      w: 100,
      h: 60,
      radius: 30,
      normal_color: 0x101820,
      press_color: 0xfeb4a8,
      text_size: 25,
      text: 'roll all',

      click_func: (button_widget) => {
        setPropertiesW6()
        setPropertiesW10()
        setPropertiesW20()
        setPropertiesW100()
      }
    })

  },
  
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},

})
