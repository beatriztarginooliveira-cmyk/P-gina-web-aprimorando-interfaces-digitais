// Alternar Tema (Claro / Escuro)
        const themeToggleBtn = document.getElementById('themeToggle');
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeToggleBtn.textContent = 'Modo Escuro';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggleBtn.textContent = 'Modo Claro';
            }
        });

        // Botão de Curtir
        const likeBtn = document.getElementById('likeBtn');
        const likeCount = document.getElementById('likeCount');
        const likeText = document.getElementById('likeText');
        let likes = 0;
        let isLiked = false;

        likeBtn.addEventListener('click', () => {
            isLiked = !isLiked;
            if (isLiked) {
                likes++;
                likeBtn.classList.add('liked');
                likeText.textContent = 'Curtido';
            } else {
                likes--;
                likeBtn.classList.remove('liked');
                likeText.textContent = 'Curtir';
            }
            likeCount.textContent = likes;
        });