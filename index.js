const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
 let tutorialsUpdated= tutorials.map(function updatedLetter(tutorial){
      let newTutorial=tutorial.split(' ');
      for (let i=0;i< newTutorial.length;i++){
        newTutorial[i]=newTutorial[i][0].toUpperCase()+newTutorial[i].substring(1);
      }
      tutorial=newTutorial.join(' ');
      return tutorial;
  })
  return tutorialsUpdated;
}