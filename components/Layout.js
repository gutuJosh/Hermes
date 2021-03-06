import Header from './Header'
import Sidebar from './SiteSidebar'
const Layout = (props) => (
  <>
     <div className="content-wrapper">
       <Sidebar pageInfo={props.pageInfo}/>
       <main className="content flex-item auto">
       <Header pageInfo={props.pageInfo}/>
        {props.children}
       </main>
    </div>
  </>
)

export default Layout