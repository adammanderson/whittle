export default function getCursorPosition(el) {
  const isTargetFocused = document.activeElement === el
  const selection = window.getSelection()

  if (isTargetFocused) {
    return selection.baseOffset
  }
  return 0
}
