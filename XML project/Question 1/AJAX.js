/*
Name of the file: AJAX.js
Name of the author: Lario Truter
Date created: 16 February 2023
Operating system: Windows 10
Version: 10
Description of the code: Function to load XML contents to HTML page.
*/

function loadXMLData(URL){
  // Create the XML request
  xmlReq = null;
 
  // If Mozilla browser is used
  xmlReq = new XMLHttpRequest();
 
  if(xmlReq==null)
  {
    // Failed to create the request
    return;
  }
 
  // Function to handle the request
  xmlReq.onreadystatechange = function(){
    switch(xmlReq.readyState){
      case 0: // Uninitialized
        break;
      case 1: // Loading
        break;
      case 2: // Loaded
        break;
      case 3: // Interactive
        break;
      case 4: // Complete
      // Retrieve the data 
      getXMLData(
        //Retrieves each child element in the XML file.
		  "<th>Group Name</th> <th>Debut Album</th> <th>Price</th> <th>Debut</th> <th>Genre</th> <th>Album Cover</th><tr><td>" +
		xmlReq.responseXML.getElementsByTagName('groupName')
         [0].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('debutAlbum')
         [0].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('price')
         [0].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('debut')
         [0].firstChild.data + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('genre')
         [0].firstChild.data + 
            "</td><td><img height='150px' width='150px' src='" +          
		xmlReq.responseXML.getElementsByTagName('ateezCover')
         [0].firstChild.data + 
            "'/></td></tr><tr><td>" +

		
		xmlReq.responseXML.getElementsByTagName('groupName')
         [1].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('debutAlbum')
         [1].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('price')
         [1].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('debut')
         [1].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('genre')
         [1].firstChild.data  + 
            "</td><td><img height='150px' width='150px' src='" +
		xmlReq.responseXML.getElementsByTagName('oneusCover')
         [0].firstChild.data  + 
            "'/></td></tr><tr><td>" +
			
		
		xmlReq.responseXML.getElementsByTagName('groupName')
         [2].firstChild.data + 
            "</td><td>" +
         xmlReq.responseXML.getElementsByTagName('debutAlbum')
         [2].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('price')
         [2].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('debut')
         [2].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('genre')
         [2].firstChild.data  + 
            "</td><td> <img height='150px' width='150px' src='" +
		xmlReq.responseXML.getElementsByTagName('strayKidsCover')
         [0].firstChild.data  + 
            "'/></td></tr><tr><td>" +
			

        xmlReq.responseXML.getElementsByTagName('groupName')
         [3].firstChild.data + 
            "</td><td>" +			
        xmlReq.responseXML.getElementsByTagName('debutAlbum')
         [3].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('price')
         [3].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('debut')
         [3].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('genre')
         [3].firstChild.data  + 
            "</td><td> <img height='150px' width='150px' src='" +
		xmlReq.responseXML.getElementsByTagName('treasureCover')
         [0].firstChild.data  + 
            "'/></td></tr><tr><td>" +
			

        xmlReq.responseXML.getElementsByTagName('groupName')
         [4].firstChild.data + 
            "</td><td>" +			
        xmlReq.responseXML.getElementsByTagName('debutAlbum')
         [4].firstChild.data + 
            "</td><td>" +
        xmlReq.responseXML.getElementsByTagName('price')
         [4].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('debut')
         [4].firstChild.data  + 
            "</td><td>" +
		xmlReq.responseXML.getElementsByTagName('genre')
         [4].firstChild.data  + 
            "</td><td> <img height='150px' width='150px' src='" +
		xmlReq.responseXML.getElementsByTagName('txtCover')
         [0].firstChild.data +
			"'/></td></tr>");
          break;
        default:
          break;
        }
    }
 
    // Open and then send the request
    xmlReq.open ('GET', URL, true);
    xmlReq.send (null);
}