import React, { Component } from 'react' ;

class Search extends Component {
    constructor(props) {
      super(props);
    }

    handleUpdate = (event) => {
      this.props.searchFunction(event.target.value)
    }

    render() {
        return (
            <input type="text" className="form-search form-control" name="search-text" onChange={this.handleUpdate} />
        );
    }
}




// TODO: export your Article component for tests
export default Search;