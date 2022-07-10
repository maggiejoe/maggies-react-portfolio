import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
// import Navigation from './components/Naviation';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Page from './components/Page'

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
  // console.log(currentCategory);
  
  const renderPage = () => {
    if (currentCategory === 'About Me') {
        return (
            <About></About>
        )
    } else if (currentCategory === 'Portfolio') {
        console.log(currentCategory);
        return (
            <Portfolio></Portfolio>
        )
    } else if (currentCategory === 'Contact Me') {
        return (
            <ContactForm></ContactForm>
        )
    } else if (currentCategory === 'Resume') {
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
    <div>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <main>
        {/* <Page currentCategory={currentCategory}></Page> */}
        { renderPage() }
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App;
