import React from 'react'
import s from "./Message.module.css"

function Message(props: any) {
    return (
        <div className={s.message}>
            <img className={s.image} src={props.avatar} alt={""}/>
            <div className={s.text}>
                <p className={s.name}>{props.name}</p>
                <span><p>{props.message}</p>
                <p className={s.time}>{props.time}</p></span>
            </div>
        </div>
    )
}

export default Message
