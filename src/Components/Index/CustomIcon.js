import * as ReactIcons from "react-icons/all";



const IconComponent = ({ icon, size }) => {
  const DynamicIconComponent = ReactIcons[icon];

  if (undefined === DynamicIconComponent) return <></>;

  return <DynamicIconComponent size={size} />;
};
export default IconComponent;