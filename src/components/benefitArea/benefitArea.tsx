import * as C from './benefitAreaStyle';

interface Props {
    image: string,
    descriptionImage?: string,
    title: string,
    text: string,
    textDirection: 'left' | 'right',
    typeColumn: boolean,
}

export const BenefitArea = ({image, title, text, typeColumn, descriptionImage, textDirection}: Props) => {

    return (
        <C.Container typeColumn={typeColumn}>
            <C.Content textDirection={textDirection}>
                <h1>{title}</h1>
                <p>{text}</p>
            </C.Content>
            <C.ContainerImage>
                <img src={image} alt={descriptionImage} />
            </C.ContainerImage>
        </C.Container>
    )
}