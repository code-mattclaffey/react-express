declare module "*.module.scss" {
  const styles: { [selector: string]: string };
  export default styles;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.scss?inline" {
  const content: string;
  export default content;
}

