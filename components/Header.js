import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Sports</span> News
      </h1>
      <p className={headerStyles.description}>
        <span className='leading-10 font-normal'>
          Keep up to date with the latest sports news
        </span>
      </p>
    </div>
  )
}

export default Header
