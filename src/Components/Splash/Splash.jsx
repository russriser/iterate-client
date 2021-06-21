import React from 'react';
import { Link } from 'react-router-dom';
import { OfferList } from '../OfferList/OfferList';
import './Splash.css';


export const Splash = (props) => {

    return (
        <div className="splash">
            <header>
                <div class="heading">
                    <h4>Get Ahead. Stay Ahead.</h4>
                    <h2 className='subtitle'>Lease Your Graphics Card</h2>
                </div>
                <div className="headerBack"/>
            </header>
            <main className="centeredArea">
            <OfferList 
                cards={props.cards} 
                startRes={props.startRes} />
            </main>
            {props.renderReserveForm()}
        </div>
    );
};