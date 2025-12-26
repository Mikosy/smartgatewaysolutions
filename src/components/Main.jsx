import Navbar from '/src/components/Navbar'
import BannerContents from '/src/components/BannerContents'
import Security from '/src/components/Security'
import Mortgage from '/src/components/Mortgage'
import Decision from '/src/components/Decision'
import Plans from '/src/components/Plans'
import Partners from '/src/components/Partners'
import Footer from '/src/components/Footer'


function Main() {
  return (
    <>
      <div className="background-image">
        <Navbar />

        <main className="main">
          <BannerContents />
        </main>

      </div>

      <div className="first-section">
        <Security />
      </div>

      <div className="perfect-mortgage">
        <Mortgage />
      </div>

      <div className="first-section">
        <Decision />
      </div>


      <div className="plans">
        <Plans />
      </div>

      <div className="partners">
        {/* <Partners /> */}
      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Main;
