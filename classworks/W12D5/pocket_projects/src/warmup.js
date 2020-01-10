
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p")
    const text = document.createTextNode(string)
    
    //if htmlElement has children, remove children and append new text
    //otherwise append new text
    
    if (htmlElement.childElementCount === 0) {
        p.appendChild(text)
        htmlElement.appendChild(p)
    } else {
        while (htmlElement.firstChild) {
            htmlElement.removeChild(htmlElement.firstChild)
        }
        p.appendChild(text)
        htmlElement.appendChild(p)
    }
};

// export const hello = () => {
//     alert("hello");
// }

// window.hello = hello;
// hello();


// var x = document.getElementById("myDIV").childElementCount; 

// doFoo.onclick = () => {
//     const myNode = document.getElementById("foo");
//     while (myNode.firstChild) {
//         myNode.removeChild(myNode.firstChild);
//     }
// }

htmlGenerator('Party Time.', partyHeader);