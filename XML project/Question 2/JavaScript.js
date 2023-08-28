 /*
 Name of the file: JavaScript.js
Name of the author: Lario Truter
Date created: 20 February 2023
Operating system: Windows 10
Version: 10
Description of the code: JavaScript to load XML contents to the HTML page 
and function to calculate the total number of items in the table.
 */
 
 if (window.XMLHttpRequest)
          {// Code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
          }
        else
          {// Code for IE6, IE5
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
            xmlhttp.open("GET","XML page.xml",false);
            xmlhttp.send();
            xmlDoc=xmlhttp.responseXML;
 
        var x=xmlDoc.getElementsByTagName("group");
        for (i=0;i<x.length;i++)
          {
           document.write("<tr><td>");
           document.write(x[i].getElementsByTagName("groupName")[0].
             childNodes[0].nodeValue);
           document.write("</td><td>");
           document.write(x[i].getElementsByTagName("debutAlbum")[0].
             childNodes[0].nodeValue);
           document.write("</td><td>");
           document.write(x[i].getElementsByTagName("price")[0].
             childNodes[0].nodeValue);
           document.write("</td><td>");
           document.write(x[i].getElementsByTagName("debut")[0].
             childNodes[0].nodeValue);
           document.write("</td><td>");
           document.write(x[i].getElementsByTagName("genre")[0].
             childNodes[0].nodeValue);
           document.write("</td></tr>");
          }

function total(){		// Function to calculate the total number of items displayed
	var count = document.querySelectorAll("tr > td").length - 1
	document.getElementById("counter").innerHTML = count;
}