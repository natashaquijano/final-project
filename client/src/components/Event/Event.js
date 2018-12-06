import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { isAuthenticated } from '../../helper/Index'
import axios from '../../helper/APIConfig';
import './Event.scss'

import coverSlideEvent from '../../images/Event/bob-M.jpg'


class Event extends Component {
    state = {
        item: {

        }
    }
    componentDidMount() {
        const { item } = this.props.location.state;
        const token = window.localStorage.getItem("token")
        let user
        console.log('props', this.props)
        const id = this.props.location.pathname.split('/')[2]
        console.log('id', id)
        if (token) {
            user = jwtDecode(token.slice(7))
        }
        console.log('item', item)
        this.setState({
            //item,
            user

        })
        this.fetchComments(id)
    }

    fetchComments(id) {
        axios.get(`/products/${id}`)
            .then(response => {
                console.log('we got a response!', response)
                this.setState({
                    item: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    deleteComment(commentId, itemId) {
        axios.delete(`/products/${itemId}/comments/${commentId}`, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((response) => {
                console.log('response after deleting', response.data)
                const { event } = response.data
                event.comment = event.comments.reverse()
                this.setState({
                    item: event
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    clearComment = () => {
        this.setState({
            comment: ""
        })
    }
    submitComment = (id) => {
        console.log('submitting a comment', id)
        axios.post(`/products/event/${id}`, { comment: this.state.comment }, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((response) => {
                console.log('got a response after submitting', response)
                const { event } = response.data
                event.comment = event.comments.reverse()
                this.setState({
                    item: event
                })

            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {

        const { item, user } = this.state
        return (
            <div>
                <img src={coverSlideEvent} className="slide-event " alt="Italian Trulli" />
                <h1 className="trending">Event Page</h1>
                <div className="suggestedEventMain">
                    <div className="suggestedEventMainh1">
                        <h1 className="suggestedEvent">Bob Moses Concert</h1>
                    </div>
                    <div className="wrap-around">
                        <div className="wrap-around-text">
                            <div className="suggestedEventMainh3">
                                <h3 className="suggestedEvent2">
                                    {item.genre}
                                </h3>
                                <h3 className="suggestedEvent2">
                                    {item.address}
                                </h3>
                                <h3 className="suggestedEvent2">
                                    Doors: {item.door}
                                </h3>
                                <h3 className="suggestedEvent2">
                                    Show: {item.show}
                                </h3>
                            </div>
                            <div className="suggestedEventMainP">
                                <p className="suggestedEvent3">
                                    {item.description}
                                </p>

                            </div>
                        </div>
                        <div className="suggestedEventMainPhoto">
                            <ul className="suggestedEventul">
                                <li className="suggestedEventli"><img src={item.image} className="suggestedEventMainPhoto" alt="Italian Trulli" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="buySection">
                        <Link to="/shoppingcart" className="btn-buyTicket">Get Tickets</Link>
                    </div>
                    {isAuthenticated() &&
                        <div className="commentSection">

                            <textarea value={this.state.comment || ""} name="comment" onChange={this.handleChange} className="commentS" placeholder="Leave a comment"></textarea>
                            <button onClick={() => this.submitComment(item._id)} className="suggestedbutton2">Post</button>
                            <button onClick={this.clearComment} className="suggestedbutton1">Cancel</button>
                        </div>}
                    {
                        item.comments && item.comments.map((comment, index) => {
                            //console.log('should display a delete button', user && comment.user && user.id === comment.user._id)
                            return (<div key={comment._id}>
                                <h3>{comment.user && comment.user.firstName} {comment.user && comment.user.lastName}</h3>
                                <p>{comment.comment}</p>

                                {user && comment.user && user.id === comment.user._id && <button onClick={() => this.deleteComment(comment._id, item._id)}>delete</button>}
                            </div>)
                        })
                    }
                </div >
            </div>

        );
    }
}

export default Event;