import '../stylesheets/HeaderContent.css'

function HeaderContent({ darkMode }) {

    const changeTheme = darkMode ? 'header-image dark' : 'header-image light';

    return (
        <header className='header-container'>
            <div className={changeTheme}></div>
        </header>
    )
}

export default HeaderContent;