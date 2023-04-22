const empName = document.getElementById('name');
const empProfession = document.getElementById('emp-profession');
const empAge = document.getElementById('empAge');
const empContainer = document.querySelector('.emp-list');
const filterEmp = document.querySelector('.emp-list + .btn');
const dropDownItem = document.querySelector('.dropdown-list');


//For storing the employee profession details
let arrayList = [];

//Add User reference
const addUserBtn = document.querySelector('form+button');

//empty employee Details object 
//count=0 initially
let empDetails = {
    count: 0
};

//calling add user event
addUserBtn.addEventListener('click', () => {
    
    /*Before adding the element make the details of employee
    visible*/
    arrayList.forEach(item => {
        if (item.style.display == 'none') {
            item.style.display = 'flex';
        }
    })

    //get the name,profession and age details from input
    empDetails.name = empName.value;
    empDetails.profession = empProfession.value;
    empDetails.age = empAge.value;

    //calling addUser function
    addUser(empDetails);

    //after adding the user make the input elements blank
    empName.value = '';
    empProfession.value = '';
    empAge.value= '';
})


//add user function
function addUser(empDetails) {
    //Main Box
    const box = document.createElement('div');
    box.className = 'box';

    //if input elements are blank alert the user and return
    if (empDetails.name == '' || empDetails.age == '' || empDetails.profession == '') {
        alert("Input details can't be blank");
        return;
    }
   
    //checking valid age or not
    if (isNaN(empDetails.age)) {
        alert("Enter valid Age");
        return;
    }
       
    //if constraints are valid increment the count by 1
    empDetails.count = empDetails.count + 1;
        
        
    //Append the S.No element to box
    let counterEle = document.createElement('p');
    counterEle.innerText = empDetails.count;
    box.append(counterEle);

    // Creating 3 Div elements
    const divName = document.createElement('div');
    const divProfession = document.createElement('div');
    const divAge = document.createElement('div');

    //Adding class names to 3 div elements
    divName.className = 'name';
    divProfession.className = 'emp-prof';
    divAge.className = 'age';


    //For 1st Div
    let employeeName = document.createElement('p');
    let employeeNameValue = document.createElement('p');
    employeeName.innerText = 'Name:';
    employeeNameValue.innerText = empDetails.name;

    divName.append(employeeName);
    divName.append(employeeNameValue);
    box.append(divName);

    //For 2nd Div
    let empProfession = document.createElement('p');
    let empProfessionValue = document.createElement('p');
    empProfession.innerText = 'Profession:';
    empProfessionValue.innerText = empDetails.profession;   

    divProfession.append(empProfession);
    divProfession.append(empProfessionValue);
    box.append(divProfession);

    //for 3rd Div
    let empAge = document.createElement('p');
    let empAgeValue = document.createElement('p');
    empAge.innerText = 'Age:';
    empAgeValue.id = 'age';
    empAgeValue.innerText = empDetails.age;

    divAge.append(empAge);
    divAge.append(empAgeValue);
    box.append(divAge);

    //finally add the box element to its parent container
    empContainer.append(box);
   
}



filterEmp.addEventListener('click', () => {

    if (dropDownItem.value == '') {
        alert("select a profession before clicking the button.");
        return;
    }
    const dropDownvalue = dropDownItem.value;
    const employeesList = empContainer.children;

    arrayList = Array.from(employeesList);



    arrayList.forEach(item => {
        if (item.style.display == 'none') {
            item.style.display = 'flex';
        }
    });


    //filter method to filter the elements based on dropdown value
    const filterList = arrayList.filter((list) => {
        
        if (list.children[2].children[1].innerText == dropDownvalue) {
            return list;
        } else {
            list.style.display = 'none';
        }
    })
    // console.log(arrayList[0].children[2].children[1].innerText);
    dropDownItem.selectedIndex = 0;
})