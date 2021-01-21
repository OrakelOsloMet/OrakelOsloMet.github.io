import React from "react";
import {DeleteButton, SubmitButton} from "../Buttons/buttons";

type Props = {
    shadow: boolean;
    widthPercent: number;
    header: string;
    content?: JSX.Element;
}

const Card = (props: Props) => {

    let styleClasses = "card mb-4 mt-4 ml-4 mr-4 ";
    const width = `${String(props.widthPercent)}%`

    if (props.shadow) {
        styleClasses += "shadow bg-white rounded ";
    }

    return(
        <div className={styleClasses} style={{width: width}}>
            <div className={"card-header"}><h2>{props.header}</h2></div>
            {props.content}
        </div>
    );

};

export default Card;