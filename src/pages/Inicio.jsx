import { Link } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

function Inicio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', }}>
      <Title style={{paddingRight: 5}} level={4}>
        <Link to='/menu'>Menu</Link> | 
        <Link style={{paddingLeft: 5}} to='/Productos'>Productos</Link>
      </Title>
    </div>
  );
}

export default Inicio;
