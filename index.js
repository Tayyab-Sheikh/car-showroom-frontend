// // import axios from 'axios';

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

// document.querySelector('#login-btn').onclick = () =>{
//   document.querySelector('.login-form-container').classList.toggle('active');
// }

// document.querySelector('#close-login-form').onclick = () =>{
//   document.querySelector('.login-form-container').classList.remove('active');
// }


// const loginButton = document.getElementById("logBtn");

// loginButton.onclick = function (){

//   let email = document.getElementById("email").value;

//   let password = document.getElementById("password").value;

//   let arr = [email,password];

//   console.log(arr);

// }

// const contactbtn = document.getElementById("contactbtn");

// contactbtn.onclick = async function () {

//   fetch("http://localhost:3001/checkout", {

//     mode: 'cors',
//     method:'get',
//     headers: {
//       'content-type':"application/json",
//       'Access-Control-Allow-Origin':'*'
//     },

//     //make sure to serialize your JSON body
//     // body: JSON.stringify(payload)

//   }).then( (response) => { 
//     console.log(response);
//   }); 
// }


// let email = '';
// let password = '';

// loginButton.onclick = async function () {

//  const email = document.getElementById("email").value;
//  const  password = document.getElementById("password").value;

//  let payload = { name: 'Husnain', email:'hunnycheema@gmail.com', address:"dhbcjhsdbcbsdccnd" , city:"grw", state:"punjab", contact:61234563 };

//  fetch("http://localhost:3001/checkout", {

//     mode: 'cors',
//     method:'post',
//     headers: {
//       'content-type':"application/json",
//       'Access-Control-Allow-Origin':'*'
//     },

//     //make sure to serialize your JSON body
//     body: JSON.stringify(payload)

//   }).then( (response) => { 
//     console.log(response);
//   }); 
// }

// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 0){

//     document.querySelector('.header').classList.add('active');

//   }else{

//     document.querySelector('.header').classList.remove('active');

//   };

// };

// document.querySelector('.home').onmousemove = (e) =>{

//   document.querySelectorAll('.home-parallax').forEach(elm =>{

//     let speed = elm.getAttribute('data-speed');

//     let x = (window.innerWidth - e.pageX * speed) / 90;
//     let y = (window.innerHeight - e.pageY * speed) / 90;

//     elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

//   });

// };


// document.querySelector('.home').onmouseleave = (e) =>{

//   document.querySelectorAll('.home-parallax').forEach(elm =>{

//     elm.style.transform = `translateX(0px) translateY(0px)`;

//   });

// };

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("subBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// var swiper = new Swiper(".vehicles-slider", {
//   grabCursor: true,
//   centeredSlides: true,  
//   spaceBetween: 20,
//   loop:true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable:true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

// var swiper = new Swiper(".featured-slider", {
//   grabCursor: true,
//   centeredSlides: true,  
//   spaceBetween: 20,
//   loop:true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable:true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

// var swiper = new Swiper(".review-slider", {
//   grabCursor: true,
//   centeredSlides: true,  
//   spaceBetween: 20,
//   loop:true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable:true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });