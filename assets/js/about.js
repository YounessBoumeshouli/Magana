
document.getElementById('menu-btn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentIndex = 1; 
let Mypanier = JSON.parse(localStorage.getItem('ordreToCard')) || [];
document.getElementById('numbrecom').innerText= Mypanier.length;
document.getElementById('numbrecom2').innerText=Mypanier.length;
function showTestimonial(index) {
testimonials.forEach((testimonial, i) => {
    
    if (i === index) {
        testimonial.classList.add('scale-100');
        testimonial.classList.remove('scale-90');
    } else {
        testimonial.classList.add('scale-90');
        testimonial.classList.remove('scale-100');
    }
});


dots.forEach((dot, i) => {
    dot.classList.toggle('bg-gray-700', i === index);
    dot.classList.toggle('bg-gray-400', i !== index);
    dot.classList.toggle('scale-125', i === index); 
});
}


dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
    currentIndex = index;
    showTestimonial(currentIndex);
});
});

// Initialisation
showTestimonial(currentIndex);

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

  const withTestimonialsContainer = document.getElementById("testimonial-carousel");

  imagesWithTestimonials.forEach(item => {
    withTestimonialsContainer.innerHTML += `
          <div class="testimonial-card p-4 bg-white rounded-lg shadow-lg text-center w-64 transform scale-100 transition-transform duration-300">
            <img src="${item.imagePath}" alt="Profile Picture" class="w-16 h-16 rounded-full mx-auto mb-2">
            <h3 class="font-semibold">${item.name}</h3>
            <p class="text-sm text-gray-500">${item.testimonial}</p>
            <h4 class="text-lg font-bold mt-2">It was a very good experience</h4>
            <p class="text-gray-600 text-sm mt-2">${item.testimonial2}</p>
               <p>Rating: ${item.rating}</p>
            <div class="text-yellow-400 mt-2">★★★★☆<w/div>
        </div>
    `;
  });
 
})
.catch(error => console.error('Error fetching images:', error));