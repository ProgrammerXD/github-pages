import Restaurante from '../../img/Restaurante.jpg'

export default function CardImage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      alt="Restaurante"
      src={Restaurante}
      style={{ width: '200px', height: '200px', textAlign: 'center' }}
    />
    </div>
  )
}
