var app = (function () {

    var cine;
    var fecha;

    function setCineandFecha(cinema,date){
        cine = cinema;
        fecha = date;
    };

    function maperTabla(funs){

        if (funs == null){
            return new Error("No se encontro");
        }
        lista = [];
        var lista  = funs.map(function(fn){
            return {movieName:fn.movie.name, gender:fn.movie.gender, date:fn.date}
        })

        var i = 0;
        lista.map(function(fn){

            var fila = "<tr><td id=\"Name"+i+"\">" + fn.movieName + "</td><td id='Gender'>"+fn.gender+"</td><td id='Time'>" + fn.date + "</td><td><button type=\"button\" class=\"btn btn-success\" onclick=app.picture(document.getElementById(\"Name"+i+"\").value)>Seats</button></td></tr>";
            $("#t01  tbody").append(fila);
            i+=1;
        })
    };

    function draw(f){
        var canvas = document.getElementById("myCanvas");
        var lapiz = canvas.getContext("2d");
        console.log(f);
        lapiz.strokeStyle = 'lightgrey';
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 12; j++) {
                if (f[i][j] === true) {
                    lapiz.fillStyle = "#FFC300";
                } else {
                    lapiz.fillStyle = "#900C3F";
                }
                lapiz.fillRect(j * 85, i * 85, 80, 80);
            }
        }
    }






    return {
        setCinema: function (cinema) {
            document.getElementById("CinemaS").innerHTML = "Cinema selected: " + cinema;

        },
        getCinemas: function (cinema,fecha1) {
            app.setCinema(cinema);
            apimock.getFunctionsByCinemaAndDate(fecha1,cinema, maperTabla);
            setCineandFecha(cinema,fecha1);

        },
        picture: function (movie){
            $.getScript("js/apimock.js", function(){
                apimock.getFunctionsByCinemaAndDate(fecha,cine,(funciones) => {
                    for (const funcion of funciones) {
                        if (funcion.movie.name === movie) {
                            draw(funcion.available);
                            break;
                            //:3
                        }
                    }
                })
            });
        }

    };

})();