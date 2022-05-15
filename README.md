# copy-paste-chrome-extension

[谷歌扩展官方文档](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

### 文件架构

manifest.json是项目的配置文件

popup.html是扩展对应的弹窗页面

popup_script.js是控制用户在弹窗页面的行为

foreground.js是控制用户在浏览器页面的行为

background.js是后台文件

### 实现原理

#### 拓展弹窗与后台的通信

用户在拓展弹窗中选择搜索所用的浏览器，将浏览器的名称发送到后台保存，后台获取后生成对应的浏览器链接。扩展弹窗需要重新从后台获取浏览器名称，这样可以保证在切换页面时显示在弹窗的内容不会发生改变

#### 前端页面与后台的通信

前端通过监听copy事件并获取用户复制的词，获取到之后发送给后端，后端接收到之后会打开一个新的标签页面。

