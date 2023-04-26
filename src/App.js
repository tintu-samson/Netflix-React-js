import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/Rowpost/RowPost';
import { action, originals,comedy, horror, romance, documentries } from './urls';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals'   />
      <RowPost url={action} title='Action' isSmall={true}   />
      <RowPost url={comedy} title='Comedy' isSmall={true}   />
      <RowPost url={horror} title='Horror' isSmall={true}   />
      <RowPost url={romance} title='Romance' isSmall={true}   />
      <RowPost url={documentries} title='Documentries' isSmall={true}   />
    </div>
  );
}

export default App;
