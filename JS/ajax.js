// --------------------------------------------iTunes Search API--------------------------------------------

// iTunes Search API
// ---START---
$(document).ready(innerAJAX('The+Beatles'));



function innerAJAX(def){
	$.ajax({
	  	url: 'http://itunes.apple.com/search?term=' + def + '&limit=10',
	  	dataType: 'json',
	  	success: function(data) {

			var me = data.results;

			// close open boxes
			Close_all();

			for (var i = 0; i < 10; i++) {

				if( me.length-1 >= i ){
					document.getElementById(`${i}`).style.display = "block";
					// TITLE
					document.getElementById(`Artist${i}`).innerHTML = me[i].artistName;
					document.getElementById(`Track${i}`).innerHTML = me[i].trackName;
					document.getElementById(`Collection${i}`).innerHTML = me[i].collectionName;
					document.getElementById(`Genre${i}`).innerHTML = me[i].primaryGenreName;

					// BOX
					document.getElementById(`boxFirst${i}`).innerHTML = me[i].artistName + ' - ' + me[i].trackName;

					document.getElementById(`boxCollection${i}`).innerHTML = "<b>Collection:</b> " + me[i].collectionName;
					document.getElementById(`boxTrack_Count${i}`).innerHTML = "<b>Track Count:</b> " + me[i].trackCount;
					document.getElementById(`boxPrice${i}`).innerHTML = "<b>Price:</b> " + me[i].collectionPrice + ' USD';

					document.getElementById(`boxTrack_duration${i}`).innerHTML = "<b>Track duration:</b> " + getTime(me[i].trackTimeMillis);
					document.getElementById(`boxTrack_Price${i}`).innerHTML = "<b>Track Price:</b> " + me[i].trackPrice + ' USD';

					// IMG
					document.getElementById(`img${i}`).src = me[i].artworkUrl100;

				}else 
					document.getElementById(`${i}`).style.display = "none";
			}		
		}	
	});
}