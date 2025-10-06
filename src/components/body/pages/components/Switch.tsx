import {useState} from 'react'

const Switch = () => {
  const [on, setOn] = useState(false)

  return (
    <span className="hmb-Switch">
      <span
        className={`hmb-Switch-base ${on ? 'hmb-Switch-base-on' : ''}`}
        onClick={() => {
          setOn(!on)
        }}
      >
        <input
          className="hmb-Switch-input"
          role="switch"
          type="checkbox"
          onClick={() => {
            setOn(!on)
          }}
        />
        <span
          className="hmb-Switch-thumb"
          onClick={() => {
            setOn(!on)
          }}
        />
      </span>
      <span className={`${on ? 'hmb-Switch-track' : 'hmb-Switch-track-off'}`} />
    </span>
  )
}

export default Switch
