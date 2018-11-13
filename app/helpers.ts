export const bootstrap = (root: HTMLElement, ...elements: HTMLElement []):void => {
  elements.forEach(element => root.appendChild(element))
}