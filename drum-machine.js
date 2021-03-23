
import React from 'react';
import './App.css';

const Data = [
  { letter: 'Q',
    keycode: 81,
    id: 'Open-HH',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  { letter: 'W',
    keycode: 87,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  { letter: 'E',
    keycode: 69,
    id: 'Kick-and-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  { letter: 'A',
    keycode: 65,
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  { letter: 'S',
    keycode: 83,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  { letter: 'D',
    keycode: 68,
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  { letter: 'Z',
    keycode: 90,
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  { letter: 'X',
    keycode: 88,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  { letter: 'C',
    keycode: 67,
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
];


class App extends React.Component{
constructor(props){
  super(props)
this.state = {
  currentSound: ""
}

this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
this.handleKeyPress = this.handleKeyPress.bind(this);
}



handleKeyPress(event){
  
  const id = event.key.toUpperCase();
  const audio = document.getElementById(id);

if(audio){
audio.play();
}

}

handleClick(event){
this.setState({
  currentSound: event.target.id
});
const id = event.target.innerText.trim();
const audio = document.getElementById(id);
 audio.play();
}


handleChange(event){
const volume =event.target.value /100;
document.querySelectorAll('audio').forEach(element => element.volume = volume);
}

componentDidMount(){
  document.addEventListener('keydown', this.handleKeyPress);
}

componentWillUnmount(){
  document.removeEventListener('keydown', this.handleKeyPress);
}

render(){
const pad = Data.map(item => 
  <div className="drum-pad" onClick={this.handleClick} id={item.id} key={item.id}>
    {item.letter}
  <audio className="clip"  id={item.letter} src={item.url}></audio>
  </div>);


return(
  <div className="container">
   <div className="machine">
     {pad}
   </div>
   <div className="display">
    {this.state.currentSound}

    <div className="volume">
    <label for="volume-range">Volume</label>
    <div>
    <input id="volume-range" type="range" min="0" max="100" class="volume" onChange={this.handleChange} />
    </div>
     </div>
   </div>
  </div>
)




}

}

  
  




export default App
