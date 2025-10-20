import { useEffect, useState } from 'react'

const Switch = ({ passedIn, onOff }) => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (onOff) {
      onOff(on)
    }
  }, [on])

  const onClick = () => {
    setOn(!on)
  }

  return (
    <span className="hmb-Switch">
      <span
        className={ `hmb-Switch-base ${on ? 'hmb-Switch-base-on' : ''}` }
      >
        <input
          className="hmb-Switch-input"
          role="switch"
          type="checkbox"
          onClick={ () => {
            onClick()
          } }
        />
        <span
          className={ `${on ? 'hmb-Switch-thumb' : 'hmb-Switch-thumb-off'}` }
        />
      </span>
      <span className={ `${on ? 'hmb-Switch-track' : 'hmb-Switch-track-off'}` } />
    </span>
  )
}

export default Switch
