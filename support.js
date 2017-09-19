/*游戏基础逻辑文件*/
function getPosTop(i,j){
	return 20+120*i;
}

function getPosLeft(i,j){
	return 20+120*j;
}

function getNumberBackgroundColor(randNumber) {
    debugger;
	switch(randNumber){
		case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#e67c5f";break;
        case 64:return "#c55a41";break;
        case 128:return "#edcf72";break;
        case 256:return "#EDCC61";break;
        case 512:return "#A4BD59";break;
        case 1024:return "#51A6C5";break;
        case 2048:return "#298FB1";break;
        case 4096:return "#9668AD";break;
        case 8192:return "#905BAB";break;

	}
}

function getNumberFontSize(number) {
    switch(number){
        case 2:return "60px";break;
        case 4:return "60px";break;
        case 8:return "60px";break;
        case 16:return "50px";break;
        case 32:return "50px";break;
        case 64:return "50px";break;
        case 128:return "50px";break;
        case 256:return "50px";break;
        case 512:return "50px";break;
        case 1024:return "40px";break;
        case 2048:return "40px";break;
        case 4096:return "40px";break;
        case 8192:return "40px";break;
    }
}

function getNumberColor(number){
	if (number <= 4) {
        return "#776e65"
    }
    return "white";
 
}

function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if(board[i][j] === 0){
                return false;
            }
        }
        return true;
    }
}

function nomove(board) {
    if(canMoveUp(board)||canMoveRight(board)||canMoveLeft(board)||canMoveDown(board)){
        return false;
    }else{
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