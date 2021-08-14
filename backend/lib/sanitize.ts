/* This Sanitize module permits
to remove all the potentially dangerous
special char or sql keywords of each textual
data given by the user  */

const regex = /[@#$%&\/?!|*+)(}{=:.>_<"^\[\]]|SELECT|INSERT|ALTER|DELETE|FROM|script/g

export const sanitize = (obj) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "string" && key !== "imageUrl") {
      obj[key] = obj[key].replace(regex, '')
    }
  })
  return obj
}

