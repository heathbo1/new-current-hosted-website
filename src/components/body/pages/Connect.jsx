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
    const errors = []

    const nameEmpty = name !== ''
    const phoneEmpty = phone !== ''
    const emailEmpty = email !== ''
    const messageEmpty = message !== ''

    if (nameEmpty + phoneEmpty + emailEmpty + messageEmpty !== 4) {
      errors.push('Fill all required fields')
    }

    if (!email.includes('@')) {
      errors.push('Email must have an @ symbol')
    }

    if (phone.length < 14) {
      errors.push('Phone # must include a full phone #.')
    }

    if (errors.length === 0) {
      return true
    } else {
      return { value: false, errors: errors }
    }
  }

  const submit = (e) => {
    e.preventDefault()
    const valid = validate()
    console.log('valid = ', valid)
    // if (validate()) {
    //   console.log('window.open')
    //   // window.open(`mailto:hbishop@heathbishop.com?subject=Connect Communication&body=${body}`)
    // }
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
    }, 500)
  }

  let phoneTimer
  const onPhoneChange = (e) => {
    const without = e.target.value.split('(').join('').split(')').join('').split(' ').join('')
    const numbersOnly = /^\d+$/.test(without[without.length - 1])

    const value = e.target.value
    const length = value.length

    let editedValue = value

    if (numbersOnly) {
      if (e.nativeEvent.inputType !== 'deleteContentBackward' && length - 1 <= 12) {
        if (value[0] !== '(') {
          editedValue = `(${value}`
        }

        if (length >= 4 && value[4] !== ')') {
          editedValue = `${value[0]}${value[1]}${value[2]}${value[3]}) ${value.substring(4, length)}`
        }

        if (length >= 9 && value[9] !== '-') {
          editedValue = `${value.substring(0, 9)}-${value.substring(10, length)}`
        }
      }

      if (length - 1 >= 14) {
        editedValue = value.substring(0, 14)
      }
    } else {
      editedValue = value.substring(0, value.length - 1)
    }

    e.target.value = editedValue

    clearTimeout(phoneTimer)
    phoneTimer = setTimeout(() => {
      setPhone(editedValue)
    }, 500)
  }

  let emailTimer
  const onEmailChange = (e) => {
    clearTimeout(phoneTimer)
    phoneTimer = setTimeout(() => {
      setEmail(e.target.value)
    }, 500)
  }

  let messageTimer
  const onMessageChange = (e) => {
    clearTimeout(phoneTimer)
    phoneTimer = setTimeout(() => {
      console.log('message = ', e.target.value)
      setMessage(e.target.value)
    }, 500)
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
