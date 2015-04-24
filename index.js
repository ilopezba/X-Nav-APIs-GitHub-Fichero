var repoHTML = "User: <input type='text' name='user' " +
    "id='user' size='10' />" +
    "Repo: <input type='text' name='repo' " +
    "id='repo' size='10' />" +
    "<button type='button' id='botonform'>Grab repo data</button>" +
    "<div id='repodata'/>";
var myrepo;
var github;
jQuery(document).ready(function() {
    $("#archivo").hide();
    $("#botonGet").click(getToken)
	    
});

function getToken() {
    var token = $("#Token").val();
    console.log (token);

    github = new Github({
	token: token,
	auth: "oauth"
    });

    $("#repoform").html(repoHTML)
    $("#botonform").click(getRepo);
};

function getRepo() {
    var user = $("#user").val();
    var reponame = $("#repo").val();
    myrepo = github.getRepo(user, reponame);
    myrepo.show(showRepo);
};

function showRepo(error, repo) {
    var repodata = $("#repodata");
    if (error) {
		repodata.html("<p>Error code: " + error.error + "</p>");
    } else {
		repodata.html("<p>Repo data:</p>" +
		      "<ul><li>Full name: " + repo.full_name + "</li>" +
		      "<li>Description: " + repo.description + "</li>" +
		      "<li>Created at: " + repo.created_at );
			  $("#archivo").show();
			  $("#botWrite").click(subirFichero);
    }
};

function subirFichero() {
	repo.write('master', $("#fichero").val(), $("#contenido").val(), 'commit', function(err) {});
	$("#fich").val("");
	$("#conte").val("");
};
	


