//定义全局 命名空间
var GLOBAL = {};
GLOBAL.namespace = function (str) {
    var arr = str.split(".");
    var o = GLOBAL;
    var i = (arr[0] == "GLOBAL" ? 1 : 0);
    for (; i < arr.length; i++) {
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
};

$(function () {
    GLOBAL.DATEPICKER.initDatePicker();
    GLOBAL.TOASTR.initRedirectToastr();
    GLOBAL.TREETABLE.initTreeTable();
    GLOBAL.FORM.initResetBtn();
    GLOBAL.NAV.initNAVSelect();
    GLOBAL.NAV.initRememberStatus();
    GLOBAL.VALIDATE.changeLanguage();
    GLOBAL.VALIDATE.addMethod();
    GLOBAL.VALIDATE.init();
    GLOBAL.MAXLENGTH.init();
    GLOBAL.SELECT2.initSelect2();
});