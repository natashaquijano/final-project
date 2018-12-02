/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import CarouselSlider from 'react-carousel-slider';


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
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },
            { imgSrc: 'http://via.placeholder.com/200', title: 'Ashley LongShore', subTitle: 'sub title' },

        ]

        let scientists = items.map((item, index) =>
            <div key={index} >
                <img style={imgStyle} src={item.imgSrc} />
                <p style={textBoxStyle} >{item.name}</p>

            </div>
        );

        let rBtnCpnt = (<div>
            <div className="material-icons" > &gt; </div>
        </div>);

        let lBtnCpnt = (<div>
            <div className="material-icons" > &lt; </div>
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