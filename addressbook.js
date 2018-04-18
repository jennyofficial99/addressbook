function edit_row(no)
{
  document.getElementById("edit_button"+no).style.display="none";
  document.getElementById("save_button"+no).style.display="block";

  var name=document.getElementById("name_row"+no);
  var email=document.getElementById("email_row"+no);
  var phone=document.getElementById("phone_row"+no);

  var name_data=name.innerHTML;
  var email_data=email.innerHTML;
  var phone_data=phone.innerHTML;

  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>"
  email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>"
  phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>"

}

function save_row(no)
{
  var name_val=document.getElementById("name_text"+no).value;
  var email_val=document.getElementById("email_text"+no).value;
  var phone_val=document.getElementById("phone_text"+no).value;

  document.getElementById("name_row"+no).innerHTML=name_val;
  document.getElementById("email_row"+no).innerHTML=email_val;
  document.getElementById("phone_row"+no).innerHTML=phone_val;

  document.getElementById("edit_button"+no).style.display="block";
  document.getElementById("save_button"+no).style.display="none";

}

function delete_row(no)
{
  document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
  {
    var new_name=document.getElementById("new_name").value;
    var new_email=document.getElementById("new_email").value;
    var new_phone=document.getElementById("new_phone").value;

    var table=document.getElementById("data_table");
    var table_len=(table.rows.length) -1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";



    document.getElementById("new_name").value="";
    document.getElementById("new_email").value="";
    document.getElementById("new_phone").value="";


  }
