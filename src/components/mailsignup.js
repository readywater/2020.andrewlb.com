import React, { Component } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import FloatingLabelInput from "react-floating-label-input"
import { Button } from "./background"

const ButtonBlock = styled.div`
  display: flex;
  flex-wrap: none;
  width: 100%;
  margin-top: ${rhythm(0.5)};
  align-items: flex-start;
  p {
    flex: 1 1 0;
    margin-left: ${rhythm(0.5)};
    margin-bottom: 0;
    font-size: ${rhythm(0.5)};
    line-height: ${rhythm(0.75)};
  }
`

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
        <div id="newsletter">
          <h3>Thank you!</h3>
          <p className="center">
            Thanks for signing up! I'll do my best to keep your interest.
            Otherwise, you can unsubscribe at any time. Just look for the
            unsubscribe link in your email.
          </p>
        </div>
      )
    }
    return (
      <div id="newsletter">
        <h3
          style={{
            margin: "0",
            marginTop: 0,
            marginBottom: rhythm(0.25),
          }}
        >
          Subscribe to my Newsletter
        </h3>
        <p style={{ fontSize: rhythm(0.5), lineHeight: rhythm(0.75) }}>
          Once or twice a month. I write about software products, design,
          politics (with a focus on security), and reflections.
        </p>
        <form
          style={{
            marginTop: rhythm(1),
          }}
          id="newsform"
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
              type="text"
              name="name"
              label="Name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name || ""}
            />
          </label>
          <br />
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
          <ButtonBlock>
            <Button style={{}}>
              <button
                type="submit"
                name="submit"
                id="submit"
                className="center"
              >
                Subscribe
              </button>
            </Button>
            <p>
              By subscribing, I consent to andrewlb.com emailing me about blog
              and product updates.
            </p>
          </ButtonBlock>
        </form>
      </div>
    )
  }
}
export default EmailSignup
