const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("----------end----------") // we will get 'comment node'
console.log("First Element child of b is: ", b.firstElementChild) // we will get 'nav'
console.log("----------end----------")