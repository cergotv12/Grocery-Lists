var deletemode = false
window.onload = function() {
  if (localStorage.getItem('list')) {
    document.getElementById('list').innerHTML = localStorage.getItem('list')
    console.log("Fetched List Items")
  } else {
    console.log("Failed to Fetch List Items")
  }
}
document.getElementById("del").onclick  = function() {
  if (deletemode == false) {
    deletemode = true
    document.getElementById('del').innerHTML = 'Click Here to Exit Delete Mode'
  } else {
    deletemode = false
    document.getElementById('del').innerHTML = 'Click Here to Enter Delete Mode'
  }
  document.getElementById('del').classList.toggle('on')
}
document.getElementById("add").onclick  = function() {
  var node = document.createElement("Li");
  var text =  document.getElementById("user_input").value;
  var text2 =document.getElementById("quantity").value;
  var alltext = text2 + " " + text;
  var textnode=document.createTextNode(alltext);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
  if (deletemode == true) {
    ev.target.parentNode.removeChild(ev.target);
  }
}, false);
document.getElementById("section").onclick  = function() {
  var node = document.createElement("p");
  var text = document.getElementById("user_input").value; 
  var textnode=document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
$( function drag() {
  $( "#list" ).sortable();
  $( "#list" ).disableSelection();
} );
$( function disablesel() {
	$( "#del" ).disableSelection();
} );
$(function() {
  $( "#list" ).sortable();
  $( "#list" ).disableSelection();
});
window.onbeforeunload = function(){
  console.log("Saving Items...")
  window.localStorage.setItem('list',document.getElementById('list').innerHTML);
  console.log("Items Saved.")
}
