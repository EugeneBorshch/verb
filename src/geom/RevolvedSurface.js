verb.geom.RevolvedSurface = function( center, axis, angle, profile ) {

	this.setAll({
		"center": center,
		"axis": axis,
		"angle": angle,
		"profile": profile
	});

	var surface_props = this.nurbsRep();

	verb.geom.NurbsSurface.call(this, surface_props.degree_u, surface_props.knots_u, surface_props.degree_v, surface_props.knots_v, surface_props.control_points, surface_props.weights );

	this.watchAll( ['center', 'axis', 'angle', 'profile'], this.update );

}.inherits(verb.geom.NurbsSurface);

verb.geom.RevolvedSurface.prototype.nurbsRep = function(){

	  return this.nurbsEngine.eval_sync( 'get_revolved_surface', 
									[ this.get("center"), 
									  this.get("axis"), 
									  this.get("angle"), 
									  this.get("profile").get("knots"), 
									  this.get("profile").get("degree"), 
									  this.get("profile").get("controlPoints"),
									  this.get("profile").get("weights")] );

};