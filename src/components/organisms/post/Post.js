import react from 'react';

import { Post, ImgPost } from './styles';

import Avatar from '../../atoms/avatar/Avatar';
import ButtonAtom from '../../atoms/button/Button';
import Textarea from '../../atoms/textarea/Textarea';

import CommentAtom from "../../atoms/comment/Comment";

export default class PostComponent extends react.Component {

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
            <Post>
                <Avatar src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9981953457da53251a09f15604cd4f29/grunt.png" />
                <div style={{ maxWidth: '600px' }}>
                    <h4>{ this.props.title }</h4>

                    <p>{ this.props.text }</p>
                    
                    <ImgPost className="bordered" src="https://miro.medium.com/max/3200/1*nn9IdQdWqvmWFwmycrBcHA.png" ></ImgPost>

                    <form onSubmit={ this.handleSubmit } style={{ marginBottom: '2rem' }}>
                        <Textarea type="text"
                            value={ this.state.newComment }
                            onChange={ this.handleTextChange }
                            rows={ 4 }
                            placeholder="Digite seu comentário..."
                            style={{ width: '98%' }}
                        ></Textarea>
                        
                        <ButtonAtom type="submit" color="primary" expand="full" disabled={ this.state.newComment? false : true }>comentar</ButtonAtom>
                    </form>

                    { this.state.comments.map((comment, index) => {
                        return <CommentAtom key={index} text={comment.text} />
                    })}
                </div>
            </Post>
        );
    }
}