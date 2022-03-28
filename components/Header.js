import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
      <span>Ipsum</span> News
      </h1>
      <p className={headerStyles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus beatae deserunt voluptates ratione maiores! Vel!</p>
    </div>
  )
}

export default Header
