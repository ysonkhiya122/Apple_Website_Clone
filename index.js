/* The code is selecting various elements from the HTML document using the `document.querySelector()`
and `document.querySelectorAll()` methods and assigning them to variables. */

const button = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const spanTop = document.querySelectorAll('.btn-menu span');
const IconBag = document.querySelector('.svg-bag');
const bag = document.querySelector('.bag')
const main = document.querySelector('main')
const setabag = document.querySelector('.seta-bag');
const removebag = document.querySelector('.remove-bag')

const header = document.querySelector('header');

/* The code is adding an event listener to the `button` element. When the button is clicked, the code
inside the arrow function will be executed. */

button.addEventListener('click', () => {
    menu.classList.toggle('active');

    spanTop[0].classList.toggle('span-topo-active');

    spanTop[1].classList.toggle('span-bottom-active');

    IconBag.classList.toggle('bag-opacity');

    header.classList.toggle('header-active');

    bag.classList.remove('bag-active');
    setabag.classList.remove('seta-active');
})

/* The code is adding an event listener to the `IconBag` element. When the `IconBag` element is
clicked, the code inside the arrow function will be executed. */

IconBag.addEventListener('click', () => {
    bag.classList.toggle('bag-active');
    setabag.classList.toggle('seta-active')
})

/* The code is adding an event listener to the `main` element. When the `main` element is clicked,
 the code inside the arrow function will be executed. In this case, it is removing the `bag-active` 
 class from the `bag` element and the `seta-active` class from the `setabag` element. This event listener
  is used to close the bag and remove the active state when the user clicks outside of the bag area. */

main.addEventListener('click', () => {
    bag.classList.remove('bag-active');
    setabag.classList.remove('seta-active');
})

/* The code is adding an event listener to the `removebag` element. When the `removebag` element is clicked,
the code inside the arrow function will be executed. In this case, it is removing the `bag-active`
class from the `bag` element and the `seta-active` class from the `setabag` element. This event
listener is used to close the bag and remove the active state when the user clicks on the "remove
bag" element. */

removebag.addEventListener('click', () => {
    bag.classList.remove('bag-active');
    setabag.classList.remove('seta-active');
})
