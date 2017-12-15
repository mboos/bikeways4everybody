/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [43.440036, -80.4659329],
	south : 43.33 ,
	west : -80.62,
	north : 43.55,
	east : -80.24,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoibWJvb3MiLCJhIjoiY2piNnlsdGlrMHhoNTJxbXoxZDUwbGxmdyJ9.Lq62YCNmAVLru7tw2NssdQ',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'mboos',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the <a href='http://tritag.ca/' target='_blank'>TriTAG</a> on biking in Waterloo Region.</p><p>It also allows you to submit input on where you would like to see a minimum grid cycling network by drawing on the map! The map is restricted to the urban areas of the Region.</p>"
};
