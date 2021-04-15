

const ListCategory = () => {
    return(
        <ul id="sidebarNav" className="list-unstyled mb-0 sidebar-navbar">
        <li>
          <a className="dropdown-toggle dropdown-toggle-collapse dropdown-title" href="javascript:;" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="sidebarNav1Collapse" data-target="#sidebarNav1Collapse">
            Show All Categories
          </a>
          <div id="sidebarNav1Collapse" className="collapse" data-parent="#sidebarNav">
            <ul id="sidebarNav1" className="list-unstyled dropdown-list">
              {/* Menu List */}
              <li><a className="dropdown-item" href="#">Accessories<span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></a></li>
              <li><a className="dropdown-item" href="#">Cameras &amp; Photography<span className="text-gray-25 font-size-12 font-weight-normal"> (11)</span></a></li>
              <li><a className="dropdown-item" href="#">Computer Components<span className="text-gray-25 font-size-12 font-weight-normal"> (22)</span></a></li>
              <li><a className="dropdown-item" href="#">Gadgets<span className="text-gray-25 font-size-12 font-weight-normal"> (5)</span></a></li>
              <li><a className="dropdown-item" href="#">Home Entertainment<span className="text-gray-25 font-size-12 font-weight-normal"> (7)</span></a></li>
              <li><a className="dropdown-item" href="#">Laptops &amp; Computers<span className="text-gray-25 font-size-12 font-weight-normal"> (42)</span></a></li>
              <li><a className="dropdown-item" href="#">Printers &amp; Ink<span className="text-gray-25 font-size-12 font-weight-normal"> (63)</span></a></li>
              <li><a className="dropdown-item" href="#">Smart Phones &amp; Tablets<span className="text-gray-25 font-size-12 font-weight-normal"> (11)</span></a></li>
              <li><a className="dropdown-item" href="#">TV &amp; Audio<span className="text-gray-25 font-size-12 font-weight-normal"> (66)</span></a></li>
              <li><a className="dropdown-item" href="#">Video Games &amp; Consoles<span className="text-gray-25 font-size-12 font-weight-normal"> (31)</span></a></li>
              {/* End Menu List */}
            </ul>
          </div>
        </li>
        <li>
          <a className="dropdown-current active" href="#">Laptops &amp; Computers</a>
          <ul className="list-unstyled dropdown-list">
            {/* Menu List */}
            <li><a className="dropdown-item" href="#">Accessories<span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></a></li>
            <li><a className="dropdown-item" href="#">All in One<span className="text-gray-25 font-size-12 font-weight-normal"> (51)</span></a></li>
            <li><a className="dropdown-item" href="#">Gaming<span className="text-gray-25 font-size-12 font-weight-normal"> (44)</span></a></li>
            <li><a className="dropdown-item" href="#">Headphones<span className="text-gray-25 font-size-12 font-weight-normal"> (89)</span></a></li>
            <li><a className="dropdown-item" href="#">Headphone Accessories<span className="text-gray-25 font-size-12 font-weight-normal"> (4)</span></a></li>
            <li><a className="dropdown-item" href="#">Pendrives<span className="text-gray-25 font-size-12 font-weight-normal"> (14)</span></a></li>
            <li><a className="dropdown-item" href="#">Power Banks<span className="text-gray-25 font-size-12 font-weight-normal"> (61)</span></a></li>
            {/* End Menu List */}
          </ul>
        </li>
      </ul>
    )
}


export default ListCategory






