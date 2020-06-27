class DataSource {
    static searchMovie (keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6712838c602ad8f3671c3508f534c80&language=en-US&query=${keyword}`)
        
        // .then(response => {
        //     return response.json();
        // })
        .then(response => response.json()) //Implicit Return

        .then(responseJson => {
        // if(responseJson.results) diganti if (responseJson.results.length > 0)
        // kondisi disini kurang tepat,
        // karena walaupun keyword tidak ditemukan akan tetap mengembalikan array results yang tidak ada isinya,
        // dan mengakibatkan kondisi ini selalu bernilai true
            if (responseJson.results.length > 0) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

    static searchMovieDetail (id) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6712838c602ad8f3671c3508f534c80&language=en-US`)
        .then(response => {
            return response.json();
        })
        
        .then(responseJson => {
            return Promise.resolve(responseJson);
        })
    }
}

export default DataSource;