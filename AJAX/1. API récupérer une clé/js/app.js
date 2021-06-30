function temp(){
    let ville = prompt("Ville");

    $(document).ready(function(){
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=f46ecccbabead0a05c8997e41238a9db`,
            type: "GET",
            success: function (result){
                document.querySelector("p").innerHTML= `à ${ville} il fait <br> ${result.main.temp}°`
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
            console.log(result.list[17].main.temp.humidity)
            console.log(result.list[17]) 
            document.querySelector("#date").innerHTML= `date:${result.list[17].dt_txt} temperature:${result.list[17].main.temp}° humidity:${result.list[17].main.humidity}`
          },
          error: function(error){
             console.log(error);
             

          }
      })

  })
    
}

