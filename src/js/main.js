let scrollpos = window.scrollY

const header = document.querySelector(".intro_content")
const headerunder = document.querySelector(".under-intro")
const burger = document.querySelector(".hamburger-menu")
const scrollChange = 400

const add_class_on_scroll3 = () => burger.classList.add("bg-dark")
const remove_class_on_scroll3 = () => burger.classList.remove("bg-dark")

const add_class_on_scroll2 = () => headerunder.classList.add("bg-dark")
const remove_class_on_scroll2 = () => headerunder.classList.remove("bg-dark")


const add_class_on_scroll = () => header.classList.add("bg-dark")
const remove_class_on_scroll = () => header.classList.remove("bg-dark")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll2() }
  else { remove_class_on_scroll2() }
  
})

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll3() }
  else { remove_class_on_scroll3() }
  
})

document.getElementById("open-my-modal").addEventListener("click",function(){
  document.getElementById("my-modal").classList.add("open");
})

document.getElementById("open-my-modal2").addEventListener("click",function(){
  document.getElementById("my-modal").classList.add("open");
})


document.getElementById("open-my-modal3").addEventListener("click",function(){
  document.getElementById("my-modal").classList.add("open");
})

document.getElementById("open-my-modal4").addEventListener("click",function(){
  document.getElementById("my-modal").classList.add("open");
})

document.getElementById("close-my-modal").addEventListener("click",function(){
  document.getElementById("my-modal").classList.remove("open");
})



