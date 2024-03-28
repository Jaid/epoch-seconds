import {strict as assert, AssertionError} from 'node:assert'

const greaterThan = (givenValue: BigInt | number | string, expectedValue: number) => {
  let number: number
  try {
    number = Number(givenValue)
  } catch (error) {
    throw new AssertionError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `Given value is not a number: ${givenValue}`,
    })
  }
  if (number <= expectedValue) {
    throw new AssertionError({
      message: `Given number ${number} should be greater than ${expectedValue}`,
    })
  }
}
const greaterThanOrEqual = (givenValue: BigInt | number | string, expectedValue: number) => {
  let number: number
  try {
    number = Number(givenValue)
  } catch (error) {
    throw new AssertionError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `Given value is not a number: ${givenValue}`,
    })
  }
  if (number < expectedValue) {
    throw new AssertionError({
      message: `Given number ${number} should be at least ${expectedValue}`,
    })
  }
}
const lessThan = (givenValue: BigInt | number | string, expectedValue: number) => {
  let number: number
  try {
    number = Number(givenValue)
  } catch (error) {
    throw new AssertionError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `Given value is not a number: ${givenValue}`,
    })
  }
  if (number >= expectedValue) {
    throw new AssertionError({
      message: `Given number ${number} should be less than ${expectedValue}`,
    })
  }
}
const lessThanOrEqual = (givenValue: BigInt | number | string, expectedValue: number) => {
  let number: number
  try {
    number = Number(givenValue)
  } catch (error) {
    throw new AssertionError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `Given value is not a number: ${givenValue}`,
    })
  }
  if (number > expectedValue) {
    throw new AssertionError({
      message: `Given number ${number} should be at most ${expectedValue}`,
    })
  }
}
const numberBetween = (givenValue: BigInt | number | string, floorInclusive: number, ceilInclusive: number) => {
  let number: number
  try {
    number = Number(givenValue)
  } catch (error) {
    throw new AssertionError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `Given value is not a number: ${givenValue}`,
    })
  }
  if (number < floorInclusive || number > ceilInclusive) {
    throw new AssertionError({
      message: `Given number ${number} should be between ${floorInclusive} and ${ceilInclusive}`,
    })
  }
}
const notInteger = (givenValue: number | string) => {
  let number: number
  try {
    number = Number(givenValue)
  } catch (error) {
    throw new AssertionError({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `Given value is not a number: ${givenValue}`,
    })
  }
  if (number % 1 === 0) {
    throw new AssertionError({
      message: `Given number ${number} should not be an integer`,
    })
  }
}
const assertExtended = {
  ...assert,
  greaterThan,
  greaterThanOrEqual,
  lessThan,
  lessThanOrEqual,
  numberBetween,
  notInteger,
}

export default assertExtended
