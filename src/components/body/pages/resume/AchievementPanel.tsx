interface iAchievementPanel {
  ach: {
    award: string
    date: string
    organization: string
  }
}

const AchievementPanel = ({ach}: iAchievementPanel) => {
  return (
    <div className="hmb-educationLine hmb-whiteText">
      <div>
        <span className="hmb-eduMajor">{`${ach.award}: `}</span>
        <span>{`${ach.organization} `}</span>
        <span>{`(${ach.date}) `}</span>
      </div>
    </div>
  )
}

export default AchievementPanel
