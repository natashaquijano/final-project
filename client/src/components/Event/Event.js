import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
//import axios from '../helper/APIConfig';
import BobMoses from '../../images/Event/event-bobmoses.png'
import './Event.scss'



class EventPage extends Component {
    state = {
    }

    render() {

        return (
            <div>
                <NavBar history={this.props.history} />
                <div className="suggestedEventMain">
                    <div className="suggestedEventMainh1">
                        <h1 className="suggestedEvent">Bob Moses Concert</h1>
                    </div>
                    <div className="wrap-around">
                        <div className="wrap-around-text">
                            <div className="suggestedEventMainh3">
                                <h3 className="suggestedEvent2">
                                    Funkhaus Session
                        </h3>
                                <h3 className="suggestedEvent2">
                                    San Francisco, CA
                        </h3>
                                <h3 className="suggestedEvent2">
                                    Doors: 18:30
                        </h3>
                                <h3 className="suggestedEvent2">
                                    Show: 20:00
                        </h3>
                            </div>
                            <div className="suggestedEventMainP">
                                <p className="suggestedEvent3">Bob Moses, the Vancouver-bred duo consisting of Tom Howie and Jimmy
                                    Vallance,
                                    came
                                    to life in the Brooklyn
                                    underground
                                    scene in 2012. Early single releases on taste-making electronic label Scissor & Thread led
                                    to
                                    signing
                                    with
                                    Domino and
                                    the late 2015 release of their debut album Days Gone By.
                        </p>
                                <br />
                                <p className="suggestedEvent3">
                                    Meshing guitar licks, a moody smolder and a dash of dance-floor ambience with lyrical depth
                                    and
                                    classic
                                    songwriting,
                                    the duo created a sound that appeals equally to club goers and rock music fans. Translating
                                    their
                                    sound
                                    seamlessly to
                                    the live performance realm, years of nonstop global touring - including appearances at
                                    every
                                    major
                                    festival
                                    from
                                    Glastonbury and Coachella, to EDC, Lollapalooza and beyond - cemented the duo’s reputation
                                    as a
                                    must
                                    see
                                    live act. A
                                    standout performance on The Ellen Show, a pair of nominations at both the Junos and the
                                    Grammys
                                    (and a
                                    Grammy win), and
                                    a top 15 US Alternative radio hit with "Tearing Me Up,” have further sealed the band’s
                                    burgeoning
                                    mainstream success.
                        </p>
                                <br />
                                <p className="suggestedEvent3">
                                    May 2018 saw the announcement of a headline US tour and the release of track “Heaven Only
                                    Knows,”
                                    the
                                    first
                                    new music
                                    from the next exciting phase for Bob Moses.
                        </p>
                            </div>
                        </div>
                        <div className="suggestedEventMainPhoto">
                            <ul className="suggestedEventul">
                                <li className="suggestedEventli"><img src={BobMoses} alt="Italian Trulli" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="buySection">
                        <Link to="/shoppingcart" className="btn-buyTicket">Get Tickets</Link>
                    </div>
                    <div className="commentSection">
                        <form>
                            <textarea name="" className="commentS" placeholder="Leave a comment"></textarea>
                            <button className="suggestedbutton2">Post</button>
                            <button className="suggestedbutton1">Cancel</button>
                        </form>
                    </div>
                </div >
            </div>

        );
    }
}

export default EventPage;