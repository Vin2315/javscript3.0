//EXCERCISES DEUX YEME PARTIE //

// const audioElements = document.querrySelectorAll("kbd");
// const body = document.getElementsByTagName ("body") [0]; //ligne a garder, ca perment de selectionner tout la body

const audioElements = document.querrySelectorAll("kbd");
const body = document.body; //ligne a garder, ca perment de selectionner tout la body



Array.prototype.forEach.call(audioElements, element =>
    element.addEventlistener("click",
        function (event) {
            var letter = event.target.textContent;
            document.getElementsById(letter).play();
       })); 

       body.acddEventListener("keydown", 
       function(event){
           var key = event.key.toUpperCase(); 
           document.getElementById(key).play(); 
       }); 
