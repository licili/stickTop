(function () {
  //单选元素
  function $(selector) {
    return document.querySelector(selector)
  }
  //多选元素
  function $$(selector) {
    return document.querySelectorAll(selector)
  }

  //获取所有的内容块元素 class="jh-container"
  let jhContainerList = $$('.jh-container');

  //获取所有的内容块的标题元素 class="jh-title"
  let jhTitleList = $$('.container .jh-title');

  //获取每个内容块标题元素和父元素的相关属性
  jhTitleList.forEach(function (item, i) {
    var pRect = item.parentNode.getBoundingClientRect();
    var cRect = item.getBoundingClientRect();
    var ch = cRect.height; //标题元素的高度
    var ph = pRect.height; //父元素的高度
    var pt = pRect.top; //父元素距离浏览器顶部的距离
    var maxTop = ph - ch; //标题元素在父容器内 最高的top值
    item.setAttribute('data-max-top', maxTop);
    item.setAttribute('data-pt', pt);
    item.setAttribute('data-ph', ph);
    // i == 1 && console.log("标题高度: " + ch, "父元素高度: " + ph, "父元素TOP: " + pt, "父元素Bottom: " + pb, "标题最高Top: " + maxTop);
  });

  var curIndex = 0; //当前吸顶的标题元素下标

  //吸顶函数
  function fixedTop() {
    //滚动条滚动的距离
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;

    //如果滚动的距离大于该元素父容器的 top 值 ,则开始吸顶
    var v = scrollH - jhTitleList[curIndex].getAttribute('data-pt');
    var maxTop = jhTitleList[curIndex].getAttribute('data-max-top');
    var ph = jhTitleList[curIndex].getAttribute('data-ph');
    // console.log("滚动距离: " + v, )

    //如果差值<=0 则删除行间样式translateY , 并把 curIndex - 1
    //如果差值大于0 并且 小于最高的translateY值 则开始吸顶
    //如果差值大于最高的translateY值 并且小于等于 父元素的高度 则固定translateY = maxTop
    //如果差值大于父元素的高度 则 curIndex + 1
    if (v <= 0) {
      if (curIndex >= 1) {
        curIndex--;
      }
      //清除自己以及后面一个标题的translateY属性
      jhTitleList[curIndex].style.transform = '';
      jhTitleList[curIndex + 1].style.transform = '';
      // jhTitleList[curIndex + 1].style.top = '';
    } else if (v > 0 && v <= maxTop) {
      // jhTitleList[curIndex].style.top = v + 'px';
      jhTitleList[curIndex].style.transform = `translateY(${v}px)`;
    } else if (v > maxTop && v <= ph) {
      // jhTitleList[curIndex].style.top = maxTop + 'px';
      jhTitleList[curIndex].style.transform = `translateY(${maxTop}px)`;
    } else {
      curIndex++;
    }
  }
  //======================如果页面滚动到中间位置 , 然后刷新页面 吸顶失败  尝试解决该bug======================
  // //页面开始获取scrollH
  // var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
  // var totalTop = 0;
  // for (var i = 0; i < jhTitleList.length; i++) {
  //     totalTop += parseFloat(jhTitleList[i].getAttribute('data-ph'));
  //     if (scrollH < totalTop) {
  //         curIndex = i
  //         break;
  //     }
  // }
  // console.log("totalTop: " + totalTop, "当前index: " + i)
  //======================如果页面滚动到中间位置 , 然后刷新页面 吸顶失败  尝试解决该bug======================

  //滚动加载吸顶函数
  window.onscroll = fixedTop
})();

(function () {
  //单选元素
  function $(selector) {
    return document.querySelector(selector)
  }
  //多选元素
  function $$(selector) {
    return document.querySelectorAll(selector)
  }

  //获取所有的内容块元素 class="jh-container"
  let jhContainerList = $$('.jh-container');

  //获取所有的内容块的标题元素 class="jh-title"
  let jhTitleList = $$('.container .jh-title');

  //获取每个内容块标题元素和父元素的相关属性
  jhTitleList.forEach(function (item, i) {
    var pRect = item.parentNode.getBoundingClientRect();
    var cRect = item.getBoundingClientRect();
    var ch = cRect.height; //标题元素的高度
    var ph = pRect.height; //父元素的高度
    var pt = pRect.top; //父元素距离浏览器顶部的距离
    var maxTop = ph - ch; //标题元素在父容器内 最高的top值
    item.setAttribute('data-max-top', maxTop);
    item.setAttribute('data-pt', pt);
    item.setAttribute('data-ph', ph);
    // i == 1 && console.log("标题高度: " + ch, "父元素高度: " + ph, "父元素TOP: " + pt, "父元素Bottom: " + pb, "标题最高Top: " + maxTop);
  });

  var curIndex = 0; //当前吸顶的标题元素下标

  //吸顶函数
  function fixedTop() {
    //滚动条滚动的距离
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;

    //如果滚动的距离大于该元素父容器的 top 值 ,则开始吸顶
    var v = scrollH - jhTitleList[curIndex].getAttribute('data-pt');
    var maxTop = jhTitleList[curIndex].getAttribute('data-max-top');
    var ph = jhTitleList[curIndex].getAttribute('data-ph');
    // console.log("滚动距离: " + v, )

    //如果差值<=0 则删除行间样式translateY , 并把 curIndex - 1
    //如果差值大于0 并且 小于最高的translateY值 则开始吸顶
    //如果差值大于最高的translateY值 并且小于等于 父元素的高度 则固定translateY = maxTop
    //如果差值大于父元素的高度 则 curIndex + 1
    if (v <= 0) {
      if (curIndex >= 1) {
        curIndex--;
      }
      //清除自己以及后面一个标题的translateY属性
      jhTitleList[curIndex].style.transform = '';
      jhTitleList[curIndex + 1].style.transform = '';
      // jhTitleList[curIndex + 1].style.top = '';
    } else if (v > 0 && v <= maxTop) {
      // jhTitleList[curIndex].style.top = v + 'px';
      jhTitleList[curIndex].style.transform = `translateY(${v}px)`;
    } else if (v > maxTop && v <= ph) {
      // jhTitleList[curIndex].style.top = maxTop + 'px';
      jhTitleList[curIndex].style.transform = `translateY(${maxTop}px)`;
    } else {
      curIndex++;
    }
  }
  //======================如果页面滚动到中间位置 , 然后刷新页面 吸顶失败  尝试解决该bug======================
  // //页面开始获取scrollH
  // var scrollH = document.body.scrollTop || document.documentElement.scrollTop;
  // var totalTop = 0;
  // for (var i = 0; i < jhTitleList.length; i++) {
  //     totalTop += parseFloat(jhTitleList[i].getAttribute('data-ph'));
  //     if (scrollH < totalTop) {
  //         curIndex = i
  //         break;
  //     }
  // }
  // console.log("totalTop: " + totalTop, "当前index: " + i)
  //======================如果页面滚动到中间位置 , 然后刷新页面 吸顶失败  尝试解决该bug======================

  //滚动加载吸顶函数
  window.onscroll = fixedTop
})();