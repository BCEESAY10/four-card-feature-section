import './App.css'

function App(){

  return (
    <>
      <main className='min-h-screen w-[100vw] overflow-y-auto bg-transparent font-poppins flex flex-col items-center justify-center'>
        <header className='w-full lg:w-[500px] text-center px-8 space-y-2 my-6'>
          <h2 className='font-[100] text-2xl text-gray-400'>Reliable, efficient delivery</h2>
          <h1 className='font-[600] text-2xl text-gray-500'>Powered by Technology</h1>
          <h3 className='text-sm text-gray-400'>Our Artificial Intelligence powered tools inspire millions of projects accross the globe. Feel free to explore them.</h3>
        </header>
        <article className='grid p-8 lg:p-0 grid-cols-1 lg:grid-cols-3 lg:grid-rows-4 gap-6 lg:w-[1000px] border border-red'>
          <div className='w-[300px] min-h-[200px] relative bg-white p-6 rounded-lg shadow-md border-t-[6px] border-red lg:col-start-1 lg:ml-[350px] lg:row-start-1'>
             <h4 className='font-[600] text-gray-500'>Team Builder</h4>
             <p className='text-sm text-gray-400'>Scans our talent network to create the optimal team for your project</p>
             <img className='absolute h-10 w-10 bottom-4 right-4' src="images/icon-team-builder.svg" alt="Team builder image" />
          </div>

          <div className='w-[300px] min-h-[200px] relative bg-white p-6 rounded-lg shadow-md border-t-[6px] border-cyan lg:col-start-1 lg:row-start-2'>
             <h4 className='font-[600] text-gray-500'>Supervisor</h4>
             <p className='text-sm text-gray-400'>Monitors activity to identify project roadblocks</p>
             <img className='absolute h-10 w-10 bottom-4 right-4' src="/images/icon-supervisor.svg" alt="Team builder image" />
          </div>

          <div className='w-[300px] min-h-[200px] relative bg-white p-6 rounded-lg shadow-md border-t-[6px] border-orange lg:col-start-2 lg:row-start-3'>
             <h4 className='font-[600] text-gray-500'>Karma</h4>
             <p className='text-sm text-gray-400'>Regularly evaluates our talent to ensure quality</p>
             <img className='absolute h-10 w-10 bottom-4 right-4' src="/images/icon-karma.svg" alt="Team builder image" />
          </div>

          <div className='w-[300px] min-h-[200px] relative bg-white p-6 rounded-lg shadow-md border-t-[6px] border-blue lg:col-start-3 lg:row-start-2'>
             <h4 className='font-[600] text-gray-500'>Calculator</h4>
             <p className='text-sm text-gray-400'>Uses data from past projects to provide better delivery estimates</p>
             <img className='absolute h-10 w-10 bottom-4 right-4' src="/images/icon-calculator.svg" alt="Team builder image" />
          </div>
        </article>
      </main>
    </>
  )
}

export default App
