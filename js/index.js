/*封装3个常用函数*/
var getClass = function(className){
    return document.getElementsByClassName(className);
};

var addClass = function(element, _className){
    var className = element.className.split(' ');
    var classNameMap = {};
    for (var i = 0; i < className.length; i++) {
        classNameMap[className[i]] = 1;
    }
    classNameMap[_className] = 1;

    className = [];
    for(i in classNameMap){
    className.push(i);
    }
    element.className = className.join(' ');
};

var removeClass = function(element, _className){
    var className = element.className.split(' ');
    var classNameMap = {};
    for (var i = 0; i < className.length; i++) {
        classNameMap[className[i]] = 1;
    }
    delete classNameMap[_className];
    className =[];
    for(i in classNameMap){
        className.push(i);
    }
    element.className =className.join(' ')
};

/*汇总需要添加新状态的类*/
var totalClass = {
    'header' : 1,
    'screen2__h1' : 1,
    'screen2__h3' : 1,
    'screen2__img-man' : 1,
    'screen3__h1' : 1,
    'screen3__h3' : 1,
    'screen3__img-construction' : 1,
    'screen3__ul' : 1,
    'screen4__h1' : 1,
    'screen4__h3' : 1,
    'screen4__ul' : 1,
    'screen5__h1' : 1,
    'screen5__h3' : 1,
    'screen5__img-brain' : 1,
    'aside__ul' : 1,
};


window.onload = function (){
    /*给初始状态添加对应类,同时载入第一屏的过渡效果*/
    for (i in totalClass){
        for (var j=0, len=getClass(i).length; j < len; j++){
            addClass(getClass(i)[j], i+'_status-init');
        }
    }
    addClass(getClass('screen1__h1')[0], 'screen1__h1_status-done');
    addClass(getClass('screen1__h3')[0], 'screen1__h3_status-done');
    /*onmouseover导航项红色活动条设置*/
    getClass('header')[0].onmouseout = function () {
        getClass('header__underline')[0].style.left = 0;
    }
    getClass('header__nav-item')[0].onmouseover=function () {
        getClass('header__underline')[0].style.left = (0*102)+'px';
    }
    getClass('header__nav-item')[1].onmouseover=function () {
        getClass('header__underline')[0].style.left = (1*102)+'px';
    }
    getClass('header__nav-item')[2].onmouseover=function () {
        getClass('header__underline')[0].style.left = (2*102)+'px';
    }
    getClass('header__nav-item')[3].onmouseover=function () {
        getClass('header__underline')[0].style.left = (3*102)+'px';
    }
    getClass('header__nav-item')[4].onmouseover=function () {
        getClass('header__underline')[0].style.left = (4*102)+'px';
    }
    /*onclick导航项与对应页面设置*/
    getClass('header__nav-item')[0].onclick=function () {
        document.body.scrollTop = 0;
    }
    getClass('header__nav-item')[1].onclick=function () {
        document.body.scrollTop = 640*1-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (1*102)+'px';
        }
    }
    getClass('header__nav-item')[2].onclick=function () {
        document.body.scrollTop = 640*2-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (2*102)+'px';
        }
    }
    getClass('header__nav-item')[3].onclick=function () {
        document.body.scrollTop = 640*3-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (3*102)+'px';
        }
    }
    getClass('header__nav-item')[4].onclick=function () {
        document.body.scrollTop = 640*4-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (4*102)+'px';
        }
    }
    /*onclick侧边栏滚动到对应页面*/
    getClass('aside__ul-li')[0].onclick =function () {
        document.body.scrollTop = 0;
    }
    getClass('aside__ul-li')[1].onclick =function () {
        document.body.scrollTop = 640*1-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (1*102)+'px';
        }
    }
    getClass('aside__ul-li')[2].onclick=function () {
        document.body.scrollTop = 640*2-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (2*102)+'px';
        }
    }
    getClass('aside__ul-li')[3].onclick=function () {
        document.body.scrollTop = 640*3-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (3*102)+'px';
        }
    }
    getClass('aside__ul-li')[4].onclick=function () {
        document.body.scrollTop = 640*4-60;
        getClass('header')[0].onmouseout = function () {
            getClass('header__underline')[0].style.left = (4*102)+'px';
        }
    }
};

/*滚动屏幕出现过渡和动画*/
window.onscroll = function(){
    var top  = document.body.scrollTop;
    if(top>60){
        addClass(getClass('header')[0], 'header_status-done');
        addClass(getClass('header__logo')[0], 'header__logo_status-done');
        addClass(getClass('header__nav-item')[0], 'header__nav-item_status-done');
        addClass(getClass('header__nav-item')[1], 'header__nav-item_status-done');
        addClass(getClass('header__nav-item')[2], 'header__nav-item_status-done');
        addClass(getClass('header__nav-item')[3], 'header__nav-item_status-done');
        addClass(getClass('header__nav-item')[4], 'header__nav-item_status-done');
    } else {
        removeClass(getClass('header')[0], 'header_status-done');
        removeClass(getClass('header__logo')[0], 'header__logo_status-done');
        removeClass(getClass('header__nav-item')[0], 'header__nav-item_status-done');
        removeClass(getClass('header__nav-item')[1], 'header__nav-item_status-done');
        removeClass(getClass('header__nav-item')[2], 'header__nav-item_status-done');
        removeClass(getClass('header__nav-item')[3], 'header__nav-item_status-done');
        removeClass(getClass('header__nav-item')[4], 'header__nav-item_status-done');
    }
    if(top>150){
        addClass(getClass('aside__ul')[0], 'aside__ul_status-done');
        getClass('header__underline')[0].style.left = (0*102)+'px';
    } else {
        removeClass(getClass('aside__ul')[0], 'aside__ul_status-done');
    }
    if(top>640*1-200){
    removeClass(getClass('screen2__h1')[0], 'screen2__h1_status-init');
    removeClass(getClass('screen2__h3')[0], 'screen2__h3_status-init');
    removeClass(getClass('screen2__img-man')[0], 'screen2__img-man_status-init');
    addClass(getClass('screen2__img-rocket')[0], 'screen2__img-rocket_status-done');
    getClass('header__underline')[0].style.left = (1*102)+'px';
    }
    if(top>640*2-200){
    removeClass(getClass('screen3__h1')[0], 'screen3__h1_status-init');
    removeClass(getClass('screen3__h3')[0], 'screen3__h3_status-init');
    removeClass(getClass('screen3__img-construction')[0], 'screen3__img-construction_status-init');
    removeClass(getClass('screen3__ul')[0], 'screen3__ul_status-init');
    getClass('header__underline')[0].style.left = (2*102)+'px';
    }
    if(top>640*3-200){
    removeClass(getClass('screen4__h1')[0], 'screen4__h1_status-init');
    removeClass(getClass('screen4__h3')[0], 'screen4__h3_status-init');
    removeClass(getClass('screen4__ul')[0], 'screen4__ul_status-init');
    getClass('header__underline')[0].style.left = (3*102)+'px';
    }
    if(top>640*4-500){
    removeClass(getClass('screen5__h1')[0], 'screen5__h1_status-init');
    removeClass(getClass('screen5__h3')[0], 'screen5__h3_status-init');
    removeClass(getClass('screen5__img-brain')[0], 'screen5__img-brain_status-init');
    getClass('header__underline')[0].style.left = (4*102)+'px';
    }
};

