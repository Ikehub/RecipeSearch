import './App.css';
import './style.css'; 
import chicken from './stuff/chicken.jpg';
import beef from './stuff/beef.jpg';
import potatoes from './stuff/potatoes.jpg';
import soup from './stuff/soup.jpg';
import {useState, useEffect, useRef} from 'react';
function App() {

  const recentlyViewedDefault = [
    {"title": "Chicken Parmigiana",
      "summary": "Chicken parmigiana, or chicken parmesan, is a dish that consists of breaded chicken breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese.",
      "image": chicken
    },
    {"title": "Beef Stroganoff",
      "summary": "Beef Stroganoff or Beef Stroganov is originally a Russian dish of sauteed pieces of beef served in a sauce of mustard and smetana.",
      "image": beef
    },
    {"title": "Mashed Potatoes",
      "summary": "Mashed potato, mashed potatoes or mashed taters, colloquially known as mash, is a dish made by mashing boiled potatoes, usually with added milk, butter, salt and pepper.",
      "image": potatoes
    },
  ];
  const random_recipe = {"title": "Potato Soup", "summary": "Potato soup is made from potatoes with originated in Peru, 7000 years ago. Today, this vegetable is one of the popular vegetables in every cuisine and is used for normal day to day food preparations.", "image": soup};
  const [recentlyViewed, setRecentlyViewed] = useState(null);
  const recipe_of_the_day = useRef(random_recipe);
  const username = useRef("John Martin");

  useEffect(() => {  
    setRecentlyViewed(recentlyViewedDefault.map(rv_div))
  }, [])

  function searchBar(e){
    e.preventDefault();
  }
  function rv_div(recipe){
    return (
      <div id="recently_viewed_div" class="">
        <img id="image" alt="recipe image" src={recipe["image"]}></img>
        <div style={{position: "absolute", display: "inline", left: "35%"}}>
          <h1 id="recipe-title" style={{fontSize: "17px", fontFamily: "Arial", fontWeight: "500"}}>{recipe["title"]}</h1>
          <h1 style={{fontSize: "15px", marginLeft: "15px", marginRight: "15px", fontFamily: "Arial", fontWeight: "300"}}>{recipe["summary"]}</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div id="top-header" class="parent default">
        <h1 id="header-title" class="child default">RECIPE SEARCH</h1>
        <button id="meal-prep" type="button" class="child default button">MEAL PREP CALENDAR</button>
        <form onSubmit={searchBar}>
          <input id="search" type="text" placeholder="SEARCH" class="child default"></input>
        </form>
      </div>
      <div id="main-body" class="parent default">
        <div id="body-1" class="child default">
          <div style={{position: "absolute", width: "93%", height: "93%", margin: "3%", borderRadius: "3px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}></div>
          <h1 id="recipe_of_day" class="">Recipe of the Day</h1>
          <h1 style={{fontFamily: "Inter, sans-serif", fontSize: "30px", fontWeight: "400"}}>{recipe_of_the_day.current["title"]}</h1>
          <div id="image_recipe_of_day" class="">
            <img alt="recipe of the day" src={recipe_of_the_day.current["image"]} style={{width: "100%", height: "100%", borderRadius: "2px"}}></img>
          </div>
          <button id="favorites" type="button">ADD TO FAVORITES</button>
          <h1 style={{fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: "300", marginLeft: "8%", marginRight: "8%"}}>{recipe_of_the_day.current["summary"]}</h1>
        </div>
        <div id="body-2" class="child default">
          <h1 id="recently_viewed" class="">Try these recipes</h1>
          {recentlyViewed}
        </div>
        <div id="body-3" class="child default">
          <h1 id="user-hello-text">Signed in as</h1>
          <h1 id="username">{username.current}</h1>
          <button id="logout" type="button">LOGOUT</button>
          <div id="user-hello" class="child default">
            <h1>your favorites</h1>
            <h1 style={{fontFamily: "Jost, sans-serif", fontWeight: "300", fontSize: "20px"}}>you have no favorites :(</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
