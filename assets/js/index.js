import Typed from 'typed.js';

const options = {
  strings: ['reality.', 'success.', 'delight.'],
  typeSpeed: 40,
  loop: true,
  backDelay: 3000,
  cursorChar: '_',
  backSpeed: 80,
  contentType: null,
};

const typed = new Typed('.container__title__anim', options);
