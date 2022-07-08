import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
// import Navigation from './components/Naviation';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact Me'
    },
    {
      name: 'Resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <main>
        <About></About>
        {(() => {
          if (currentCategory === "About Me") {
            return (
              <div>
                <About></About>
              </div>
            );
          } else if (currentCategory === "Portfolio") {
            return (
              <div>
                <Portfolio></Portfolio>
              </div>
            )
          } else if (currentCategory === "Contact Me") {
            return (
              <div>
                <ContactForm></ContactForm>
              </div>
            )
          } else if (currentCategory === "Resume") {
            return (
              <div>
                <Resume></Resume>
              </div>
            )
          }
        })}
      </main>
    </div>
  );
}

export default App;
