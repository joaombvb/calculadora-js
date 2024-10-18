let lightMode = false;

export function colorMode() {
    const elementos = document.querySelectorAll('.botao');
    const icones = document.querySelectorAll('.icone');
    const iconesLink = document.querySelectorAll('.link');

    // Dark mode    
    if (lightMode === false) { 

        lightMode = true;
        
        document.body.style.backgroundColor = '#222'; 
        document.body.style.color = '#fff';
        const container = document.querySelector('.container');
        const display = document.querySelector('.display');

        if (container) container.style.backgroundColor = '#333';
        if (display) display.style.backgroundColor = '#444';
        
        elementos.forEach(elemento => {
            elemento.style.color = '#fff';
            elemento.style.backgroundColor = '#666';
        });
        
        icones.forEach(icone => {
            icone.style.color = '#fff';
        });

        const limpar = document.querySelector('#limpar');
        const igual = document.querySelector('#igual');

        if (limpar) limpar.style.backgroundColor = '#e74c3c';
        if (igual) igual.style.backgroundColor = '#f90';

        iconesLink.forEach(link => {
            link.style.color = '#fff';
        });

    // Light mode
    } else {

        lightMode = false;

        document.body.style.backgroundColor = '#D8D2C2'; 
        document.body.style.color = '#333';
        const container = document.querySelector('.container');
        const display = document.querySelector('.display');

        if (container) container.style.backgroundColor = '#9BB0C1';
        if (display) display.style.backgroundColor = '#E0E0E0';

        elementos.forEach(elemento => {
            elemento.style.color = '#333';
            elemento.style.backgroundColor = '#F1EEDC';
        });

        icones.forEach(icone => {
            icone.style.color = '#333';
        });

        const limpar = document.querySelector('#limpar');
        const igual = document.querySelector('#igual');

        if (limpar) limpar.style.backgroundColor = '#51829B';
        if (igual) igual.style.backgroundColor = '#F6995C';

        iconesLink.forEach(link => {
            link.style.color = '#333';
        });
    }
}
