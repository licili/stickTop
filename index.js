function $ (selector) {return document.querySelector(selector)}
function $$ (selector) {return document.querySelectorAll(selector)}

(function () {
    // 获取容器
  let wrapper = $('.container');
  let oItem = $$('.container .jh-container');
  // 获取每个oItem的高度，以及title的高度

  // 一开始就计算出每个oItem的高度
  let arr = [], arr2 = [], arr3 = [];
  function computedHeight (container) {
    for (let i = 0; i < container.length; i++) {
      let item = container[i];
      // console.log('item的高度',item.offsetHeight);
      // console.log("item距离浏览器顶端的距离", item.offsetTop);
      // 算出内容的高度并加上item距离顶端的距离
      let contentH = item.querySelector('.jh-content').offsetHeight;
      let itemH = item.offsetHeight;
      arr.push(item.offsetTop)
      arr2.push(item.offsetTop + contentH)
      arr3.push(item.offsetTop +itemH);
      // console.log(arr);
    }
  }
  computedHeight(oItem)

  // 触顶函数
  /**
   * @param {HTMLDocument} container 触顶容器
   */
  let currentIndex;
  function stickyTop () {
    console.log(currentIndex);
    // 获取浏览器页面卷去的高度。
    let scrollTop = document.documentElement.scrollTop;


    for (let i = 0; i < arr.length; i++) {
      let title = oItem[i].querySelector('.jh-title');
      let content = oItem[i].querySelector('.jh-content');
      title.style.transform = ``;
      if (scrollTop > arr[i] && scrollTop < arr2[i]) {
        currentIndex = i;
        title.style.transform = `translateY(${scrollTop - arr[i]}px)`;

      }
      if (scrollTop > arr2[i] && scrollTop < arr3[i]) {
          title.style.transform = `translateY(${content.offsetHeight}px)`;
      }
    }
  }
  stickyTop()
  window.onscroll = function () {
    stickyTop()
  }
})()


