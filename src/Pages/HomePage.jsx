import Hero from "../Components/Hero.jsx"
import {setTitle, activePage} from "../Hooks/setTitle&setActive.js"


function HomePage() {

  setTitle("Home")
  activePage("Home")

  return (
      <>
          <Hero
              title="Take a Trip Take Rest"
              description="Book unique camping experience on over 300,000 campsites, cabins, RV parks, public parks and more"
          />
      </>
  )
}

export default HomePage 