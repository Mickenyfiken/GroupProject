import { Link } from 'react-router'
import leftArrowIcon from '../../assets/icons/left-arrow.svg'
import rightArrowIcon from '../../assets/icons/right-arrow.svg'
import clsx from 'clsx'

const PaginationButton = ({
  label,
  link,
  state,
  direktion = 'next',
}: {
  label: string
  link: string
  state: {
    backgroundLocation: unknown
  }
  direktion?: 'next' | 'prev'
}) => {
  const isNext = direktion === 'next'
  return (
    <Link
      to={link}
      state={state}
      className="grid grid-cols-5 gap-6 p-4 bg-black/80 md:text-lg w-[268px]"
    >
      <img
        src={isNext ? rightArrowIcon : leftArrowIcon}
        alt=""
        className={clsx('md:h-4 place-self-end', isNext && 'self-end')}
      />
      <span
        className={clsx(
          'col-span-4 overflow-hidden pb-2 h-[2lh]',
          isNext ? 'col-start-1 row-start-1' : 'text-right'
        )}
      >
        {label}
      </span>
    </Link>
  )
}

export default PaginationButton
