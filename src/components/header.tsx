import Logo from '../assets/tools-and-utensils.png'

export function Header() {
    return (
        <div className='flex flex-row items-start justify-start w-full'>
            <nav className="bg-background flex flex-row items-center justify-center">
                <div className='flex flex-row items-start justify-start'>
                    <div className='flex flex-col items-start justify-start '>
                        <img src={Logo} alt="" className='w-20'/>
                    </div>
                </div>    
                    
                
            </nav> 
            <div className="flex flex-col items-center justify-center w-full">
                        <h1 className="text-field text-6xl font-bold font-apple">Erick Santos</h1>
            </div>
        </div>
    )
}