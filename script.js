const element = document.querySelector(".picture2");
element.style.visibility = "visible";

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add('animate__animated','animate__fadeIn', 'animate__delay-5s')
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(document.querySelector(".picture2"))
