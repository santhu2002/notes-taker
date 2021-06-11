console.log('welcome to NOTEPAD add your NOTES');
show();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", (e) => {
    addtxt = document.getElementById('addtxt');
    notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    show()
    addtxt.value = ''

})
function show() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes);
    }
    html = '';
    notesobj.forEach((element, index) => {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                        <h5 class="card-title">NOTE ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <a  id ="${index}" onclick="del(this.id)" class="btn btn-primary">DELETE</a>
            </div>
        </div > `;

    });
    let note = document.getElementById("notes");
    if (notesobj.length != 0) {
        note.innerHTML = html
    } else {
        note.innerHTML = `NOTHING TO SHOW..... ADD YOUR NOTES NOW.......`
    }



}
function del(num) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(num, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    show()



}
let search = document.getElementById("searchtxt");
search.addEventListener("input", () => {
    searchval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach((element) => {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(searchval)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })

})



