import '../../index.css';
import argentBankLogo from "../../assets/img/argentBankLogo.png"

function Header() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./Home">
        <img
          className="main-nav-logo-image"
          src= {argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/SignIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Header