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

 