import {Menu, Icon} from 'antd';
import Link from 'umi/link';

function Header({location}) {
  return(
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />User</Link>
      </Menu.Item>
      <Menu.Item key="/umi">
        <Link to="https://github.com/umijs/umi" target="_blank">umi</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
       </Menu.Item>

    </Menu>
  );
}
export default Header;
