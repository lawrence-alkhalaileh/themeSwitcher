import useLocalStorage from "./useLocalStorage"

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default App
