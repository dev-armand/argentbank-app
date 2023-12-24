import '../../index.css';
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import { connect } from 'react-redux';
import { userLogout } from '../login-form/userActions';
import { useSelector } from 'react-redux';

function Header({ userLogout }) {

  const userProfile = useSelector((state) => state.user.userProfile);

  const handleLogout = () => {
    userLogout();
    console.log("token");
  };

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
      <a className="main-nav-item" href="./User">
          <i className="fa fa-user-circle"></i>
          {userProfile.userName}
        </a>
        <a className="main-nav-item" href="./Home" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
  )
}

export default connect(null, { userLogout })(Header);