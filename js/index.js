$(document).ready(function(){

    showExhibition('H5', config['H5']);

    $('#exhibition').on('click', 'li', function(e){
        var e = event || window.event;
        var target = $(e.target || e.srcElement);
        var kind = target.attr('data-class');
        var kindConfig = config[kind];
        var pastTarget = $('#exhibition ul .active');
        var pastKind = pastTarget.attr('data-class');
        var pastKindCounts = config[pastKind];
        pastTarget.removeClass('active');
        target.addClass('active');

        hideExhibition();
        setTimeout(function(){
            showExhibition(kind, kindConfig);
        }, 666)
        
    });

    function hideExhibition() {
        var exhibition = $('.yt-exhibition');
        var clo1 = exhibition.find('.col-1');
        var clo2 = exhibition.find('.col-2');
        var clo3 = exhibition.find('.col-3');
        exhibition.find('img').fadeOut(666);
    };

    function showExhibition(kind, kindConfig) {
        var yt_exhibition = $(".yt-exhibition");
        yt_exhibition.empty();
        $('.magnificPopup__Box').unbind();
        var html = "";
            html += "<div class='yt-exhibition-row'>";
            html += "<div class='col-1 fl'>";
        var imgs = "";
        var hdimgs = "";

        for (var i = 0; i < kindConfig["col1"]; i++) {
            imgs = "images/" + kind + "/col-1-" + (i + 1) + ".png";
            hdimgs = "images/HD/" + kind + "/col-1-" + (i + 1) + ".jpg";
            html += "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6 magnificPopup__Box'>" +
                "<a data-effect='mfp-3d-flip' href=" + hdimgs + ">" +
                "<div class='box-2'>" +
                "<img class='img-responsive' src=" + imgs + ">" +
                "<div class='lupa text-center'>" +
                "<i class='fa fa-search-plus' style='margin-left: 15px;'></i>" +
                "</div>" +
                "</div>" +
                "</a>" +
                "</div>"
        }
            html += "</div>";
            html += "<div class='col-2 fl'>";

        for (var i = 0; i < kindConfig["col2"]; i++) {
            imgs = "images/" + kind + "/col-2-" + (i + 1) + ".png";
            hdimgs = "images/HD/" + kind + "/col-2-" + (i + 1) + ".jpg"
            var style = ""
            if (kind === 'OTHER' && i === 2) {
                style = "style='width: 487px;'"
            }
            html += "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6 magnificPopup__Box' " + style + ">" +
                "<a data-effect='mfp-3d-flip' href=" + hdimgs + ">" +
                "<div class='box-2'>" +
                "<img class='img-responsive' src=" + imgs + ">" +
                "<div class='lupa text-center'>" +
                "<i class='fa fa-search-plus' style='margin-left: 15px;'></i>" +
                "</div>" +
                "</div>" +
                "</a>" +
                "</div>"
        }
            html += "</div>";
            html += "<div class='col-3 fl'>";

        for (var i = 0; i < kindConfig["col3"]; i++) {
            imgs = "images/" + kind + "/col-3-" + (i + 1) + ".png";
            hdimgs = "images/HD/" + kind + "/col-3-" + (i + 1) + ".jpg"
            html += "<div class='col-xs-12 col-sm-6 col-md-6 col-lg-6 magnificPopup__Box'>" +
                "<a data-effect='mfp-3d-flip' href=" + hdimgs + ">" +
                "<div class='box-2'>" +
                "<img class='img-responsive' src=" + imgs + ">" +
                "<div class='lupa text-center'>" +
                "<i class='fa fa-search-plus' style='margin-left: 15px;'></i>" +
                "</div>" +
                "</div>" +
                "</a>" +
                "</div>"
        }
            html += "</div>";
            html += "</div>";
        yt_exhibition.html(html);
        $('.magnificPopup__Box').magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 300,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure magnificPopup__Animus');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true
                });
    };
});