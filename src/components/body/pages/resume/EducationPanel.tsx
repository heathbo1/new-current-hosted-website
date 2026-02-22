import '../Pages.scss'

interface iEductionPanel {
  edu: {
    Degree: string
    Major: string
    University: string
    Location: string
  }
}

function EducationPanel({edu}: iEductionPanel) {
  return (
    <div className="hmb-educationLine hmb-whiteText">
      <div>
        <span className="hmb-eduMajor">{`${edu.Major}: `}</span>
        <span>{`${edu.Degree}`}</span>
      </div>
      <div className="">{`${edu.University} - ${edu.Location}`}</div>
    </div>
  )
}

export default EducationPanel
