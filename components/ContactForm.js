// @flow
import React, { Component } from 'react';

type Props = {
  addressTo: string
}

type State = {
  formControls: {
    email: string,
    message: string
  }
};

class ContactForm extends Component<Props, State> {
  // TODO: fill in a defaultProps email?
  static defaultProps = {
    addressTo: "contact@gmail.com"
  }
  state = {
    formControls: {
      email: '',
      message: '',
    },
  };

  changeHandler = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: { name, value } } = event;
    const { formControls } = this.state;
    this.setState({
      formControls: {
        ...formControls,
        [name]: value,
      },
    });
  }

  submitHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { formControls: { email, message } } = this.state;
    console.log(email, message);
  };

  render() {
    const { formControls: { email, message } } = this.state;
    return (
      <form className="form-container">
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
          placeholder="What's the message?"
          value={message}
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}> Submit </button>

        <style jsx>
          {`
            .form-container {
              display: flex;
              flex-direction: column;
              gap: 1em;
              max-width: 400px
            }
          `}
        </style>
      </form>
    );
  }
}

export default ContactForm;
