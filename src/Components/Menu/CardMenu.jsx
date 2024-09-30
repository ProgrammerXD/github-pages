import Title from 'antd/es/typography/Title'
import DetailsMenu from '../DetailsMenu/DetailsMenu'

const CardMenu = () => {
  return (
    <>
    <Title level={3} style={{ fontWeight: 'bolder', textAlign: 'center' }}>Tacos</Title>
    <DetailsMenu title={'Asada'} description={'Grilled Steak'} price={'5.50'}/>
    <DetailsMenu title={'Al Pastor'} description={'Marinated Pork'} price={'5.25'}/>
    <DetailsMenu title={'Pollo Asado'} description={'Grilled Chicken'} price={'5.25'}/>
    </>
  )
}

export default CardMenu