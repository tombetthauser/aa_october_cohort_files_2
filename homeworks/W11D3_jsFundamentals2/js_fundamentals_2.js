
const titleize = (namesArr, callback) => {
    namesArr.forEach(name => {
        callback(`Mx. ${name} Jingleheimer Schmidt`)
    });
}

titleize(["Tom", "Mike", "Erin"], console.log);