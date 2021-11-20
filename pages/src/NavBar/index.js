import React from 'react'

const NavBar = () => {
    return (
<header>
<nav>
  <h2 className="logo">PRODUT<span className="logo-bold">OS</span> </h2>
  <div className="nav-bar-actions">
  <div className="nav-bar-total">
    <span className="nav-bar-total-quantity">2 cursos</span>
    <span className="nav-bar-total-price"> R$ 82,00</span>
    </div>
    <button className="clean-btn"> Limpar</button>

  </div>
</nav>
</header>
    )
}

export default NavBar
