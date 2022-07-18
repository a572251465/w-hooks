export const select = (
  element:
    | HTMLSelectElement
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLDivElement
    | HTMLSpanElement
): string => {
  let selectedText: string

  if (element.nodeName === 'SELECT') {
    element.focus()
    selectedText = (element as HTMLSelectElement).value
  } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
    const el = element as HTMLInputElement | HTMLTextAreaElement
    const isReadOnly = el.hasAttribute('readonly')
    if (!isReadOnly) el.setAttribute('readonly', '')
    el.select()
    el.setSelectionRange(0, el.value.length)
    if (!isReadOnly) el.removeAttribute('readonly')
    selectedText = el.value
  } else {
    const el = element as HTMLDivElement | HTMLSpanElement
    if (el.hasAttribute('contenteditable')) el.focus()
    const selection = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(el)
    selection!.removeAllRanges()
    selection!.addRange(range)

    selectedText = selection!.toString()
  }

  return selectedText
}
