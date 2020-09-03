/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GiPaintBrush, GiCoffeeCup, GiKeyboard } from 'react-icons/gi'
import { FiUsers, FiHome, FiGlobe, FiAirplay } from 'react-icons/fi';

import Info from './components/Info';

// images
import card1 from './assets/card-1.jpg'
import card2 from './assets/card-2.jpg'
import card3 from './assets/card-3.jpg'
import card4 from './assets/card-4.jpg'
import info1 from './assets/info1.jpg'
import info2 from './assets/info2.jpg'

import { GlobalCss } from './styles/global';
import {
  Container,
  Header,
  Content,
  RecentContainer,
  Features,
  Pricing,
  Buy
} from './styles'

import { useState } from 'react';
import { useEffect } from 'react';

const cards = [
  {
    id: 1,
    thumbnail: card1,
    title: 'Best blog post',
    description: 'Consectetur, quas. Maiores nesciunt quo et iusto ipsam incidunt nam cum. Eaque id accusamus nisi cumque.'
  },
  {
    id: 2,
    thumbnail: card2,
    title: 'Standard blog post',
    description: 'Dolor quisquam qui facilis corrupti voluptatibus? Nemo eos at omnis. Perspiciatis, vel!'
  },
  {
    id: 3,
    thumbnail: card3,
    title: 'Simple blog post',
    description: 'Corrupti vitae assumenda ullam! Iusto atque, harum soluta officiis sit incidunt.'
  },
  {
    id: 4,
    thumbnail: card4,
    title: 'Another blog post',
    description: 'Adipisci voluptatum autem suscipit repellendus recusandae neque alias voluptatibus.'
  }
]

function App() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setState(true)
      } else {
        setState(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <Container>
      <GlobalCss />
      <nav className={state ? 'active' : ''}>
        <div>
          <a href="#home">Landing</a>
          <div>
            <a href="#home">Home</a>
            <a href="#blog">Blog</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
      </nav>

      <Header id="home">
        <Content>
          <main>
            <h1>Landing Page</h1>
            <h2>A simple and modern one page business theme for your company</h2>

            <a href="#" className="button">Call to action</a>
          </main>
        </Content>
      </Header>

      <RecentContainer id="blog">
        <h2 className="heading-2">Recent Posts</h2>
        <h4 className="heading-4">We have a lot to work, so we must take care of our employees</h4>

        <div className="recent--posts">
          {
            cards.map((card, index) => (
              <div key={index} className="card">
                <div
                  className="card--head"
                  style={{ backgroundImage: `url(${card.thumbnail})`}}
                />
                <div className="card--body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href="#">See more &raquo;</a>
                </div>
              </div>
            ))
          }
        </div>
      </RecentContainer>

      <Features id="features">
        <div className="content">
          <h2 className="heading-2">The best features</h2>
          <h4 className="heading-4">
            With features engineered from best practices used byt leading 
            property management companies worldwide.
          </h4>
          <div className="features">
            <div className="features__card">
              <GiPaintBrush size={60} color="#2075EF" />
              <h3>Design with psd files</h3>
              <p>Tempore architecto laudantium, doloribus perspiciatis qui ipsum magni totam explicabo maiores commodi.</p>
            </div>
            <div className="features__card">
              <GiCoffeeCup size={60} color="#2075EF" />
              <h3>Support & Coffee</h3>
              <p>Alias, officiis assumenda nam cumque, doloribus a beatae quis rerum repudiandae fuga impedit aliquid exercitationem libero in deleniti.</p>
            </div>
            <div className="features__card">
              <GiKeyboard size={60} color="#2075EF" />
              <h3>Clean Coded</h3>
              <p>Omnis sint, delectus libero voluptatibus reprehenderit mollitia nesciunt aliquam debitis assumenda asperiores est sunt molestias.</p>
            </div>
          </div>
        </div>
      </Features>

      <Info
        image={info1}
        title="Responsive - you bet"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi at autem aspernatur mollitia odit doloremque officia distinctio deleniti accusamus, quaerat quibusdam repudiandae laudantium aut quo temporibus, consectetur veritatis beatae?"
      />
      <Info
        image={info2}
        title="Easily changing colors"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi at autem aspernatur mollitia odit doloremque officia distinctio deleniti accusamus, quaerat quibusdam repudiandae laudantium aut quo temporibus, consectetur veritatis beatae?"
        reverse
      />

      <Pricing id="pricing">
        <div>
          <FiUsers size={40} />
          <p>beatae</p>
          <strong>
            <span>$</span>
            <span>29</span>
          </strong>
          <p>adipisicing soluta</p>
          <p>consectetur quos</p>
          <p>repellat nam</p>
          <p>exercitationem</p>
        </div>
        <div>
          <FiHome size={40} />
          <p>beatae</p>
          <strong>
            <span>$</span>
            <span>39</span>
          </strong>
          <p>adipisicing soluta</p>
          <p>consectetur quos</p>
          <p>repellat nam</p>
          <p>exercitationem</p>
        </div>
        <div>
          <FiGlobe size={40} />
          <p>beatae</p>
          <strong>
            <span>$</span>
            <span>49</span>
          </strong>
          <p>adipisicing soluta</p>
          <p>consectetur quos</p>
          <p>repellat nam</p>
          <p>exercitationem</p>
        </div>
        <div>
          <FiAirplay size={40} />
          <p>beatae</p>
          <strong>
            <span>$</span>
            <span>59</span>
          </strong>
          <p>adipisicing soluta</p>
          <p>consectetur quos</p>
          <p>repellat nam</p>
          <p>exercitationem</p>
        </div>
      </Pricing>

      <Buy>
        <div>
          <h1>Simple and effective landing page</h1>
          <h2>Deserunt iusto voluptates alias vitae assumenda porro minus neque.</h2>

          <a href="#" className="button">Buy it for $15</a>
        </div>
      </Buy>

      <footer>
        Developed by <a href="https://github.com/peedrojs" target="_blank" rel="noopener noreferrer">peedrojs</a>
      </footer>
    </Container>
  );
}

export default App;
