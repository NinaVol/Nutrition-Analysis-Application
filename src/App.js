import { useEffect, useState } from 'react';
import './App.css';
import video from './BackVideoNutritionApp.mp4'
import { Nutrition } from './Nutrition';
import { LoaderPage } from './LoaderPage';

function App() {

  const [mySearch, setMySearch] = useState();
  const [userWords, setUserWords] = useState('');
  const [nutritionResult, setNutritionResult] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const MY_ID = 'a2727b9f';
  const MY_KEY = '448014caf6ce6940a24de1e54ecf62eb';  

  const fetchNutritionData = async (ingredients) => {
    setStateLoader(true);

    const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${MY_ID}&app_key=${MY_KEY}`, 
      {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingredients })
    });

    
     if (response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setNutritionResult(data);
    }
     else {
      setStateLoader(false);
      alert('ingridients entered incorrectly')
     }

     

  };

  const myNutritionsSearch = e => {
    setMySearch(e.target.value)
  }

  const getResult = e => {
    e.preventDefault();
    setUserWords(mySearch);
  }

  useEffect(() => {
    if (userWords !== '') {
      let ingredients = userWords.split(/[,,;,\n,\r]/);
      fetchNutritionData(ingredients);
    }
  },[userWords])


  return (
  
      <div className="container">
        {stateLoader && <LoaderPage/>}

        <video autoPlay muted loop>  
          <source src={video} type="video/mp4" />
        </video> 
        <h1>Nutrition Facts</h1>
        <form onSubmit={getResult}>
          <input placeholder='ex: 1 apple, 2 banana' onChange={myNutritionsSearch}/>
          <button type='submit'>Search</button>
        </form>
        <div>
          {
          nutritionResult && <p className='information'>{nutritionResult.calories} kcal</p>
          }
          {
          nutritionResult && Object.values(nutritionResult.totalNutrients).map(({ label, quantity, unit}) =>
           <Nutrition
           key={label}
           label={label}
           quantity={quantity}
           unit={unit}
           />
         )
        }
        </div>
      </div>
     
     
  
  );
}

export default App;


