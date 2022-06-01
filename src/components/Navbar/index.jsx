import { ReactComponent as GithubIcon } from '../../assets/img/Github.svg';
import './styles.css';


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><>Mauro Philipe - Full Stack Developer</> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/form/1">Tecnologias</a>
                        </li>

                    </ul>

                    <a className="nav-link" href="/login">
                        <button className="btn" type="submit">Contato</button>
                    </a>

                    
                </div>
                <a href="https://github.com/mauroPh" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/mauroph</p>
            </div>
            </a>
            </div>
        </nav>
    )
}
export default Navbar;