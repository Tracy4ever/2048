/*游戏交互逻辑文件*/
$(document).keydown(function(event) {
	
	switch(event.keyCode){
		case 37:  //向左
			if(moveleft()){
				setTimeout("generateOneNumber();",100);
				//isgameover();
			}
			break;
		case 38://向上
			if(moveup()){
				setTimeout("generateOneNumber();",100);
				//isgameover();
			}
			
			break;
		case 39:
			if(moveright()){
				setTimeout("generateOneNumber();",100);
				//isgameover();
			}
			
			break;
		case 40:
			if(movedown()){
				setTimeout("generateOneNumber();",100);
				//isgameover();
			}
			
			break;
		default:
			break;
	}	

});

function moveleft(){
	if(!canMoveLeft(board)){
		return false;
	}else{
		//遍历棋盘中的格子（当前格子，所以第一列不用遍历，因为不向左移动）
		for (var i = 0; i <4; i++) {
			for (var j =1; j <4; j++) {
				if(board[i][j]!==0){
					for (var k = 0; k<j; k++) {
						if(board[i][k]===0 && noBlockHorizontalCol(i,k,j,board)){
							showMoveAnimation(i,j,i,k);
							board[i][k]=board[i][j];
							board[i][j]=0;
						}else if(board[i][k]==board[i][j]&&noBlockHorizontalCol(i,k,j,board)){
							showMoveAnimation(i,j,i,k);
							board[i][k]+=board[i][j];
							board[i][j]=0;
						}	
					}
				}
			}
		}
		setTimeout("updateBoardView()",150);
		return true;
	}
}

function moveright() {
	
	if(!canMoveRight(board)){
		return false;
	}else{
		for (var i=0; i <4; i++) {
			for (var j = 2; j >=0; j--) {
				if(board[i][j]!==0){
					for (var k = 3; k > j; k--) {
						if (board[i][k]===0&&noBlockHorizontalCol(i,j,k,board)) {
							showMoveAnimation(i,j,i,k);
							board[i][k]=board[i][j];
							board[i][j]=0;
						}else if(board[i][j]==board[i][k]&&noBlockHorizontalCol(i,j,k,board)){
							showMoveAnimation(i,j,i,k);
							board[i][k]+=board[i][j];
							board[i][j]=0;
						}
					}
				}
			}
		}
		setTimeout("updateBoardView()",150);
		return true;
	}
}

function moveup(){
	if(!canMoveUp(board)){
		return false;
	}else{
		for(var j=0;j<4;j++){
			for(var i=1;i<4;i++){
				if (board[i][j]!==0) {
					for (var k = 0; k <i; k++) {
						if(board[k][j]===0 && noBlockHorizontalRow(i,k,j,board)){
							showMoveAnimation(i,j,k,j);
							board[k][j]=board[i][j];
							board[i][j]=0;
						}else if(board[k][j]==board[i][j]&&noBlockHorizontalRow(i,k,j,board)){
							showMoveAnimation(i,j,k,j);
							board[k][j]+=board[i][j];
							board[i][j]=0;
						}
					}
				}
			}
		}
		setTimeout("updateBoardView()",150);
		return true;
	}
}

function movedown(){
	
	if(!canMoveDown(board)){
		return false;
	}else{
		for (var j = 0; j < 4; j++) {
			for (var i = 2; i>=0; i--) {
				if (board[i][j]!==0) {
					for (var k = 3; k >i; k--) {
						if(board[k][j]==0 && noBlockHorizontalRow(k,i,j,board)){
							showMoveAnimation(i,j,k,j);
							board[k][j]=board[i][j];
							board[i][j]=0;
						}else if(board[k][j]==board[i][j]&&noBlockHorizontalRow(k,i,j,board)){
							showMoveAnimation(i,j,k,j);
							board[k][j]+=board[i][j];
							board[i][j]=0;
						}
					}
				}
			}
		}
		setTimeout("updateBoardView()",150);
		return true;
	}
}

function canMoveLeft(board){
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j <4; j++) {
			if(board[i][j]!==0){
				if(board[i][j-1]===0||board[i][j]==board[i][j-1]){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveRight(board) {
	for (var i = 0; i <4; i++) {
		for (var j = 2; j >=0; j--) {
			if(board[i][j]!==0){
				if(board[i][j]==board[i][j+1]||board[i][j+1]==0){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveUp(board) {
	for (var j = 0; j < 4; j++) {
		for (var i = 1; i < 4; i++) {
			if(board[i][j]!=0){
				if(board[i-1][j]==0||board[i-1][j]==board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveDown(board) {
	for (var j = 0; j <4; j++) {
		for (var i = 2; i >= 0; i--) {
			if (board[i][j]!==0) {
				if(board[i][j]==board[i+1][j]||board[i+1][j]==0){
					return true;
				}
			}
		}
	}
	return false;
}

function noBlockHorizontalCol(row,col1,col2,board){
	for (var j=col1+1 ; j < col2; j++) {
		if(board[row][j]!==0){
			return false;
		}
	}
	return true;
}

function noBlockHorizontalRow(row1,row2,col,board) {
	for (var i = row2+1; i < row1; i++) {
		if(board[i][col]!=0){
			return false;
		}
	}
	return true;
}