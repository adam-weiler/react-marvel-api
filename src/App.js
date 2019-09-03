import React, { Component } from 'react';
import './App.css';
import { ResultsList } from './components/ResultsList';
import { ResultDetails } from './components/ResultDetails';
import { SearchBar } from './components/SearchBar';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { MarvelService } from './services/MarvelService';
import { LoadMore } from './components/LoadMore';

class App extends Component {
  // --------------------------------------------------
  // SETUP
  // --------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchType: 'Characters',
      results: [],
      selectedResult: null,
    };

    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.fetchCharacter = this.fetchCharacter.bind(this);
    this.fetchMoreCharacters = this.fetchMoreCharacters.bind(this);

    this.marvelService = new MarvelService({
      apiKey: this.props.apiKey,
    });
  }

  // --------------------------------------------------
  // RENDER
  // --------------------------------------------------
  render() {
    const resultsElem = this.state.hasError
      ? <Error />
      : this.state.isLoading
        ? <Loading searchTerm={ this.state.searchTerm } />
        : (
          <ResultsList
            results={ this.state.results }
            searchTerm={ this.state.searchTerm }
            onResultClick={ this.fetchCharacter }
          />
        );

    const detailsElem = this.state.selectedResult
      ? (
        <ResultDetails
          image={ this.state.selectedResult.thumbnail.path +  '.' + this.state.selectedResult.thumbnail.extension }
          title={ this.state.selectedResult.name }
          description={ this.state.selectedResult.description }
          stories={ this.state.selectedResult.stories }
          urls={ this.state.selectedResult.urls }
          onClose={ () => this.setState({ selectedResult: null } )}
        />
      )
      : '';

    const loadMoreElem = this.state.canLoadMore
    ? (
      <LoadMore onClick = { this.fetchMoreCharacters } />
    )
    : '';

    // Where does this go?

    return (
      <section className="app">
        <SearchBar
          searchTerm={ this.state.searchTerm }
          searchType={ this.state.searchType }
          onSubmit={ (searchTerm) => this.setState({ searchTerm }) }
          onSelect={ (searchType) => this.setState({ searchType }) }
        />
        { resultsElem }
        { loadMoreElem }
        { detailsElem }
      </section>
    );
  }

  // --------------------------------------------------
  // LIFECYCLE
  // --------------------------------------------------
  componentDidUpdate(_, prevState) {
    const searchTerm = this.state.searchTerm;
    const prevSearchTerm = prevState.searchTerm;

    if (
      searchTerm
      && (searchTerm !== prevSearchTerm)
    ) {
      this.fetchCharacters();
    }
  }

  // --------------------------------------------------
  // FETCHING CHARACTERS
  // --------------------------------------------------
  fetchCharacters() {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet');
    // TODO:
    // Put the application into a loading state.
    console.log('__ PUTTING THE APP INTO A LOADING STATE.'); 
    this.setState({ isLoading: true });

    // Invoke the `getCharacters()` method on the marvel service.
    this.marvelService.getCharacters( { nameStartsWith: this.state.searchTerm })  // Pass in the current `searchTerm` as `nameStartsWith`.
      .then((data) => {
        console.log('.then:');
        console.log(data.results);

        // Update the application state using the resulting data.
        // Remove the loading state.
        this.setState({ 
          results: data.results, 
          isLoading: false,
          canLoadMore: data.total > data.offset + data.count  // Returns true when total number of results is greater than the offset (results skipped) plus results returned.
        });  
      })
      .catch((err) => {
        console.error(err);
        this.setState({ hasError: true });  // Handle potential errors.
      });
  }

  fetchCharacter(id) {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet');
    // TODO:
    // Invoke the `getCharacter()` method on the marvel service.
    console.log(' Loading an Hero!');
    this.marvelService.getCharacter(id)  // Pass in the `id`.
      .then((data) => {
        console.log('.then:');
        const result = data.results[0]
        console.log(result);

        this.setState({ selectedResult: result });  // Update the application state using the resulting data.
      })
      .catch((err) => {
        console.error(err);
        this.setState({ hasError: true });  // Handle potential errors.
      });
  }

  fetchMoreCharacters() {
    // console.warn('Whoops, it looks like this method hasn\'t been implemented yet');
    // TODO:

    // Invoke the `getCharacters()` method on the marvel service.
    this.marvelService.getCharacters({ 
      nameStartsWith: this.state.searchTerm,  // Pass in the current `searchTerm` as `nameStartsWith`.
      offset: this.state.results.length,  // Pass in the offset to find the next set of results.
    })  
      .then((data) => {
        console.log('.then:');
        console.log(data.results);

        // Update the application state using the resulting data.
        // Remove the loading state.
        this.setState({ 
          results: [...this.state.results, ...data.results], 
          canLoadMore: data.total > data.offset + data.count  // Returns true when total number of results is greater than the offset (results skipped) plus results returned.
        });  
      })
      .catch((err) => {
        console.error(err);
        this.setState({ hasError: true });  // Handle potential errors.
      });
  }
}

export default App;
