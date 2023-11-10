import VALUE from '../constants/value.js';

const getAllMenus = () => {
  const { appetizer, main, dessert, drink } = VALUE.menu;
  const allMenus = [...appetizer, ...main, ...dessert, ...drink];

  return new Map(allMenus);
};

export default getAllMenus;
