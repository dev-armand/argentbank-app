import '../../index.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import FeatureItem from '../../components/feature-item/feature-item';

import IconChat from "../../assets/img/icon-chat.png"
import IconSecurity from "../../assets/img/icon-security.png"
import IconMoney from "../../assets/img/icon-money.png"

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
          icon={IconChat}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            icon={IconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            icon={IconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;