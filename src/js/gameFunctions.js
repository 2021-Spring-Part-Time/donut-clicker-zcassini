  export const click = x => {
    x.donuts += x.donutsPerClick
    return x
  }
  
  export const buyAutoClicker = x => {
    x.donuts -= x.autoClickerCost
    x.autoClickers += 1
    x.autoClickerCost *= x.autoClickerCostIncreasePercentage
    return x
  }
  
  export const buyMultiplier = x => {
    x.donuts -= x.multiplierCost
    x.multipliers += 1
    x.multiplierCost *= x.multiplierCostIncreasePercentage
    x.donutsPerClick = Math.pow(1.2, x.multipliers)
    return x
  }
  
