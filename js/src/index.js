

const WeexActionSheet = {
  create(options, callbackID) {

  }
};

if(window.Vue) {
  weex.registerModule('WeexActionSheet', WeexActionSheet);
}

function init(weex) {
  weex.registerApiModule('WeexActionSheet', WeexActionSheet, meta);
}

module.exports = {
  init
};
