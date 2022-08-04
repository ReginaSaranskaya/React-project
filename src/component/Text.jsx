import React from "react";

function Text(props){
    return(
        <form className="meme-form" onSubmit={props.handleSubmit}>
            <input
            type="text"
            name="topText"
            placeholder="Текст сверху"
            value={props.data.topText}
            onChange={props.handleChange}
            />
            <input
            type="text"
            name="bottomText"
            placeholder="Текст снизу"
            value={props.data.bottomText}
            onChange={props.handleChange}
            />
            <button>Случайная картинка</button>
        </form>
    )
}

export default Text