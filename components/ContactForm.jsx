//
// TODO: https://codesandbox.io/s/chakra-ui-react-hook-form-v382z
//


import React, { Component } from 'react';
import Button from './Button';

type Props = {
  addressTo: string
};

type State = {
  formControls: {
    email: string,
    message: string,
    addressTo: string
  },
  isValidEmail: boolean
};

const encode = (data) => Object.keys(data)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

class ContactForm extends Component<Props, State> {
  static defaultProps = {
    addressTo: 'andrw.huang@gmail.com',
  };

  state = {
    formControls: {
      email: '',
      message: "Yes let's connect! I'm curious about where I can apply :)",
      addressTo: this.props.addressTo,
    },
    isValidEmail: true,
  };

  changeHandler = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    const { formControls } = this.state;
    this.setState({
      formControls: {
        ...formControls,
        [name]: value,
      },
    });
  };

  submitHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { formControls } = this.state;
    const { email } = formControls;
    if (email.length === 0 || !validateEmail(email)) {
      this.setState({
        isValidEmail: false,
      });
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formControls }),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));
    }
  };

  render() {
    const {
      formControls: { email, message },
    } = this.state;
    const { addressTo } = this.props;

    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="form-container"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="addressTo" value={addressTo} />
        <input
          type="email"
          name="email"
          placeholder="email address"
          value={email}
          className="input__email form-item"
          onChange={this.changeHandler}
        />
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={this.changeHandler}
          className="form-item"
        />
        <Button onClick={this.submitHandler} className="form-item">
          Submit
        </Button>

        <style jsx>
          {`
            .form-container {
              display: flex;
              flex-direction: column;
              max-width: 400px;
              margin: 0 auto;
              padding: 1rem;
            }
            .form-item {
              margin: 1rem;
            }
            input,
            textarea {
              border: 0;
              border-bottom: 2px solid black;
              padding: 0.5rem;
              font-family: inherit;
              font-size: 0.8rem;
            }
            .input__email {
              border: ${this.state.isValidEmail ? '' : '2px solid red'};
            }
            input:focus,
            textarea:focus {
              border: 0;
              border-bottom: 2px solid black;
              outline: none;
            }
          `}
        </style>
      </form>
    );
  }
}

export default ContactForm;
