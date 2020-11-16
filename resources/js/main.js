$(document).ready(function () {

    // Responsive html font size
    const iw = window.innerWidth;
    const rootScreenWidth = 1366;
    const rootFontPercentage = 62.5;


    /*
        if (iw <= 1366) {
            $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

        } else if (iw >= 1440) {
            $('#my_html').attr("style", `font-size:65.87%`);
            

        } else {
            let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
            $('#my_html').attr("style", `font-size:${currentFontSize}%`);
        }
        */




    if (iw >= 1366) {
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);
    } 
    if (iw > 1440) {
        $("#top_bar").addClass('more_then_1440');
        $("#side_bar").addClass('more_then_1440');
        $(".main_content").addClass('more_then_1440');              
        $("#dashboard_page").addClass('more_then_1440');       
       
    }else{
        $("#top_bar").removeClass('more_then_1440');
        $("#side_bar").removeClass('more_then_1440');
        $(".main_content").removeClass('more_then_1440');              
        $("#dashboard_page").removeClass('more_then_1440');       
    }

    // Responsive html font size end


    $(window).resize(function () {
        // alert('resizing')
        const iw = window.innerWidth;
        const rootScreenWidth = 1366;
        const rootFontPercentage = 62.5;
        
        
    if (iw >= 1366) {
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);
    } 
    if (iw > 1440) {
        $("#top_bar").addClass('more_then_1440');
        $("#side_bar").addClass('more_then_1440');
        $(".main_content").addClass('more_then_1440');              
        $("#dashboard_page").addClass('more_then_1440');       
       
    }else{
        $("#top_bar").removeClass('more_then_1440');
        $("#side_bar").removeClass('more_then_1440');
        $(".main_content").removeClass('more_then_1440');              
        $("#dashboard_page").removeClass('more_then_1440');       
    }
    })



});