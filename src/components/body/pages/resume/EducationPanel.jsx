import '../Pages.scss'

const EducationPanel = ({ edu }) => {

  return (
    <div className='hmb-educationLine hmb-whiteText'>
      <div><span className='hmb-eduMajor'>{ `${edu.Major}: ` }</span><span>{ `${edu.Degree}` }</span></div>
      <div className=''>{ `${edu.University} - ${edu.Location}` }</div>
    </div>
  )
}

export default EducationPanel