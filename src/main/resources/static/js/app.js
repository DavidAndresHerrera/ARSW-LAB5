var cliente = apiclient ;
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
            return {movieName:fn.movie.name, gender:fn.movie.genre, date:fn.date}
        })

        var i = 0;
        lista.map(function(fn){

            var fila = "<tr><td id=\"Name"+i+"\">" + fn.movieName + "</td><td id='Gender'>"+fn.gender+"</td><td id='Time'>" + fn.date + "</td><td><button type=\"button\" class=\"btn btn-success\"  onclick=app.picture(document.getElementById(\"Name"+i+"\").innerHTML) >Seats</button></td> </tr>";
            $("#t01  tbody").append(fila);
            i+=1;
        })
    };

    function draw(fun){
        var seats = fun.seats;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.fillStyle = "#94c441";
        ctx.fillRect(c.width*0.2, c.height*0.05, c.width*0.6, c.height*0.075);
        for (var i = 0; i < seats[0].length; i++) {
            for (var j = 0; j < seats.length; j++) {
                ctx.fillStyle = "#c40a29";
                if(seats[j][i]){
                    ctx.fillStyle = "#217ad9"
                }
                ctx.fillRect(i*30+20, j*40+100, 23, 23);
            }
        }

    }






    return {
        setCinema: function (cinema) {
            document.getElementById("CinemaS").innerHTML = "Cinema selected: " + cinema;

        },
        getCinemas: function (cinema,fecha1) {
            app.setCinema(cinema);
            cliente.getFunctionsByCinemaAndDate(fecha1,cinema, maperTabla);
            setCineandFecha(cinema,fecha1);

        },
        picture: function (movie){
            cliente.getFunctionsByMovieCinemaAndDate(fecha,cine,movie,draw)
        }

    };

})();