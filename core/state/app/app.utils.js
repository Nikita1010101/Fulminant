/**
 * 
 * @param { Object } model 
 * @param { string[] } path 
 * @returns { unknown }
 */
export function findProperty(model, path) {
  const key = path[0] 
  if (path.length === 0) {
    return false
  }
  else if (path.length === 1) {
    return model[key]
  }
  
  const value = model[key]
  const newPath = path.slice(1)

  return findProperty(value, newPath)
}