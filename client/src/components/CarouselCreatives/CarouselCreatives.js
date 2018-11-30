/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import CarouselSlider from 'react-carousel-slider';

// import Ashley from '../../images/Creatives/ashley-longshore.png';
// import Bedouin from '../../images/Creatives/bedouin.png';
// import BuddhistChef from '../../images/Creatives/buddhist-chef.png';
// import DavidBellemere from '../../images/Creatives/david-bellemere.png';
// import Mira from '../../images/Creatives/mira-kater.png';
// import MitchGobel from '../../images/Creatives/mitch-gobel.png';
// import PeggyGou from '../../images/Creatives/peggy-gou.png';
// import YogaGirl from '../../images/Creatives/yoga-girl.png';
// import GabbyBernstein from '../../images/Creatives/gabby-bernstein.png';
// import Satori from '../../images/Creatives/satori.png';

export default class extends React.Component {
    render() {

        let itemsStyle = {
            padding: "0px",
            background: "white",
            margin: "0 30px",
            // boxShadow: "1px 1px 1px 1px #9E9E9E",
            borderRadius: "5px"
        };

        let imgStyle = {
            height: "70%",
            borderBottom: "1px solid #9E9E9E"
        };

        let textBoxStyle = {
            width: "40%",
            top: "290px",
            color: "black",
            background: "transparent",
            fontSize: "16px",
            fontFamily: "Open Sans"
        };


        let items = [
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Niklas Koppernigk",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Galileo Galilei",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Michael Faraday",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Marie Curie",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Albert Einstein",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Niklas Koppernigk",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Galileo Galilei",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Michael Faraday",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Marie Curie",

            },
            {
                "imgSrc": "https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60",
                "name": "Albert Einstein",

            }
        ]

        let scientists = items.map((item, index) =>
            <div key={index} >
                <img style={imgStyle} src={item.imgSrc} />
                <p style={textBoxStyle} >{item.name}</p>

            </div>
        );

        let rBtnCpnt = (<div>
            <div className="material-icons" > next </div>
        </div>);

        let lBtnCpnt = (<div>
            <div className="material-icons" > prev </div>
        </div>);

        let scientistsCard = (<CarouselSlider
            sliderBoxStyle={{ height: "450px", width: "80%", background: "transparent" }}
            accEle={{ dots: false }}
            slideCpnts={scientists}
            itemsStyle={itemsStyle}
            buttonSetting={{ placeOn: 'middle-outside' }}
            rBtnCpnt={rBtnCpnt}
            lBtnCpnt={lBtnCpnt}
        />);

        return (<div style={{ position: "relative", margin: "0 auto", width: "100%" }} >
            {scientistsCard}
        </div>);
    }
}