const natural = require('natural')
const phonetic = natural.Metaphone

const wordA = 'phonetics'
const wordB = 'tail'
const wordC = 'tale'
const wordD = 'sale'

if(phonetic.compare(wordA, wordB)){
    console.log('wordA and wordB sound alike !')
}
else{
    console.log('wordA and wordB do not sound alike !')
}

if(phonetic.compare(wordB, wordC)){
    console.log('wordB and wordC sound alike !')
}
else{
    console.log('wordB and wordC do not sound alike !')
}
if(phonetic.compare(wordC, wordD)){
    console.log('wordC and wordD sound alike !')
}
else{
    console.log('wordC and wordD do not sound alike !')
}