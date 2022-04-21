import '../App.css';
import React from 'react';
import Login from '../Login';
import temp from '../stuff/temp.png';
import temp2 from '../stuff/temp2.png';
import temp3 from '../stuff/temp3.jpg';

function Landing() {
  return (
    <div className="body">
      <div className="landingcontainer">
        <div className="landing1">
          <div className="landing1items">
            <h1 style={{ fontSize: '60px', fontFamily: 'Copperplate, fantasy' }}>OnlyPans</h1>
            <p>The best way to find recipes you love</p>
            <p>and plan your meals ahead of time!</p>
            <Login />
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '30px', fontFamily: 'Copperplate, fantasy' }}>Check out Recipes</h3>
          <div className="landingcontainer2">
            <div>
              <h5>RECIPE OF THE DAY</h5>
              <p>
                If you aren&apos;t sure what to make, you can check out our Recipe of the Day.
              </p>
              <br />
              <h5>OTHER RECOMMENDATIONS</h5>
              <p>
                Aside from the Recipe of the Day, we also recommend other recipes to you based off
                of you search history.
              </p>
              <br />
              <h5>FAVORITES</h5>
              <p>
                Any recipe that you really love you can add to your own favorites list to
                easily access again.
              </p>
            </div>
            <div className="containerimage">
              <img src={temp} alt="" width="500" height="300" />
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '30px', fontFamily: 'Copperplate, fantasy' }}>Plan out your meals on a Calendar</h3>
          <div className="landingcontainer2">
            <div className="containerimage">
              <img src={temp2} alt="" width="500" height="300" />
            </div>
            <div>
              <h5>PERSONAL PLANNER</h5>
              <p>
                You have your own calendar in which you can plan out ahead of time and add the meals
                you want to make.
              </p>
              <br />
              <h5>CONVENIENT AND EASY TO USE</h5>
              <p>
                It is simple and fast to search for recipes to add to the calendar.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '30px', fontFamily: 'Copperplate, fantasy' }}>Detailed Recipe Information</h3>
          <div className="landingcontainer2">
            <div>
              <h5>PRECISE MEASUREMENTS</h5>
              <p>
                The ingredients we list in our recipes come with precise measurements so you
                don&apos;t have to worry about it.
              </p>
              <br />
              <h5>VIDEO TUTORIAL</h5>
              <p>
                We also provide links to youtube video tutorials for recipes.
              </p>
            </div>
            <div className="containerimage">
              <img src={temp3} alt="" width="500" height="300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
