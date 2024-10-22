"use strict";

try {
  var swiper = new Swiper('.service-info__swiper', {
    slidesPerView: 3.3,
    spaceBetween: 20,
    speed: 700,
  });
} catch (error) {
}

try {
  // categories-swiper
  var swiper = new Swiper('.categories-swiper', {
    slidesPerView: 2.4,
    spaceBetween: 12,
    speed: 700,
  });
} catch (error) {

}

// counter
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const increment = counter.querySelector('.increment');
  const decrement = counter.querySelector('.decrement');
  const value = counter.querySelector('.count-value');
  let count = parseInt(value.textContent);
  console.log(count);

  increment.addEventListener('click', () => {
    count++;
    value.textContent = count;
  });
  decrement.addEventListener('click', () => {
    if (count > 0) {
      count--;
      value.textContent = count;
    }
  })
})


// order-modal
const orderModal = document.querySelector('.order-modal');
if (orderModal) {
  const openOrderModal = document.querySelector('.order-btn');
  const closeOrderModal = orderModal.querySelector('.close-modal');


  openOrderModal.addEventListener('click', () => {
    orderModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeOrderModal.addEventListener('click', () => {
    orderModal.classList.remove('show');
    document.body.style.overflow = '';
  });
}


// accordions
const accordion = document.querySelectorAll('.accordion');
accordion.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion-header');
  const accordionContent = accordion.querySelector('.accordion-content');
  accordionHeader.addEventListener('click', () => {
    accordionContent.classList.toggle('show');
    accordionHeader.classList.toggle('acctive');
  });
})
