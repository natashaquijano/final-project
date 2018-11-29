/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import CarouselSlider from 'react-carousel-slider';

import Ashley from '../../images/Creatives/ashley-longshore.png';
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
    // render() {
    //     return (
    //         <Carousel slidesToShow={4} CenterControls={false}>
    //             <img src="https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60" />
    //             <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
    //             <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
    //             <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
    //             <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
    //             <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
    //         </Carousel>
    //     );
    // }
    render() {

        let itemsStyle = {
            padding: "0px",
            background: "white",
            margin: "0 30px",
            // boxShadow: "1px 1px 1px 1px #9E9E9E",
            borderRadius: "4px"
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
            // fontSize: "14px",
            // fontFamily: "Times New Roman"
        };

        let textBoxStyle2 = {
            width: "70%",
            top: "330px",
            color: "black",
            background: "transparent",
            fontSize: "12px",
            // fontStyle: "italic"
        };

        let items = [
            {
                "imgSrc": "../../images/Creatives/ashley-longshore.png",
                "name": "Niklas Koppernigk",
                "des": "19 February 1473 – 24 May 1543"
            },
            {
                "imgSrc": "../../images/Creatives/ashley-longshore.png",
                "name": "Galileo Galilei",
                "des": "15 February 1564 – 8 January 1642"
            },
            {
                "imgSrc": "../../images/Creatives/ashley-longshore.png",
                "name": "Michael Faraday",
                "des": "22 September 1791 – 25 August 1867"
            },
            {
                "imgSrc": "../../images/Creatives/ashley-longshore.png",
                "name": "Marie Curie",
                "des": "7 November 1867 – 4 July 1934"
            },
            {
                "imgSrc": "../../images/Creatives/ashley-longshore.png",
                "name": "Albert Einstein",
                "des": "14 March 1879 – 18 April 1955"
            }
        ]

        let scientists = items.map((item, index) =>
            <div key={index} >
                <img style={imgStyle} src={item.imgSrc} />
                <p style={textBoxStyle} >{item.name}</p>
                <p style={textBoxStyle2} >{item.des}</p>
            </div>
        );

        let btnWrapperStyle = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            boxShadow: "1px 1px 1px 1px #9E9E9E",
            textAlign: "center"
        }

        let btnStyle = {
            display: "inline-block",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "36px"
        }

        let rBtnCpnt = (<div style={btnWrapperStyle} >
            <div style={btnStyle} className="material-icons" >next</div>
        </div>);

        let lBtnCpnt = (<div style={btnWrapperStyle} >
            <div style={btnStyle} className="material-icons" >prev</div>
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

        return (<div style={{ position: "relative", margin: "0 auto", width: "80%" }} >
            {scientistsCard}
        </div>);
    }
}

