import { Card, Divider } from "antd";
import CardImage from "../Components/Menu/CardImage";
import CardMenu from "../Components/Menu/CardMenu";
import CardFooter from "../Components/Menu/CardFooter";
import CardHeader  from "../Components/Menu/CardHeader";

function Menu() {

  return (
    <div className="bodyMenu">
      <div style={{ marginTop: "35rem", marginBottom: "2rem" }}>
        <Card
          style={{
            border: "none",
            paddingTop: "2rem",
            width: "100%",
            maxWidth: "100%", 
            margin: "0 auto"
          }}
          cover={<CardImage />}
          actions={[<CardFooter key={1} />]}
        >
          <CardHeader/>
          <Divider variant="solid" style={{borderWidth: 4}} />

          <CardMenu />
          <Divider variant="solid" style={{borderWidth: 4}}  />
        </Card>
      </div>
    </div>
  );
}

export default Menu;
