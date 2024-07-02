import ScoreCard from './components/ScoreCard';
import SummaryCard from './components/SummaryCard';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center xl:min-h-screen">
      <div className="xl:grid xl:grid-cols-2 xl:mb-4 xl:w-1/2  w-full">
        <ScoreCard  className="m-0 p-0" />
        <SummaryCard className="m-0 p-0" />
      </div>
      <Footer />
    </div>
  );
}

export default App;