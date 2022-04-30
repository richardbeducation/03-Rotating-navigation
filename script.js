// default state is not the have the show-nav class. The Container hasn't rotated and teh navbar isn't visible. A lot of this is done in the CSS in this project

// so the JS will add and remove that class when the red circle buttons are clicked

//  first get the references. Open and close are IDs, container is a class
const open = document.querySelector('#open')
const close = document.querySelector('#close')
const container = document.querySelector('.container')

// then add click event listeners. Just adding and removing the CSS class
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))