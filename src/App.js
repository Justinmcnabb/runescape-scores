import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    }
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>{this.state.scores}</h1>
      </header>
    </div>
    );
  }

    componentDidMount() {

    //use https://cors-anywhere.herokuapp.com/ as a proxy to bypass CORS requirement
    fetch("https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=jmcnast"
    , {
      //mode: 'no-cors',
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    }
    )
    .then(response => response.text())
    .then(
        (result) => {
          
          let data = result;
          let array = [];

          for(let i = 0; i <= data.length; i++){
            if(data.charAt(i) === ','){
              array.push(data.substring(0,i));
              data = data.substring(i+1);
              i = 0;
            }
            else if( data.charAt(i) === '\n'){
              array.push(data.substring(0,i));
              data = data.substring(i+1);
              i = 0;
            }else if( i === data.length){
              array.push(data.substring(0,i));
            }
          }
          for(let i = 0; i < array.length; i++){
            console.log(array[i]);
          }
          
          //console.log(result.substr());
          console.log("ayyyyyyyyyy you got this far");
          this.setState({
            scores: array
          });
        },
        (error) => {
          console.log(error);
          console.log("yeaaaaa still doesn't work dude");
        }
    );

    };

    // fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"
    // , {
    //   //mode: 'no-cors',
    //   method: "GET",
    //   headers: {
    //     "Accept": "text"
    //   }
    // }
    // )
    // .then(response => response.text())
    // .then(
    //     (result) => {
          
    //       console.log(result);
    //       console.log("ayyyyyyyyyy you got this far");
    //     },
    //     (error) => {
    //       console.log(error);
    //       console.log("yeaaaaa still doesn't work dude");
    //     }
    // );
    }

export default App;
