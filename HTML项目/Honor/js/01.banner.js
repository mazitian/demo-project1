    // var titleListEl = document.querySelector(".title-list")
    // var activeItemEl = document.querySelector(".active")
    // var imageListEl = document.querySelector(".image-list")
    // titleListEl.onmouseover = function(event) {
    //   var itemEl = event.target.parentElement
    //   if (itemEl.classList.contains("item")) {
    //     activeItemEl.classList.remove("active")
    //     itemEl.classList.add("active")
    //     activeItemEl = itemEl
    //   }
    //   for (var i = 0; i < titleListEl.children.length; i++) {
    //     if (titleListEl.children[i] === itemEl) {
    //       imageListEl.style.transform = `translateX(${-604 * i}px)`
    //       imageListEl.style.transition = `all 300ms ease`
    //     }
    //   }
    // }

    // var titleListEl = document.querySelector(".title-list")
    // var activeItemEl = document.querySelector(".active")
    // var imageListEl = document.querySelector(".image-list")
    // var currentIndex = 0
    // titleListEl.onmouseover = function(event) {
    //   var itemEl = event.target.parentElement
    //   if (!itemEl.classList.contains("item")) return
    //   activeItemEl.classList.remove("active")
    //   itemEl.classList.add("active")
    //   activeItemEl = itemEl
    //   var index = Array.from(titleListEl.children).findIndex(function(item) {
    //     return item ===itemEl
    //   })
    //   imageListEl.style.transform = `translateX(${-604 * index}px)`
    //   imageListEl.style.transition = `all 300ms ease`
    //   currentIndex = index
    // }
    // setInterval(function() {
    //   currentIndex++
    //   if (currentIndex === titleListEl.children.length) {
    //     currentIndex = 0
    //   }
    //   imageListEl.style.transform = `translateX(${-604 * currentIndex}px)`
    //   imageListEl.style.transition = `all 300ms ease`
    //   activeItemEl.classList.remove("active")
    //   var currentItemEl = titleListEl.children[currentIndex]
    //   currentItemEl.classList.add("active")
    //   activeItemEl = currentItemEl
    // }, 3000)

    // 重构
    var titleListEl = document.querySelector(".title-list")
    var imageListEl = document.querySelector(".image-list")
    var bannerEl = document.querySelector(".banner")
    var activeItemEl = document.querySelector(".active1")
    var currentIndex = 0
    var timerID = null
    titleListEl.onmouseover = function(event) {
      var itemEl = event.target.parentElement
      if (!itemEl.classList.contains("item")) return
      var index = Array.from(titleListEl.children).findIndex(function(item) {
        return item === itemEl
      })
      currentIndex = index
      swichBanner()
    }
    startTimer()
    bannerEl.onmouseenter = function() {
      clearInterval(timerID)
    }
    bannerEl.onmouseleave = function() {
      startTimer()
    }
    // 封装轮播函数
    function swichBanner() {
      imageListEl.style.transform = `translateX(${-604 * currentIndex}px)`
      imageListEl.style.transition = `all 300ms ease`
      activeItemEl.classList.remove("active1")
      var currentItemEl = titleListEl.children[currentIndex]
      currentItemEl.classList.add("active1")
      activeItemEl = currentItemEl
    }
    // 封装添加定时器函数
    function startTimer() {
      timerID = setInterval(function() {
        currentIndex++
        if (currentIndex === titleListEl.children.length) {
          currentIndex = 0
        }
        swichBanner()
      }, 3000)
    }