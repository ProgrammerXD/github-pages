import { DeleteFilled, HolderOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import { MdEdit } from 'react-icons/md'
import { Typography } from 'antd';

const { Title } = Typography;

const DetailProducts = ({nameProduct, price}) => {
  return (
    <><Divider style={{margin:0, borderWidth: '3px'}}/>
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', paddingTop: '5px', paddingBottom: '5px',
    
     }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Title level={5} style={{ color: "#3C3C3C", padding: 0, marginTop: '5px', marginBottom: '5px' }}>
                <HolderOutlined style={{ fontSize: '20px', paddingRight: '5px' }} /> {nameProduct} 
            </Title>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Title level={5} style={{ marginTop: '5px', marginRight: '10px', color: "#3C3C3C" }}> $ {price}</Title>
            <Button icon={<MdEdit style={{ fontSize: '18px', color: 'red',
             }} />} />
            <Button style={{ marginLeft: '5px' }} type='primary' danger icon={<DeleteFilled style={{ fontSize: '13px', color: 'white' }} />} />
        </div>
    </div>
    <Divider style={{margin:0, borderWidth: '3px'}}/>
</>
  )
}

export default DetailProducts
