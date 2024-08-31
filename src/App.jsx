import './App.css'
import { AmountProceed } from './components/AmountProceed'
import { NextPayoutCard } from './components/NextPayoutCard'
import { Overview } from './components/Overview'
import { PaymentHeader } from './components/PaymentHeader'
import { RevenueCard } from './components/RevenueCard'
import { Statistics } from './components/Statistics'
import { Transactions } from './components/Transactions'
import { TransactionsStatus } from './components/TransactionsStatus'

function App() {
  return (
    <div>
      {/* <PaymentHeader></PaymentHeader>
      <main className=' p-3 sm:p-8 w-full gap-8 flex flex-col'>
        <Overview></Overview>
        <NextPayoutCard title={"Next Payout"} amount={"2,312,.23"} orderCount={23} orderDate={"Today, 4:00PM"} />
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={23} />
        <AmountProceed title={"Amount Processed"} amount={"23,92,312.19"} />
        <Transactions></Transactions>
        <TransactionsStatus></TransactionsStatus>
      </main> */}
      <Statistics></Statistics>
    </div>
  )
}

export default App
