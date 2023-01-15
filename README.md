# sionamb.github.io - Portfolio Website

## Pages
  1. Profile: <em></em>
  2. Skills
  3. Experience
  4. Projects
  5. Connect

## Custom JavaScript Elements:
  ### 1. Accordion (app.js): <em>An accordion element that drops down or raises up a section when clicked</em>
 
  - Starts off with the first section dropped down by using setting the display style to block (none is what it is set to in the HTML):
```
function dropDown(){
    let description = accordion[0].nextElementSibling
    description.style.display = "block"
}
```
  - Similar logic is used to drop down the clicked section unless the element clicked is the already dropped down section, in which case it raises it back up 

### 2. Carousel (carousel.js): <em>A card carousel that iterates through the cards when the left and right arrows are clicked using a doubly linked list</em>
  - Starts off with the first card (Card1) in the center, with the previous card (Card7) being to the left and the next card (Card2) to the right
```
function displayFirst(list){
    //previous
    let projectsList = document.querySelector(".projectsList")
    list.nodes[currentIndex].previous.value.style.display = "block"
    //current
    let cloneCard1 = document.querySelector(".card1").cloneNode(true)
    cloneCard1.style.display = "block"
    console.log(cloneCard1)
    projectsList.appendChild(cloneCard1)
    //next
    let cloneCard2 = document.querySelector(".card2").cloneNode(true)
    cloneCard2.style.display = "block"
    console.log(cloneCard2)
    projectsList.appendChild(cloneCard2)
}
```
  - The edge cases (where the first and last card are in the center) had to use clones since otherwise the cards would be displayed out of order
  - Other than the cloning, similar logic was used for displaying the rest of the cards as iterated through via clicking on the buttons
## Other Functionalities:
  - CSS media queries are used to make the site screen adaptive 
  - Various sections have a glow effect when hovered over (using CSS)
  
  
## Credits:
- Icons: <a href = "https://thenounproject.com/">The Noun Project</a>
- Various Cards & Buttons: <a href = "https://uiverse.io/cards">Universe.io</a>
- Shading Effects: <a href = "https://neumorphism.io/#e0e0e0">Neumorphism</a>
- Background Effect: <a href = "https://codepen.io/Huhtamaki/pen/GPzwPY">@Huhtamaki on CodePen<a>
- Glitch Effect: <a href = "https://codepen.io/cbanlawi/pen/xxRBeMY">@cbanlawi on CodePen<a>
- GitHub Most Used Languages Graphic: <a href = "https://github.com/anuraghazra/github-readme-stats">@anuraghazra on GitHub<a>
- Pixel Character: <a href = "https://www.avatarsinpixels.com/">Minipix Dollmaker on Avitars In Pixels</a>
- Prototype Designed on: <a href = "https://www.justinmind.com/">Justinmind<a>
