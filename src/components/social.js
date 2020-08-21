import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

const links = [
  {
    media: "instagram",
    link: "https://instagram.com/lovettbarron",
    icon: "instagram",
    desc: "Street photography and baby photos",
  },
  {
    media: "twitter",
    link: "https://twitter.com/readywater",
    icon: "twitter",
    desc: "Screaming into a void, also helpful links",
  },
  {
    media: "github",
    link: "https://github.com/readywater",
    icon: "github",
    desc: "Code and references",
  },
  {
    media: "linkedin",
    link: "https://linkedin.com/in/andrewlb",
    icon: "linkedin",
    desc: "Respectfully only screaming inside my heart",
  },
]

const SocialBar = styled.ul`
  display: flex;
  flex: 1 1 0;
  justify-content: flex-start;
  @media (max-width: 700px) {
    justify-content: center;
  }
  li {
    width: 50px;
    height: 50px;
    list-style: none;
    margin: 0 5px;
    a {
      box-shadow: none;
      color: black;
      text-decoration: none;
    }

    position: relative;
    display: inline-block;

    /* Tooltip text */
    .tooltiptext {
      visibility: hidden;
      opacity: 0;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      transition: opacity 0.4s;
      top: 50px;
      padding: 10px;
      font-size: 10px;

      /* Position the tooltip text - see examples below! */
      position: absolute;
      z-index: 1;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    &:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
`

export default class Social extends Component {
  render() {
    library.add(fab)
    return (
      <SocialBar>
        {links.map(l => (
          <li>
            <span class="tooltiptext">{l.desc}</span>
            <a href={l.link}>
              <FontAwesomeIcon icon={["fab", l.icon]} size="2x" />
            </a>
          </li>
        ))}
      </SocialBar>
    )
  }
}
