<template>
    <div class="conatiner">
      <text style="margin-bottom: 20px;">action value: {{value}}</text>
      <div @click="createAction" style="margin: 20px;padding:20px;background-color:#1ba1e2;color:#fff;"><text style="color:#fff">Create Action</text></div>
    </div>
</template>

<style>
  .container{
    flex: 1;
  }
</style>

<script>
  //require('weex-components');

  const actionSheet = weex.requireModule('actionSheet');
  module.exports = {
    data: {
      value: '',
      index: 0,
      txtChange: ''
    },
    methods: {
      createAction: function() {
        
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