import { Field } from '../components/fields'
import { Header } from '../components/header'
import Note from '../assets/noteschool.png'
import LaSavia from '../assets/lasalvia.png'
import IBeauty from '../assets/IBeatuty.jpg'
import { Footer } from '../components/footer'
import GitHub from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import { Type } from '../assets/icons/typescript'
import { JavaScript } from '../assets/icons/javascript'
import { ReactLogo } from '../assets/icons/react'
import { Node } from '../assets/icons/node'
import { Tailwind } from '../assets/icons/tailwind'

export function Home() {
    return (
        <div className="bg-background gap-y-24">
            <Header /> <br /> <br />

            <div className='w-full flex flex-row itens-center justify-center p-8 gap-x-8'>
                <Type />
                <JavaScript />
                <a href="https://pt-br.reactjs.org/"><ReactLogo /></a>
                <a href="https://nodejs.org/en/about/"><Node /></a>
                <a href="https://tailwindcss.com/"><Tailwind/></a>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-y-10'>
                <h1 className='text-white text-6xl font-apple'>Projetos</h1>
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
                
                <footer className='flex flex-col items-center justify-center'>
                    <h1 className='text-white text-4xl font-apple'>Contato</h1> <br />
                    <div className='flex flex-row items-center justify-center gap-x-6'> <br />
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