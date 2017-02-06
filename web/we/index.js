import ActionSheetContructor from './we/action-sheet.we';
const actionSheet = {
  create(options, callbackId) {
    const defaultOPtions = {
      title: '提示',
      message: '',
      items: [],
      callback: function () {}
    };
    options = Object.assign(options, defaultOPtions);
    if (typeof callbackId !== 'undefined') {
      options.callback = callback;
    }
    const inst = new ActionSheetContructor({
      el: document.createElement('div'),
      data: options
    });
    document.body.appendChild(inst);
  },

};



export default {
  init(Weex) {
    // 注册这个模块，最后一个参数是模块的元信息.
    Weex.registerApiModule('actionSheet', actionSheet, meta);
  }
};
