export const download = (url: string, filename: string): void => {
  const anchor = document.createElement('a')

  anchor.setAttribute('href', url)
  anchor.setAttribute('download', filename)

  document.body.appendChild(anchor).click()
  document.body.removeChild(anchor)
}