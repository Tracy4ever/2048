/*游戏基础逻辑文件*/
function getPosTop(i,j){
	return 20+120*i;
}

function getPosLeft(i,j){
	return 20+120*j;
}

function getNumberBackgroundColor(randNumber) {
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

function getNumberColor(number){
	if (number <= 4) {
        return "#776e65"
    }
    return "white";
 
}