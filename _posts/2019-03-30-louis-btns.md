---
layout: post
title: "按钮样式小结"
categories: css
tags: 
  - 按钮样式
---


<link href="/css/ls-btns.css" rel="stylesheet" type="text/css">

```html
<!-- 引入 ls-btns.css 样式 -->
<link href="/css/ls-btns.css" rel="stylesheet" type="text/css">
```

## 圆润阴影按钮

<div class="a-5">
	<a class="ls-btn-1 ">我是</a>
	<a class="ls-btn-1 ls-btn-bg-blue ls-btn-shadow-blue">这么胖嘟嘟的</a>
	<a class="ls-btn-1 ls-btn-bg-red ls-btn-shadow-red">是不是</a>
	<a class="ls-btn-1 ls-btn-bg-orange ls-btn-shadow-orange">好阔爱呀！</a>
	<a class="ls-btn-1 ls-btn-bg-green ls-btn-shadow-green">嗯，是滴</a>
</div>


以蓝色背景的按钮为例，以下是按钮对应的html代码和css代码


```html
<a class="ls-btn-1 ls-btn-bg-blue ls-btn-shadow-blue">这么胖嘟嘟的</a>
```



```css
/* 类型1： 圆润阴影按钮 */
.ls-btn-1 {
	transition: all .2s;    
	margin-bottom: 5px;
	display: inline-block;
	white-space: nowrap;
	cursor: pointer;
	padding: 10px 20px;
	border-radius: 5px;
	border: 1px solid rgba(222,222,222,1);
	background: rgba(222,222,222,1);
	color: #111;
	box-shadow: 0px 0px 5px rgba(222,222,222,1);
}
.ls-btn-1:hover {
	border: 1px solid rgba(222,222,222,0.8);
	background: rgba(222,222,222,0.8);
	box-shadow: 0px 0px 20px rgba(222,222,222,1);
	color: #222;
}
/* 蓝色背景 */
.ls-btn-bg-blue {
	border: 1px solid rgba(42,183,210,1);
	background: rgba(42,183,210,1);
	color: white;
}
.ls-btn-bg-blue:hover{
	border: 1px solid transparent;
	background: rgba(42,183,210,0.8);
	color: white;
}
/* 蓝色阴影 */
.ls-btn-shadow-blue {
	box-shadow: 0px 0px 5px rgba(42,183,210,1);
}
.ls-btn-shadow-blue:hover {
	box-shadow: 0px 0px 20px rgba(42,183,210,1);
}

```

其中，```ls-btn-1```是基础样式类，```ls-btn-bg-blue```是背景样式类，```ls-btn-shadow-blue```是阴影样式类，背景和阴影样式最后的颜色单词可以替换为对应颜色的类名。这三种类名，在使用时需注意调用的顺序，基础样式需在首位，背景其次，最后是阴影样式。


## 圆角扁平按钮


<div class="a-5">
	<a class="ls-btn-2 ">我是</a>
	<a class="ls-btn-2 ls-btn-bd-blue">扁扁</a>
	<a class="ls-btn-2 ls-btn-bg-red">圆圆的</a>
	<a class="ls-btn-2 ls-btn-bd-orange">嗯嗯</a>
	<a class="ls-btn-2 ls-btn-bg-green">还行吧</a>
</div>

还是以蓝色按钮为例

```html
<a class="ls-btn-2 ls-btn-bd-blue">扁扁</a>
```

```css
/* 类型2： 圆角扁平按钮 */
.ls-btn-2{
    transition: all .2s;    
    margin-bottom: 5px;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    padding: 5px 100px;
    border-radius: 18px;
    border: 1px solid rgba(222,222,222,1);
    background: transparent;
    color: rgba(222,222,222,1);
}
.ls-btn-2:hover {
    background: rgba(222,222,222,1);
    color: #111;
}
/* 蓝色边框 */
.ls-btn-bd-blue {
    border: 1px solid rgba(42,183,210,1);
    color: rgba(42,183,210,1);
    background: transparent;
}
.ls-btn-bd-blue:hover{
    border: 1px solid transparent;
    background: rgba(42,183,210,0.8);
    color: white;
}
```
