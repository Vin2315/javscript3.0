function temp(){
    let ville = prompt("Ville");
    var graf; 
    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=f46ecccbabead0a05c8997e41238a9db`,
            type: "GET",
            success: function (result){
                document.querySelector("p").innerHTML= `à ${ville} il fait <br> ${result.main.temp}°`
                if (graf){
                    graf.destroy();
                }
            },
            error: function(error){
                document.querySelector("p").innerHTML= "veuillez entrer une ville valide";
            }
        })
    })
  
    $(document).ready(function(){
      $.ajax({
          url: `https://api.openweathermap.org/data/2.5/forecast?q=${ville}&units=metric&appid=f46ecccbabead0a05c8997e41238a9db`,
          type: "GET",
          success: function (result){
            
            const temperaturas = []; 
            const fechas = []; 
            const humiditi = []; 

            for (let index = 0; index < result.list.length; index++) {
                
                temperaturas.push(result.list[index].main.temp);  // recupero la info de temperatura en main donde dentro de ella esta temperatura
                fechas.push(result.list[index].dt_txt);           // recupero la info de temperatura en main donde dentro de ella esta 
                humiditi.push(result.list[index].main.humiditi);
            }
              const data = {
                labels: fechas,
                datasets: [{
                  label: 'Meteo',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: temperaturas,
                }]
              };
              const config = {
                type: 'line',
                data: data,
                options: {}
                
              };

            var ctx = document.querySelector("#graf").getContext("2d"); // el query buasca el setector del HTML busca mi ID definido por # llamado grafica 
            graf = new Chart( ctx, {                                    // el query buasca el setector
                config 
            });

            // console.log(temps); 
            // document.querySelector("#date").innerHTML= `date:${result.list[17].dt_txt} temperature:${result.list[17].main.temp}° humidity:${result.list[17].main.humidity}`
          },
          error: function(error){
             console.log(error);
          }
      })

  })
    
}

