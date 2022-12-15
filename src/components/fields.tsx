interface FieldProps{
    text: String,
    title: string,
    img: string,
    link?: string
    nameLink?: String
}

export function Field(props: FieldProps) {
    return (
        <fieldset className="flex flex-row items-center justify-center border-2 border-field rounded-2xl w-5/6 gap-x-3 bg-[#171717]">
            <div className="flex flex-col items-start justify-start w-full">
                <img src={props.img} alt="" className="w-96 h-60 rounded-2xl"/>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full gap-3 mr-1">
                <div className="flex flex-col items-center justify-center w-full h-full gap-3">
                <h1 className="text-white text-4xl font-apple">{props.title}</h1>
                <p className="text-white text-2xl">
                {props.text}
            </p>
            <a href={props.link} className='text-white underline decoration-2' target="_blank">{props.nameLink}</a>
            </div>
            </div>
        </fieldset>
    )
}