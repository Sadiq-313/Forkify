console.log('JavaScript is Running..........')

const fooditemArea = document.querySelector('#leftArea')


const searchinput = document.querySelector('input')
const buttoninput = document.querySelector('button')

if(buttoninput.value = ""){
    prompt('Enter A food')
}

function MyrecipiesApicalling(foodname){

const url = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${foodname}`)


fooditemArea.innerHTML = `

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mE3V1YCVUk4JyYdyWYYseZlGQOqS5igV-w&s" width= '' alt="">

`

url.then(
    (responce)=>{
        return responce.json()
    })

    .then(
        (responce)=>{console.log(responce)

    const    {data} = responce
            console.log(data);

           const {recipes} =data
                console.log(recipes)


                const myHTML = recipes.map((recipe)=>{
                    
                    return `<div class="foodMenu" 
                    id="${recipe.id}"
                    onclick ='singlerecipeApi(this)'>
        <div class="recipeImage">
            <img src="${recipe.image_url}" alt=""> 
        </div>

        <div class="recipeDetails">
          <h1>${recipe.title}</h1>
            <p>${recipe.publisher}</p>
        </div>
      </div>`
    
      
    })

    console.log(myHTML.join(''), 'My Html ')



                fooditemArea.innerHTML =myHTML.join('')

        }




    )



    .catch(
        (error)=>{
            console.log(error)
        }
    );

}



buttoninput.addEventListener('click', () => {
    
    MyrecipiesApicalling(searchinput.value)
})

function singlerecipeApi(element) {
    console.log(element, '===>> element')
    console.log(element.id , '===>> element.id')

    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${element.id}`)

    .then((res)=>{return res.json()})



    .then((res)=>{
        console.log(res)

          const {recipe} = res.data
          


        console.log(recipe)    


          const {image_url,title , ingredients }       =   recipe  

                                                    //    const {description } =  ingredients

                                                    //    console.log(description)

          const myli = ingredients.map((ingredient)=>{
            return `<li> ${ingredient.description}</li>` 
        })
        console.log(myli)


        recipedetail = document.querySelector('#rightArea')

        recipedetail.innerHTML = ` <div class="imagedetail">
      <img src="${image_url}" alt="">
      </div>
      <h1>${title}</h1>
      <ul>
    ${ myli.join('')  }
      </ul>`

    })
    
    
    .catch((err)=>{err})

}