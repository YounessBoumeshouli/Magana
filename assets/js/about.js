
document.getElementById('menu-btn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


const paginationBtns = document.querySelectorAll(".pagination-btn");
console.log('get 1');

function updateTestimonial(index) {
  const testimonials = document.querySelectorAll(".testimonial");
  console.log(testimonials);


  testimonials.forEach((testimonial, i) => {
    console.log('get 2');
    testimonial.classList.remove("active");
    paginationBtns[i].classList.remove("active");


    if (i === index) {
      testimonial.classList.add("active");
      paginationBtns[i].classList.add("active");
    }


  });
}


paginationBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateTestimonial(index);
  });
});



function toggleAnswer(id) {
const answer = document.getElementById(`answer-${id}`);
const arrow = document.getElementById(`arrow-${id}`);

if (answer.classList.contains('hidden')) {
answer.classList.remove('hidden');
arrow.classList.add('rotate-90'); 
} 
else {
answer.classList.add('hidden');
arrow.classList.remove('rotate-90'); 
}
}
//fetsh

fetch('../assets/js/images-api.json')
.then(response => response.json())
.then(data => {
    console.log(data)
  const imagesWithTestimonials = data.imagesWithTestimonials;

  const withTestimonialsContainer = document.getElementById("testimonials-wrapper");

  imagesWithTestimonials.forEach(item => {
    withTestimonialsContainer.innerHTML += `
    <div class="testimonial">
      <img src="${item.imagePath}" alt="Photo de Leo" class="user-img">
      <h3>${item.name}</h3>
      <p class="role">${item.Role}</p>
      <div class="rating">★★★★☆ ${item.rating}</div>
      <h4>${item.testimonial}</h4>
      <p class="description">
      ${item.Description}
      </p>
    </div>
    `;
  });
  updateTestimonial(0);
 
})
.catch(error => console.error('Error fetching images:', error));