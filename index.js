class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    let newString = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let dash = "-"
    let quotes = "'"
    let space = " "
    for(let letter of string){
      if (alphabet.includes(letter.toLowerCase()) || dash.includes(letter) || quotes.includes(letter) || space.includes(letter)){
          newString += letter
      }
      
    }
    return newString
  }

  static titleize(string){
    let words = ["a", "an", "but", "of", "and", "for", "at", "the", "by", "from"]
    let newSentence = []
    let sentence = string.split(' ')

    function capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    for(let word in sentence){
        if(parseInt(word) === 0){
          newSentence.push(capitalize(sentence[word]))
        } else if (words.includes(sentence[word])){
          newSentence.push(sentence[word])
        } else {
          newSentence.push(capitalize(sentence[word]))
        }
    }



    return newSentence.join(' ')
  }

}


// function titleize(string){
//   let words = ["a", "an", "but", "of", "and", "for", "at", "by", "from"]
//   let newSentence = []
//   let sentence = string.split(' ')

//   function capitalize(stringm){
//     console.log(stringm)
//    console.log(stringm.charAt(0).toUpperCase()) 
//    console.log('hello!!')
//    console.log(typeof(stringm))
   
//    console.log(stringm.slice(1))
      
//   }

//   for(let word in sentence){
//       if(parseInt(word) === 0){
//         newSentence.push(capitalize(sentence[word]))
//       } 
//   }



//   return newSentence.join('')
// }

// let test1 = "any cat walks home"

// console.log(titleize(test1))