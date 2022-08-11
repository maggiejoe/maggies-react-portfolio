import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    {
      name: 'About'
    },
    {
      name: 'Work'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Skills'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  const renderPage = () => {
    if (currentCategory === 'About') {
      return (
        <About></About>
      )
    } else if (currentCategory === 'Work') {
      return (
        <Portfolio></Portfolio>
      )
    } else if (currentCategory === 'Contact') {
      return (
        <ContactForm></ContactForm>
      )
    } else if (currentCategory === 'Skills') {
      return (
        <Resume></Resume>
      )
    } else {
      return (
        <About></About>
      )
    }
  }

  return (
    <div className=''>
      <div className=''>
        <div>
          <Header
            categories={categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          ></Header>
          <main >
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
