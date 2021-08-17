import { Comment } from './styles';

const CommentAtom = (props) => {
    return (
        <Comment>{ props.text }</Comment>
    );
}

export default CommentAtom;