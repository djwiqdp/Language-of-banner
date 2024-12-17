document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid');

    for (let i = 1; i <= 160; i++) {
        const div = document.createElement('div');
        div.setAttribute('data-index', i);
        div.style.backgroundImage = `url('img1/pixel_${i.toString().padStart(2, '0')}.gif')`;

        div.addEventListener('mouseover', () => {
            div.style.backgroundImage = `url('img2/${i.toString().padStart(2, '0')}.png')`;
        });

        div.addEventListener('mouseout', () => {
            div.style.backgroundImage = `url('img1/pixel_${i.toString().padStart(2, '0')}.gif')`;
        });

        // 가장자리
        if (i === 28) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }
        if (i === 10) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }

        if (i === 28) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }

        if (i === 54) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }

        if (i === 76) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }
        if (i === 129) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }
        if (i === 132) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }
        if (i === 152) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }

        // 느낌표 (mark)

        if (i === 12) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 53) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }

        if (i === 71) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 75) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }

        if (i === 82) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 83) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 87) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 104) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 117) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 121) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 127) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }
        if (i === 160) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }

        // 질문 question
        if (i === 15) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }
        if (i === 69) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if (i === 80) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }
        if (i === 114) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if (i === 119) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }
        if (i === 131) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if (i === 38) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

           if (i === 45) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if (i === 59) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if (i === 50) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if (i === 81) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }
   
        if (i === 158) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        // 전화 call
         if (i === 31) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }

        if (i === 49) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }


        if (i === 52) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }
        if (i === 130) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }
        if (i === 139) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }

        if (i === 146) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }
        if (i === 147) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }

        
      
        //얼굴 face

        if (i === 41) {
            div.addEventListener('click', () => {
                window.location.href = 'face.html';
            });
        }

        if (i === 64) {
            div.addEventListener('click', () => {
                window.location.href = 'face.html';
            });
        }
        if (i === 65) {
            div.addEventListener('click', () => {
                window.location.href = 'face.html';
            });
        }
        if (i === 125) {
            div.addEventListener('click', () => {
                window.location.href = 'face.html';
            });
        }
        if (i === 154) {
            div.addEventListener('click', () => {
                window.location.href = 'face.html';
            });
        }
          

        gridContainer.appendChild(div);
    }
});

