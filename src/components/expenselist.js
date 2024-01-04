const ExpenseListComponent = () => {
    return(
        <>
            <div class="layout-container__expenses">
                <ul>
                    <li class="flexbox flexbox-justify-between">
                        <div class="flexbox">
                            <div class="flexbox flexbox-column flexbox-align-center date">
                                <div class="month">January</div>
                                <div class="day">1</div>
                            </div>
                            <div class="flexbox flexbox-align-center">
                                <h3 class="title">Expense 2</h3>
                                <span class="type-pill">Credit</span>
                            </div>
                        </div>
                        <div class="flexbox flexbox-align-center">
                            <div class="pill">2000 INR</div>
                            <button class="actions">
                                <span class="material-icons edit">edit</span>
                            </button>
                            <button class="actions">
                                <span class="material-icons delete">delete</span>
                            </button>
                        </div>
                    </li>
                    <li class="flexbox flexbox-justify-between">
                        <div class="flexbox">
                            <div class="flexbox flexbox-column flexbox-align-center date">
                                <div class="month">January</div>
                                <div class="day">2</div>
                            </div>
                            <div class="flexbox flexbox-align-center">
                                <h3 class="title">Expense 3</h3>
                                <span class="type-pill">Debit</span>
                            </div>
                        </div>
                        <div class="flexbox flexbox-align-center">
                            <div class="pill">340 INR</div>
                            <button class="actions">
                                <span class="material-icons edit">edit</span>
                            </button>
                            <button class="actions">
                                <span class="material-icons delete">delete</span>
                            </button>
                        </div>
                    </li>
                    <li class="flexbox flexbox-justify-between">
                        <div class="flexbox">
                            <div class="flexbox flexbox-column flexbox-align-center date">
                                <div class="month">January</div>
                                <div class="day">3</div>
                            </div>
                            <div class="flexbox flexbox-align-center">
                                <h3 class="title">Expense 1</h3>
                                <span class="type-pill">Debit</span>
                            </div>
                        </div>
                        <div class="flexbox flexbox-align-center">
                            <div class="pill">890 INR</div>
                            <button class="actions">
                                <span class="material-icons edit">edit</span>
                            </button>
                            <button class="actions">
                                <span class="material-icons delete">delete</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ExpenseListComponent;