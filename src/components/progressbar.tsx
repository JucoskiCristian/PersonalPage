import { useSpring, animated } from '@react-spring/web'

interface ProgressbarProps {
  rate: number
  name: string
  id: string
}

export function Progressbar({ rate, name, id }: ProgressbarProps) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: rate },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  })
  return (
    <div className="relative size-40">
      <svg
        className="size-full rotate-180"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          id="test"
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          stroke-width="1"
          stroke-dasharray="50 100"
          stroke-linecap="round"></circle>

        <circle
          id={id}
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-teal-300"
          stroke-width="1.5"
          stroke-dasharray="0 100"
          stroke-linecap="round"></circle>
      </svg>

      <div className="absolute start-1/2 top-9 -translate-x-1/2 transform text-center">
        <animated.div className="text-3xl font-bold text-teal-300">
          {number.to((x) => x.toFixed(0))}
        </animated.div>
        <span className="block text-sm text-teal-300">{name}</span>
      </div>
      <div></div>
    </div>
  )
}
