const Sidebar = ({ setShowSidebar }) => {
  function handleClick(e) {
    if (e.target.id === "sidebar-container") setShowSidebar(false);
  }

  return (
    <div
      className="sidebar-container"
      id="sidebar-container"
      onClick={handleClick}
    >
      <div className="sidebar">This is the sidebar</div>
    </div>
  );
};

export default Sidebar;
