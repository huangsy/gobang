import check from './check';
export default class Draw {
    render() {
        let container = document.getElementById('container');
        let fragment = document.createDocumentFragment();
        let m = 15;
        let n = 15;
        let flag = false;
        let whiteMatrix = [];
        var blackMatrix = [];
        var whiteWin = false;
        var blackWin = false;
        for(let i = 0; i < m; i++) {
            let row = document.createElement('ul');
            let whiteRow = [];
            let blackRow = [];
            row.className = 'row';
            for(let j = 0; j < n; j++) {
                let cell = document.createElement('li');
                cell.className = 'cell';
                cell.id = 'cell_' + i + '_' + j;
                cell.style.width = parseInt(100/Math.max(m, n), 10) + 'vw';
                cell.style.height = parseInt(100/Math.max(m, n), 10) + 'vw';
                cell.addEventListener('touchstart', function(e) {
                    let target = e.target;
                    if (/white|black/.test(target.className)) return false;
                    if (flag) {
                        flag = false;
                        target.className += ' white';
                        whiteMatrix[i][j] = 1;
                        whiteWin = check(whiteMatrix, i, j);
                    } else {
                        flag = true;
                        target.className += ' black';
                        blackMatrix[i][j] = 1;
                        blackWin = check(blackMatrix, i, j);
                    }
                    setTimeout(() => {
                        if (whiteWin) {
                            alert('白方胜利');
                        } else if (blackWin) {
                            alert('黑方胜利');
                        }
                    }, 0);
                });
                row.appendChild(cell);
                whiteRow.push(0);
                blackRow.push(0);
            }
            fragment.appendChild(row);
            whiteMatrix.push(whiteRow);
            blackMatrix.push(blackRow);
        }
        container.appendChild(fragment);
    }
};