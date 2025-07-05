import './App.css'
import './index.css'

function App(){
  return (
    <>
      <main className='min-h-full min-w-[375px] lg:w-[1440px] bg-transparent p-0 lg:p-16 font-poppins flex flex-col items-center justify-start'>
        <header className='w-full lg:w-1/4 text-center px-24'>
          <h1 className='font-[200] text-xl text-gray-400'>Reliable, efficient delivery</h1>
          <h1 className='font-[600] text-xl text-gray-500'>Powered by Technology</h1>
          <h1 className='text-sm text-gray-400'>Our Artificial Intelligence powered tools inspire millions of projects accross the globe. Feel free to explore them.</h1>
        </header>
        <article className='grid px-24'>
          <div className='w-full'>
             <h4 className='font-[600] text-gray-500'>Team Builder</h4>
             <p>Scans and see how to scout new members to for us to grow</p>
             <img src="/images/icon-team-builder.svg" alt="Team builder image" />
          </div>
        </article>
      </main>
    </>
  )
}

export default App
