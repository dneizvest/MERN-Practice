let quotes = [
  `I don't care how busy I am - I will always make time for what's most important to me`,
  `It's a well-known fact that tall people are evil.`,
  `At the end of the day, your fans are the people who support you in and out. And their opinions matter.`,
  `A reputation as a hard worker is a good reputation to have.`,
  `I stayed true to my dreams and, eventually, they came true.`,
  `The one thing about the business of entertainment is that you have to learn patience.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.querySelector('#main-title').textContent = 'Something Shorter'

  // Part 2
document.querySelector('body').style.backgroundColor = 'light gray'

  // Part 3
const favoriteThings = document.querySelectorAll('#favorite-things > li')

document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])

  // Part 4
document.querySelectorAll('.special-title').forEach((item) => {
  item.style.fontSize = '2rem'
})

  // Part 5
document.querySelectorAll('#past-shows > li').forEach((item) => {
  if(item.textContent.trim() === 'Chicago'){
    document.querySelector('#past-shows').removeChild(item)
  }
})

  // Part 6
const li = document.createElement('li')
li.textContent = 'Hometown'
document.querySelector('#past-shows').appendChild(li)

  // Part 7
const blogPost = document.createElement('div')
blogPost.classList.add('blog-post')
const heading = document.createElement('h2')
heading.textContent = 'Hometown'
const pEl = document.createElement('p')
pEl.textContent = 'Philadelphia, Pennsylvania'

document.querySelector('.main').appendChild(blogPost)

blogPost.appendChild(heading)
blogPost.appendChild(pEl)

  // Part 8
document.querySelector('#quote-title').addEventListener('click', (evt) => {
  randomQuote()
})

  // Part 9

document.querySelectorAll('.blog-post').forEach((item) => {
  item.addEventListener('mouseout', (evt) => {
    evt.currentTarget.classList.toggle('purple')
  })
  item.addEventListener('mouseenter', (evt) => {
  evt.stopPropagation()
  evt.currentTarget.classList.toggle('red')
  })
})



});
