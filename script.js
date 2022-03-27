const element = document.querySelector(".picture2");
element.style.display = "block";

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
       entry.target.classList.add('animate__animated','animate__fadeInLeft', 'animate__slower')
         
    }
  })
}

const myObserver = new IntersectionObserver(callback, {threshold: 0.0000001})

myObserver.observe(element)
