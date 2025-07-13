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

 /* Começa do 0*/
  let posX = 0;
  let posY = 0;

  let mouseX = 0;
  let mouseY = 0;
 
  /* Quando o mouse se move, a espadinha segue ele */

  document.addEventListener('mousemove', e => {

    mouseX = e.pageX;
    mouseY = e.pageY;

  });
    
     /* Função de animação da espadinha*/
     
  function animate() {

    const speed = 0.10;

    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    espada.style.left = (posX + 10) + 'px';
    espada.style.top = (posY + 10) + 'px';


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
     let tempo = 0;
     let min=0;
     function relogio(){
      tempo++;
     
      if (tempo >= 60){
        tempo = 0;
        min++;
      }

        if(min>0)
       {
         document.getElementById("relogio1").textContent=  " Você está aqui há " +min+ "Minutos  e " +tempo+ " segundos ";

      }
         else {
          document.getElementById("relogio1").textContent=  " Você está aqui há " +tempo+ " segundos";

         }

     }
      setInterval(relogio,1000);
      relogio();

      /* Função de tempo*/
    function relogio3 () {

    
      const now = new Date ();
      const time = now.toLocaleTimeString();
      document.getElementById("relogio2").textContent = "A hora local é " + time;
    }
  
      setInterval(relogio3,1000);
      relogio3();
      
  
