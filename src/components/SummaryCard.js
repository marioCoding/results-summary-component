import Result from './Result';
import Reaction from '../assets/images/icon-reaction.svg';
import Memory from '../assets/images/icon-memory.svg';
import Verbal from '../assets/images/icon-verbal.svg';
import Visual from '../assets/images/icon-visual.svg';

const SummaryCard = () => {
  return (
    <div className="w-full font-hankenGrotesk">
      <h1 className="m-6 font-bold text-lg">Summary</h1>

      <div className="relative flex justify-start flex-col m-4">
        <div className="bg-lightRed text-lightRed bg-opacity-5 m-2">
          <Result icon={Reaction} text="Reaction" score="80" />
        </div>
        <div className="bg-orangeyYellow text-orangeyYellow bg-opacity-5 m-2">
          <Result icon={Memory} text="Memory" score="92" />
        </div>
        <div className="bg-greenTeal text-greenTeal bg-opacity-5 m-2">
          <Result icon={Verbal} text="Verbal" score="61" />
        </div>
        <div className="bg-cobaltBlue text-cobaltBlue bg-opacity-5 m-2">
          <Result icon={Visual} text="Visual" score="72" />
        </div>

        <button className="w-auto p-3 mt-4 mr-2 ml-2 font-bold
                        text-white bg-darkGrayBlue rounded-3xl">
          Continue
        </button>
      </div>
    </div>
  );
}

export default SummaryCard;