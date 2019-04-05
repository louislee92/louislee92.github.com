---
layout: post
title: "按钮样式小结"
categories: css
tags: 
  - 按钮样式
---


<link href="/css/louis-ui.css" rel="stylesheet" type="text/css">


> 按钮，是一种常用的控制电器元件，常用来接通或断开‘控制电路’（其中电流很小），从而达到控制电动机或其他电气设备运行目的的一种开关。
> --- [百度百科](https://baike.baidu.com/item/%E6%8C%89%E9%92%AE/7194682?fr=aladdin)

同样在网页中，按钮也是用来触发页面跳转、界面变换、数据请求等事件的开关。即通过设置样式和文字，让用户在对按钮做一些事件操作（比如悬停、单击等）的时候，就会感觉到这是一个按钮。并提示用户该按钮可以触发某种特定的事件，得到用户想要的结果。

<p style="text-align: center;font-weight:bold;font-size: 1.2rem;">按钮 = 文字 + 样式</p>


其中文字不仅仅代表单词、语句类似的语言，文字也可以是图标、图片等抽象的图形图像等；样式则是通过设置按钮的文字、背景、边框等属性，从而达到看起来是一个按钮的目的。

本文主要通过设置按钮的属性，从CSS的属性变换影响按钮样式的角度，来对按钮的样式做一个小结。从最基础的设置背景色和字体色，直到较为复杂的阴影、背景图片等设置，循序渐进地介绍如何通过操纵按钮的属性来变换按钮的样式。

## 一个简单按钮的诞生

我们可以通过设置背景色为白色，字体颜色为黑色，就这样一个简单的按钮就做好了。

<p style="text-align: center;">
	<a style="background: rgba(255,255,255,0.8);color: rgba(0,0,0,0.8)">我是简单按钮</a>
</p>

是不是感觉有点挤，那就再加些许```padding: 5px 20px;```

<p style="text-align: center;">
	<a style="background: rgba(255,255,255,0.8);color: rgba(0,0,0,0.8);padding: 5px 20px;">我是变胖了的简单按钮</a>
</p>

这样看起来正常一点，但是鼠标放上去没有任何样式变换，让人感觉不到这是一个按钮。那就再加一个悬停状态变换，即将鼠标放上去后，背景色和字体颜色有稍许变化。使用 ```a:hover{background: rgba(42,183,210,0.8);color: rgba(228,191,17,0.8);}``` 给这个按钮些许生机。

<style>.test1 a {background: rgba(255,255,255,0.8);color: rgba(0,0,0,0.8);padding: 5px 20px;} .test1 a:hover {background: rgba(42,183,210,0.8);color: rgba(255,255,255,0.8);}</style>
<p class="test1" style="text-align: center;">
	<a >我是会变色的简单按钮</a>
</p>

一个简单的按钮就这样做好了，可以看出来：
1. 首先给按钮设置背景色、以及适当的填充，使得在界面上可以看出来这是一个按钮；
2. 其次是改变悬停状态按钮的背景色、字体颜色，使得按钮更具有辨识度，进一步增加了用户的界面体验。




<p class="ls-hr"></p>

根据鼠标不同的操作方式，按钮也有着不同的事件状态。一般来说，按钮主要有四种状态：正常(normal)、悬停(hover)、聚焦(focus)、激活(active)。在CSS中，可以使用选择器和伪类选择器对不同的状态设置对应的属性，使得用户在不同状态下看到不同的界面效果。

下面首先从不同属性对按钮四种状态的影响，介绍基本的属性对按钮样式的设置。然后通过一些属性组合对按钮状态的影响，列举一些经典按钮样式。

## 按钮的一些基础属性

为了更方便地设置按钮样式，引入样式样式文件，<span class="ls-clr-blue">看下面 <i class="fa fa-level-down"></i></span> 下文中部分例子会将其css样式代码列出。

```html
<!-- 引入 louis-ui.css 样式 -->
<link href="/css/louis-ui.css" rel="stylesheet" type="text/css">
```

按钮可以设置背景、字体、边框、阴影等不同属性，得到不同的界面呈现效果。下面分别对每一种属性进行介绍。

### 背景(background)

最基本的属性设置便是设置按钮的颜色属性。可以设置颜色的属性有背景色、字体颜色、边框颜色、阴影颜色等。而且在```rgba```模式下，页面颜色有了质的飞跃，五彩斑斓的黑不再是遥不可及的梦想。


背景色```background```是最为常见的css属性了，先设置一个简单的蓝色背景按钮。并给这个按钮的四种状态设置不同的样式，这样就得到一个背景色变换按钮了。

<style>
	.test_1 {padding: 5px 10px;background: rgba(42,183,210,0.8);color:white;border: none;}
	.test_1:hover {padding: 5px 10px;background: rgba(42,183,210,1);color:white;}
	.test_1:focus {padding: 5px 10px;background: rgba(42,183,210,0.6);color:white;}
	.test_1:active {padding: 5px 10px;background: rgba(42,183,210,0.4);color:orange;}
</style>
<p>
	<a style="padding: 5px 10px;background: rgba(42,183,210,0.8);color:white;">蓝胖子</a>
	+ <a style="padding: 5px 10px;background: rgba(42,183,210,1);color:white;">悬停状态</a>
	+ <a style="padding: 5px 10px;background: rgba(42,183,210,0.4);color:orange;">激活状态</a>
	+ <a style="padding: 5px 10px;background: rgba(42,183,210,0.6);color:white;">聚焦状态</a>
	= <a href="javascript:;" class="test_1">结合后的蓝胖子</a>
</p>

```css
/* 结合后的蓝胖子css样式 */
<style>
	.test_1 {padding: 5px 10px;background: rgba(42,183,210,0.8);color:white;border: none;}
	.test_1:hover {padding: 5px 10px;background: rgba(42,183,210,1);color:white;}
	.test_1:focus {padding: 5px 10px;background: rgba(42,183,210,0.6);color:white;}
	.test_1:active {padding: 5px 10px;background: rgba(42,183,210,0.4);color:orange;}
</style>
```
<span class="ls-badge ls-bg-red">TIPS</span> :  需要注意的是，在设置四种状态属性的时候，顺序不同会导致某些状态的样式不能正常显示。例如，如果上述代码中聚焦样式与激活样式调换后，当鼠标按下后按钮的样式会处于聚焦状态，因为后面的样式会覆盖前面的。



### 字体

字体的属性有字体大小```font-size```，字体颜色```color```等。

属性```font-size```用来设置字体大小。

<style>
	.test_2 {padding: 5px 10px;color: white;font-size:12px;}
	.test_2:hover {padding: 5px 10px;font-size:14px;color: white;}
	.test_2:focus {padding: 5px 10px;font-size:18px;color: white;}
	.test_2:active {padding: 5px 10px;font-size:16px;color: white;}
</style>

<p>
	<a style="padding: 5px 10px;color: white;font-size:12px;">蓝胖子12px</a>
	+ <a style="ppadding: 5px 10px;font-size:14px;color: white;">悬停状态14px</a>
	+ <a style="padding: 5px 10px;font-size:16px;color: white;">激活状态16px</a>
	+ <a style="padding: 5px 10px;font-size:18px;color: white;">聚焦状态18px</a>
	= <a href="javascript:;" class="test_2">结合后的蓝胖子</a>
</p>


```css
/* 结合后的蓝胖子css样式 */
<style>
	.test_2 {padding: 5px 10px;color: white;font-size:12px;}
	.test_2:hover {padding: 5px 10px;font-size:14px;color: white;}
	.test_2:focus {padding: 5px 10px;font-size:18px;color: white;}
	.test_2:active {padding: 5px 10px;font-size:16px;color: white;}
</style>
```

属性```color```主要用来设置字体颜色。像背景色一样，可以通过改变字体的颜色，对应不同的按钮状态，
以达到让用户感知按钮的状态变化。

<style>
	.test_3 {padding: 5px 10px;color: white}
	.test_3:hover {padding: 5px 10px;color: rgba(42,183,210,1)}
	.test_3:focus {padding: 5px 10px;color: rgba(35,191,72,0.8)}
	.test_3:active {padding: 5px 10px;color: rgba(232,18,18,0.8)}
</style>

<p>
	<a style="padding: 5px 10px;color:white">蓝胖子</a>
	+ <a style="padding: 5px 10px;color: rgba(42,183,210,1)">悬停状态</a>
	+ <a style="padding: 5px 10px;color: rgba(232,18,18,0.8)">激活状态</a>
	+ <a style="padding: 5px 10px;color: rgba(35,191,72,0.8)">聚焦状态</a>
	= <a href="javascript:;" class="test_3">结合后的蓝胖子</a>
</p>


```css
/* 结合后的蓝胖子css样式 */
<style>
	.test_2 {padding: 5px 10px;color: white}
	.test_2:hover {padding: 5px 10px;color: rgba(42,183,210,1)}
	.test_2:focus {padding: 5px 10px;color: rgba(35,191,72,0.8)}
	.test_2:active {padding: 5px 10px;color: rgba(232,18,18,0.8)}
</style>
```



### 边框


属性```border```主要用来设置边框宽度、样式和颜色属性的。例如```border: 1px solid red```即设置宽度为1像素，颜色为红色的实线边框。



<style>
	.test_4 {padding: 5px 10px;border: 1px solid white;color:white}
	.test_4:hover {padding: 5px 10px;border: 1px solid rgba(42,183,210,1)}
	.test_4:focus {padding: 5px 10px;border: 1px solid rgba(35,191,72,0.8)}
	.test_4:active {padding: 5px 10px;border: 1px solid rgba(232,18,18,0.8)}
</style>

<p>
	<a style="padding: 5px 10px;border: 1px solid white;color:white">蓝胖子</a>
	+ <a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);color:white">悬停状态</a>
	+ <a style="padding: 5px 10px;border: 1px solid rgba(232,18,18,0.8);color:white">激活状态</a>
	+ <a style="padding: 5px 10px;border: 1px solid rgba(35,191,72,0.8);color:white">聚焦状态</a>
	= <a href="javascript:;" class="test_4">结合后的蓝胖子</a>
</p>


```css
/* 结合后的蓝胖子css样式 */
<style>
	.test_3 {padding: 5px 10px;border: 1px solid white;color:white}
	.test_3:hover {padding: 5px 10px;border: 1px solid rgba(42,183,210,1)}
	.test_3:focus {padding: 5px 10px;border: 1px solid rgba(35,191,72,0.8)}
	.test_3:active {padding: 5px 10px;border: 1px solid rgba(232,18,18,0.8)}
</style>
```

css3的```border-radius```属性可以实现圆角边框，如下面几个按钮。属性值可以是像素，也可以是百分比，下面的6、7和8按钮均设置的百分比。


<p>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);">蓝胖子1</a>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);border-radius: 3px;">蓝胖子2</a>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);border-radius: 8px;">蓝胖子3</a>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);border-radius: 10px;">蓝胖子4</a>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);border-radius: 15px;">蓝胖子5</a>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);border-radius: 50%;">蓝胖子6</a>
	<a style="padding: 5px 10px;border: 1px solid rgba(42,183,210,1);border-radius: 100%;">蓝胖子7</a>
	<a style="padding: 5px 15px;border: 1px solid rgba(42,183,210,1);border-radius: 100%;"></a>
</p>

<span class="ls-badge ls-bg-red">TIPS</span> : 需要注意的是，在对```border-radius```属性设置百分比时，50%是最大值。如果设置超过了50%，则浏览器会重新计算后重新，[W3C的重合曲线会使最终计算结果为50%](https://blog.csdn.net/ntoskiking/article/details/50960761)。





## 基础属性组合后得到的一些按钮样式

通过将背景、字体、边框等属性进行组合，可以得到一些令人惊艳的按钮样式。

<p class="a-5">
	<button class="ls-btn ls-btn-bg-white ls-btn-clr-black">我是</button>
	<button class="ls-btn ls-btn-bg-blue ls-btn-clr-white">这么扁扁的</button>
	<button class="ls-btn ls-btn-bg-red ls-btn-clr-white">是不是</button>
	<button class="ls-btn ls-btn-bg-orange ls-btn-clr-white">感觉</button>
	<button class="ls-btn ls-btn-bg-green ls-btn-clr-white">很舒服</button>
</p>


以蓝色背景的按钮为例，以下是按钮对应的html代码和css代码


```html
<a class="ls-btn ls-btn-bg-blue ls-btn-clr-white">这么扁扁的</a>
```



```css
/* 按钮基础样式 */
.ls-btn{
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    transition: all .2s;  
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 10px 20px;
}
/* 按钮背景颜色设置 */
.ls-btn-bg-blue:hover,.ls-btn-bg-blue:focus{background: rgba(42,183,210,1);}
.ls-btn-bg-blue,.ls-btn-bg-blue:active {background: rgba(42,183,210,0.8);}
/* 字体颜色设置 */
.ls-btn-clr-white:hover,.ls-btn-clr-white:focus{color: rgba(255,255,255,1);}
.ls-btn-clr-white,.ls-btn-clr-white:active {color: rgba(255,255,255,0.8);}
```

其中，```ls-btn```是基础样式类，```ls-btn-bg-blue```是背景样式类，```ls-btn-clr-white```是字体颜色样式类，背景和字体样式最后的颜色单词可以替换为对应颜色的类名。这三种类名，在使用时需注意调用的顺序，基础样式需在首位，背景其次，最后是字体颜色样式。

可以看出来，上述按钮正常(normal)和激活(active)状态使用了同样的样式，悬停(hover)和聚焦(focus)使用同样样式。聚焦伪类仅对支持或设置了```tabindex```属性的元素有效。而且，需要注意激活(active)样式需要在悬停(hover)之后。


以上仅仅使用了背景色和字体颜色属性，就制作出直角纯色的按钮。加上圆角边框后就得到了圆角纯色按钮。


<p class="a-5">
	<button class="ls-btn ls-btn-bdr ls-btn-bg-white ls-btn-clr-black">嗯嗯</button>
	<button class="ls-btn ls-btn-bdr ls-btn-bg-blue ls-btn-clr-white">圆角的</button>
	<button class="ls-btn ls-btn-bdr ls-btn-bg-red ls-btn-clr-white">按钮</button>
	<button class="ls-btn ls-btn-bdr ls-btn-bg-orange ls-btn-clr-white">感受下</button>
	<button class="ls-btn ls-btn-bdr ls-btn-bg-green ls-btn-clr-white"><i class="fa fa-heart-o"></i> 吧</button>
</p>

```html
<a class="ls-btn ls-btn-bdr ls-btn-bg-blue ls-btn-clr-white">这么胖嘟嘟的</a>
```

```css
/* 圆角样式 */
.ls-btn-bdr {border-radius: 100px;}
```

<span class="ls-badge ls-bg-red">TIPS</span> : 需要注意，```border-radius```单位为像素时，值如果大于高度的50%时，浏览器将重新计算为50%，所以可以得到左右两头为圆角的按钮。


同样，试一下边框和字体颜色组合后的效果吧


<p class="a-5">
	<button class="ls-btn ls-btn-bd-white ls-btn-clr-white">方方</button>
	<button class="ls-btn ls-btn-bd-blue ls-btn-clr-blue">正正</button>
	<button class="ls-btn ls-btn-bd-red ls-btn-clr-red">边线</button>
	<button class="ls-btn ls-btn-bd-orange ls-btn-clr-orange">分明</button>
	<button class="ls-btn ls-btn-bd-green ls-btn-clr-green"><i class="fa fa-heart"></i></button>
</p>

仅仅把之前的背景色和颜色类做了修改，就像下面代码这样
```html
<a class="ls-btn ls-btn-bdr ls-btn-bg-blue ls-btn-clr-white">这么胖嘟嘟的</a>
```


加上圆角再看下 :)


<p class="a-5">
	<button class="ls-btn ls-btn-bd-white ls-btn-bdr ls-btn-clr-white">我是</button>
	<button class="ls-btn ls-btn-bd-blue ls-btn-bdr ls-btn-clr-blue">圆角</button>
	<button class="ls-btn ls-btn-bd-red ls-btn-bdr ls-btn-clr-red">彩色</button>
	<button class="ls-btn ls-btn-bd-orange ls-btn-bdr ls-btn-clr-orange">边框</button>
	<button class="ls-btn ls-btn-bd-green ls-btn-bdr ls-btn-clr-green">按钮</button>
</p>
