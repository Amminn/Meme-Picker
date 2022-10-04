import catsData from "/data.js"
  
/*
  Challenge:
    1. Set up a "for of" in getEmotionsArray to iterate 
      over the data.
    2. For now, just log out each cat object individually.
    3. Set up a const and initialise it with 
      an empty array.
    4. Instead of logging out each emotion, 
      push each one to the new array.
    5. At the end of the function, log out the 
      const holding the new array.
*/

// use the "for of" instead of for loop to iterate on all the moods

function getEmotionsArray(cats) {
  const result = []
  for (const cat of cats) {
    for (const mood of cat.emotionTags) {
      if (!result.includes(mood)) {
        result.push(mood)
      }
    }
  }
  return result
}

/*
Challenge:
1. Set up an eventlistener which calls a new
   function called "getMatchingCatsArray" when
   the "Get Image" button is clicked.
2. getMatchingCatsArray should save the value
   of the checked radio input to a const and 
   log out that const.
*/

const submitBtn = document.getElementById('get-image-btn')
submitBtn.addEventListener('click', renderCat)

/*
Challenge:
  1. Take control of the gifs only option checkbox.
  2. Set up a const in getMatchingCatsArray to store 
    a boolean which will be set to true if the 
    "gifs only" option is checked and false if it's
    not. (Think what a good name for this const would 
    be.)
  3. Log it out to check it's working.
*/

function getMatchingCatsArray() {
  const gifsOnlyOption = document.getElementById('gifs-only-option')
  const isGif = gifsOnlyOption.checked

  /*
    Challenge:    
    1. Add code to getMatchingCatsArray so 
      that the two existing lines of code 
      only run if an emotion has been selected.
  */
    if(document.querySelector('input[type="radio"]:checked')){
      const selectedEmotion = document.querySelector('input[type="radio"]:checked').value

      /*
        Challenge:
        1. Use the .filter() and .includes() methods to get 
          an array of cats which have the selected emotion
          in their emotionTags array. 
        2. Store this array in a const and log it out to check
          it's working. Think: what would be a good name for the
          const?
      */  
      const moodsMatchingTheCats = catsData.filter(cat => {
          /*
          Challenge:
            1. Change the .filter() method's function so it returns an 
              array that only has GIFs if the 'GIFs only' option is 
              checked. If the 'GIFs only' option is not checked, it
              should return an array of all matches as it does now.
          */ 
        
        return isGif ? cat.emotionTags.includes(selectedEmotion) && cat.isGif : cat.emotionTags.includes(selectedEmotion)
      })
      return moodsMatchingTheCats
    }  
  }

function getSingleCatObject(){
  /*
    Challenge:
      1. Inside this function, call getMatchingCatsArray 
      and save whatever it returns to a const called 
      “catsArray”. 
  */  
  const catsArray = getMatchingCatsArray()

  /*
    Challenge:
      1. Set up an if to check if there is only one
      cat object in the array. If there is, log
      out that cat object (but not the whole array!)
      {}
      Test: "happy", animated GIFS only checked.
  */  

  if (catsArray.length === 1) {
    return catsArray[0]
  } else {
    /*
      Challenge:
        1. If catsArray has more than one object, 
        select an object at random and log it out.
    */ 
    let randomNumber = Math.floor(Math.random() * catsArray.length - 1) + 1
    return catsArray[randomNumber]
  }
}

const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const closeModalBtn = document.getElementById('meme-modal-close-btn')

function renderCat(){
/*
  Challenge:
    1. Take the object that is returned by 
      getSingleCatObject and save it to a const 
      called "catObject".
    2. Set memeModalInner’s innerHTML to the HTML 
      string below, remembering to insert the relevant 
      data from catObject to replace the UPPERCASE text.
    3. Set memeModal’s display property to "flex". 

      `<img 
      class="cat-img" 
      src="./images/CAT IMAGE"
      alt="CAT ALT TEXT"
      >`
*/ 
  const catObject = getSingleCatObject()
  memeModalInner.innerHTML = `
  <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="CAT ALT TEXT"
  >`

  memeModal.style.display = 'flex'
}

/*
  Challenge:
  1. Add functionality the modal close btn
*/

closeModalBtn.addEventListener('click', () => {
  memeModal.style.display = 'none'
})

/*
Challenge:
1. Have the new function "renderEmotionsRadios" 
   take in a single parameter. Name that parameter
   "cats". 
2. Inside renderEmotionsRadios, set up a const called 
   "emotions" and set it equals to whatever is returned 
   by calling getEmotionsArray, passing in "cats" as an 
   argument.
3. For now, renderEmotionsRadios should just log out 
   "emotions".
4. Call renderEmotionsRadios passing in catsData.
*/

function renderEmotionsRadios(cats) {
  let render = ''
  const emotions = getEmotionsArray(cats)
  // let moods = [...new Set(emotions)]
  emotions.map(item => {
    return render += `<div class="radio">
    <label for="${item}">${item}</label>
    <input type="radio" id="${item}" name="moods" value="${item}">
    </div>`
  })
  return render
}

// renderEmotionsRadios(catsData)

/*
Challenge:
1. Take control of the 'emotion-radios' div.
2. In renderEmotionsRadios, set up a let 
   to hold our string of HTML. You can initialise
   it with an empty string.
3. Iterate over "emotions" and put each emotion 
   in a <p> tag and then add them to the let you 
   created in step 2. 
4. Render the string to the 'emotion-radios' div.
*/ 

const emotionRadios = document.getElementById('emotion-radios')
emotionRadios.innerHTML = renderEmotionsRadios(catsData)

/*
Challenge:
1. Add an eventListener to emotionRadios that will listen 
   out for any *change* in our radio buttons. When it detects
   a change, it should log out the id of the element that 
   was selected.
⚠️️ ️T️h️is won't work if the eventListener is listening out for a 
   'click'. Google what event to listen for - I've already 
   given you a clue!
*/

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
  const radiosElements = document.getElementsByClassName('radio')
  for (let radio of radiosElements) {
    radio.classList.remove('highlight')
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight')
/*
Challenge:
1. Change the code in line 8 so we add the 
 'highlight' class to the parent of the 
 selected input radio.
*/
}