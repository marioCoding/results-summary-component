const Result = ( {icon, text, score}) => {
  return (
    <div className="result justify-between">
      <div className="flex">
        <div className="flex">
          <img src={icon} alt={text} />
          <span className="ml-3 font-bold">{text}</span>
        </div>
      </div>

      <div className="text-light text-darkGrayBlue">
        <span className="text-darkGrayBlue font-bold">{score} </span>
        / 100
      </div>
    </div>
   )
}

export default Result;