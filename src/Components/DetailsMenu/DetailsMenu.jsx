import { Typography } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
const { Title } = Typography

const DetailsMenu = ({title, description, price}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>

        <div style={{ justifyItems: 'flex-start' }}>
            <Title level={4} style={{ fontWeight: 'bolder', marginBottom: '0px' }}>{title}</Title>
            <Paragraph >{description}</Paragraph>
        </div>

    <Title level={4} style={{ fontWeight: 'bolder' }}>...................................................</Title>
    <Title level={4} style={{ fontWeight: 'bolder'}}>${price}</Title>

    </div>
  )
}

export default DetailsMenu