function findLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) return node
  const children = node.childNodes
  for (let i = children.length - 1; i >= 0; i--) {
    const textNode = findLastTextNode(children[i])
    if (textNode !== null) return textNode
  }
  return null
}

export default function replaceCaret(el) {
  const target = findLastTextNode(el)
  console.log(target)
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === el

  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    const range = document.createRange()
    const sel = window.getSelection()
    range.setStart(target, target.nodeValue.length)
    range.collapse(true)
    sel.removeAllRanges()
    sel.addRange(range)
    if (el) el.focus()
  }
}
