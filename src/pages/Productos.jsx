import { Collapse } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons';
import '../App.css'
import { Typography } from 'antd'
import { items } from '../data/dataProducts';
const { Title, Text } = Typography;

const Productos = () => {
  return (
    <div className='bodyProductos'>
      <Title style={{ color: "#3C3C3C" }} level={2} >Añadir producto</Title>

      <Collapse 
        defaultActiveKey={['1']} 
        items={items} 
        expandIcon={({isActive}) => { 
          return (
              <CaretUpOutlined 
                rotate={isActive ? 180 : 0} 
                style={{ fontSize: '20px', color: '#3C3C3C', marginLeft: '8px' }} 
              />
          ); 
        }} 
        
        style={{ backgroundColor: '#D9D9D9', border:'none', borderRadius: 0 }} 
        headerStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', textAlign: 'center' }}
        expandIconPosition='right'  
      ></Collapse>
      <Text style={{fontWeight: 'bold', marginTop: '3rem', marginBottom: 10, cursor: 'pointer'}} underline type='danger' >Añadir nueva categoria</Text>
    </div>
  )
}

export default Productos
