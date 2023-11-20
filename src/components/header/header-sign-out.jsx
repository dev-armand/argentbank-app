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
      <a class="main-nav-item" href="./User">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./Home">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
  )
}

export default Header