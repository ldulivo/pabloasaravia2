import Container from '../../components/container/Container'
import Iframe from '../../components/iframe/Iframe'
import Section from '../../components/section/Section'
import Separator from '../../components/separator/Separator'
import Aprenderas from './Aprenderas'
import Collage from './Collage'

export default function LandingPage() {
  return (
    <>
        <header className='header'>
            <Section className={`blue`} >
                <Container >

                    <div className="content mt100 mb100">
                        <div className="content--text">
                            <h1>Formación Terapeuta Transgeneracional</h1>
                            <h2>Pablo Saravia</h2>

                            <p>
                                <span className='text--animation'>Abierta la inscripcion a la única</span>
                            </p>
                            <p>
                                <span className='text--animation'>formacion del 2022</span>
                            </p>
                        </div>

                        <Iframe src={"https://www.youtube.com/embed/aMfM43ZC52w"} />
                    </div>
                </Container>
            </Section>
            
            <Section className={`primary`}>
                <Container>
                    <p className='content830 mt50 color-black'>El objetivo de la terapia es liberar la memoria del clan familiar, todos esos programas, creencias, patrones y conductas limitantes que hemos heredado y que nos impiden hoy en día conseguir los objetivos que deseamos.</p>
                </Container>
                <Separator />
            </Section>
        </header>

        <main>
            <Section className={`secondary mt100`} >
                <Container>
                    <div className="content">
                        <Aprenderas />
                    </div>
                </Container>

                <Container className={`secondary mt50`} >
                    <div className="content">
                        <Collage />
                    </div>
                </Container>
            </Section>
        </main>
    </>
  )
}
