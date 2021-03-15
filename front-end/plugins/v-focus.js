import Vue from 'vue'

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted (el) {
    // Focus the element
    el.focus()
  }
})
