const TopBar = (props) => (
    <header id="mainHeader" className="flex-grid v-align-middle main-header">
    <div className="logo-holder">
      <p className="text-center text-white">
       <i className="fas fa-th"></i> The Grid
      </p>
     </div>
     <nav className="main-nav flex-auto">
      <a className="hamburger inline-block text-center" href="/">
       <i className="fas fa-bars"></i>
      </a>
     </nav> 
   </header>
);
  
export default TopBar