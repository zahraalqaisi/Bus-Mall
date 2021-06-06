`use strict`



let firstImgElement=document.getElementById('firt-img');
let secondImgElement=document.getElementById('second-img');
let thierdImgElement=document.getElementById('thierd-img');

let maxAttempts=10;
let userAttemptsCounter=0;


let firtImgIndex;
let secondImgIndex;
let thierdImgIndex;


function Product(name, source) {
    this.name=name;
    this.source=source;
    this.votes=0;


    Product.allProducts.push(this);
}

Product.allProducts=[];

new Product ('bag','img/bag.jpg');
new Product ('banana','img/banana.jpg');
new Product ('bathroom','img/bathroom.jpg');
new Product ('boots','img/boots.jpg');
new Product ('breakfast','img/breakfast.jpg');
new Product ('bubblegum','img/bubblegum.jpg');
new Product ('chair','img/chair.jpg');
new Product ('cthulhu','img/cthulhu.jpg');
new Product ('dog-duck','img/dog-duck.jpg');
new Product ('dragon','img/dragon.jpg');
new Product ('pen','img/pen.jpg');
new Product ('pet-sweep','img/pet-sweep.jpg');
new Product ('scissors','img/scissors.jpg');
new Product ('shark','img/shark.jpg');
new Product ('sweep','img/sweep.jpg');
new Product ('tauntaun','img/tauntaun.jpg');
new Product ('unicorn','img/unicorn.jpg');
new Product ('usb','img/usb.jpg');
new Product ('water-can','img/water-can.jpg');
new Product ('wine-glass','img/wine-glass.jpg');


 console.log(Product.allProducts);

function generateRandomIndex() {
    return Math.floor(Math.random()*Product.allProducts.length );
}




 console.log(generateRandomIndex());

function renderThreeImg() {
    firtImgIndex=generateRandomIndex();
    secondImgIndex=generateRandomIndex();
    thierdImgIndex=generateRandomIndex();


    while ( firstImgIndex!=secondImgIndex  &&  firstImgIndex!=thierdImgIndex && secondImgIndex!=thierdImgIndex); {
        secondImgIndex=generateRandomIndex();
        thierdImgIndex=generateRandomIndex();

    }

firstImgElement.src=Product.allProducts[firtImgIndex].source;
secondImgElement.srcc=Product.allProducts[secondImgIndex].source;
thierdImgElement.srcc=Product.allProducts[thierdImgIndex].source;

}
renderThreeImg();

// addind event lisner

firstImgElement.addEventListener('click',handleUserClick);

secondImgElement.addEventListener('click',handleUserClick);

thierdImgElement.addEventListener('click',handleUserClick);

function handleUserClick(event) {
    console.log(event.target.id);

    userAttemptsCounter++;
    // console.log(userAttemptsCounter);

    if (userAttemptsCounter<=maxAttempts){

        if (event.target.id==='firstImgIndex'){
            Product.allProducts[firtImgIndex].votes++;

        }else{
            Product.allProducts[secondImgIndex].votes++;
        }else {
            Product.allProducts[thierdImgIndex].votes++;
        }
    }else {
        let list=document,getElementById('result-list');
        for (let i = 0; i < Product.allProducts.length; i++) {
            
            let ProductResult=document.createElement('li');
            list.append(ProductResult);

            ProductResult.textContent=`${Product.allProducts[i].name} has ${Product.allProducts[i].votes} votes`
        }

        firstImgElement.removeEventListener('click',handleUserClick);
        secondImgElement.removeEventListener('click',handleUserClick);
        thierdImgElement.removeEventListener('click',handleUserClick);
    }
}




