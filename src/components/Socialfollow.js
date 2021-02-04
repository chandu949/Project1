import React from "react";
import {faYoutube,faFacebook,faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Socialfollow(props) {
return (
  <div className="mt-2 back">
    <footer className=" text-center text-white">
       

<a href="https://www.youtube.com/c/jamesqquick"
  className="mt-2 youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>

<div className="col mt-4">
    <a href="https://www.boxofficemojo.com/" className="foot">Box Office Mojo</a>
    <a href="https://www.apple.com/tv/" className="foot">Apple t.v</a>
    <a href="https://help.imdb.com/imdb?ref_=ft_hlp" className="foot">Help</a>
    <a href="https://developer.imdb.com/?ref=ft_ds" className="foot">Developer</a>
</div>

<div className="col mt-2">
    <a href="https://advertising.amazon.com/resources/ad-specs/imdb/?ref_=a20m_us_spcs_imdb" className="foot">Jobs</a>
    <a href="https://www.imdb.com/conditions?ref_=ft_cou" className="foot">conditions to use</a>
    <a href="https://www.amazon.co.uk/gp/video/detail/B07YLBJYNB" className="foot">Privacy</a>
    <a href="https://www.imdb.com/pressroom/?ref_=ft_pr" className="foot">Press Room</a>
</div>

<p className="mt-3">My website Page(on work from 2020jun)</p>

      </footer>
 </div>  
 );
}

export default Socialfollow;


     


