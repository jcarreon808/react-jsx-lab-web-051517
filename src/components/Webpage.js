import React from 'react';
class Webpage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <title> The world's coolest webpage </title>
      <FillerText />
      <FillerText />
      </div>
    )
  }
}

export default Webpage;
import FillerText from './FillerText';
