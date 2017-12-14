/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [43.440036, -80.4659329],
	south : 43.339662 ,
	west : -80.610809,
	north : 43.547055,
	east : -80.242767,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoibWJvb3MiLCJhIjoiY2piNnlsdGlrMHhoNTJxbXoxZDUwbGxmdyJ9.Lq62YCNmAVLru7tw2NssdQ',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'mboos',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the <a href='http://bostoncyclistsunion.org/' target='_blank'>Boston Cyclists Union</a> on biking in Boston.</p><p>It also allows you to submit input on where biking infrastructure can be improved by drawing on the map! The map is restricted to the inner core of Metro Boston, where we concentrate our advocacy.</p>"
};
