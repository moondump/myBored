
let draggables = document.getElementsByClassName('draggable')
for (let i = 0; i < draggables.length; i++) {
  let el = draggables[i]
  dragElement(el);
}

function dragElement(element, yInitialOffset) {
  console.log(element)
  let rect = element.getBoundingClientRect() 
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0

  let initialX = 0
  let initialY = 0
  let mouseDownX = 0
  let mouseDownY = 0

  // otherwise, move the DIV from anywhere inside the DIV:
  element.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    let rect = element.getBoundingClientRect() 

    initialX = element.offsetLeft
    initialY = element.offsetTop

    mouseDownX = e.clientX
    mouseDownY = e.clientY

    console.log('rect', rect.top, rect.left)
    console.log('offset', element.offsetTop, element.offsetLeft)
    console.log('mouse', e.clientX, e.clientY)

    element.style.top = initialY + 'px'
    element.style.left = initialX + 'px'

    element.style.position = 'absolute'

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    let newMouseDownX = e.clientX
    let newMouseDownY = e.clientY

    let mouseDx = newMouseDownX - mouseDownX
    let mouseDy = newMouseDownY - mouseDownY
    console.log('dxdy', mouseDx, mouseDy)
    console.log('addd', initialY + mouseDy)

    // set the element's new position:
    element.style.top = (initialY + mouseDy) + 'px'
    element.style.left = (initialX + mouseDx) + 'px'
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
