const Box = ({author, image}) => {
    return (
        <div>
            <h2>{author}</h2>
            <img src={image}/>
        </div>
    )
};

export default Box;