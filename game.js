/*游戏交互逻辑文件*/
$(document).keydown(function(event) {
	
	switch(event.keyCode){
		case 37:  //向左
			if(moveleft()){
				setTimeout("generateOneNumber();",210);
				setTimeout("isgameover()",300);
				
			}
			break;
		case 38://向上
			if(moveup()){
				setTimeout("generateOneNumber();",210);
				setTimeout("isgameover()",300);
				
			}
			
			break;
		case 39:
			if(moveright()){
				setTimeout("generateOneNumber();",210);
				setTimeout("isgameover()",300);
				
			}
			
			break;
		case 40:
			if(movedown()){
				setTimeout("generateOneNumber();",210);
				setTimeout("isgameover()",300);
				
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
						/*debugger;*/
						if(board[i][k]===0 && noBlockHorizontalCol(i,k,j,board)){
							showMoveAnimation(i,j,i,k);
							board[i][k]=board[i][j];
							board[i][j]=0;
							continue;
						}else if(board[i][k]==board[i][j]&&noBlockHorizontalCol(i,k,j,board)&&!hasConflicted[i][k]){
							showMoveAnimation(i,j,i,k);
							board[i][k]+=board[i][j];
							board[i][j]=0;

							score +=board[i][k];
							updateScore(score);

							hasConflicted[i][k]=true;
							continue;
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
							continue;
						}else if(board[i][j]==board[i][k]&&noBlockHorizontalCol(i,j,k,board)&&!hasConflicted[i][k]){
							showMoveAnimation(i,j,i,k);
							board[i][k]+=board[i][j];
							board[i][j]=0;
							score+=board[i][k];
							updateScore(score);
							hasConflicted[i][k]=true;
							continue;
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
							continue;
						}else if(board[k][j]==board[i][j]&&noBlockHorizontalRow(i,k,j,board)&&!hasConflicted[k][j]){
							showMoveAnimation(i,j,k,j);
							board[k][j]+=board[i][j];
							board[i][j]=0;
							score +=board[k][j];
							updateScore(score);
							hasConflicted[k][j]=true;
							continue;
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
							continue;
						}else if(board[k][j]==board[i][j]&&noBlockHorizontalRow(k,i,j,board)&&!hasConflicted[k][j]){
							showMoveAnimation(i,j,k,j);
							board[k][j]+=board[i][j];
							board[i][j]=0;

							score +=board[k][j];
							updateScore(score);

							hasConflicted[k][j]=true;
							continue;
						}
					}
				}
			}
		}
		setTimeout("updateBoardView()",150);
		return true;
	}
}



function isgameover(){
	
	if (nospace(board)&&nomove(board)) {
		gameover();
	}
}

function gameover(){
	
	$('#grid-container').append('<div id="gameover" class="gameover"><p>本次得分</p><span>'+score+'</span><a href="javascript:restartgame()" id="restartgamebutton" >Restart</a>')
	var gameover =$("#gameover");
	gameover.css("width","500px");
	gameover.css("height","500px");
	gameover.css("background-color",'rgba(0,0,0,0.5)');
	
}



