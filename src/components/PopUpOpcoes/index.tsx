import Button from "@Components/Button";
import "./styles.sass"

const PopUpOpcoes = (
    {
        onButtonClick,
        title, 
        buttonTitle1, 
        buttonTitle2
    } : 
    {
        onButtonClick: (buttonValue: string) => void
        title : string, 
        buttonTitle1 : string, 
        buttonTitle2 : string
    }) =>{
        return(
            <div>
                    <div id="main-popUp">
                        <div id="second-style">
                            <div>
                                <h1>{title}</h1>
                            </div>

                            <div>
                                <Button
                                    title={buttonTitle1}
                                />
                                <Button
                                    title={buttonTitle2}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        )
}

export default PopUpOpcoes