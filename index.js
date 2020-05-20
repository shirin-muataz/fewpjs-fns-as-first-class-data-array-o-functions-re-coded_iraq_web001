function wakeDog(dogName, dogBreed) {
 const st=`Wake ${dogName} the ${dogBreed}`;
 return(st);
}

function leashDog(dogName, dogBreed) {
  const st =`Leash ${dogName} the ${dogBreed}`;
  return(st);
}

function walkToPark(dogName, dogBreed) {
  const st=`Walk to the park with ${dogName} the ${dogBreed}`;
  return(st);
}

function throwFrisbee(dogName, dogBreed) {
  const st=`Throw the frisbee for ${dogName} the ${dogBreed}`;
  return(st);
}

function walkHome(dogName, dogBreed) {
  const st=`Walk home with ${dogName} the ${dogBreed}`;
  return(st);
}

function unleashDog(dogName, dogBreed) {
  const st=`Unleash ${dogName} the ${dogBreed}`;
  return(st);
}

const routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
const dogName=["Xerox","Boo Radley","Bunny","Mary J.Blige","Santa Paws","Lauren","Skippy"];
const dogBreed=["Border Collie","Pibble","Labrador","Papillon","Husky","Golden Retriever","Welsh Corgi"]
const strings=[];

function exerciseDog (dogName, dogBreed)
{
  for (let i=0; i<routine.length ; i++)
  {strings[i]=routine[i](dogName[i],dogBreed[i]);}
  return(strings);
}
console.log(exerciseDog(dogName,dogBreed));