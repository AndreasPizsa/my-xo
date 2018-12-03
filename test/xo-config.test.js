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

function align() {
  Object.assign({}, {
    a: 1
  })

  return {
    thisAndThat: 1,
    longName   : 2
  }
}
align()
