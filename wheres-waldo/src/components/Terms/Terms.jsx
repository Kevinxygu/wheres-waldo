import React from "react";
import './Terms.css'

const Terms = ({changePage}) => {
    const returnToHome = () => {
        changePage("home");
      };

      return (
        <div className="termsContainer">
            <a className="back" onClick={returnToHome}>Back</a>
            <p className="termsParagraph">
                This app is not affiliated with or endorsed by the rights holders of "Where's Waldo" or any related entities. All images used are from the public domain and are not being used for commercial purposes. This app does not claim the rights to the original "Where's Waldo" characters, illustrations, or books. All rights to the original work remain with the copyright holders.


                <br></br>

                <br></br>



                This app was developed purely for learning purposes and to build something fun! It will not be monetized. More information is in this <a className="githubLink" target="_blank" href="https://github.com/Kevinxygu/wheres-waldo">GitHub repository</a>.
                <br></br>

                <br></br>

                Thank you so much!
            </p>

        </div>


      )
}

export default Terms;