
export default function Header(){
    const navigationLinks = [
        { text: 'CHARACTERS', path: '/characters' },
        { text: 'COMICS', path: '/comics' },
        { text: 'MOVIES', path: '/movies' },
        { text: 'TV', path: '/tv' },
        { text: 'GAMES', path: '/games' },
        { text: 'COLLECTIBLES', path: '/collectibles' },
        { text: 'VIDEOS', path: '/videos' },
        { text: 'FANS', path: '/fans' },
        { text: 'NEWS', path: '/news' },
        { text: 'SHOP', path: '/shop' }
      ];


    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img src="./img/dc-logo.png" alt="" />
                    </div>
                    <div className="col-2">
                        <ul>
                            {navigationLinks.map((link, id) => (
                                <li key={id}>
                                    <a href={link.path}>{link.text}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}