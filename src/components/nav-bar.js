import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
//The flex container becomes flexible by setting the display property to flex:
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//shorthand for flex-grow, flex-shrink and flex-basis combined.
//The second and third parameters (flex-shrink and flex-basis) are optional
//Default is 0 1 auto
//flexgrow 
//This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.
//It dictates what amount of the available space inside the flex container the item should take up.
//If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children
//justify-content
//space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
//https://www.w3schools.com/cssref/pr_border-bottom.asp
//Set the style of the bottom border for different elements:

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{content.message}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              //navigate to login page after logging out, sent as callback
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}