import React, { Component } from 'react' ;

class Gif extends Component {
  constructor(props) {
    super(props);

  }
  
    handleClick = () => {
      if (this.props.selectGif) {
        this.props.selectGif(this.props.id);
      }
    }

    render() {
        const src=`https://media3.giphy.com/media/${this.props.id}/giphy.gif`
        return (
            <div className="selected-gif">
                    <img src={src} className="gif" onClick={this.handleClick}/>
            </div>
        );
    }
}




// TODO: export your Article component for tests
export default Gif;