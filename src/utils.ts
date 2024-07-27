export function rgbToHsl(r: number, g: number, b: number): number[] {
  ;(r /= 255), (g /= 255), (b /= 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number
  let s: number
  const l: number = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
        h = 0
    }
    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

export function parseRGB(rgb: string): number[] {
  try {
    if (!rgb) {
      throw new Error('Empty RGB input')
    }

    rgb = rgb.trim().toLocaleLowerCase()
    const regex = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/
    const result = regex.exec(rgb)
    if (!result) {
      throw new Error('Invalid RGB format')
    }

    const r = parseInt(result[1], 10)
    const g = parseInt(result[2], 10)
    const b = parseInt(result[3], 10)
    return [r, g, b]
  } catch (error) {
    console.error(error)
    return [0, 0, 0]
  }
}

export function generateGradientStops(withGradient: boolean, gradientBaseRGB: string): string[] {
  const [r, g, b] = parseRGB(gradientBaseRGB)
  let [h, s, l] = rgbToHsl(r, g, b)
  h = Math.round(h)
  s = Math.round(s)
  l = Math.round(l)
  const gradientStart = `hsl(${h}, ${s}%, ${l}%)`
  let gradientStop = `hsl(${h + 30}, ${s}%, ${l}%)`
  if (!withGradient) {
    gradientStop = gradientStart
  }
  return [gradientStart, gradientStop]
}
