const catsData = [
  {
      emotionTags: ["moody"],
      isGif: false,
      image: "angry.jpeg",
      alt: "A cat looking moody",
  },
  {
      emotionTags: ["moody", "insomniac"],
      isGif: false,
      image: "angry2.jpeg",
      alt: "A cat looking moody",
  },
  {
      emotionTags: ["moody"],
      isGif: false,
      image: "angry3.jpeg",
      alt: "A cat looking moody",
  },
  {
      emotionTags: ["confused", "sad"],
      isGif: false,
      image: "confused.jpeg",
      alt: "A cat looking confused",
  },
  {
      emotionTags: ["dominant", "moody"],
      isGif: false,
      image: "dominant.jpeg",
      alt: "A cat looking dominant",
  },
  {
      emotionTags: ["happy", "relaxed"],
      isGif: false,
      image: "happy.jpeg",
      alt: "A cat looking happy",
  },
  {
      emotionTags: ["hungry"],
      isGif: false,
      image: "hungry.jpeg",
      alt: "A cat looking hungry",
  },
  {
      emotionTags: ["hungry"],
      isGif: false,
      image: "hungry1.jpeg",
      alt: "A cat looking hungry",
  },
  {
      emotionTags: ["insomniac"],
      isGif: false,
      image: "insomnia.jpeg",
      alt: "A cat looking insomniac",
  },
  {
      emotionTags: ["insomniac"],
      isGif: false,
      image: "insomnia1.jpeg",
      alt: "A cat looking insomniac",
  },
  {
      emotionTags: ["relaxed"],
      isGif: false,
      image: "lazy.jpeg",
      alt: "A cat looking lazy",
  },
  {
      emotionTags: ["scared"],
      isGif: false,
      image: "nervous.jpeg",
      alt: "A cat looking nervous",
  },
  {
      emotionTags: ["sad"],
      isGif: false,
      image: "sad.jpeg",
      alt: "A cat looking sad",
  },
  {
      emotionTags: ["sad", "moody"],
      isGif: false,
      image: "sad1.jpeg",
      alt: "A cat looking sad",
  },
  {
      emotionTags: ["moody"],
      isGif: true,
      image: "angry.gif",
      alt: "A cat looking moody",
  },
  {
      emotionTags: ["moody"],
      isGif: true,
      image: "angry2.gif",
      alt: "A cat looking angry",
  },
  {
      emotionTags: ["confused"],
      isGif: true,
      image: "confused2.gif",
      alt: "A cat looking confused",
  },
  {
      emotionTags: ["dominant"],
      isGif: true,
      image: "dominant.gif",
      alt: "A cat looking dominant",
  },
  {
      emotionTags: ["happy"],
      isGif: true,
      image: "happy.gif",
      alt: "A cat looking happy",
  },
  {
      emotionTags: ["hungry", "sad", "confused"],
      isGif: true,
      image: "confused.gif",
      alt: "A cat looking hungry",
  },
  {
      emotionTags: ["hungry"],
      isGif: true,
      image: "hungry.gif",
      alt: "A cat looking hungry",
  },
  {
      emotionTags: ["hungry"],
      isGif: true,
      image: "hungry2.gif",
      alt: "A cat looking hungry",
  },
  {
      emotionTags: ["insomniac", "scared"],
      isGif: true,
      image: "insomnia2.gif",
      alt: "A cat looking insomniac",
  },
  {
      emotionTags: ["relaxed"],
      isGif: true,
      image: "lazy.gif",
      alt: "A cat looking relaxed",
  },
  {
      emotionTags: ["relaxed"],
      isGif: true,
      image: "relaxed2.gif",
      alt: "A cat looking relaxed",
  },
  {
      emotionTags: ["scared", "sad"],
      isGif: true,
      image: "nervous.gif",
      alt: "A cat looking nervous",
  },
  {
      emotionTags: ["scared"],
      isGif: true,
      image: "nervous2.gif",
      alt: "A cat looking scared",
  },
  {
      emotionTags: ["sad"],
      isGif: true,
      image: "sad.gif",
      alt: "A cat looking sad",
  },
]
  
//   function getEmotionsArray(cats){
//     const emotionsArray = []
//     for (let i = 0; i < cats.length; i++){
//         for (let j=0; j < cats[i].emotionTags.length; j++){
//                 emotionsArray.push(cats[i].emotionTags[j])
//         }
//     }
//   console.log(emotionsArray)
//   }
 
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
      result.push(mood)
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
  const emotions = getEmotionsArray(cats)
  let moods = [...new Set(emotions)]
  moods.map(item => {
    console.log(item)
  })
  moods.map(item => {
    return console.log(`<input type="radio" id="${item}" name="${item}" value="${item}">
    <label for="${item}">${item}</label>`)
  })
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

const emotionRadio = document.getElementById('emotion-radios')
emotionRadio.innerHTML = renderEmotionsRadios(catsData)