import '../component/movie-list.js';
import '../component/search-bar.js';
import '../component/movie-detail.js';
import '../component/loading-indicator.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const movieDetailElement = document.querySelector("movie-detail");
    const loadingIndicatorElement = document.querySelector("loading-indicator");

    const onButtonSearchClicked = async () => {
        try{
            loadingIndicatorElement.loading = true
            const result = await DataSource.searchMovie(searchElement.value);
            loadingIndicatorElement.loading = false
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
            loadingIndicatorElement.loading = false
        }
     };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const onButtonDetailClicked = async (e) => {
        loadingIndicatorElement.loading = true
        try{
            const result = await DataSource.searchMovieDetail(e);
            movieDetailElement.detail = result
            loadingIndicatorElement.loading = false
        } catch (message) {
            loadingIndicatorElement.loading = false
        }
    };

    const onButtonCloseClicked = async () => {
        movieDetailElement.detail = null
    };

    searchElement.clickEvent = onButtonSearchClicked;
    movieListElement.clickEvent = onButtonDetailClicked;
    movieDetailElement.clickEvent = onButtonCloseClicked;
};

export default main;