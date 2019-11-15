$("form").submit(function (e) {
    e.preventDefault();
    var artist = $("input[name='artist']").val();
    var title = $("input[name='title']").val();
    var album = $("input[name='album']").val();
    var genre = $("input[name='genre']").val();
    var year = $("input[name='year']").val();

    $(".data-table tbody").append("<tr data-artist='" + artist + "' data-title='" + title + "'  data-album='" + album + "'  data-genre='" + genre + "'  data-year='" + year + "'><td>" +
        artist + "</td><td>" + title +
        "</td><td>" +
        album + "</td><td>" +
        genre + "</td><td>" +
        year + "</td><td><button class='btn mx-2 btn-info btn-xs btn-edit'>Edit</button><button class='btn mx-2 btn-danger btn-xs btn-delete'>Delete</button></td></tr>"
    );

    $("input[name='artist']").val('');
    $("input[name='title']").val('');
    $("input[name='album']").val('');
    $("input[name='genre']").val('');
    $("input[name='year']").val('');
});

$("body").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var artist = $(this).parents("tr").attr('data-artist');
    var title = $(this).parents("tr").attr('data-title');
    var album = $(this).parents("tr").attr('data-album');
    var genre = $(this).parents("tr").attr('data-genre');
    var year = $(this).parents("tr").attr('data-year');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_artist" value="' + artist + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_title" value="' + title + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_album" value="' + album + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_genre" value="' + genre + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_year" value="' + year + '">');

    $(this).parents("tr").find("td:eq(5)").prepend(
        "<button class='btn mx-2 btn-info btn-xs btn-update'>Update</button><button class='btn mx-2 btn-warning btn-xs btn-cancel'>Cancel</button>"
    )
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function () {
    var artist = $(this).parents("tr").attr('data-artist');
    var title = $(this).parents("tr").attr('data-title');
    var album = $(this).parents("tr").attr('data-album');
    var genre = $(this).parents("tr").attr('data-genre');
    var year = $(this).parents("tr").attr('data-year');


    $(this).parents("tr").find("td:eq(0)").text(artist);
    $(this).parents("tr").find("td:eq(1)").text(title);
    $(this).parents("tr").find("td:eq(2)").text(album);
    $(this).parents("tr").find("td:eq(3)").text(genre);
    $(this).parents("tr").find("td:eq(4)").text(year);


    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});


$("body").on("click", ".btn-update", function () {
    var artist = $(this).parents("tr").find("input[name='edit_artist']").val();
    var title = $(this).parents("tr").find("input[name='edit_title']").val();
    var album = $(this).parents("tr").find("input[name='edit_album']").val();
    var genre = $(this).parents("tr").find("input[name='edit_genre']").val();
    var year = $(this).parents("tr").find("input[name='edit_year']").val();

    $(this).parents("tr").find("td:eq(0)").text(artist);
    $(this).parents("tr").find("td:eq(1)").text(title);
    $(this).parents("tr").find("td:eq(2)").text(album);
    $(this).parents("tr").find("td:eq(3").text(genre);
    $(this).parents("tr").find("td:eq(4)").text(year);

    $(this).parents("tr").attr('data-artist', artist);
    $(this).parents("tr").attr('data-title', title);
    $(this).parents("tr").attr('data-album', album);
    $(this).parents("tr").attr('data-genre', genre);
    $(this).parents("tr").attr('data-year', year);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});