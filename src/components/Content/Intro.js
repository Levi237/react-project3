import React from 'react'

const Intro = () => 
    <>
        <h1>Mission Statement</h1>

        The purpose of this website is to provide information to park enthusiasts that is not readily available on the already exisiting nps.gov website.  The drop down menu allows users to select a specific national park for which they can get more detailed information:
    <ul>
        <li><strong>About tab:</strong> Introduces the web developer (that's me!) and delves into specific project details. </li>
        <li><strong>Parks tab:</strong> Provides a description of the selected park and gives basic information about the park itself as well as a google map image.  </li>
        <li><strong>Alerts tab:</strong> Gives a list of parks that are closed unexpectedly and current updates on park closures.  Allows users to create an account so they can track specific park closures and be notified of re-openings.</li>
        <li><strong>Star Map tab:</strong> Serves as a digital star guide for astronomers and star gazers.  Provides both a large and small window to view the constellations above each location selected in the drop down menu for any given time.</li>

    </ul><br />
<h1>Origins</h1>
<p>With outdoor activities such as camping and back-packing gaining in popularity, it has become increasingly difficult to obtain access permits to federal parks.  On average, reservations to popular wilderness zones often need to be made six months in advance. However, unpredictable natural disasters such as fires and mudslides that cause park closures can compromise even the most well-planned trips.  Not knowing when the park will re-open is an additional obstacle to planning the perfect outdoor adventure.</p>
<p>The original intent of this website was to provide the public with information about parks’ statuses.  Not only would a user be able to search for current park closures and openings, but also sort through data to easily store, track, and retrieve infomation specific to their selected parks and assist with their planning. Since then more content has been added to enhance the user experience.</p>


        {/* <p> 
            Nature is one of our greatest resources.  <br />
            As outdoor activities such as backpaking have gained in popularity, 
            the ability to get an access permit has become more difficult.  
            Most of the best wilderness zone reservations need to be made 6 months prior to date.  
            However, no one can predict when the next disaster will happen.  When something does occur, 
            such as fire or mud slide, parts of a park can close.  Planning for these trips can become 
            compromised since most times you cannot predict when a park will re-open.
            <br /><br />
            My goal with this project is to make it easier for people to know when access becomes available again to allow the public.
        </p>
        <p>Originally this site was created to sort and filter through two npg.gov endpoints to create a list of alerts that were specifically closed park areas.  Once the alerts api endpoint removed the closed park, I created a program to spot those removed parks and concurrently change the status of that closure to "Now Open".  This project required full stack usage of MERN with CRUD function.  For kicks I also added Google Maps because it felt right and I wanted to understand that api better.</p>
        <p>Now this site has become more to make use of the data I collected, turning my site from a "Park Alert" to a "Park Experience" or as I have decided to call it, a "Park In-stance"... get it?  In-stance?  hmmm..</p> */}
    </>

export default Intro