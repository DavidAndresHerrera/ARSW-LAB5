var apimock = (function () {

    var mockdata = [];
    var seats = [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]];

    mockdata["cinemaX"] =
        {
            functions: [
                {
                    movie: {
                        name: "Capitana Marvel",
                        gender: "Action"
                    },
                    date: "2020-09-03 13:00",
                    available: seats
                }

                ,
                {
                    movie: {
                        name: "Cars 3",
                        gender: "Action"
                    },
                    date: "2020-09-03 13:00",
                    available:seats
                }
            ]
        }


    mockdata['Fontanar'] = [
        {
            functions: [
                {
                    movie: {
                        name: "Acuaman",
                        gender: "Action"
                    },
                    date: "2020-10-03 09:00",
                    seats: seats
                },
                {
                    movie: {
                        name: "El conjuro",
                        gender: "Horror"
                    },
                    date: "2020-10-04 14:00",
                    seats: seats
                }
            ]
        }

    ]

    return {
        getFunctionsByCinema: function (cinemaName, callback) {
            callback(null, mockdata[cinemaName]);
        },

        getFunctionsByCinemaAndDate: function (date, cinema, callback) {
            callback(
                mockdata[cinema].functions.filter(
                    movie => movie.date === date
                )
            );
        },
        getFunctionsByMovieCinemaAndDate: function (date, cinema, movie2, callback){
            window.alert(mockdata[cinema].functions.filter(movie => movie.date === date, movie.movie === movie2));
            var data = mockdata[cinema].functions.filter(
                funct => funct.date.includes(date));
            var funcion = data.find(element => element.movie.name == movie2);
            callback(funcion);


        }

    }

})();