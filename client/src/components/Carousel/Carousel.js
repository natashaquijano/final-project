/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Carousel.scss'
// import CarouselSlider from 'react-carousel-slider';


export default class extends React.Component {

    componentDidMount() {
        this.displaySlides();
    }
    firstIndex = 0;

    displaySlides = () => {
        var slider1 = document.getElementById(this.props.header);
        while (slider1.firstChild) {
            slider1.removeChild(slider1.firstChild);
        }

        var index = this.firstIndex - 1;
        let item;
        //debugger

        index = this.getNextIndex(index);
        item = this.props.items[index];
        slider1.appendChild(this.getNewSlide(item.image, item.title, item.description));

        index = this.getNextIndex(index);
        item = this.props.items[index];
        slider1.appendChild(this.getNewSlide(item.image, item.title, item.description));

        index = this.getNextIndex(index);
        item = this.props.items[index];
        slider1.appendChild(this.getNewSlide(item.image, item.title, item.description));

        index = this.getNextIndex(index);
        item = this.props.items[index];
        slider1.appendChild(this.getNewSlide(item.image, item.title, item.description));


    }

    getNewSlide = (imgSrc, title, description) => {
        var slide = document.createElement('div');
        slide.innerHTML = '<img src="' + imgSrc + '" width="400px" height="300px"/><div class="content"><h2>' + title + '</h2><h3>' + description + '</h3></div >';
        slide.className = 'slider';
        return slide;
    }

    previous = () => {
        this.firstIndex--;
        if (this.firstIndex < 0) {
            this.firstIndex = this.props.items.length - 1;
        }
        this.displaySlides();
    }

    next = () => {
        this.firstIndex++;
        if (this.firstIndex > this.props.items.length - 1) {
            this.firstIndex = 0;
        }
        this.displaySlides();
    }


    getNextIndex = (index) => {
        //console.log(index);
        if (index === this.props.items.length - 1)
            return 0;
        else
            return index + 1;
    }

    render() {
        const { header } = this.props
        console.log(this.props.items)


        return (<div style={{ position: "relative", margin: "0 auto", width: "100%", backgroundColor: "#FFFFFF" }} >
            <h1>{header}</h1>

            <div id={header} className="slider-main">
            </div>
            <div style={{ clear: "left" }}></div>
            <div>
                <button onClick={this.previous}>&lt;</button>
                <button onClick={this.next}>&gt;</button>
            </div>

        </div>);
    }
}