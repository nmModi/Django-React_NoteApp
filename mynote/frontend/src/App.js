import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import {HashRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <HashRouter>
      <div className="container dark">
        <div className='app'>
          <Header />
            <Routes>
              <Route path='/' element={<NotesListPage />} />
              <Route path='/note/:id' element={<NotePage />} />
            </Routes>
          </div>
      </div>
    </HashRouter>
  );
}

export default App;
