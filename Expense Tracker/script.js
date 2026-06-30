let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let categorySelected = document.querySelector("#category");
let addButton = document.querySelector("#add-btn");
let status = document.querySelector("#status");
let totalExpenses = document.querySelector("#total");
let expenseContainer = document.querySelector("#expenses-container");
let expenseTracker = [];

function validate(){
    if(description.value.trim() === ""){
        alert("Please enter valid description");
        return false;
    }


    if(amount.value <= 0){
        alert("Please enter valid amount");
        return false;
    }

    if(!categorySelected.value){
        alert("Please select category");
        return false;
    }

    return true;
}

function createExpenseData(){
    let obj = {
        id : Date.now(),
        expenseDescription : description.value,
        expenseAmount : Number(amount.value),
        expenseCategory : categorySelected.value,
    };

    return obj;
}

function saveExpenseData(obj){
    if(!localStorage.getItem("expenses")){
        let currExpense = [];
        currExpense.push(obj);
        localStorage.setItem("expenses" , JSON.stringify(currExpense));
    }

    else{
        let currExpense = JSON.parse(localStorage.getItem("expenses"));
        currExpense.push(obj);
        localStorage.setItem("expenses" , JSON.stringify(currExpense));
    }
}

function getExpenseData(){
    if(localStorage.getItem("expenses")){
        expenseTracker = JSON.parse(localStorage.getItem("expenses"));
    }

    return expenseTracker;
}

function renderExpenses(data){
    expenseContainer.innerHTML = "";
    data.forEach(function(val){
        let div = document.createElement("div");
        div.classList.add("expense-card");

        let para = document.createElement("p");
        para.classList.add("expense-description");
        para.textContent = val.expenseDescription;

        let h3 = document.createElement("h3");
        h3.classList.add("expense-amount");
        h3.textContent = val.expenseAmount;

        let h4 = document.createElement("h4");
        h4.classList.add("expense-category");
        h4.textContent = val.expenseCategory;

        let dltButton = document.createElement("button");
        dltButton.classList.add("delete-btn");;
        dltButton.textContent = "Delete";

        div.append(para,h3,h4,dltButton);
        expenseContainer.appendChild(div);

        dltButton.addEventListener("click" , function(){
            if(localStorage.getItem("expenses")){
                let tracker = JSON.parse(localStorage.getItem("expenses"));
                let filteredExpenses = tracker.filter(function(data){
                    return data.id !== val.id;
                })

                localStorage.setItem("expenses" , JSON.stringify(filteredExpenses));
                renderExpenses(filteredExpenses);

                let totalExpenseMoney = overallExpenses(filteredExpenses);
                totalExpenses.textContent = `₹${totalExpenseMoney}`

            }
        })
    })
}

function overallExpenses(data){
    let total = data.reduce(function(total , val){
        return total+val.expenseAmount;
    },0);

    return total;
}

addButton.addEventListener("click" , function(){
    let isValid = validate();
    if(!isValid){
        return;
    }

    let result = createExpenseData();
    saveExpenseData(result);

    let data = getExpenseData();
    renderExpenses(data);

    let totalExpenseMoney = overallExpenses(data);
    totalExpenses.textContent = `₹${totalExpenseMoney}`;

    description.value = "";
    amount.value = "";
    categorySelected.value = "";

})

window.addEventListener("load" , function(){
    let data = getExpenseData();
    renderExpenses(data);

    let totalExpenseMoney = overallExpenses(data);
    totalExpenses.textContent = `₹${totalExpenseMoney}`;
    
})
