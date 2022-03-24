const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add("fadeIn")
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(document.querySelector("div.picture2"))
