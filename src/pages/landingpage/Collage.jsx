import CollageImg from '../../img/pablo_sarabia_collage.png'

export default function Collage() {
  return (
    <div>
        <h2 className='mb20'>Formación Terapeuta transgeneracional</h2>
        <span className='text--animation'>¿Estás listo para sanar</span>
        <span className='text--animation'>tu propia Historia?</span>
        
        <img src={CollageImg} alt="Pablo Saravia" className='mt20 mb20' />
        
        <p>
          <b>Te Compartiré todas las herramientas y
          metodologías que utilizo con mis
          pacientes,</b> para que te formes como
          terapeuta transgeneracional y/o sanes tu
          propia historia.
        </p>

    </div>
  )
}
