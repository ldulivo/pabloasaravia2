export default function Iframe({ src }) {
    return (
        <iframe
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          title='Formación transgeneracional'
        >
  
        </iframe>
    )
  }