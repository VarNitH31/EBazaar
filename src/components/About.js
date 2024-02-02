import React from 'react'
import "../cssfiles/about.css"
import NavBar from './NavBar'
import Footer from './Footer'
function About() {
  return (
    <div>
        <NavBar/>
      <div class="aboutbod">
    <header>
        <h1>About Us </h1>
    </header>

    <main>
        <h2>Welcome to E-Bazaar</h2>

        <p>
            At E-Bazaar, we are passionate about providing high-quality electronic products to our customers.
            entertainment systems, we have it all.
        </p><br/><br/>
        <p>
            E-bazaar is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Vbaazaar strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work.
        </p><br/><br/>

        <p>
            Our mission is to make technology accessible and enjoyable for everyone. We carefully curate our product
            selection to ensure that you have access to the best and most reliable electronics on the market.
        </p>

        <p>
            Our team of experts is dedicated to providing excellent customer service. If you have any questions or
            need assistance, feel free to reach out to our customer support team. We're here to help!
        </p><br/><br/>
    </main>
</div>
<Footer/>
    </div>
  )
}

export default About
