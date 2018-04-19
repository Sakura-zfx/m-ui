let startY

export function handleMoveStart(e) {
  startY = e.touches[0].clientY
}

export function handleMove(e, cb) {
  const diffY = e.touches[0].clientY - startY
  if (diffY < 0) {
    cb && cb()
  }
}
