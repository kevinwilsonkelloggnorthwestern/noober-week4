window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  

// let rideDetails = json.Array
let ridesData = json

// console.log(json.length)

// console.log(json[0].dropoffLocation.address)

for(i= 0; i < ridesData.length; i++){

// create variables for the required data
let passengerFirstName = ridesData[i].passengerDetails.first
let passengerLastName = ridesData[i].passengerDetails.last
let passengerPhone = ridesData[i].passengerDetails.phoneNumber
let pickupStreet = ridesData[i].pickupLocation.address 
let pickupCity = ridesData[i].pickupLocation.city
let pickupState = ridesData[i].pickupLocation.state
let pickupZip = ridesData[i].pickupLocation.zip
let dropoffStreet = ridesData[i].dropoffLocation.address 
let dropoffCity = ridesData[i].dropoffLocation.city
let dropoffState = ridesData[i].dropoffLocation.state
let dropoffZip = ridesData[i].dropoffLocation.zip
let passengerNumber = ridesData[i].numberOfPassengers
let purpleTrigger = ridesData[i].purpleRequested
let cartype
let carColor
let fontSize

  // Create conditional such that the car type is always purple if requested, is XL if passengers is over 3 and purple isn't selected, and is X if none apply
  if(purpleTrigger == true){
    cartype = `Noober Purple`  
    carColor = 'purple'
    fontSize = '2'
    } else if(passengerNumber > 3){
      cartype = `Noober XL`
      carColor = 'gray'
      fontSize = '5'
    } else {
      cartype = `Noober X`
      carColor = 'gray'
      fontSize = '2'
    }

// Create conditional such that color is "purple" if purple car is requested


let riderList = document.querySelector(`.rides`)
  riderList.insertAdjacentHTML('beforeend', 
`  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-${fontSize}xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${cartype}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-${carColor}-600 text-white p-2">
            ${passengerNumber} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupStreet}</p>
          <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffStreet}</p>
          <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
        </div>
      </div>
    </div>`
  )
}

// loop through the rides

// create variables for the required data

// create variable for level of service customization


})