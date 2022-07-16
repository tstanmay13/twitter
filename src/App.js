
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widget/Widgets';

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
