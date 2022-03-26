const element = document.querySelector(".picture2");
element.style.visibility = "visible";

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add('animate__animated','animate__fadeInLeftBig', 'animate__slower')
    }
  })
}

const options = {
    root: document.body,
    threshold: 0.000001
}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(document.querySelector(".picture2"))
