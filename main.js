//fetching the data 
axios.get("https://crudcrud.com/api/d89c5f4efd154a43a4ce2a4d579144dd/Rest_det")
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            showOutputOnScreen(res.data[i]);
        }
    })
    .catch(err => console.log(err));

function Entry_free(event) {
    event.preventDefault();
    let price = document.getElementById("price_food").value;
    let table_selected = document.getElementById("Table_number").value;
    let menu_selected = document.getElementById("menu").value;
    let suggestion_added = document.getElementById("Suggestions").value;

    let restaurant_obj = {
        price,
        table_selected,
        menu_selected,
        suggestion_added
    }
    add_data(restaurant_obj)
    function add_data(restaurant_obj) {
        axios.post("https://crudcrud.com/api/d89c5f4efd154a43a4ce2a4d579144dd/Rest_det", restaurant_obj)
            .then(res => showOutputOnScreen(res.data))
            .catch(err => console.log(err));
    }
}

// On submitting the data will be stored on CRUD CRUD // 


//ShowOutputOnScreen Function 

function showOutputOnScreen(obj) {
    let Table_1 = document.getElementById("Table1");
    let Table_2 = document.getElementById("Table2");
    let Table_3 = document.getElementById("Table3");
    let Table_4 = document.getElementById("Table4");
    let Table_5 = document.getElementById("Table5");

    let Table_li = document.createElement("li");
    Table_li.textContent = obj.price + " " + obj.table_selected + " " + obj.menu_selected + " "
        + obj.suggestion_added + " " + obj._id;


    let delete_btn = document.createElement("button");
    delete_btn.appendChild(document.createTextNode("DELETE"));

    if (obj.table_selected === "Table1") {
        Table_1.appendChild(Table_li);
        Table_li.appendChild(delete_btn);
    }
    if (obj.table_selected === "Table2") {
        Table_2.appendChild(Table_li);
        Table_li.appendChild(delete_btn);
    }
    if (obj.table_selected === "Table3") {
        Table_3.appendChild(Table_li);
        Table_li.appendChild(delete_btn);
    }
    if (obj.table_selected === "Table4") {
        Table_4.appendChild(Table_li);
        Table_li.appendChild(delete_btn);
    }
    if (obj.table_selected === "Table5") {
        Table_5.appendChild(Table_li);
        Table_li.appendChild(delete_btn);
    }
    delete_btn.onclick = () => {
        data_deleted(obj._id, obj.table_selected);
    }
}

function data_deleted(user_id, table_no) {
    var parentELe;

    if (table_no === "Table1") {
        parentELe = document.getElementById("Table1");
    }
    if (table_no === "Table2") {
        parentELe = document.getElementById("Table2");
    }
    if (table_no === "Table3") {
        parentELe = document.getElementById("Table3");
    }
    if (table_no === "Table4") {
        parentELe = document.getElementById("Table4");
    }
    if (table_no === "Table5") {
        parentELe = document.getElementById("Table5");
    }

    for (let i = 0; i < parentELe.children.length; i++) {
        let child = parentELe.children[i];
        if (child.textContent.includes(user_id)) {
            parentELe.removeChild(child);
        }
    }

    axios.delete(`https://crudcrud.com/api/d89c5f4efd154a43a4ce2a4d579144dd/Rest_det/${user_id}`)
        .then(res => alert("User Deleted: " + user_id))
        .catch(err => console.log(err));
}

