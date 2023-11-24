
 export function isCorrespondToFilter(driver, filteredObj) {
  for (const key in filteredObj) {
    if (filteredObj[key]) {
      if (key === 'name' && filteredObj[key] !== driver[key]) {
        return false;
      }
      if (key === 'expUp' && driver.exp < filteredObj[key]) {
        return false;
      }
      if (key === 'expTo' && driver.exp > filteredObj[key]) {
        return false;
      }
    }
  }
  return true;
}