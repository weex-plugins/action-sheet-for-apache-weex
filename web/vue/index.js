// weex-actionSheet-web
import VueActionSheetConstructor from './vue/action-sheet.vue';
weex.registerModule('actionSheet', {
  create(options, callback) {
    const defaultOPtions = {
      title: '提示',
      message: '',
      items: [],
      callback: function() {}
    };
    
    options = Object.assign(options,defaultOPtions);
    if (typeof callback === 'function') {
      options.callback = callback;  
    }
    let vueActionSheetInstance = new VueActionSheetConstructor({
      el: document.createElement('div'),
      data: options;
    });
    vueActionSheetInstance.$appendTo(document.body);
  }
});
