  function tableBuilder(selector) {
        return {
            createTable: function(colNames) {
                let table = $("<table>");
                let headerRow = $("<tr>");
                headerRow.appendTo(table);
                for (let colName of colNames)
                    headerRow.append($("<th>").text(colName));
                headerRow.append($("<th>Action</th>"));
                $(selector).empty();
                $(selector).append(table);
            },
            fillData: function(dataRows) {
                for (let dataRow of dataRows) {
                    let row = $("<tr>");
                    for (let cellData of dataRow)
                        row.append($("<td>").text(cellData));
                    let delButton = $("<button>Delete</button>");
                    delButton.click(function() {
                        $(this).parent().parent().remove();
                    });
                    row.append($("<td>").append(delButton));
                    row.appendTo($(selector + ' table'));
                }
            }
        }
    }