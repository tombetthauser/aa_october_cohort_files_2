
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = (dogs) => {

  const dogsArr = [];

  Object.keys(dogs).forEach(key => {
    const a = document.createElement("a");
    a.innerHTML = key;
    a.setAttribute("href", dogs[key])
    a.setAttribute("target", "_blank")
    
    const l = document.createElement("li");
    l.className = "dog-link";

    l.appendChild(a);

    dogsArr.push(l);
  });

  return dogsArr;
}

export const attachDogLinks = (dogs) => {
  const dogLinks = dogLinkCreator(dogs);
  const u = document.getElementsByClassName("drop-down-dog-list")
  console.log(u[0])
  dogLinks.forEach(li => {
    u[0].appendChild(li)
  })
}

export const handleEnter = () => {

}

export const handleLeave = () => {
  
}


attachDogLinks(dogs);

// alert(Object.keys(dogs));