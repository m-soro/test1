// let options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '0px',
//   threshold: 1.0
// }

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated animate__fadeInLeft animate__delay-2s');
    }
  });
});

observer.observe(document.querySelector('.picture2'));
