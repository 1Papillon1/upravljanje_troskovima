import React from "react";
import { observer } from "mobx-react";

export default function Form({content}) 
{
    return(
        <form className="form">
            {content}
        </form>
    )
}



