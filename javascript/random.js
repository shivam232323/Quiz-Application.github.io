let setValue =  new Set();
let randomArray = [];

function randomValues()
{

    let i =0;

while(1)
{
    let v= 0;
    v = Math.floor(Math.random()*10);
    if(v  > 4)
    {
       v = Math.floor(Math.random()*10);
    }
    else if(setValue.size == 5)
    {
       break;
    }
    else
    {
        setValue.add(v);
    }

}

for(const value of setValue)
{
    randomArray[i] = value;
    i++;
}

}

randomValues();

console.log(randomArray)

