import section_a from '../../img/section_divider_a.png'
import section_b from '../../img/section_divider_b.png'
//import section_a_w640 from '../../img/section_divider_a_w640.png'
//import section_b_w640 from '../../img/section_divider_b_w640.png'

export default function Separator({ head=true }) {
  return (
    <div className='Separator'>
        {
            (head)
                ? <img src={section_a} alt="Separator section" className='Separator--top' />
                : <img src={section_b} alt="Separator section" className='Separator--bottom' />
        }
    </div>
  )
}
