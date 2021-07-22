import classNames from 'classnames';
import * as React from 'react';
import { useState, createContext } from 'react';

type MenuMode = 'horizontal' | 'vertacal';

interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void
}

interface MenuContextProps {
  activeIndex: number;
  onSelect?: (selectedIndex: number) => void
}
export const MenuContext = createContext<MenuContextProps>({ activeIndex: 0 });  // 创建的context为一个对象，有一个默认初始index为0 

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, onSelect, children, style } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  // 定义一个点击事件函数，包裹onSelect，那么就模拟了select事件
  const handleClick = (index: number) => {
    setActive(index);   // 使currentActive变化，那么activeIndex就变化，那么状态树就变化，对比子组件的index
    if (onSelect) {
      onSelect(index);
    }
  }
  const passedContext: MenuContextProps = {
    activeIndex: currentActive ? currentActive : 0,      // currentActive可能为undefined,而index为数字
    onSelect: handleClick                                // 同时传递点击事件函数进入状态树，子组件就可以使用这个函数
  }

  const classes = classNames('man-menu', className, `menu-${mode}`);

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>   {/* 将passedContext传入状态树中，子组件就也能共享使用 */}
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}


export default Menu;