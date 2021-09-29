var projectName = $("#project-name").val();
var projectType = $("#project-type").val();
var hourlyWage = $("#project-wage").val();
var dueDate = $("#project-date").val();
var submitBtn = $("#submit-btn");





function printData() {
    var daysUntilDue = moment(dueDate, "M-DD-YYYY").fromNow();
    var totalEarned = (hourlyWage * 8) * daysUntilDue;
    var projectDetails = [[projectName,projectType,hourlyWage,dueDate,daysUntilDue,totalEarned]]
    
    var addRow = document.createElement("<tr>")
    tbody.append(addRow);
    
    for (i=0; i<projectDetails.length; i++) {
        var addDetail = document.createElement("<td>")
        addDetail.textContent = projectDetails[i];
        addRow.append(addDetail);
    }
}

submitBtn.addEventListener("click", printData);


$( function() {
    $( "#datepicker" ).datepicker();
  } );