import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className='app'>
          <Header />
            <Routes>
              <Route path='/' element={<NotesListPage />} />
              <Route path='/note/:id' element={<NotePage />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
