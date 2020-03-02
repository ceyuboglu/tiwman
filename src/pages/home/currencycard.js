import React from 'react';
import {Card,Button,Image, Grid} from 'semantic-ui-react';

function Currencycard(props) { 
    return (
        <Card className='cardcomp'>
            <Card.Content> 
                <Image floated='right'
                        size='mini'
                        src={props.data.iconUrl} />
                <Card.Header>{props.data.name}</Card.Header>
                <Card.Meta>{props.data.description}</Card.Meta>
                <Card.Description>
                    Price:{props.data.price + ' ' + props.base.sign}
                </Card.Description>
            </Card.Content>
            <Card.Content extra> 
                Market Cap: <strong>{props.data.marketCap}</strong>
            </Card.Content>
        </Card>
    )
}

export default Currencycard;
