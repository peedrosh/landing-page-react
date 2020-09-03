import styled from "styled-components";
import { shade } from 'polished'

import headerBackground from './assets/header.jpg'
import footerBackground from './assets/footer.jpg'

export const Container = styled.main`
  nav {
    background: transparent;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    transition: all ease .4s;

    &.active {
      background: #2f3641;
    }

    & > div {
      display: flex;
      height: 4.8rem;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 97.2rem;

      & > a {
        font-size: 2rem;
        font-weight: 500;
      }

      a {
        color: #fff;
      }

      div {
        display: flex;
      }

      div a {
        padding: 0.8rem 0;
        transition: all ease .2s;
        
        & + a {
          margin-left: 1.6rem;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .heading-2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1.6rem;
  }

  .heading-4 {
    color: #999;
    text-align: center;
    font-size: 2rem;
    max-width: 700px;
    margin: 0 auto;
  }

  .button {
    background: #2075EF;
    display: inline-block;
    padding: 1.6rem 2.4rem;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    transition: background-color .2s;

    &:hover {
      background: ${shade(0.1, '#2075EF')};
    }
  }

  footer {
    background: #2f3641;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    color: #fff;

    a {
      color: #2075EF;
      margin-left: 0.4rem;
    }
  }
`;

export const Header = styled.header`
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 90vh;
`;

export const Content = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 10%, transparent 50%, rgba(0, 0, 0, 0.2) 90%);
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    color: #fff;
    text-align: center;

    h1 {
      font-weight: 400;
      font-size: 6.4rem;
      line-height: 120%;
    }

    h2 {
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 150%;
      margin: 0.8rem 0 4rem;
    }
  }
`;

export const RecentContainer = styled.section`
  padding: 6.4rem 1.6rem;

  .recent--posts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 97.2rem;
    margin: 8rem auto;
    gap: 2rem;

    .card {
      display: flex;
      flex-direction: column;
    }

    .card--head {
      padding-top: 64.5%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .card--body {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      padding: 1.6rem 0.8rem;
      text-align: center;

      h3 {
        font-size: 2.4rem;
      }

      p {
        margin-top: 1.6rem;
        margin-bottom: auto;
      }

      a {
        color: #777;
        margin-top: 2.4rem;
        padding: 1rem;

        &:hover {
          color: #333;
        }
      }
    }
  }
`

export const Features = styled.section`
  background: #f1f1f1;

  .content {
    max-width: 97.2rem;
    margin: 0 auto;
    padding: 6.4rem 2rem;

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      margin-top: 8rem;
      gap: 2rem;

      .features__card h3 {
        margin: 2.4rem 0;
        font-size: 2.4rem;
      }
    }
  }
`;

export const Pricing = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 97.2rem;
  margin: 0 auto;
  padding: 8rem 2rem;

  div {
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    svg {
      margin-bottom: 0.8rem;
    }

    p {
      margin: 0.8rem 0;
    }

    strong {
      display: flex;
      align-items: flex-start;
    }

    strong span:last-child {
      font-size: 6.4rem;
      font-weight: 300;
    }
  }
`

export const Buy = styled.section`
  background: url(${footerBackground}) no-repeat center;
  background-size: cover;

  div {
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 2rem;
    min-height: 60vh;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    margin: 0.8rem 0 4.8rem;
    font-size: 1.6rem;
  }
`;
