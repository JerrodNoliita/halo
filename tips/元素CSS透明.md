# 元素CSS透明

## RGBa

```css

.alpha60 { /* Fallback for web browsers that doesn't support RGBa */ background: rgb(0, 0, 0); /* RGBa with 0.6 opacity */ background: rgba(0, 0, 0, 0.6); }

```
IE9及其以上浏览器支持。

## filter

```css

.alpha60 {  
/* For IE 5.5 - 7*/ 
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000); 
/* For IE 8*/ 
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)"; 
}

```

## opacity

```css

filter:alpha(opacity=50); -moz-opacity:0.50; opacity:0.50;

```

IE9及其以上浏览器支持。

## 问题

父元素设置opacity变透明，子元素也会变为透明。
IE浏览器，将子元素设置为绝对定位或相对定位。
非IE浏览器，父元素使用RGBa来实现透明，不会影响子元素。



