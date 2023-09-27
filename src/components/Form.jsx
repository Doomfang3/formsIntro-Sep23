import { useState } from 'react'

const Form = () => {
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  /*const [myInputs, setMyInputs] = useState({ email: '', firstname: '', lastname: '', password: '' })*/

  const handleSubmit = event => {
    event.preventDefault()
    console.log({ email })
    console.log({ password })
    // Connect our user
    setTimeout(() => {
      setEmail('')
      setPassword('')
    }, 250)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          value={email}
          onChange={event => {
            console.log(event)
            setEmail(event.target.value)
          }}
        />
      </label>
      <label>
        firstname
        <input
          value={firstname}
          onChange={event => {
            console.log(event)
            setFirstname(event.target.value)
          }}
        />
      </label>
      <label>
        Terms and conditions
        <input
          type='checkbox'
          checked={terms}
          onChange={event => {
            console.log(event)
            setTerms(event.target.checked)
          }}
        />
      </label>
      <label>
        lastname
        <input
          value={lastname}
          onChange={event => {
            console.log(event)
            setLastname(event.target.value)
          }}
        />
      </label>
      <label>
        Password
        <input value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
