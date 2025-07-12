 /*
    const mestres= document.querySelectorAll(".mestres")
     mestres.forEach (elemento=> {

    elemento.addEventListener('click',()=> {
   elemento.style.backgroundColor= "blue" ;

    });



 elemento.addEventListener('dblclick',()=> {
    elemento.style.backgroundColor= " rgb(71, 27, 27)" ;
    });
    });
    */


     const containers = document.querySelectorAll(".comosetornarmestre li")

     containers.forEach(comosetornarmestre => {

    const mestres= comosetornarmestre.querySelector(".mestres");
    const Texto= comosetornarmestre.querySelector(".Texto");
    const seta= comosetornarmestre.querySelector(".seta");

     mestres.addEventListener('click',() => {

      Texto.classList.toggle("ativa");
      seta.classList.toggle("girada");

    });
  });
         

   /*
    const espadinha= document.getElementById("espada");

    document.addEventListener('mousemove', (event) =>{
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      espadinha.style.width = '10px';
      espadinha.style.height = '10px';

      espadinha.style.left = mouseX + 'px';
      espadinha.style.top = mouseY + 'px';


    });
    
   */ 
  const espada = document.getElementById('espada');

  let posX = 0;
  let posY = 0;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    const speed = 0.15;

    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    espada.style.left = (posX + 10) + 'px';
    espada.style.top = (posY + 10) + 'px';

    // força o tamanho aqui também, só pra garantir
    espada.style.width = '5px';
    espada.style.height = '5px';

    requestAnimationFrame(animate);
  }

  animate();
    
/*
      MUDARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
 
    const gif = document.querySelector(".gif")
     gif.addEventListener('mouseover',() =>  {
     gif.style.top= "-30px";
     gif.style.bottom= "auto";

     });
     gif.addEventListener('mouseout',()=>{
      gif.style.top= "";
      gif.style.bottom= "15px";
     }
    );

  */ 

 