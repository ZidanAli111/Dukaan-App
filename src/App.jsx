import './App.css'
import { AmountProceed } from './components/AmountProceed'
import { NextPayoutCard } from './components/NextPayoutCard'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    <div className='grid grid-row-3 gap-2 bg-gray-200'>
      <div className='text-2xl p-4 font-medium shadow-md'>
        Payouts
      </div>
      <div className='text-5xl mb-8 p-4 font-medium'> 
        Overview
      </div>
      <div className='grid grid-cols-3 gap-2 p-4'>

      <NextPayoutCard title={"Next Payout"} amount={"2,312,.23"} orderCount={23} orderDate={"Today, 4:00PM"} />
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={23}  />
        <AmountProceed title={"Amount Processed"} amount={"23,92,312.19"}/>
      </div>
    </div>
  )
}

export default App
