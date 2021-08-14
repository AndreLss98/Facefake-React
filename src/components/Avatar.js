
const Avatar = (props) => {

    var size = 50;
    var borderedClass = 'bordered';

    switch(props.size) {
        case 'medium':
            size *= 2;
            borderedClass = 'bordered-medium'
        break;
        case 'large':
            size *= 4;
            borderedClass = 'bordered-large'
        break;
    }

    const avatarStyle = {
        background: `url(${props.src}) center no-repeat`,
        backgroundSize: 'cover',
        width: `${size}px`,
        height: `${size}px`
    }

    return (
        <div className={borderedClass} style={avatarStyle}></div>
    );
}

export default Avatar;