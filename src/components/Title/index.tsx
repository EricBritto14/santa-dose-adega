import './style.sass';

const Title = ({title, subTitle} : {title : string, subTitle: string}) => {
    return (
        <div id='title-component-main' >
            <div id='title-component-content'>
                <h1>Santa Dose | </h1>
                <h2>{title}</h2>
            </div>
            <p>{subTitle}</p>
        </div>
    )
}

export default Title;