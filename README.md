# actionSheet


## 概述

actionSheet ，方便用户事件选择 以下为 actionSheet 相关的 API

## 项目地址
[github](https://github.com/weex-plugins/weex-actionSheet)

## API
### `create(options, callback[options])`

调用单选 actionSheet

#### 参数

- `options {Object}`：调用单选 ActionSheet 选项
  - `title {string}`：ActionSheet 名称
  - `message {string}`：ActionSheet 提示内容
  - `items {array}`：ActionSheet 数据源
      - `message {string}`：提示内容
      - `type {number}`：button类型，0:普通类型，1：取消类型，2：警告类型，当type为1的时候，默认在最下面，与其他的分开，最多只能有一个type为1的类型

- `callback {function (ret)}`：执行完读取操作后的回调函数。`ret {Object}` 为 `callback` 函数的参数，有两个属性：
  - `result {string}`：结果三种类型 `success`, `cancel`, `error`
  - `data {Object}`：选择的结果。
     - `index {number}`：选中的项
     - `message`：选中的内容

## 平台
ios：齐山(完成),h5:拈笑(完成),android(完成)

#### 示例

```html
<template>
  <scroller>
    <wxc-panel title="action module" type="primary">
      <text style="margin-bottom: 20px;">action value: {{value}}</text>
      <wxc-button type="primary" onclick="{{createAction}}" value="create action" style="margin-bottom: 20px;"></wxc-button>
    </wxc-panel>

  </scroller>
</template>

<style>
  .input {
    font-size: 60px;
    height: 80px;
    width: 400px;
  }
</style>

<script>
  require('weex-components');
  module.exports = {
    data: {
      value: '',
      index: 0,
      txtChange: ''
    },
    methods: {
      createAction: function() {
        var actionSheet = require('@weex-module/actionSheet');
        var items = [];
        for ( var i=0; i< 3; i++) {
          var item = {};
          if(i == 0)
          {
            item = {'type':0,'message':'确认'};
          }
          if(i == 1)
          {
            item = {'type':1,'message':'取消'};
          }
          if(i == 2)
          {
            item = {'type':2,'message':'删除'};
          }
          items.push(item);
        }
        var self = this;
        actionSheet.create({
          'items':items,
          'index':self.index,
          'title':'提示',
          'message':'欢迎使用weex第三方市场'
        },function (ret) {
          var result = ret.result;
          if(result == 'success')
          {
            self.value = ret.data.message;
            self.index = ret.data.index;
          }
        });

      },
      onchange: function(event) {
        this.txtChange = event.value;
        console.log('onchange', event.value);
      }
    }
  }
</script>
```

[Have a try](http://dotwe.org/c3856e6035fce2f8511a021a5360d3da)

#### demo
![action demo](./doc/1.gif)