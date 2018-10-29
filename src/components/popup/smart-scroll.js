function elemHasTarget(parent, child) {
  let target = child
  let has = false
  while (target.tagName !== 'HTML') {
    if (parent === target) {
      has = true
      break
    } else {
      target = target.parentNode
    }
  }
  return has
}

const base = {
  hasBind: false,
  wrapperElem: null,
  scrollElem: null,
  scrollRootSelector: '',
  scrollAble: false,
  wrapScrollTop: 0
}

function start(event) {
  const events = event.touches[0] || event

  if (!base.scrollElem) {
    base.scrollElem = document.querySelector(base.scrollRootSelector)
  }

  // 当前元素是滚动元素或子元素
  base.scrollAble = elemHasTarget(base.scrollElem, events.target)
}

function move(event) {
  // if (!base.scrollAble) {
  //   event.preventDefault()
  // }
  console.log(1)
  base.wrapperElem.scrollTop = base.wrapScrollTop
}

export default {
  on(wrapperElem, scrollRootSelector) {
    if (!scrollRootSelector || base.hasBind) {
      return
    }
    console.log('bind')
    wrapperElem.addEventListener('touchstart', start)
    wrapperElem.addEventListener('scroll', move)
    base.wrapperElem = wrapperElem
    base.scrollRootSelector = scrollRootSelector
    base.hasBind = true
    base.wrapScrollTop = wrapperElem.scrollTop
    console.log(base.wrapScrollTop)
  },
  off() {
    base.wrapperElem.removeEventListener('touchstart', start)
    base.wrapperElem.removeEventListener('touchmove', move)
  }
}
