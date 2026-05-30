import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {

  const loggedIn = 
  { $id: "string",
  email: "string",
  userId: "string",
  dwollaCustomerUrl: "string",
  dwollaCustomerId: "string",
  firstName: "string",
  lastName: "string",
  name: "2",
  address1: "string",
  city: "string",
  state: "string",
  postalCode: "string",
  dateOfBirth: "string",
  ssn: "string"
}

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
              <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "guest"}
                subtext="Access and manage your account and transactions efficiently"
              />


              <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={12000.50}
              />
            </header>

        </div>

        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{
          currentBalance: 123.00,
        },{
          currentBalance: 500.32,
        }]}
        />
    </section>
  )
}

export default Home;