export const isBrowser = () => typeof window !== "undefined"

//https://stackoverflow.com/questions/32598971/whats-the-purpose-of-if-typeof-window-undefined
//1It's an idiomatic check to see if the script is being run in a web-page inside a web-browser or not.

//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//The read-only localStorage property allows you to access a Storage object for the Document's origin

//https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
//The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
//The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  //https://riptutorial.com/javascript/example/3047/double-negation----x-
  //Together they convert any truthy value to true and any falsy value to false.
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
