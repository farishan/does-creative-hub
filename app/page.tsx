import Link from "next/link";
import FeaturedInstagramPost from "./_components/FeaturedInstagramPost";

export default function Home() {
  return (
    <>
      <main>
        <div className="container my-8 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="col-span-1 overflow-auto order-2 lg:order-1">
              <div className="bg-black"></div>
              <FeaturedInstagramPost />
            </div>
            <div className="col-span-1 order-1 lg:order-2">
              <h1 className="text-7xl lg:text-9xl lg:leading-none font-black mb-8 lg:mb-16 break-words lg:-ml-1">DOES Creative Hub</h1>
              <p className="text-lg lg:text-xl mb-8">A creative space, workshop,<br/>and <Link href="/does-les" className="underline hover:no-underline"><em>DOES Les</em></Link> By <Link href="https://doesuniversity.id" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">DOES University</Link>.</p>
              <div className="flex flex-wrap md:flex-nowrap items-center">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeGI5GsnAS_P5lUZkWT8WO9c4PP4O5LjJ33pTIEa8-k_mWxeg/viewform" target="_blank" rel="noopener noreferrer" className="block w-full md:w-max py-4 px-8 bg-black text-white duration-200 hover:bg-transparent hover:text-black border-4 border-transparent hover:border-black text-center md:text-left md:mr-8 mb-8 md:mb-0 font-black uppercase">Register Now!</Link>
              </div>

              <div className="mt-8 md:mt-16 text-neutral-800">
                <p className="font-bold">Contact Us</p>
                <p>0851 5618 1651</p>
                <p><Link href="https://www.instagram.com/doescreativehub/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Follow us on Instagram!</Link></p>
                <p><Link href="https://maps.app.goo.gl/gTeK6o938DZQoyzm8" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Sleman, Yogyakarta</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container my-8 lg:my-16">
          <p className="text-sm font-light opacity-50 tracking-wide">Copyright &copy; {new Date().getFullYear()} - <Link href="https://doesuniversity.id" target="_blank" rel="noopener noreferrer" className="hover:underline">DOES University</Link> | Site by DOES Programmer</p>
        </div>
      </footer>
    </>
  )
}
