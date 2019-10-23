function FirstFunction(){
    return 'First Function'
}

function SecondFunction(){
    let callThirdFunction = ThirdFunction()
    return `Let's see what third Function return : ${callThirdFunction}`
}

function ThirdFunction(){
    let items = ['Dink Chika','Ting-Tong','Ding-Dong','Harippa','Alelelelele','Bahot Huwa']
   return items[Math.floor(Math.random()*items.length)]
}

function ZeroFunction(){
    let first = FirstFunction();
    let second = SecondFunction();
    return `${first} doesn't returned anything; ${second}.`
}

ZeroFunction()