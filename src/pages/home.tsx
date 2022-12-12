import { Field } from '../components/fields'
import { Header } from '../components/header'
import Note from '../assets/noteschool.png'
import LaSavia from '../assets/lasalvia.png'
import IBeauty from '../assets/IBeatuty.jpg'
import { Footer } from '../components/footer'
import GitHub from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'

export function Home() {
    return (
        <div className="bg-background gap-y-24">
            <Header /> <br /> <br />
            
            <div className='flex flex-col items-center justify-center gap-y-10'>
                <Field
                    img={Note}
                    title='NoteSchool'
                    text='Site para auxilio nos estudos, com To-do list, timer e notas. Feito em HTML5, CSS3 e JavaScript'
                    link='https://imverickz.github.io/NoteSchool/'
                    nameLink= 'Acesse o app clicando aqui!'
                />
                
                <Field
                    img={LaSavia}
                    title='LasaviaCook'
                    text='Site de receitas feito com React.ts, banco de dados SQLite.'
                    link='https://lasalviacook-mauve.vercel.app/'
                    nameLink= 'Acesse o app clicando aqui!'
                />
                
                <Field
                    title='IBeauty (em desenvolvimento)'
                img={IBeauty}
                    text='App criado com o objetivo de realizar a intermediação de atendimento entre o prestador
                    e o cliente. Pensado especialmente para prestadores na área da beleza'
                />
                
                <footer>
                    <h1 className='text-white text-4xl font-apple'>Contato</h1>
                    <div className='flex flex-col items-center justify-center gap-y-3'> <br />
                        <Footer
                            srcImg={GitHub}
                            link='https://github.com/IMvErickz'
                            textLink='GitHub'
                        
                        />

                        <Footer
                            srcImg={Linkedin}
                            link='https://www.linkedin.com/in/erick-santos-6a1141206/'
                            textLink='LinkedIn'
                        
                        />
                    </div>
                </footer>
            </div>
        </div>
    )
}