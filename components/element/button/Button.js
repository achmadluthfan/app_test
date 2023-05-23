import PropTypes from 'prop-types'

// Contoh pemakaian:
// <Link href="/test">
//   <Button type="primary" color="blue" size="sm" className="text-6xl">
//     Test
//   </Button>
// </Link>
// <Button type="secondary" color="orange" size="md" disabled className="ml-[40px]">
//   Test2
// </Button>
// <Button type="primary" color="orange" size="xs" onClick={() => console.log('test')}>
//   Test3
// </Button>

export function Button({ children, type, color, size, disabled, onClick, className }) {
  let typeClassName
  if (type === 'primary') {
    if (color === 'orange') {
      typeClassName =
        'text-white bg-orange-500 outline-orange-500 hover:text-orange-500 hover:bg-white hover:outline-orange-300 active:text-orange-600 active:bg-orange-100 active:outline-orange-600'
    } else if (color === 'blue') {
      typeClassName =
        'text-white bg-blue-500 outline-blue-500 hover:text-blue-500 hover:bg-white hover:outline-blue-300 active:text-blue-400 active:bg-blue-100 active:outline-blue-400'
    }
    typeClassName += ' disabled:text-white disabled:bg-neutral-500 disabled:outline-neutral-500'
  } else if (type === 'secondary') {
    if (color === 'orange') {
      typeClassName =
        'text-orange-400 bg-[#FFF6F2] outline-orange-500 hover:text-orange-50 hover:bg-[#EB7F5D] hover:outline-orange-400 active:text-orange-300 active:bg-[#E86C45] active:outline-orange-300'
    } else if (color === 'blue') {
      typeClassName =
        'text-blue-400 bg-[#EDF9FE] outline-blue-400 hover:text-blue-50 hover:bg-[#6F98C1] hover:outline-blue-400 active:text-blue-300 active:bg-[#5989B8] active:outline-blue-300'
    }
    typeClassName +=
      ' disabled:text-neutral-500 disabled:bg-neutral-100 disabled:outline-neutral-300'
  }
  let sizeClassName
  if (size === 'xs') {
    sizeClassName = 'px-[28px] py-[10px] outline-2 -outline-offset-1'
  } else if (size === 'sm') {
    sizeClassName = 'px-[32px] py-[12px] outline-2 -outline-offset-1'
  } else if (size === 'md') {
    sizeClassName = 'px-[32px] py-[16px] outline-2 -outline-offset-1'
  } else if (size === 'lg') {
    sizeClassName = 'px-[32px] py-[20px] outline-3 -outline-offset-2'
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${typeClassName} ${sizeClassName} ${className} rounded-[10px] font-rubik font-semibold outline duration-300 active:duration-0`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  color: PropTypes.oneOf(['orange', 'blue']).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
}
Button.defaultProps = {
  disabled: false,
  onClick: () => undefined,
  className: '',
}
export default Button
