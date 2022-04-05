import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import {Link} from "react-router-dom"


const Productos = ({productos}) =>{
  return (
    <Page header={<h2>Productos</h2>} footer={<Nav/>}>
    </Page>
  );
}


export default Productos;
