import { InstagramOutlined, TikTokOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import { MdFacebook } from 'react-icons/md'
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const CardFooter = () => {
  return (
    <div style={{ width: '100%', padding: '10px 0', textAlign: 'center', margin: '0px',  }} className='footerMenu'>
        <div style={{ display: 'inline-block', textAlign: 'left' }}>
            <Title level={5} style={{ color: 'white' }}>Siguenos en nuestras <br />redes sociales</Title>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdFacebook style={{ fontSize: '24px', color: 'white', paddingRight: 10,
             }} /> 
            <InstagramOutlined style={{ fontSize: '24px', color: 'white',paddingRight: 10 }} /> 
            <TikTokOutlined style={{ fontSize: '24px', color: 'white',paddingRight: 10 }} /> 
            </div>

             <Divider variant="solid" style={{backgroundColor: '#3C3C3C', borderWidth: 2,}}/>
             <Title level={5} style={{ color: 'white', textTransform: 'uppercase'}}>Tacos el asadero</Title>
             
             <div style={{display: 'flex', flexDirection: 'row', }}>

             <BiPhone style={{ fontSize: 15, color: 'white', paddingRight: 10,
             }} /> 
             <Paragraph style={{ color: 'white', fontSize: 10 }}>+58 424-359-4016</Paragraph>
             </div>

             <div style={{display: 'flex', flexDirection: 'row', }}>

             <BiEnvelope style={{ fontSize: 15, color: 'white', paddingRight: 10,
             }} /> 
             <Paragraph style={{ color: 'white', fontSize: 10 }}>tacoselasadero@gmail.com</Paragraph>
             </div>

             <div style={{display: 'flex', flexDirection: 'row', }}>

             <FaLocationDot style={{ fontSize: 15, color: 'white', paddingRight: 10,
             }} /> 
             <Paragraph style={{ color: 'white', fontSize: 10 }}>+58 424-359-4016</Paragraph>
             </div>

             <Divider variant="solid" style={{backgroundColor: '#3C3C3C', borderWidth: 2, marginTop: 5, marginBottom: 5,
             }}/>

             <Paragraph style={{color: 'white', fontSize: 5, textAlign:'center', marginBottom: 0,
             }}>
             Lorem ipsum dolor sit amet consectetur
             </Paragraph>

             <Paragraph style={{color: 'white', fontSize: 5, textAlign:'center'}}>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             </Paragraph>
        </div>
    </div>
  )
}

export default CardFooter