import DetailProducts from "../Components/Products/DetailProducts";
import TitleCategory from "../Components/Products/TitleCategory";

export const items = [
  {
    key: '1',
    label: <TitleCategory category={'Tacos'}/>,
    children: <>
    <DetailProducts nameProduct={'Asado'} price={'5.50'}/>
    <DetailProducts nameProduct={'Al pastor'} price={'5.50'}/>
    <DetailProducts nameProduct={'Pollo asado'} price={'5.50'}/>
    <DetailProducts nameProduct={'Tacos el asadero'} price={'5.50'}/>
    </>,
    
  },
  {
    key: '2',
    label: <TitleCategory category={'Quesadillas & Mulas'}/>,
    children: <>
    <DetailProducts nameProduct={'Quesadilla'} price={'5.50'}/>
    <DetailProducts nameProduct={'Mula'} price={'5.50'}/>
    </>,
  },
  {
    key: '3',
    label: <TitleCategory category={'Salsas'}/>,    
    children: <>
    <DetailProducts nameProduct={'Salsa napolitana'} price={'5.50'}/>
    <DetailProducts nameProduct={'Salsa inglesa'} price={'5.50'}/>
    </>,
  },
  {
    key: '4',
    label: <TitleCategory category={'Quesadillas & Mulas'}/>,
    children: <>
    <DetailProducts nameProduct={'Quesadilla'} price={'5.50'}/>
    <DetailProducts nameProduct={'Mula'} price={'5.50'}/>
    </>,
  },
  {
    key: '5',
    label: <TitleCategory category={'Bebidas alcohólicas'}/>,
    children: <>
    <DetailProducts nameProduct={'Ron'} price={'5.50'}/>
    <DetailProducts nameProduct={'Vodka'} price={'5.50'}/>
    </>,
  },
];