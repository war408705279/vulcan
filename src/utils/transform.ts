/**
 * @file transform content
 */

export function snakeToCamelCase(input: string): string {
  const words = input.split('_').filter(Boolean)

  return words.reduce((res, word, index) => {
    if (index === 0) {
      return res + word
    }

    return res + word[0].toUpperCase() + word.slice(1)
  }, '')
}

export function camelToSnakeCase(input: string): string {
  return input.split('').reduce((res, word, index) => {
    if (index === 0) {
      return res + word[0].toLowerCase()
    }

    if (word[0] >= 'A' && word[0] <= 'Z') {
      return res + '_' + word[0].toLowerCase()
    }

    return res + word[0]
  }, '')
}

export function toCamelCase(input: any): any {
  if (
    input == null
    || typeof input === 'boolean'
    || typeof input === 'number'
    || typeof input === 'string'
    || typeof input === 'symbol'
  ) {
    return input
  }

  if (Array.isArray(input)) {
    return input.map(item => toCamelCase(item))
  }

  const res: any = {}

  Object.keys(input).forEach(key => {
    res[snakeToCamelCase(key)] = toCamelCase(input[key])
  })

  return res
}

export function toSnakeCase(input: any): any {
  if (
    input == null
    || typeof input === 'boolean'
    || typeof input === 'number'
    || typeof input === 'string'
    || typeof input === 'symbol'
  ) {
    return input
  }

  if (Array.isArray(input)) {
    return input.map(item => toSnakeCase(item))
  }

  const res: any = {}

  Object.keys(input).forEach(key => {
    res[camelToSnakeCase(key)] = toSnakeCase(input[key])
  })

  return res
}
