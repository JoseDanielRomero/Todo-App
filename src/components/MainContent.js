import '../stylesheets/MainContent.css'
import InputTask from './InputTask';

function MainContent() {
    return (
        <main className='main-container'>
            <article className='logo-and-toogle-container'>
                <h1 className='logo'>
                    TODO
                </h1>
                <button className='toogle-button' />
            </article>
            <InputTask />
        </main>
    )
}

export default MainContent;