import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react';
import Currencycard from './currencycard';
import { connect } from 'react-redux';
import { getCurrencies } from "../../actions/currencies";

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class Home extends Component {  
    componentDidMount = () => {
      this.props.getCurrencies()
    };
    getDetails(data){
        ipcRenderer.send('get-details',data);
    };
    render() {
        return (
            <Grid style={{height:'100%',margin:'0'}}>
                <Grid.Column width={16} style={{backgroundColor:'#2c2f33',padding:'0'}}> 
                    {this.props.done ? this.props.currencies.map(data => <a key={data.id} onClick={()=>{this.getDetails(data)}}><Currencycard data={data} base={this.props.base}/></a>) : 'Yükleme Hatası' }
                </Grid.Column>
            </Grid>
        )
    }
}
const mapStateToProps = state => { 
    return{
        currencies:state.currencies.moneys,
        base:state.currencies.base,
        fetching:state.currencies.fetching,
        done:state.currencies.done
    }
};
const mapDispatchToProps = {
    getCurrencies
};


export default connect(mapStateToProps,mapDispatchToProps)(Home)
