import { Typography } from 'antd';

const { Title, Text } = Typography;

const CardHeader = () => {
  return (
    <>
    <Title
            level={3}
            style={{
              fontWeight: "bolder",
              marginTop: "0px",
              textAlign: "center",
              fontSize: "35px",
            }}
          >
            Nuestro Menú
          </Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              Bienvenido a nuestro restaurante donde{" "}
            </Text>
            <Text style={{ textAlign: "center" }}>
              le vamos a ofrecer lo mejor en comida mexicana al mejor
            </Text>
            <Text style={{ textAlign: "center" }}>precio.</Text>
          </div>
    </>
  )
}

export default CardHeader
