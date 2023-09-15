import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
import rocket from '../assets/rocket.svg'

export const SidebarBottom = () => {
  return (
    <article className="lowerSide">
        <div className="listItems">
            <img className='listItemsImg' src={home} alt="Home" />
            Home
        </div>
        <div className="listItems">
            <img className='listItemsImg' src={saved} alt="Saved" />
            Saved
        </div>
        <div className="listItems">
            <img className='listItemsImg' src={rocket} alt="Upgrade" />
            Upgrade to Pro
        </div>
    </article>
  )
}
