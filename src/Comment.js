//your code here
import React, {Component} from 'react';
import Blogspot from './BlogPost';

export default class Comment extends Component{
    render(){
        return(
        <div className= "comment">
            {this.props.commentText}
        </div>)
    };
}