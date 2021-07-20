// rules and settings
const STARTING_DONUTS = 0
const STARTING_AUTOCLICKERS = 0
const STARTING_MULTIPLIERS = 0
const STARTING_DONUTS_PER_CLICK = 1

const AUTOCLICKER_INITIAL_COST = 100
const MULTIPLIER_INITIAL_COST = 10

const AUTOCLICKER_COST_INCREASE_PERCENTAGE = 1.10
const MULTIPLIER_COST_INCREASE_PERCENTAGE = 1.10

import { click, buyAutoClicker, buyMultiplier }from './gameFunctions.js' 
import Header from './components/Header.js'
import DonutSection from './components/DonutSection.js'
import AutoClickerSection from './components/AutoClickerSection.js'
import MultiplierSection from './components/MultiplierSection.js'
import Modal from './components/Modal.js'

document.querySelector('header').innerHTML = Header()
document.querySelector('.container').innerHTML = `${DonutSection()} ${AutoClickerSection()} ${MultiplierSection()}`

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

let initialState = {
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

let state = Object.assign({}, initialState)

makeDonutButton.addEventListener('click', (event) => {
  state = click(state)
  updateDisplay()
})

buyAutoClickerButton.addEventListener('click', event => {
  state = buyAutoClicker(state)
  updateDisplay()
})

buyMultiplierButton.addEventListener('click', event => {
  state = buyMultiplier(state)
  updateDisplay()
})

resetButton.addEventListener('click', event => {
  state = Object.assign({}, initialState)
})

const updateDisplay = () => {
  donutsDisplay.innerHTML = `Donuts: ${Math.floor(state.donuts)}`
  multiplersDisplay.innerHTML = `Count: ${Math.floor(state.multipliers)}`
  multiplersCostDisplay.innerHTML = `Cost: ${Math.floor(state.multiplierCost)}`
  autoClickersDisplay.innerHTML = `Count: ${Math.floor(state.autoClickers)}`
  autoClickersCostDisplay.innerHTML = `Cost: ${Math.floor(state.autoClickerCost)}`
  buyAutoClickerButton.disabled = state.donuts < state.autoClickerCost
  buyMultiplierButton.disabled = state.donuts < state.multiplierCost
}

const update = () => {
  state.donuts += state.autoClickers * state.donutsPerClick
  updateDisplay()
}

updateDisplay()
window.setInterval(update, 1000)

aboutDev.addEventListener('click', event => {
  aboutDevModal.style.display = 'block'
})