var weekdays = ["Monday", "Wednesday", "Friday"];

var rectangle = {height: 20, width: 15};

function greetMe (name)
{
    console.log(`Hi ${name}!`);
}

function calculateTriangleArea(base, height)
{
    return base * height / 2;
}

function countDown()
{
    for(let x=10; x>=0; x--)
    {
        console.log(x);
    }
}

function countEvens(end)
{
    for (let i = 2; i <= end; i += 2) 
    {
        console.log(i);
    }
}

function checkAdverb(word)
{
    if(word.endsWith("ly"))
    {
        return "adverb";
    }
    else
    {
        return "unknown";
    }
}

var materials = [{type: "straw", strength:1}, {type: "wood", strength: 5}, {type: "brick", strength: 10}]

function printMaterials(materialArray)
{
    for (var material of materialArray)
    {
        console.log(material.type + " - " + material.strength)
    }
}
function getStrengthOfMaterial(materialArray, type) 
{
    for(let material of materialArray)
    {
        if(material.type === type)
        {
            return material.strength;
        }
    }
    return 0;
}

greetMe("Noah");

console.log(calculateTriangleArea(5, 10));

countDown();

countEvens(20);

console.log(checkAdverb("pineapple"));

printMaterials(materials);

console.log(getStrengthOfMaterial(materials, "brick"));
console.log(getStrengthOfMaterial(materials, "straw"));
console.log(getStrengthOfMaterial(materials, "wood"));