import React, { Component } from 'react' ;
import Gif from './gif';

class GifList extends Component {
    constructor(props) {
        super(props);
    
      }
    renderList = () => {
        return this.props.gifs.map(gif => {
            return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
        })
    }

    render() {
        return (
            <div className="gif-list">
                    {this.renderList()} 
            </div>
        );
    }
}






// TODO: export your Article component for tests
export default GifList;