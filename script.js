const element = document.querySelector(".picture2");
element.style.visibility = "visible";

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add('animate__animated','animate__fadeInLeft', 'animate__slower')
    }
  })
}

const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(document.querySelector(".picture2"))
