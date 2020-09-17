var app = (function () {


    return {
        setCinema: function (cinema) {
            document.getElementById("CinemaS").innerHTML = "Cinema selected: " + cinema;
        },
        getCinemas: function (cinema,fecha) {
            app.setCinema(cinema);
            var fn = apimock.getFunctionsByCinemaAndDate(fecha,cinema, null)

        }
    };

})();