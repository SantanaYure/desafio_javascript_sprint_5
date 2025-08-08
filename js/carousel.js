// ALGORTIMO TEXTUAL DO FUNCIONAMENTO DO CARROSSEL

// 1. Criar uma classe chamada Carousel que representa uma imagem do carrossel.
//    A classe deve ter os seguintes atributos:
//      - image: caminho da imagem.
//      - title: texto descritivo da imagem.
//      - url: link associado à imagem.

// 2. Criar um array global chamado carouselArr para armazenar todas as instâncias da classe Carousel.

// 3. Dentro da classe, criar um método estático chamado Start, que:
//    - Recebe o array com os objetos do carrossel.
//    - Inicia a execução do carrossel (mostrando o primeiro item).
//    - Define um intervalo de tempo para trocar de imagem (a cada 2 segundos).

// 4. Criar um outro método estático chamado Next, que:
//    - Atualiza o DOM substituindo o conteúdo da div#carousel com uma nova imagem.
//    - Atualiza o DOM substituindo o conteúdo da div#carousel-title com um link e texto.
//    - Incrementa um contador para passar ao próximo item. Se for o último, volta ao primeiro.

// 5. O script será iniciado automaticamente quando chamado em index.html via `Carousel.Start(carouselArr)`.

// IMPLEMENTAÇÃO DO CÓDIGO

// Define o array global de objetos do carrossel
let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    // Inicia o carrossel com um array de objetos Carousel
    static Start(arr) {
        if (!arr || arr.length === 0) return;

        Carousel.data = arr;
        Carousel.current = 0;

        // Executa imediatamente o primeiro
        Carousel.Next();

        // Define o intervalo para trocar de imagem a cada 2 segundos
        Carousel.intervalId = setInterval(Carousel.Next, 2000);
    }

    // Atualiza imagem, título e link do carrossel
    static Next() {
        const obj = Carousel.data[Carousel.current];

        // Atualiza imagem centralizada com ajuste proporcional
        const carouselDiv = document.getElementById('carousel');
        carouselDiv.innerHTML = `
            <div style="display: flex; justify-content: center;">
                <img src="img/${obj.image}" style="max-width: 100%; max-height: 46vh; object-fit: contain;">
            </div>`;

        // Atualiza título com estilo adequado
        const titleDiv = document.getElementById('carousel-title');
        titleDiv.innerHTML = `<a href="${obj.url}" style="color: #1B357E; font-size: 18px;">${obj.title}</a>`;

        // Passa para o próximo item, ou volta para o primeiro
        Carousel.current = (Carousel.current + 1) % Carousel.data.length;
    }
}
