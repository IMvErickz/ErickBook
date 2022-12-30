import Logo from '../assets/tools-and-utensils.png'

export function Header() {
    return (
        <div className='flex flex-row items-center justify-center w-full'>
            <nav className="bg-background flex flex-row items-center justify-center">
                <div className='flex flex-row items-start justify-start'>
                    <div className='flex flex-row items-center justify-center gap-x-4'>
                        <img src={Logo} alt="" className='w-20' />
                        <h1 className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purplee via-greeen to-cyyan font-bold font-apple">Erick Santos</h1>
                    </div>
                </div>    
            </nav> 
        </div>
    )
}