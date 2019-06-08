// @flow
import React, { Component } from "react"
import Button from "./Button"

type Props = {
  addressTo: string
}

type State = {
  formControls: {
    email: string,
    message: string
  }
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends Component<Props, State> {
  // TODO: fill in a defaultProps email?
  static defaultProps = {
    addressTo: "contact@gmail.com"
  }
  state = {
    formControls: {
      email: "",
      message: "Yes let's connect! Please reach out to me at email@address.com"
    }
  }

  changeHandler = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value }
    } = event
    const { formControls } = this.state
    this.setState({
      formControls: {
        ...formControls,
        [name]: value
      }
    })
  }

  submitHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const {
      // formControls: { email, message }
      formControls
    } = this.state
    // console.log(email, message)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formControls })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  render() {
    const {
      formControls: { email, message }
    } = this.state
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="form-container">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          name="email"
          placeholder="email address"
          value={email}
          onChange={this.changeHandler}
        />
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={this.changeHandler}
        />
        <Button onClick={this.submitHandler}> Submit </Button>

        <style jsx>
          {`
            .form-container {
              display: flex;
              flex-direction: column;
              gap: 1em;
              max-width: 400px;
              margin: 0 auto;
            }
          `}
        </style>
      </form>
    )
  }
}

export default ContactForm
