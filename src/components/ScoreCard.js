import Score from "./Score.js";

const ScoreCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center
                    text-center text-white font-hankenGrotesk
                    bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue
                    w-full rounded-b-3xl
                    xl:rounded-3xl xl:shadow-lg">
      <h1 className="m-4">Your Result</h1>
      <Score />
      <h2 className="text-2xl">Great</h2>
      <p className="mr-4 mb-6 ml-4 p-4">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
}

export default ScoreCard;
