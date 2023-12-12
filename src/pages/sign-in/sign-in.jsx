import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LoginForm from "../../components/login-form/login-form"; 

function SignIn() {
  return (
  <div>
    <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <LoginForm />
        </section>
      </main>
    <Footer />
  </div>
  )
}

export default SignIn