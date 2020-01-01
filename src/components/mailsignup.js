import React, { Component } from "react"
import { rhythm } from "../utils/typography"
import FloatingLabelInput from "react-floating-label-input"

class EmailSignup extends Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    hp: "",
    gdpr: true,
    success: false,
  }

  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === "number" ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  toggleGDPR = e => {
    this.setState({ gdpr: !this.state.gdpr })
  }

  sendSubscribeRequest = async payload => {
    return fetch("https://mail.stupidsystems.com/subscribe", {
      method: "POST",
      mode: "no-cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        ...this.state,
        list: "w11veSoyUbYWx8PANkEe6w",
        boolean: true,
        subform: true,
      }),
    })
  }

  render() {
    if (this.state.success) {
      return (
        <>
          <p className="center">Awesome, thanks for signing up!</p>
          {this.props.close && (
            <button onClick={this.props.close} className="center">
              Close this modal
            </button>
          )}
        </>
      )
    }
    return (
      <div>
        <h3
          style={{
            margin: "0",
            marginTop: rhythm(1),
          }}
        >
          Signup for my Newsletter
        </h3>
        <form
          style={{
            marginTop: rhythm(1),
          }}
          onSubmit={async e => {
            e.preventDefault()
            const res = await this.sendSubscribeRequest()
            console.log(res)
            if (!res) return
            this.setState({ success: true })
          }}
        >
          <label htmlFor="name">
            <FloatingLabelInput
              style={{ marginBottom: "1rem" }}
              type="text"
              name="name"
              label="Name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name || ""}
            />
          </label>
          <label htmlFor="email">
            <FloatingLabelInput
              type="email"
              label="Email"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email || ""}
            />
          </label>
          <div style={{ display: "none" }}>
            <label htmlFor="hp">HP</label>
            <input
              type="text"
              name="hp"
              id="hp"
              onChange={this.handleChange}
              value={this.state.hp || ""}
            />
          </div>
          <div style={{ width: "100%" }}>
            <button
              style={{
                marginTop: "1rem",
                marginRight: "auto",
                padding: ".5rem",
                borderRadius: ".2rem",
              }}
              type="submit"
              name="submit"
              id="submit"
              className="center"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p>
          By clicking the above, I consent to Andrew contacting me via email
          using the above information for news, updates, and marketing.
        </p>
      </div>
    )
  }
}
export default EmailSignup
