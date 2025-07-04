import SideNav from "../ui/dashboard/sidenav";

export default function layout ({children}: {children:React.ReactNode}){
    return(
        <div>
            <SideNav/>
            {children}
        </div>
    )
}