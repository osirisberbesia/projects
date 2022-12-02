

$("input").change(function () {
    var value = String(this.value);
    // Si el valor es por leer
    if (value == "Por Leer") {
        $(this).css("border", "1px solid #3aaef1");
        $(this).css("border-radius", "15px");
        $(this).css("padding", "10px");
        $(this).css("background-color", "#001722");
        $(this).css("width", "100px");
        $(this).css("color", "white");
        $(this).css("font-family", "Verdana, Geneva, Tahoma, sans-serif");
        $(this).css("font-weight", "600");
    }

    // Else if the value is equal to 7, add a green border
    else if (value == "Leyendo") {
        $(this).css("border", "3px solid #dbdbdb");
        $(this).css("border-radius", "15px");
        $(this).css("padding", "10px");
        $(this).css("background-color", "#1298a3");
        $(this).css("width", "100px");
        $(this).css("color", "white");
        $(this).css("font-family", "Verdana, Geneva, Tahoma, sans-serif");
        $(this).css("font-weight", "600");
    }

    // Else if the value is greater than 7, add an orange border
    else if (value == "Leido") {
        $(this).css("border", "1px solid #055c4b");
        $(this).css("border-radius", "15px");
        $(this).css("padding", "10px");
        $(this).css("background-color", "#0d6c43");
        $(this).css("width", "100px");
        $(this).css("color", "#d2f9d5");
        $(this).css("font-family", "Verdana, Geneva, Tahoma, sans-serif");
        $(this).css("font-weight", "600");
    }
        // Else if the value is greater than 7, add an orange border
        else if (value == "Abandonado") {
            $(this).css("border", "3px solid #402a2a");
            $(this).css("border-radius", "15px");
            $(this).css("padding", "10px");
            $(this).css("background-color", "#440606a6");
            $(this).css("width", "100px");
            $(this).css("color", "#ff6262");
            $(this).css("font-family", "Verdana, Geneva, Tahoma, sans-serif");
            $(this).css("font-weight", "400");
            $(this).css("letter-spacing", " 1px");
        }

    // Else if the value is anything else, add a black border
    else {
        $(this).css("border", "5px solid black");
    }
}).trigger("change");