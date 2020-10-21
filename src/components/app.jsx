import React, { Component } from 'react' ;
import Search from './search'
import Gif from './gif';
import GifList from './giflist';
import giphy from 'giphy-api'



class App extends Component {
    constructor(props) {
      super(props);

      this.state = { 
        gifs: [],
        selectedGifId: "t1i8KZ7momVs4"
        };
    }

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    }

    search = (query) => {
        giphy('y6WT5TDfWdmmV6JtVGB0wvx3vgapbtqM').search({
            q: query,
            rating: 'g',
            limit: 10
        }, (error, result) => {
            this.setState({
                gifs: result.data,
                selectedGifId: result.data[0].id
                
            });
            // Res contains gif data!
        });
    }

    selectGif = (id) => {
        this.setState({
          selectedGifId: id
        });
      }

    render() {

        return (
            <div className="app">
                <div className="left-scene">
                    <Search searchFunction={this.search}/>
                    <Gif id={this.state.selectedGifId}/>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
                </div>
            </div>
        );
    }
}




// TODO: export your Article component for tests
export default App;