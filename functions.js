

  var i=1;
  function addMoreRows() {
    add_new_value_in_combobox();
    var company_name = document.getElementById('company_id').value;
    var estimated_earning = document.getElementById('ces_id').value;
	var change_type_company = document.getElementById('choose_type_company').value;
    var change_parent_company = document.getElementById('choose_parent_company').value;
	var table = document.getElementById('tbl_id');

    var row = table.insertRow();

    var number = row.insertCell(0);
    var name_of_company = row.insertCell(1);
    var type_of_company = row.insertCell(2);
    var row_company_estimated_earning = row.insertCell(3);
	var row_total_company_estimated_earning = row.insertCell(4);
    var change_row = row.insertCell(5);
  
    var delete_row = "<input type=\"checkbox\" id=\"complete\" value=\"no\">Delete"
	
	if(change_type_company=="main")
	{
    number.innerHTML = i;
    name_of_company.innerHTML = company_name;
    type_of_company.innerHTML = change_type_company;
    row_company_estimated_earning.innerHTML = estimated_earning;
	row_total_company_estimated_earning.innerHTML = estimated_earning;
	change_row.innerHTML = delete_row;
	i++;
	}else  if (change_type_company=="subsidiary")
	{
	number.innerHTML = '-';
    name_of_company.innerHTML = change_parent_company+"/"+company_name;
    type_of_company.innerHTML = change_type_company;
    row_company_estimated_earning.innerHTML = estimated_earning;
	row_total_company_estimated_earning.innerHTML = estimated_earning;
	change_row.innerHTML = delete_row;
	 
	}

  }
  

function doSearch() {
    var searchText = document.getElementById('searchTerm').value;
    var targetTable = document.getElementById('tbl_id');
    var targetTableColCount;
            
    //Loop through table rows
    for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
        var rowData = '';

        //Get column count from header row
        if (rowIndex == 0) {
           targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
           continue; //do not execute further code for header row.
        }
                
        //Process data rows. (rowIndex >= 1)
        for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
            rowData += targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
        }

        //If search term is not found in row data
        //then hide the row, else show
        if (rowData.indexOf(searchText) == -1)
            targetTable.rows.item(rowIndex).style.display = 'none';
        else
            targetTable.rows.item(rowIndex).style.display = 'table-row';
    }
}

		function deleteRow(tableID) {
			try {
			var table = document.getElementById(tableID);
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
				var chkbox = row.cells[5].childNodes[0];
				if(null != chkbox && true == chkbox.checked) {
					if(rowCount <= 1) {
						alert("Cannot delete all the rows.");
						break;
					}
					table.deleteRow(i);
					rowCount--;
					i--;
				}


			}
			}catch(e) {
				alert(e);
			}
		}

function child_company()
{ 

var change_type_company = document.getElementById("choose_type_company").value;
   
    if(change_type_company=="main")
    {
	 document.getElementById("choose_parent_company").style.display='none';
    }     
   else  if (change_type_company=="subsidiary"){
    document.getElementById("choose_parent_company").style.display='';
    }     
}

function add_new_value_in_combobox()
{
var x = document.getElementById('choose_parent_company');
var company_name = document.getElementById('company_id').value;

    var option = document.createElement("option");
    option.text = company_name;
    x.add(option);
}

  