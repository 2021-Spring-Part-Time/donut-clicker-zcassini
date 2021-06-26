import DonutMaker from '../src/js/donutMaker'

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

describe('DonutMaker', () => {
  
  // test('does it return the numer of donuts', () => {
  //   const underTest = new DonutMaker()
  //   expect(underTest.donuts).toBe(0)
  // })

  // test('does the dount count increase when it clicks', () => {
  //   const underTest = new DonutMaker()
  //   underTest.click()
  //   expect(underTest.donuts).toBe(1)
  // })

//   test('does it return 45 for hunger when fed', () => {
//     const underTest = new VirtualPet('name', 'desc', 50, 50);
//     underTest.feed();
//     expect(underTest.hunger).toEqual(45);
//   });

//   test('does it return 60 for thirst when fed', () => {
//     const underTest = new VirtualPet('name', 'desc', 50, 50);
//     underTest.feed();
//     expect(underTest.thirst).toEqual(60);
//   });
})