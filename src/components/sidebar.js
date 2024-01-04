const SidebarComponent = () => {
    return(
        <>
            <div class="sidebar-container">
                <div class="sidebar-container__brand">
                    Expense Tracker
                </div>
                <div class="sidebar-container__list">
                    <ul>
                        <li>
                            <a class="active" href="/">
                                <span class="material-icons">insights</span>
                                <span>Expenses</span>
                            </a>
                        </li>
                        <li>
                            <a href="/add">
                                <span class="material-icons">note_add</span>
                                <span>Add Expense</span>
                            </a>
                        </li>
                        <li>
                            <a href="/analytics">
                                <span class="material-icons">analytics</span>
                                <span>Analytics</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarComponent;