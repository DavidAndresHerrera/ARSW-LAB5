const apiUrl = "http://localhost:8080/cinemas/"
apiclient = (function() {

    return {
        getFunctionsByCinemaAndDate: function(date, cinema, callback) {
            jQuery.ajax({
                url: apiUrl + cinema +"/"+ date,
                success: function (result) {
                    callback(result);
                },
                async: true
            });
        },
        getFunctionsByMovieCinemaAndDate: function (date, cinema, movie2, callback) {
            jQuery.ajax({
                url: apiUrl+cinema +"/"+ date+"/"+movie2,
                success: function (result) {
                    callback(result);
                },
                async: true
            });
        }
    };
})();