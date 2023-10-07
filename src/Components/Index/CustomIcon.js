// 1. Imports
import * as AntDesignIcons from "react-icons/ai";
import * as BootstrapIcons from "react-icons/bs";
import * as Boxicons from "react-icons/bi";
import * as CircularIcons from "react-icons/ci";
import * as Devicons from "react-icons/di";
import * as FeatherIcons from "react-icons/fi";
import * as FlatColorIcons from "react-icons/fc";
import * as FontawesomeIcons from "react-icons/fa";
import * as FontawesomeIcons6 from "react-icons/fa6";
import * as GameIcons from "react-icons/gi"; // Replace with correct path if needed
import * as GithubOcticonsIcons from "react-icons/go";
import * as GrommetIcons from "react-icons/gr";
import * as Heroicons from "react-icons/hi";
import * as Heroicons2 from "react-icons/hi2"; // Replace with correct path if needed
import * as IcoMoonFree from "react-icons/im";
import * as Icons8LineAwesome from "react-icons/lia"; // Replace with correct path if needed
import * as Ionicons4 from "react-icons/io";
import * as Ionicons5 from "react-icons/io5";
import * as LucideIcons from "react-icons/lu"; // Replace with correct path if needed
import * as MaterialDesignIcons from "react-icons/md";
import * as PhosphorIcons from "react-icons/pi";
import * as RadixIcons from "react-icons/rx"; // Replace with correct path if needed
import * as RemixIcon from "react-icons/ri";
import * as SimpleIcons from "react-icons/si";
import * as SimpleLineIcons from "react-icons/sl"; // Replace with correct path if needed
import * as TablerIcons from "react-icons/tb"; // Replace with correct path if needed
import * as ThemifyIcons from "react-icons/ti";
import * as Typicons from "react-icons/ti";
import * as VSCodeIcons from "react-icons/vsc"; // Replace with correct path if needed
import * as WeatherIcons from "react-icons/wi";

const ReactIcons = {
  ...AntDesignIcons,
  ...BootstrapIcons,
  ...Boxicons,
  ...CircularIcons,
  ...Devicons,
  ...FeatherIcons,
  ...FlatColorIcons,
  ...FontawesomeIcons,
  ... FontawesomeIcons6,
  ...GameIcons,
  ...GithubOcticonsIcons,
  ...GrommetIcons,
  ...Heroicons,
  ... Heroicons2,
  ...IcoMoonFree,
  ...Icons8LineAwesome,
  ...Ionicons4,
  ...Ionicons5,
  ...LucideIcons,
  ...MaterialDesignIcons,
  ...PhosphorIcons,
  ...RadixIcons,
  ...RemixIcon,
  ...SimpleIcons,
  ...SimpleLineIcons,
  ...TablerIcons,
  ...ThemifyIcons,
  ...Typicons,
  ... VSCodeIcons,
... WeatherIcons,
};

export default function IconComponent({ icon, size }) {
  const DynamicIconComponent = ReactIcons[icon];

  if (undefined === DynamicIconComponent) return <></>;

  return <DynamicIconComponent size={size} />;
};
