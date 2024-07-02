import ScoreCard from './components/ScoreCard';
import SummaryCard from './components/SummaryCard';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <ScoreCard />
      <SummaryCard title="Summary"/>
      <Footer />
    </div>
  );
}

export default App;