import react from 'react';
import './Post.css';

import Comment from "./Comment";
import Avatar from './Avatar';

const ImgPost = (props) => {

    const style = {
        background: `url(${props.src}) center no-repeat`,
        backgroundSize: 'cover',
        width: '100%',
        height: '400px',
        maxWidth: '1000px',
        margin: '2rem 0'
    }

    return (
        <div className="bordered" style={style}></div>
    );
}

export default class Post extends react.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            newComment: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newComment }
            ]
        });
        this.setState({ newComment: "" });
        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ newComment: e.target.value });
    }
    
    render ()  {
        return (
            <div className="post">
                <Avatar src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png" />
                <div>
                    <h4>{ this.props.title }</h4>

                    <p>{ this.props.text }</p>

                    <ImgPost src="https://miro.medium.com/max/3200/1*nn9IdQdWqvmWFwmycrBcHA.png" />

                    <form onSubmit={ this.handleSubmit }>
                        <textarea type="text"
                            value={ this.state.newComment }
                            onChange={ this.handleTextChange }
                            rows={ 4 }
                            placeholder="Digite seu comentário..."
                        ></textarea>
                        
                        <button type="submit" color="primary" disabled={ this.state.newComment? false : true }>comentar</button>
                    </form>

                    { this.state.comments.map((comment, index) => {
                        return <Comment key={index} text={comment.text} />
                    })}
                </div>
            </div>
        );
    }
}