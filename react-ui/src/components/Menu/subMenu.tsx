import React, { useState, useContext, FunctionComponentElement } from 'react'
import classnames from 'classnames';
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem';
export interface SubMenuProps {
  index?: string;
  title: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props: SubMenuProps) => {
  const { index, title, className, disabled, children } = props;
  const [openFlag, setOpenFlag] = useState(false);
  const context = useContext(MenuContext);
  const classes = classnames('man-menu-item submenu-item', className, {
    'is-active': context.activeIndex === index
  })

  const handleClick = (e: React.MouseEvent) => {
    setOpenFlag(!openFlag);
  }

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    setOpenFlag(toggle);
  }

  const mouseHandles = context.mode === 'horizontal' ? { onMouseEnter: (e: React.MouseEvent,) => handleMouse(e, true), onMouseLeave: (e: React.MouseEvent,) => handleMouse(e, false) } : {}

  const clickHandles = context.mode === 'vertical' ? { onClick: handleClick } : {}

  const renderChildren = () => {
    const itemClasses = classnames('man-submenu', {
      'menu-opened': openFlag
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const subItem = child as FunctionComponentElement<MenuItemProps>;
      if (subItem.type.displayName === 'MenuItem') {
        return React.cloneElement(subItem, {
          index: `${index}_${i.toString()}`
        })
      } else {
        console.error('仅允许MenuItem组件')
        return null
      }
    })
    return (
      <ul className={itemClasses} >
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li className={classes} {...mouseHandles}>
      <div className='submenu-title' {...clickHandles}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu';
export default SubMenu