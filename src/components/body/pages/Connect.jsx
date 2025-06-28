import { useState } from 'react'
import '../body.scss'
import './Pages.scss'
import BluePanel from './components/BluePanel'

const Connect = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const body = `Name: ${name},  Phone: ${phone},  Email: ${email},  Message: ${message}`

  const validate = (e) => {
    const nameEmpty = name !== ''
    const phoneEmpty = phone !== ''
    const emailEmpty = email !== ''
    const messageEmpty = message !== ''

    // Check if all 4 have been filled
    const validate = nameEmpty + phoneEmpty + emailEmpty + messageEmpty
    console.log('valid = ', validate === 4)
    if (validate !== 4) {
      // add logic to check the typed in values
    }
  }

  const submit = (e) => {
    e.preventDefault()
    validate()
    // window.open(`mailto:hbishop@heathbishop.com?subject=Connect Communication&body=${body}`)
  }

  const resetAll = () => {
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  let nameTimer
  const onNameChange = (e) => {
    clearTimeout(nameTimer)
    nameTimer = setTimeout(() => {
      setName(e.target.value)
    }, 1000)
  }

  let phoneTimer
  const onPhoneChange = (e) => {
    clearTimeout(phoneTimer)
    phoneTimer = setTimeout(() => {
      setPhone(e.target.value)
    }, 1000)
  }

  let emailTimer
  const onEmailChange = (e) => {
    clearTimeout(phoneTimer)
    phoneTimer = setTimeout(() => {
      setEmail(e.target.value)
    }, 1000)
  }

  let messageTimer
  const onMessageChange = (e) => {
    clearTimeout(phoneTimer)
    phoneTimer = setTimeout(() => {
      setMessage(e.target.value)
    }, 1000)
  }

  return (
    <div style={{ height: 'calc(100vh-96px' }} className="flexContainer pages connectPage">
      <div className="container">
        <BluePanel className="blue">
          <form>
            <div className="formLine">
              <label htmlFor="formName" className="formLabel">
                <span className="whiteText">Your Name: </span>
                <span style={{ color: '#ffaf19' }}>*</span>
              </label>
              <input id="formName" placeholder="Enter name" className="formInput" type="text" onChange={onNameChange} />
            </div>
            <div className="formLine">
              <label htmlFor="formPhone" className="formLabel">
                <span className="whiteText">Phone #: </span>
                <span style={{ color: '#ffaf19' }}>*</span>
              </label>
              <input id="formPhone" placeholder="Enter your phone number" className="formInput" type="tel" onChange={onPhoneChange}></input>
            </div>
            <div className="formLine">
              <label htmlFor="formEmail" className="formLabel">
                <span className="whiteText">Email Address: </span>
                <span style={{ color: '#ffaf19' }}>*</span>
              </label>
              <input id="formEmail" placeholder="Enter your email address" className="formInput" type="email" onChange={onEmailChange}></input>
            </div>
            <div className="formLine">
              <label htmlFor="formMessage" className="formLabel">
                <span className="whiteText">Message: </span>
                <span style={{ color: '#ffaf19' }}>*</span>
              </label>
              <textarea id="formMessage" className="formInput" onChange={onMessageChange} />
            </div>
            <div className="formLine">
              <button onClick={submit}>Submit</button>
              <button onClick={resetAll}>Reset Form</button>
            </div>
          </form>
        </BluePanel>
      </div>
    </div>
  )
}

export default Connect
