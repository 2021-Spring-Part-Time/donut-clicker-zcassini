// rules and settings
const STARTING_DONUTS = 1000
const STARTING_AUTOCLICKERS = 0
const STARTING_MULTIPLIERS = 0
const STARTING_DONUTS_PER_CLICK = 1

const AUTOCLICKER_INITIAL_COST = 100
const MULTIPLIER_INITIAL_COST = 10

const AUTOCLICKER_COST_INCREASE_PERCENTAGE = 1.10
const MULTIPLIER_COST_INCREASE_PERCENTAGE = 1.10


const makeDonutButton = document.getElementById('makeDonutButton')
const buyAutoClickerButton = document.getElementById('buyAutoClickerButton')
const buyMultiplierButton = document.getElementById('buyMultiplierButton')
const donutsDisplay = document.getElementById('donutsCount')
const autoClickersDisplay = document.getElementById('autoClickersCount')
const autoClickersCostDisplay = document.getElementById('autoClickersCost')
const multiplersDisplay = document.getElementById('multipliersCount')
const multiplersCostDisplay = document.getElementById('multipliersCost')
const resetButton = document.getElementById('resetButton')
const aboutDev = document.getElementById('aboutDev')
const aboutDevModal = document.getElementsByClassName('about-dev-modal')

let donutMaker = {
  donuts: STARTING_DONUTS,
  autoClickers: STARTING_AUTOCLICKERS,
  autoClickerInitialCost: AUTOCLICKER_INITIAL_COST,
  autoClickerCostIncreasePercentage: AUTOCLICKER_COST_INCREASE_PERCENTAGE,
  autoClickerCost: AUTOCLICKER_INITIAL_COST,
  multipliers: STARTING_MULTIPLIERS,
  multiplierCost: MULTIPLIER_INITIAL_COST,
  multiplierCostIncreasePercentage: MULTIPLIER_COST_INCREASE_PERCENTAGE,
  donutsPerClick: STARTING_DONUTS_PER_CLICK
}

const click = x => {
  x.donuts += x.donutsPerClick
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
  x.multiplierCost *= x.multiplierCostIncreasePercentage
  x.donutsPerClick = Math.pow(1.2, x.multipliers)
  return x
}

const updateDisplay = () => {
  donutsDisplay.innerHTML = `Donuts: ${Math.floor(donutMaker.donuts)}`
  multiplersDisplay.innerHTML = `Count: ${Math.floor(donutMaker.multipliers)}`
  multiplersCostDisplay.innerHTML = `Cost: ${Math.floor(donutMaker.multiplierCost)}`
  autoClickersDisplay.innerHTML = `Count: ${Math.floor(donutMaker.autoClickers)}`
  autoClickersCostDisplay.innerHTML = `Cost: ${Math.floor(donutMaker.autoClickerCost)}`
  buyAutoClickerButton.disabled = donutMaker.donuts < donutMaker.autoClickerCost
  buyMultiplierButton.disabled = donutMaker.donuts < donutMaker.multiplierCost
}

makeDonutButton.addEventListener('click', (event) => {
  donutMaker = click(donutMaker)
  updateDisplay()
})

buyAutoClickerButton.addEventListener('click', event => {
  donutmaker = buyAutoClicker(donutMaker)
  updateDisplay()
})

buyMultiplierButton.addEventListener('click', event => {
  donutMaker = buyMultiplier(donutMaker)
  updateDisplay()
})

resetButton.addEventListener('click', event => {
  donutMaker = {
  donuts: STARTING_DONUTS,
  autoClickers: STARTING_AUTOCLICKERS,
  autoClickerInitialCost: AUTOCLICKER_INITIAL_COST,
  autoClickerCostIncreasePercentage: AUTOCLICKER_COST_INCREASE_PERCENTAGE,
  autoClickerCost: AUTOCLICKER_INITIAL_COST,
  multipliers: STARTING_MULTIPLIERS,
  multiplierCost: MULTIPLIER_INITIAL_COST,
  multiplierCostIncreasePercentage: MULTIPLIER_COST_INCREASE_PERCENTAGE,
  donutsPerClick: STARTING_DONUTS_PER_CLICK
  } 
})

const update = () => {
  donutMaker.donuts += donutMaker.autoClickers * donutMaker.donutsPerClick
  updateDisplay()
}

// go time
updateDisplay()
window.setInterval(update, 1000)

aboutDev.addEventListener('click', event => {
  aboutDevModal.style.display = 'block'
})