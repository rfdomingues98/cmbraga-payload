type Props = {
  timeLeft: number
  size: number
  color: string
  duration: number
  animate: boolean
}

const CountdownTimer: React.FC<Props> = ({ timeLeft, duration, size, color, animate }) => {
  const circumference = size * Math.PI
  const dashArray = circumference
  const dashOffset =
    duration === timeLeft ? 0 : circumference - (timeLeft / duration) * circumference

  const animateStroke = animate
    ? {
        strokeDasharray: dashArray,
        strokeDashoffset: -dashOffset, // added the negative offset to make the dashline appear in clockwise direction
      }
    : null

  return (
    <div className="relative m-auto h-5 w-5">
      <svg className="absolute h-5 w-5 -rotate-90">
        <circle r="7" cx="9" cy="9" fill="none" strokeWidth={2} className="stroke-shadow" />
        <circle r="7" cx="9" cy="9" fill="none" strokeWidth={2} stroke={color} {...animateStroke} />
        <circle r="4" cx="9" cy="9" fill={color}></circle>
      </svg>
    </div>
  )
}

export default CountdownTimer
