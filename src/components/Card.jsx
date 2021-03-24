const Card = (props) => {
  
  const klikDisini = () => {
    props.terimaData(1, 2)
  }

  return (
    <div>
      <h1>Card {props.title}</h1>
      <button onClick={klikDisini} className="btn btn-info">Klik Disini</button>
    </div>
  )
}

export default Card