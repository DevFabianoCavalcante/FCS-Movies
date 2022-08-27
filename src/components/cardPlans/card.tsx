import * as C from './cardStyle';

interface Props {
    backgroundGradient1: string,
    backgroundGradient2: string,
    title: string,
    price: string,
    listInfo: string[],
    gradientBtn1: string,
    gradientBtn2: string,
    textBtn: string,
    handleNewPage?: ()=> void;
}

export const Card = ({backgroundGradient1, backgroundGradient2, title, price, listInfo, gradientBtn1, gradientBtn2, textBtn, handleNewPage}:Props) => {

    return (
        <C.ContainerCard backgroundGradient1={backgroundGradient1} backgroundGradient2={backgroundGradient2}>
            <C.PlanInfoTitle>
                <h1>{title}</h1>
                <h2>{price}</h2>
            </C.PlanInfoTitle>
            <C.ListBenefit>
                {listInfo.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </C.ListBenefit>
            <C.ButtonPlan colorGradient1={gradientBtn1} colorGradient2={gradientBtn2} onClick={handleNewPage}>{textBtn}</C.ButtonPlan>
        </C.ContainerCard>
    )
}