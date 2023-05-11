import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    
    return (
     <header className='header'>
      <h1>{title}</h1>
      <Button color='blue' text='Add' onClick={onClick} />
      </header>
    )
  }
  
  Header.defaultProps = {
    title: "Jamie's Task Tracker",
  }

  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

// CSS in JS
//   const headingStyle = {
//     colour: 'red',
//     backgroundColor: 'black',
//   }


  export default Header
  