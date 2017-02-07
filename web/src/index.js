// weex-actionSheet-web
//import VueActionSheet from './vue/action-sheet.vue';
import WeexActionSheet from './we/action-sheet';
import meta from './lib/meta';
import vendor from './lib/vendor';
//const ActionSheetConstructor = Vue.extend(VueActionSheet);

const actionSheet = {
  create(options, callbackID) {
    const defaultOPtions = {
      title: '提示',
      message: '',
      items: [],
      callback: function () {},
      hasCancel: true,
    };

    const opts = Object.assign({}, defaultOPtions, options);
    if (opts.items.length > 1) {
      opts.hasCancel = vendor.findCancel(options.items);
      opts.items = vendor.filterData(options.items);
    }
    if (typeof callbackID === 'function') {
      const self = this;
      opts.callback = function (res) {
        self.sender.performCallback(callbackID, res);
      };
    }
    const vueActionSheetInstance = new WeexActionSheet({
      el: document.createElement('div'),
      data() {
        return opts;
      }
    });
    document.body.appendChild(vueActionSheetInstance.$el);
  }
};

function init(weex) {
  weex.registerApiModule('actionSheet', actionSheet, meta);
}

module.exports = {
  init
};
