### window之backgroundColor

 1. 问题： window设置为backgroundColor后，然后enablePullDownRefresh之后，
    在ios上表现正常，在android上整个页面背景都被渲染了
    
 2. 解决方法：在wxss文件中设置 page{background-color:xxx}
 
### window之颜色设置

  1. 设置window的navigationBarBackgroundColor和backgroundColor
  用的颜色只能是HexColor(十六进制颜色)，否则会出现兼容问题
  
###  选项卡之使用swiper和textarea的bug

  1. 利用swiper实现选项卡功能，有两个缺点
  
     1. swiper元素无法自适应高度，如果遇到动态列表，则swiper高度不够，会把列表内容挡住，需要在js动态设置swiper高度，但是不精确
     
     2. textarea是原生组件，在swiper中使用textarea会出现bug
     
### wx.navigateTo的bug

  1. 我当前页面，有两个可以点击进入下一层的按钮，都用了wx.navigateTo,然后里面的二级页面，底部有按钮，点击可以返回第一级页面，
  
     然后反复点进去，点出来，就会卡住，点不进去了
     
     