import { DotsBoard } from './dotsboard'

let dotsField = <HTMLInputElement>document.querySelector('.dots')
let centralCircleField = <HTMLInputElement>document.querySelector('.centralCircle')

let dotsCount = parseInt(dotsField.value, 10)
let centralCircleRadius = parseInt(centralCircleField.value, 10)

let dotsboard = new DotsBoard('.canvas', dotsCount, centralCircleRadius, true, true)

dotsField.addEventListener('input', function(e) {
  dotsboard.dotsCount = parseInt((<HTMLInputElement>e.target).value, 10)
})

centralCircleField.addEventListener('input', function(e) {
  dotsboard.centralCircleRadius = parseInt((<HTMLInputElement>e.target).value, 10)
})
