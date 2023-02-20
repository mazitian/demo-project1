var controlEl = document.querySelector(".tab_control")
var activeEl = document.querySelector(".active")
controlEl.onmouseover = function(event) {
  var item = event.target
  if (item.classList.contains("tab_control_item")) {
    activeEl.classList.remove("active")
    item.classList.add("active")
    activeEl = item
  }
}