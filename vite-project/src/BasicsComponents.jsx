function MyButton () {
  return <button>A new button!!</button>
}

function ComplexButton () {
  return (
    <div>
      <h1>Composite Button !!</h1>
      <MyButton></MyButton>
    </div>
  )
}

function Lines () {
  return (
    <div>
      <br />
      ------------------------
      <br />
    </div>
  )
}

const user = {
  name: 'Harry Potter',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
  imageSize: 300,
  loggedIn: true
}

function ProfileCard () {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

/**
 * For rendering conditional content,
 * use normal JS to decide what should be rendered
 * and then wrap this inside the final div and return
 */
function ConditionalButton () {
  let content
  if (user.loggedIn == true) {
    content = <button>Continue to contents</button>
  } else {
    content = <button>Login in !!</button>
  }
  return <div>{content}</div>
}

const movies = [
  { name: 'lotr', genre: 'fantasy' },
  { name: 'john wick', genre: 'action' },
  { name: 'harry potter', genre: 'fantasy'}
]

function ListStrings () {
  const movieList = movies.map(element => {
    return (
        <li
            key={element.name}
            style={{
                color: element.genre == "action" ? "green" : "blue"
            }}>
            {element.name} belongs to {element.genre}
        </li>
    )
  })

  console.log(movieList)
  return <ul>{movieList}</ul>
}

export { MyButton, Lines, ProfileCard, ConditionalButton, ListStrings }
export default ComplexButton
