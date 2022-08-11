import AmountInput from '@/components/amountInput'

const Home = () => {
  return (
    <div className="flex min-w-full justify-center ">
      <div className="w-full max-w-sm ">
        <div className="b mt-4 w-full">
          <div className=" mb-8 select-none border-b-2 pb-2 text-2xl text-white">
            amountInput.txs
          </div>
          <div className="mb-6">
            <div className="text-md mb-2 text-slate-300">(0 decimal):</div>
            <AmountInput />
          </div>
          <div className="mb-6">
            <div className="text-md  mb-2 text-slate-300">(1 decimal):</div>
            <AmountInput maxDecimals={1} />
          </div>
          <div className="mb-6">
            <div className="text-md  mb-2 text-slate-300">(2 decimals):</div>
            <AmountInput maxDecimals={2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
