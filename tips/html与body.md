#Html与Body

## 关于height:100%

- 父标签有高度可寻，就是向上遍历父标签要找到一个定值高度（body，html另外讨论），如果中途有个height为auto或是没有设置height属性，则高度百分比不起作用；

- 标签本身的属性，如果inline属性的标签，如果没有浮动，zoom，或是绝对定位之类属性是不支持百分比高度的，block或inline-block属性可以说是高度百分比起作用的前提条件之一吧。

## body和html的高度百分比

```css

html {
	height: 100%;
	weight: 100%;
}

body {
	height: 100%;
	weight: 100%;
}

```

默认状态下，body不是高度100%显示的，通过设置html来实现。

