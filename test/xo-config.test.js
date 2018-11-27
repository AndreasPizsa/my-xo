function returnNamedFunction() {
  return function namedFunction() {
    return 1
  }
}
returnNamedFunction()

const ternaryOperator = a => a > 1
  ? 'yes'
  : 'no'
ternaryOperator()

function negatedCondition(a) {
  if (!a) {
    --a
  } else {
    a++
  }
  return a
}
negatedCondition()
