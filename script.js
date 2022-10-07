let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle('active');
}

window.onscroll = () =>{

  navbar.classList.remove('active');

  if(window.scrollY > 0){

    document.querySelector('.header').classList.add('active');

  }else{

    document.querySelector('.header').classList.remove('active');

  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};

document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var modal = document.getElementById("myModal");

var btn = document.getElementById("subBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {

  modal.style.display = "block";

}

span.onclick = function() {

  modal.style.display = "none";

}

window.onclick = function(event) {

  if (event.target == modal) {

    modal.style.display = "none";

  }

}

function getData() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!(email.length === 0 && password.length === 0)) {

    let payload = { email:email, password:password };

    fetch("http://localhost:3001/login", {

      mode: 'cors',
      method:'post',
      headers: {
        'content-type':"application/json",
        'Access-Control-Allow-Origin':'*'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(payload)

    }).then( async (response) => {
       
      const result = await response.json();

      if (!result.hasError) {
        
        if (response.status === 404) {
          
          alert(result.data.data);

        }else{

          alert(result.data.data);

          location.replace("http://127.0.0.1:5500/index.html");

        }

      }else{

        alert(result.data.data);

      }
      
    });
  } 
}

function contactUs(){

  let name = document.getElementById("cName").value;
  let email = document.getElementById("cEmail").value;
  let subject = document.getElementById("cSubject").value;
  let message = document.getElementById("cMsg").value;

  let payload = { name:name, email:email, subject:subject, message:message };

  fetch("http://localhost:3001/contact", {

    mode: 'cors',
    method:'post',
    headers: {
      'content-type':"application/json",
      'Access-Control-Allow-Origin':'*'
    },

    //make sure to serialize your JSON body
    body: JSON.stringify(payload)
    
  }).then(res => alert(`Thanks For Contacting Us`)).catch(err => console.log(`Something Went Wrong`))

}

function checkout(){

  let name = document.getElementById("fname").value;
  let email = document.getElementById("mail").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let contact = document.getElementById("contact").value;


  let payload = { name:name, email:email, address:address, city:city, state:state, contact:contact };

  console.log(payload);

  fetch("http://localhost:3001/checkout", {

    mode: 'cors',
    method:'post',
    headers: {
      'content-type':"application/json",
      'Access-Control-Allow-Origin':'*'
    },

    //make sure to serialize your JSON body
    body: JSON.stringify(payload)
    
  }).then(res => console.log(res)).catch(err => console.log(err))

}
    
