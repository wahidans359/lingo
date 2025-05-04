import { isAdmin } from "@/lib/admin";

import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"));
const AdminPage = async() => {
    const admin = await isAdmin();
    if(!admin)
        redirect("/");
    return (
        <App/>
    )
}
export default AdminPage;