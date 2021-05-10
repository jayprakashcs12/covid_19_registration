// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*checkbox */
$('form').on('click', '.symptoms', function() {
  $('input.symptoms').prop('required', $('input.symptoms:checked').length === 0);
});
/*checkbox */

let array = []
function onLogin(e) {
    e.preventDefault()

    let ob = {
      firstname:e.target.firstname.value,
      lastname:e.target.lastname.value,
      aadhar:e.target.aadhar.value,
      number:e.target.number.value,
      date:e.target.date.value,
      gender:e.target.gender.value,
      diagnised:e.target.diagnised.value,
      symptoms:e.target.symptoms.value,
      street_address:e.target.street_address.value,
      landmark:e.target.landmark.value,
      pincode:e.target.pincode.value,
      state:e.target.state.value,
    }
    // console.log(ob)
    array.push(ob)

    let htmlCode = ""
    array.forEach(function (val) {
      htmlCode += `<tr>
      <td>${val.firstname}</td>
      <td>${val.lastname}</td>
      <td>${val.aadhar}</td>
      <td>${val.number}</td>
      <td>${val.date}</td>
      <td>${val.gender}</td>
      <td>${val.diagnised}</td>
      <td>${val.symptoms}</td>
      <td>${val.street_address}</td>
      <td>${val.landmark}</td>
      <td>${val.pincode}</td>
      <td>${val.state}</td>
      <td>
        <button><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
      </td>
      <td>
        <button><i class="fa fa-trash" aria-hidden="true"></i></button>
      </td>
      </tr>
      `
    })
    document.getElementById('sect').innerHTML = htmlCode;

}
// console.log(array)

// form closed after submit
function myFunction() {
  var x = document.getElementById("myModal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}