import { Link } from "react-router-dom"
// import PageMeta from "../components/PageMeta"


const NotFound = () => {
  return (
    <div className='flex justify-center items-center bg-[#101010] h-screen '>
     {/* <PageMeta
        title='Page not found'
      />  */}
     <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">ERROR 404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">Page not ready</h1>
          <p className="mt-6 text-base leading-7 text-gray-400">Sorry! This page is being serviced </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
         
            <Link
              to=""
              className="rounded-sm bg-gray-200 px-5 py-3.5 text-base font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Go back home
            </Link>
           
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound