import styled from "../../theming/custom"
import {
  CONTENT_WIDTH,
  HEADER_HEIGHT,
  SMALL_SCREEN_QUERY_WIDTH,
  SMALL_SCREEN_QUERY,
} from "../constants"
import { getColor, getShadow } from "../../theming/helpers"
import React from "react"
import { HeaderLink } from "./HeaderLink"
import { ThemeToggle } from "../../theming/components/ThemeToggle"

const Container = styled.div`
  position: fixed;

  top: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  justify-content: center;
  z-index: 1;

  padding: 0px 16px;

  ${SMALL_SCREEN_QUERY} {
    padding: 0px;
  }
`

const Content = styled.header`
  display: flex;

  height: ${HEADER_HEIGHT};
  width: ${CONTENT_WIDTH};

  border-radius: 8px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;

  background: ${getColor("primaryFallback")};

  @supports (backdrop-filter: blur(15px)) {
    backdrop-filter: blur(15px);
    background: ${getColor("primary")};
  }

  box-shadow: ${getShadow("light")};

  ${SMALL_SCREEN_QUERY} {
    border-radius: 0px;
  }
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
`

export function Header() {
  return (
    <Container>
      <Content>
        <Nav>
          <HeaderLink to="/" label="My projects" icon="home" />
          <HeaderLink to="/about" label="About me" icon="book" />
        </Nav>
        <ThemeToggle />
      </Content>
    </Container>
  )
}
