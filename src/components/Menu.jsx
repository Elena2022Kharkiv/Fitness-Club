const Menu = () => {

  const menuItems = [
    { name: 'Home', link: '/home'},
    { name: 'Class Schedule', link: '/about'},
    { name: 'Visit Us', link: '/blog'},
  ];

  return (
    <ul className="menu">
        { 
          menuItems.map((item, index) => 
            <li className="menu__item" key={ index }>
              <a href={ item.link }>{ item.name }</a>
            </li>
          )
        }            
    </ul>
  )    
}

export default Menu;