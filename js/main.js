const dButtonContainer = document.querySelector(".btn-container")

const createDirectionalButton = (config, parrentElement) => {
  const finalConfig = {
    ...dBtnConfig,
    ...config
  }
  const {
    textContent,
    cursor,
    toDirection,
    active: { bgColor: activeBgColor, textColor: activeTextColor },
    inactive: { bgColor: inactiveBgColor, textColor: inactiveTextColor },
    width,
    height,
    fontSize,
    border,
    borderRadius,
    displayBlock,
    hoverAnimation,
    returnAnimation
  } = finalConfig

  const dbtnActiveContent = document.createElement("div")
  const dbtnInactiveContent = document.createElement("div")

  dbtnActiveContent.innerText = textContent
  dbtnInactiveContent.innerText = textContent

  const dbtnContainer = document.createElement("div")
  dbtnActiveContent.innerText = textContent
  dbtnContainer.appendChild(dbtnInactiveContent)
  dbtnContainer.appendChild(dbtnActiveContent)

  const dbtnEl = document.createElement("button")
  dbtnEl.appendChild(dbtnContainer)

  // adding classes
  dbtnActiveContent.className = "dbtn-content active"
  dbtnInactiveContent.className = "dbtn-content inactive"
  dbtnContainer.classList = ["dbtn-container"]
  dbtnContainer.classList.add(toDirection)
  dbtnEl.classList = ["dbtn"]

  // adding cursor:pointer according to config
  dbtnEl.style.cursor = cursor

  // painting colors according to config
  dbtnActiveContent.style.backgroundColor = activeBgColor
  dbtnActiveContent.style.color = activeTextColor
  dbtnInactiveContent.style.backgroundColor = inactiveBgColor
  dbtnInactiveContent.style.color = inactiveTextColor

  // adding width and height and font-size of a button

  dbtnEl.style.width = width + "px"
  dbtnEl.style.height = height + "px"
  dbtnEl.style.fontSize = fontSize + "px"

  // border and  border-radius
  dbtnEl.style.border = border
  dbtnEl.style.borderRadius = borderRadius

  // display
  dbtnEl.style.display = displayBlock ? "block" : "inline"

  // animation
  // -- main
  dbtnContainer.style.transitionDelay = returnAnimation.delay
  dbtnContainer.style.transitionDuration = returnAnimation.duration
  dbtnContainer.style.transitionTimingFunction = returnAnimation.timingFunction
  // -- hover

  // append to parentElement
  parrentElement.appendChild(dbtnEl)
}
