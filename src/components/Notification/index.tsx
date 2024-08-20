import { useEffect } from "react";
import { CheckCircleOutline, ErrorOutline, HighlightOff, WarningAmber } from '@mui/icons-material'

import "./style.sass";

export type NotificationType = {
    show: boolean,
    type: "info" | "success" | "error" | "warning",
    message: string
}

const Notification = ({ note, setNote } : { note : NotificationType, setNote : any }) => {
    const styleAnimation = {
        animationName: "notification-animation",
        animationDuration: "3s",
        animationFillMode: "forwards",
    }

    useEffect(() => {
        if(note.show) {
            setTimeout(() => setNote((prevState : NotificationType) => ({
                ...prevState,
                show : false,
            })), 3000);
        }
    }, [note]);
    
    switch (note.type) {
        case "success":
            return (
                <div id="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div id="notification-component-main" style={{ backgroundColor: "#E5FFDB" }}>
                        <CheckCircleOutline style={{ color: "#37B904" }}/>
                        <div id="notification-content">
                            <label style={{ color: "#37B904" }}>SUCESSO!</label>
                            <span style={{ color: "#37B904" }}>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
        case "error":
            return (
                <div id="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div id="notification-component-main" style={{ backgroundColor: "#FFDBDB" }}>
                        <HighlightOff style={{ color: "#E11D48" }}/>
                        <div id="notification-content">
                            <label style={{ color: "#E11D48" }}>ERRO!</label>
                            <span style={{ color: "#E11D48" }}>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
        case "warning":
            return (
                <div id="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div id="notification-component-main" style={{ backgroundColor: "#FFF5DB" }}>
                        <WarningAmber style={{ color: "#e0b439" }}/>
                        <div id="notification-content">
                            <label style={{ color: "#e0b439" }}>AVISO!</label>
                            <span style={{ color: "#e0b439" }}>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div id="notification-component-container" style={ note.show ? styleAnimation : {} }>
                    <div id="notification-component-main">
                        <ErrorOutline/>
                        <div id="notification-content">
                            <label>INFO</label>
                            <span>{note.message}</span>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Notification;