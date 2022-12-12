interface FooterProps{
    srcImg: string,
    link: string,
    textLink: string
}

export function Footer(props: FooterProps) {
    return (
            <div className="flex flex-row items-center justify-center gap-x-3">
            <img src={props.srcImg} alt="" className="w-10 h-10"/>
            <a href={props.link} className='text-white text-2xl underline decoration-2' target="_blank">{props.textLink}</a>
            </div>
    )
}