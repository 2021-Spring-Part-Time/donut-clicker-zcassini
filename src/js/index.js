// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!')

const makeDonutButton = document.getElementById('makeDonutButton')
console.log(makeDonutButton)
console.log('zac')
const buyAutoClickerButton = document.getElementById('buyAutoClickerButton')
const buyMultiplierButton = document.getElementById('buyMutliplierButton')
const donutsDisplay = document.getElementById('donutsCount')
const autoClickersDisplay = document.getElementById('autoClickersDisplay')
const multiplersDisplay = document.getElementById('multipliersDisplay')

// rules and settings
const STARTING_DONUTS = 0
const STARTING_AUTOCLICKERS = 0
const STARTING_MULTIPLIERS = 0

const AUTOCLICKER_INITIAL_COST = 100
const MULTIPLIER_INITIAL_COST = 100

const AUTOCLICKER_COST_PERCENTAGE = 1.10
const MULTIPLIER_COST_INCREASE_PERCENTAGE = 1.20

let donutMaker = {
  donuts: STARTING_DONUTS,
  autoClickers: STARTING_AUTOCLICKERS,
  autoClickerInitialCost: AUTOCLICKER_INITIAL_COST,
  autoClickerCostIncreasePercentage: AUTOCLICKER_COST_PERCENTAGE,
  autoClickerCost: AUTOCLICKER_INITIAL_COST,
  multipliers: STARTING_MULTIPLIERS,
  multiplierCost: MULTIPLIER_INITIAL_COST,
  multiplierCostIncreasePercentage: MULTIPLIER_COST_INCREASE_PERCENTAGE  
}

const click = x => {
  x.donuts += Math.pow(Donuts.multipliers * )
  return x
}

const buyAutoClicker = x => {
  x.donuts -= x.autoClickerCost
  x.autoClickers += 1
  x.autoClickerCost *= x.autoClickerCostIncreasePercentage
  return x
}

const buyMultiplier = x => {
  x.donuts -= x.multiplierCost
  x.multipliers += 1
  x.multiplierCost *= x.multiplierCost
  return x
}

const updateDisplay = () => {
  donutsDisplay.innerHTML = donutMaker.donuts
}

makeDonutButton.addEventListener('click', (event) => {
  donutMaker = click(donutMaker)
  updateDisplay()
})

const update = () => {

  donutsDisplay.innerHTML = donutMaker.donuts
  // console.log('update ')
}

// go time
window.setInterval(update, 1000)