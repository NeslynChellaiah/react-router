import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import About from './about';
import Home from './home';
import Error from './Error';


function App() {
  const location = useLocation()
  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-90vh" 
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6}
    },
    exit: {
      opacity: 0,
      y: "90vh",
      transition: {duration: 0}
    }
  }
  return (
    <>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
      </nav>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/" exact>
              <Home pageVariants={pageVariants}/>
            </Route>
            <Route path="/about" exact>
              <About pageVariants={pageVariants}/>
            </Route>
            <Route path="*">
              <Error pageVariants={pageVariants}/>
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
