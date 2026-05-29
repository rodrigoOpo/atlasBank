import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {

  const loggedIn = {firstname: 'Rodrigo'}

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
              <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstname || "guest"}
                subtext="Access and manage your account and transactions efficiently"
              />


              <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={12000.50}
              />
            </header>
        </div>
    </section>
  )
}

export default Home;