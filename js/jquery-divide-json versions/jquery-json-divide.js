// Function to partition the acquired JSON object and partition the resultant records alphabetically to respective Div tags.
    
       function partitionJson(obj){
			
			// We create a JSON object from the list we get from the spreadsheet
			var jsonres=JSON.stringify(obj);
		    var status=0;
           
			//console.log(obj['items'][0]);
			//console.log(obj['items'][1]);
			//console.log(obj['items'][2]);
			
			//Display sample JSON object Data
			//$('#json').html(obj['items'][0].id + ' ' + obj['items'][0].applicabledashboards + ' ' + obj['items'][0].definition + ' ' + obj['items'][0].commentsexamples + '<br>');
			//$('#json').append(obj['items'][1].id + ' ' + obj['items'][1].applicabledashboards + ' ' + obj['items'][1].definition + ' ' + obj['items'][1].commentsexamples);
			
			// We need to for-loop through the obj JSON object and break into sub categories.
			//alert(obj['items'].length);
            
			for(i=0;i<obj['items'].length;i++)
			{
				//$('#json').append(obj['items'][i].id);
				var jsonString =JSON.stringify(obj['items'][i].id);
				var v1='',v2='',v3='';
				// check if the first alphabet is A B or C and slot them in the divs
				if(jsonString.substring(1, 2) == 'A' || jsonString.substring(1, 2) == 'B' || jsonString.substring(1, 2) == 'C')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                   // console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-a-c-table').append('<tr>' + '<td cellpadding="0" style="border-spacing: 0px 0px;" class="mytd"><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-a-c-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideUp("fast");
                    $(id_div).hide();
                       
				}
				
				// check if the first alphabet is D E or F and slot them in the divs
				if(jsonString.substring(1, 2) == 'D' || jsonString.substring(1, 2) == 'E' || jsonString.substring(1, 2) == 'F')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-d-f-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage' + i).attr('src','files/images/plus-sign.png');
                    $('#div-d-f-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
				
				// check if the first alphabet is G H or I and slot them in the divs
				if(jsonString.substring(1, 2) == 'G' || jsonString.substring(1, 2) == 'H' || jsonString.substring(1, 2) == 'I')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-g-i-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-g-i-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
				
				// check if the first alphabet is J K or L and slot them in the divs
				if(jsonString.substring(1, 2) == 'J' || jsonString.substring(1, 2) == 'K' || jsonString.substring(1, 2) == 'L')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-j-l-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-j-l-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                   // $(id_div).slideToggle("fast");
                   $(id_div).hide();
				}
				
				// check if the first alphabet is M N or O and slot them in the divs
				if(jsonString.substring(1, 2) == 'M' || jsonString.substring(1, 2) == 'N' || jsonString.substring(1, 2) == 'O')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-m-o-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-m-o-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
				
				// check if the first alphabet is P Q or R and slot them in the divs
				if(jsonString.substring(1, 2) == 'P' || jsonString.substring(1, 2) == 'Q' || jsonString.substring(1, 2) == 'R')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-p-r-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-p-r-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
				
				// check if the first alphabet is S T or U and slot them in the divs
				if(jsonString.substring(1, 2) == 'S' || jsonString.substring(1, 2) == 'T' || jsonString.substring(1, 2) == 'U')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-s-u-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-s-u-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
                
                // check if the first alphabet is S T or U and slot them in the divs
				if(jsonString.substring(1, 2) == 'V' || jsonString.substring(1, 2) == 'W' || jsonString.substring(1, 2) == 'X')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-v-x-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-v-x-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
				
				// check if the first alphabet is S T or U and slot them in the divs
				if(jsonString.substring(1, 2) == 'Y' || jsonString.substring(1, 2) == 'Z')
				{
                    v1 = obj['items'][i].applicabledashboards;
                    v2 = obj['items'][i].definition;
                    v3 = obj['items'][i].commentsexamples;
                    //console.log('v1 vlue' + v1);
                    if(v1 === undefined)
                    {
                        v1 = '';
                    }
                    if(v2 === undefined)
                    {
                        v2 = '';
                    }
                    if(v3 === undefined)
                    {
                        v3 = '';
                    }
					$('#div-y-z-table').append('<tr>' + '<td><img alt="Image to expand or contract rows" id="toggleIconImage'+ i +'" /></td>' + '<td style="padding:4px;">' + obj['items'][i].id + '</td>'+ '<td style="padding:4px;">' + v1 + '</td>' + '<td style="padding:4px;">' + v2 + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).attr('src','files/images/plus-sign.png');
                    $('#div-y-z-table').append('<tr colspan="3" id="tr-hideme'+ i +'">' + '<td colspan="4"> <div style="padding-top: 4px; padding-left: 6px;"><strong>Description:</strong><br>' +  v2 + '</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Used In:</strong><br>'+ v1 +'</div><br>'+ '<div style="padding-top: 4px; padding-left: 6px;"><strong>Examples:</strong><br>'+ v3 + '</div>' + '</td>' + '</tr>');
                    $('#toggleIconImage'+ i).css('cursor','pointer');
                    var id_div = '#tr-hideme' + i;
                    //$(id_div).slideToggle("fast");
                    $(id_div).hide();
				}
			}
            
		}
        
