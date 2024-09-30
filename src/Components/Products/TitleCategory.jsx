import { HolderOutlined } from '@ant-design/icons'
import { Typography } from 'antd';

const { Title } = Typography;

const TitleCategory = ({category}) => {
  return (
    <Title level={3} style={{ color: "#3C3C3C", display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:0, marginBottom: 0,
    }}><HolderOutlined style={{ fontSize: '25px', paddingRight:'5px' }} /> {category}</Title>
  )
}

export default TitleCategory
