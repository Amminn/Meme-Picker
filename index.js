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

// -------------------------------------------------

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