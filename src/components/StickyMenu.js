import React from 'react';
import PropTypes from 'prop-types';

class StickyMenu extends React.Component {
  menuItemSubmit = tag => {
    this.props.submitSearchTag(tag);
    this.props.handleMenuToggle();
  };

  render() {
    return (
      <div className={`sticky-menu ${this.props.menuToggle ? 'sticky-menu--open' : ''}`}>
        <h1 className="sticky-menu__logo">Logo</h1>
        <span className="sticky-menu__toggle" onClick={this.props.handleMenuToggle}>Menu</span>
        <ul className="sticky-menu__list">
          {this.props.menuItems.map((menuItem, index) => {
            return (
              <li key={index} className="sticky-menu__list-item">
                <a
                  href={`#${menuItem.tag}`}
                  className="sticky-menu__link"
                  onClick={() => this.menuItemSubmit(menuItem.tag)}>
                  {menuItem.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  static propTypes = {
    menuToggle: PropTypes.bool,
    handleMenuToggle: PropTypes.func,
    menuItems: PropTypes.array
  }
}

export default StickyMenu;