function flipHTML(player,position,table){
	var symbolPlayer = window.symbolPlayer;
	if(table.length>0){
		if(player =="W"){
			table[position].innerHTML="<div class='fichablanca'> </div> "
		}
		else{
			table[position].innerHTML="<div class='fichanegra'> </div>"
		}
		if(player==symbolPlayer[1]){
			iluminar_casillero(position,table,'green',1000)
		}
	}
}
function checkUpCol(player,symbolPlayer,position,table,table_abstract){
    var UpCol=[]
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
	i=8
	while(position-i>=0){
		UpCol.push(table_abstract[position-i]);
		i += 8;
	}
    var listaUnida = UpCol.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if( (UpCol.indexOf(player) >-1 ) && (index_space ==-1 || index_player < index_space ) ){
        var checking = true
        var k = 8
        while(checking && position-k>=0){
            if(table_abstract[position-k]==opponent){
                table_abstract[position-k] = player
				flipHTML(player,position-k,table)
                k+=8}
            else{
                checking =false
				}
			}
		}
	}
function checkDownCol(player,symbolPlayer,position,table,table_abstract){
    var DownCol=[]
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
	i=8
	while(position+i<64){
		DownCol.push(table_abstract[position + i])
		i+=8
	}
    var listaUnida = DownCol.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if(  (DownCol.indexOf(player) >-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 8
        while(checking && position+k<64){
            if(table_abstract[position+k]==opponent){
                table_abstract[position + k] = player
				flipHTML(player,position+k,table)
                k+=8}
            else{
                checking =false
				}
			}
		}
	}			
function checkRightRow(player,symbolPlayer,position,table,table_abstract){
    var RightRow=[]
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
	var i=1
	while(position+i <= 8*(Math.floor(position/8)+1)-1 ){
		RightRow.push(table_abstract[position+i])
		i+=1
	}
    var listaUnida = RightRow.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if( (RightRow.indexOf(player) >-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 1
        while(checking && position + k<=8*(Math.floor(position/8)+1)-1){
            if(table_abstract[position+k]==opponent){
                table_abstract[position+k] = player
				flipHTML(player,position+k,table)
                k+=1}
            else{
                checking =false
				}
			}
		}
	}
function checkLeftRow(player,symbolPlayer,position,table,table_abstract){
    var LeftRow=[]
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
	var i=1
	while(position-i >=8*Math.floor(position/8)){
		LeftRow.push(table_abstract[position-i])
		i+=1
	}
    var listaUnida = LeftRow.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if( (LeftRow.indexOf(player)>-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 1
        while(checking && (position - k >=8*Math.floor(position/8))){
            if(table_abstract[position - k]==opponent){
                table_abstract[position - k] = player
				flipHTML(player,position-k,table)
                k+=1}
            else{
                checking =false
				}
			}
		}
	}
function checkUpDiag1(player,symbolPlayer,position,table,table_abstract){
    var UpDiag1 = []
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
	var i =9
	while(position - i >= 0&& ((position - i)%8 <(position)%8)){
		UpDiag1.push(table_abstract[position-i])
		i +=9
	}
    var listaUnida = UpDiag1.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if((UpDiag1.indexOf(player) >-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 9
        while(checking && position - k >=0&& ((position - k)%8 <(position)%8)){
            if(table_abstract[position - k ]==opponent){
                table_abstract[position - k] = player
				flipHTML(player,position-k,table)
                k+=9}
            else{
                checking =false
				}
			}
		}
	}
function checkDownDiag1(player,symbolPlayer,position,table,table_abstract){
    var DownDiag1 = []
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
    var i = 9
	while((position+i < 64)&&( position%8 <(position+i)%8 ) ){
		DownDiag1.push(table_abstract[position+i])
		i += 9
	}
    var listaUnida = DownDiag1.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if(  (DownDiag1.indexOf(player) >-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 9
        while(checking && (position + k< 64)&&( position%8 <(position+k)%8 )){
            if(table_abstract[position + k]==opponent){
                table_abstract[position + k] = player
				flipHTML(player,position+k,table)
                k+=9}
            else{
                checking =false
				}
			}
		}
	}
function checkUpDiag2(player,symbolPlayer,position,table,table_abstract){
    var UpDiag2 = []
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
    i =7
	while(position -i >= 0 && ( (position)%8 < (position-i)%8 ) ){
		UpDiag2.push(table_abstract[position-i])
		i +=7
	}
    var listaUnida = UpDiag2.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if( (UpDiag2.indexOf(player) >-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 7
        while(checking && (position -k >= 0)&& ( (position)%8 < (position-k)%8 )){
            if(table_abstract[position -k] == opponent){
                table_abstract[position -k] = player
				flipHTML(player,position-k,table)
                k+=7}
            else{
                checking = false
				}
			}
		}
	}
function checkDownDiag2(player,symbolPlayer,position,table,table_abstract){
    var DownDiag2 = []
    if(player==symbolPlayer[0]){
        opponent = symbolPlayer[1]}
    else if(player==symbolPlayer[1]){
        opponent = symbolPlayer[0]}
	var i = 7
	while(position+i <64 && ( (position+i)%8 < position%8 )){
		DownDiag2.push(table_abstract[position+i])
		i+=7
	}
    var listaUnida = DownDiag2.join("")
    var index_space = listaUnida.indexOf(" ")
    var index_player = listaUnida.indexOf(player)
    if((DownDiag2.indexOf(player) >-1) && (index_space ==-1 || index_player < index_space)){
        checking = true
        var k = 7
        while(checking && (position+k <64) && ( (position+k)%8 < position%8 )){
            if(table_abstract[position+k] == opponent){
                table_abstract[position+k] = player
				flipHTML(player,position+k,table)
                k+=7}
            else{
                checking = false}}}}
function flipTiles(player,symbolPlayer,position,table,table_abstract){
    checkUpCol(player,symbolPlayer,position,table,table_abstract)
    checkDownCol(player,symbolPlayer,position,table,table_abstract)
    checkLeftRow(player,symbolPlayer,position,table,table_abstract)
    checkRightRow(player,symbolPlayer,position,table,table_abstract)
    checkUpDiag1(player,symbolPlayer,position,table,table_abstract)
    checkDownDiag1(player,symbolPlayer,position,table,table_abstract)
    checkDownDiag2(player,symbolPlayer,position,table,table_abstract)
    checkUpDiag2(player,symbolPlayer,position,table,table_abstract)
}
