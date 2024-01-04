import SidebarComponent from "./sidebar";
import ExpenseListComponent from "./expenselist";
const ExpenseComponent = () => {
    return(
        <div className="flexbox">
            <SidebarComponent/>
            <div className="layout-container">
                <ExpenseListComponent/>
            </div>
        </div>
    );
}

export default ExpenseComponent;