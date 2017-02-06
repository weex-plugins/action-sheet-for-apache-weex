// weex-actionSheet-web
import VueActionSheet from './vue/action-sheet.vue';
import meta from './lib/meta';
import vendor from './lib/vendor';


const ActionSheetConstructor = Vue.extend(VueActionSheet);

const actionSheet = {
  create(options, callbackID) {
    const defaultOPtions = {
      title: '提示',
      message: '',
      items: [],
      callback: function () {},
      hasCancel: true,
    };

    options = Object.assign({},defaultOPtions,options);
    if(options.items.length > 1) {
      options.hasCancel = vendor.findCancel(options.items); 
      options.items = vendor.filterData(options.items);
    }
    if (typeof callbackID === 'function') {
      const self = this;
      options.callback = function(res) {
        self.sender.performCallback(callbackID, res);
      };  
    }
    console.log(options.items);
    const vueActionSheetInstance = new ActionSheetConstructor({
      el: document.createElement('div'),
      data() {
        return options
      }
    });
    document.body.appendChild(vueActionSheetInstance.$el);
  }
}

function init (weex) {
  weex.registerApiModule('actionSheet', actionSheet, meta);
}

export default {
  init
};
