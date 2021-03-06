`use strict`

let array=[];
let container=document.getElementById('img-div')
let firstImgElement=document.getElementById('firt-img');
let secondImgElement=document.getElementById('second-img');
let thierdImgElement=document.getElementById('thierd-img');

let maxAttempts=10;
let userAttemptsCounter=0;


let firstImgIndex;
let secondImgIndex;
let thierdImgIndex;

let productNames=[];
let votes=[];
let shown=[];

function Product(name, source) {
    this.name=name;
    this.source=source;
    this.votes=0;
    this.shown=0;


    Product.allProducts.push(this);
    productNames.push(this.name);

    

}

Product.allProducts=[];

function updateStorage() {
    let arrayString=JSON.stringify(Product.allProducts);
    console.log(arrayString);
    localStorage.setItem('product',arrayString);
}





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
new Product ('sweep','img/sweep.png');
new Product ('tauntaun','img/tauntaun.jpg');
new Product ('unicorn','img/unicorn.jpg');
new Product ('usb','img/usb.gif');
new Product ('water-can','img/water-can.jpg');
new Product ('wine-glass','img/wine-glass.jpg');

console.log(productNames);

//  console.log(Product.allProducts);


// gitting the data from the local storage 
function getProductOrder() {
    let data=localStorage.getItem('Product');
    // console.log(data);
    // convert them back to a normal array of object
    let productData=JSON.parse(data);
    // console.log(productData);
    // set Product.AllProducts array equal to productData
    if (productData!==null) {
       Product.allProducts=productData;  
    }
   

    renderThreeImg();


}








function generateRandomIndex() {
    return Math.floor(Math.random()* Product.allProducts.length);
}




 console.log(generateRandomIndex());

 

 let shownPictures=[];

function renderThreeImg() {
    firstImgIndex=generateRandomIndex();
    secondImgIndex=generateRandomIndex();
    thierdImgIndex=generateRandomIndex();

    



    console.log('before',shownPictures);
    while ( firstImgIndex===secondImgIndex||firstImgIndex===thierdImgIndex||thierdImgIndex===secondImgElement ||
        shownPictures.includes(firstImgIndex)||shownPictures.includes(secondImgIndex)||shownPictures.includes(thierdImgIndex))
     {
       
        firstImgIndex=generateRandomIndex();
        secondImgIndex=generateRandomIndex();
        thierdImgIndex=generateRandomIndex();


    }

    shownPictures=[firstImgIndex, secondImgIndex,thierdImgIndex ];
    console.log('after',shownPictures);




firstImgElement.src=Product.allProducts[firstImgIndex].source;
Product.allProducts[firstImgIndex].shown++;

secondImgElement.src=Product.allProducts[secondImgIndex].source;
Product.allProducts[secondImgIndex].shown++;

thierdImgElement.src=Product.allProducts[thierdImgIndex].source;
Product.allProducts[thierdImgIndex].shown++;


}
console.log(Product.allProducts);
renderThreeImg();

// addind event lisner
container.addEventListener('click',handleUserClick) ;
// firstImgElement.addEventListener('click',handleUserClick);

// secondImgElement.addEventListener('click',handleUserClick);

// thierdImgElement.addEventListener('click',handleUserClick);

function handleUserClick(event) {
    // console.log(event.target.id);

    userAttemptsCounter++;
    // console.log(userAttemptsCounter);

    if (userAttemptsCounter<=maxAttempts){

        if (event.target.id==='firt-img'){
            Product.allProducts[firstImgIndex].votes++;

        }else if(event.target.id==='second-img'){
            Product.allProducts[secondImgIndex].votes++;
        }else  if(event.target.id==='thierd-img'){
            Product.allProducts[thierdImgIndex].votes++;
        }else {
            alert('please click on the imges');
            userAttemptsCounter--;
        }
        renderThreeImg();
    }else {
        let button=document.getElementById('button');
        button.hidden=false;
        button.addEventListener('click', showinglist);


       

        // firstImgElement.removeEventListener('click',handleUserClick);
        // secondImgElement.removeEventListener('click',handleUserClick);
        // thierdImgElement.removeEventListener('click',handleUserClick);
        container.removeEventListener('click',handleUserClick);

        for (let i = 0; i < Product.allProducts.length; i++) {
            votes.push( Product.allProducts[i].votes);
            shown.push( Product.allProducts[i].shown);
            
        }
        updateStorage();

        chart();
    }
}

function showinglist() {
     let list=document.getElementById('result-list');
        for (let i = 0; i < Product.allProducts.length; i++) {
            
            let ProductResult=document.createElement('li');
            list.append(ProductResult);

            ProductResult.textContent=`${Product.allProducts[i].name} has ${Product.allProducts[i].votes} votes,  ${Product.allProducts[i].shown}`
        }
        // button.removeEventListener('click',showinglist);
        button.hidden=true;

}
//chart

function chart(){
let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productNames,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of Shown',
            data: shown,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
getProductOrder();
console.log(Product.allProducts);