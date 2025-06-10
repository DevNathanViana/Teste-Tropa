import { ButtonToPagination } from "./styles/styles"

export function ButtonPagination({ src, alt, title, bgColor }) {
    return (
        <ButtonToPagination $bgColor={bgColor}>
            <img src={src} alt={alt} /><text>{title}</text>
        </ButtonToPagination>
    )

}


export function ButtonMenuUser({ src, alt, title, bgColor }) {
    return (
        <ButtonToPagination $bgColor={bgColor}>
            <img src={src} alt={alt} /><text>{title}</text>
        </ButtonToPagination>
    )

}

