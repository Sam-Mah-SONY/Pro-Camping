
function Hero({ title, description}) {

  const  buttonText = 'Discover'

  return (
    <>
      <h1>
        <span>Pro Camping</span>
        <span>{title}</span>
      </h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </>
  )
}

export default Hero