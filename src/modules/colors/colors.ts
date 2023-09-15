export type ColorCombination = {
  primary: string
  secondary: string
}
//color type with key as color name and value as hex value
export type Color = {
  [key: string]: string
}

export const colors: Color = {
  beachDays: '#fab79a',
  cherryTalk: '#522539',
  freshMelon: '#95c953',
  frostedMint: '#e3f0c2',
  fruityOrange: '#ee6426',
  softBlush: '#f7afbc',
  sunGaze: '#fbaf3f',
  watermelonSugar: '#f05a42',
}

export const colorCombos: ColorCombination[] = [
  { primary: colors.cherryTalk, secondary: colors.softBlush },
  { primary: colors.watermelonSugar, secondary: colors.beachDays },
  { primary: colors.fruityOrange, secondary: colors.sunGaze },
  { primary: colors.freshMelon, secondary: colors.frostedMint },
]
