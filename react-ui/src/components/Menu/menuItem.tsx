import * as React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import { MenuContext } from './menu'

console.log('MenuContext', MenuContext)

interface ItemProps {
  index: number;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<ItemProps> = (props) => {
  const { index, className, disabled, style, children } = props;
  const context = useContext(MenuContext);
  console.log('context', context)
  const classes = classNames('man-menu-item', className, { 'is-disable': disabled, 'is-active': context.activeIndex === index });

  const itemClick = () =>{
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  }

  return (
    <li className={classes} style={style} onClick={itemClick}>
      {children}
    </li >
  )
}

export default MenuItem;
