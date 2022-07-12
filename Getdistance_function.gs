
function Getdistance(start_address, end_address, destination, return_type) {
  var dist_call = Maps.newDirectionFinder()
    .setOrigin(start_address)
    .setMode(Maps.DirectionFinder.Mode.DRIVING);
  if (start_address == "N/A") {

    return 0;
  }
  if (destination == "N/A") {

    return 0;
  }
  if (end_address == "")
    dist_call.setDestination(destination);
  else {
    dist_call.setDestination(end_address);
  }
  var directions = dist_call.getDirections();

  var get_path = directions["routes"][0]["legs"][0];
  var distancein_meter = get_path["distance"]["value"];
  switch (return_type) {
    case "miles":
      return distancein_meter * 0.000621371
      break;
    case "minutes":
      var timedistnace = get_path["duration"]["text"];
      return timedistnace;

    default:
      return "Error: Wrong Unit Type";
  }
}




