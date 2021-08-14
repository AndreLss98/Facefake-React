import react from "react" ;

export default class Comment extends react.Component {
    render() {
        return (
            <h4 style={{
                borderBottom: '1px solid black',
                paddingBottom: '.5rem',
                marginBottom: '1rem'
            }}>{ this.props.text }</h4>
        );
    }
}