import { useState } from "react";
import ExpenseListComponent from "../components/Expense/ExpenseList";
import SidebarComponent from "../components/SideBar/Sidebar";
import ExpenseFormComponent from "../components/Expense/ExpenseForm";

const ExpenseComponent = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleActiveListItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="flexbox">
            <SidebarComponent
                activeListItem={activeItem}
                updateActiveListItem={(params) => {
                    handleActiveListItem(params);
                }}
            />
            <div className="layout-container">
                {
                    activeItem === 0 ?
                        <ExpenseListComponent />
                        :
                        (
                            activeItem === 1
                                ?
                                <ExpenseFormComponent/>
                                :
                                (
                                    activeItem === 2
                                        ?
                                        "Analytics Page" :
                                        ""
                                )
                        )
                }
            </div>
        </div>
    );
}

export default ExpenseComponent;