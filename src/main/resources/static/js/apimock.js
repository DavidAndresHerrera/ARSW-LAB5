var apimock = (function () {

    var mockdata = [];

    mockdata["cinemaX"] = [
        {
            functions: [
                {
                    movie: {
                        name: "Capitana Marvel",
                        gender: "Action"
                    },
                    date: "2020-09-03 12:00"
                }

                ,
                {
                    movie: {
                        name: "Cars 3",
                        gender: "Action"
                    },
                    date: "2020-09-03 13:00"
                }
            ]
        }
    ]

    mockdata['Fontanar'] = [
        {
            functions: [
                {
                    movie: {
                        name: "Acuaman",
                        gender: "Action"
                    },
                    date: "2020-10-03 09:00"
                },
                {
                    movie: {
                        name: "El conjuro",
                        gender: "Horror"
                    },
                    date: "2020-10-04 14:00"
                }
            ]
        }

    ]

    return {
        getFunctionsByCinema: function (cinemaName, callback) {
            callback(null, mockdata[cinemaName]);
        },

        getFunctionsByCinemaAndDate: function (date, cinema, callback) {
            cinema = mockdata[cinema].find(function (cinema) {
                return cinema.functions.date == date
            });
            callback(null, cinema)
        }
    }

})();