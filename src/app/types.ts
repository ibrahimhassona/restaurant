export interface NavProps {
  ConatinerStyle: string,
  linkStyle: string,
}
export interface MobileNavProps {
  ConatinerStyle: string,
  linkStyle: string,
  IconsStyle?:string,
}
export type NavLinks = {
    path: string,
    name: string,
    offset: number,
    icon?:React.ReactNode,
}[] 

export interface CartData {
  img: string;
  title:string;
  price:number;
  id:number
}
export interface Data{
  items :CartData;
  quantity : number;
}
export interface AllData {
  items : Data[];
}

export interface MarkerProps{
  position: [number, number];
  title: string;
  subtitle: string;
  image: string;
}