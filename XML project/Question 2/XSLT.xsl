<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!--
Name of the file: XSLT.xsl
Name of the author: Lario Truter
Date created: 20 February 2023
Operating system: Windows 10
Version: 10
Description of the code: XSLT used to style HTML and items over 10 grouped and displayed in a table. 
-->
<xsl:template match="/">	 <!-- Applies styling to the entire document -->
	<html>
		<head>
			<title> Music Store </title>
			<style>		/* Internal stylesheet */
			body{		/* CSS for body tag */
			font-size: 20px;
			background-color: #cce0ff;
			}
			
			table{		/* CSS for table tag */
			margin-top: 50px;
			width: 80%; 
			height: 500px;
			border: 1px solid black;
			background-color: #ffffff;
			}
			
			th,td{		/* CSS for table header tag and table data tag */
			border: 1px solid black;
			text-align: center;
			font-size: 20px;
			}
			
			th{			/* CSS for table header tag */
			background-color: #e0e0eb;
			}
			</style>
		</head>
		
		<body>
			<center>
				<h1> TOP ARTISTS </h1>
				<p><b> Our top selling artists: </b></p>
				
				<table>
					<tr>
						<th> Group Name </th>
						<th> Debut Album </th>
						<th> Price($) </th>
						<th> Debut </th>
						<th> Genre </th>
					</tr>
					
					<xsl:for-each select="musicPlace/artists/group">	<!-- Retrieves each group -->
						<xsl-if test="price>10">		<!-- Only displays an item if "price" is higher than 10 -->
						<tr>
							<td><xsl:value-of select="groupName"/></td>		<!-- Retrieves the values of each item specified by "select" -->
							<td><xsl:value-of select="debutAlbum"/></td>
							<td><xsl:value-of select="price"/></td>
							<td><xsl:value-of select="debut"/></td>
							<td><xsl:value-of select="genre"/></td>
						</tr>
						</xsl-if>
					</xsl:for-each>
				</table>
			</center>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>