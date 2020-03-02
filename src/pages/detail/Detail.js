import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const notloaded = (
    <h1>Veri Yükleme Hatası</h1>
); 
class Detail extends Component {
    state = {
        detail:[]
    };
    componentDidMount = () => {
      ipcRenderer.on('detail',(event,arg) => {
          this.setState({
              detail:arg
          })
      })
    };
    
    render() {
        return (
            <div>
                <Image src={this.state.detail.iconUrl} size='medium'></Image>
                <h1>{this.state.detail.name}</h1>
                <a href={this.state.detail.websiteUrl}>{this.state.detail.websiteUrl}</a>
                <p>Volume:{this.state.detail.volume}</p>
                <p>marketCap:{this.state.detail.marketCap}</p>
                <p>price:{this.state.detail.price}</p>
                <p>circulatingSupply:{this.state.detail.circulatingSupply}</p>
                <p>totalSupply:{this.state.detail.totalSupply}</p>
                <p>change:{this.state.detail.change}</p>
                <p>{console.log(this.state.detail)}</p>    

            </div>
        )
    }
}

export default Detail
