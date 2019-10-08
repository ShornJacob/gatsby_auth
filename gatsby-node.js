// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // page.matchPath is a special key that's used for matching pages

    console.log(page.path)
    console.log(page.matchPath)
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
      // Update the page.
      createPage(page)
    }
  }

  //https://www.gatsbyjs.org/docs/node-apis/#onCreatePage
  //Called when a new page is created. This extension API is useful for programmatically manipulating pages created by other plugins 

  //console.output
//   /dev-404-page/
//   undefined
//   /app/
//   undefined
//   /
//   undefined
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
//he match() method retrieves the result of matching a string against a regular expression.
//https://linux.die.net/Bash-Beginners-Guide/sect_04_01.html
//^	Matches the empty string at the beginning of a line; also represents the characters not in the range of a list.
// \ is sued for escaping /app

//define that any route that starts with /app/ is part of your restricted content and the page will be created on demand: