document.addEventListener("DOMContentLoaded", function() {

// =================================================================
// === 1. CONFIGURAÇÃO INICIAL E VARIÁVEIS =========================
// =================================================================

// Referências diretas aos elementos DOM
const words = document.querySelectorAll('.draggable-item');
const containers = document.querySelectorAll('.container');


// Variável global (acessível por todos os listeners) para armazenar a REFERÊNCIA
// do elemento que está atualmente sendo arrastado.
//let itemSendoArrastado = null;


// =================================================================
// === 2. EVENTO dragstart (PREPARAÇÃO DO ITEM ARRASTÁVEL) =========
// =================================================================

// Itera sobre todos os itens arrastáveis para anexar o listener de 'dragstart'.
for (word of words) {

    word.addEventListener('dragstart', function (event) {
        // Armazena a referência direta do elemento (event.target) na variável global.
        itemSendoArrastado = event.target;
    });

} 


// =================================================================
// === 3. EVENTOS dragover E drop (ZONAS DE DESTINO) ===============
// =================================================================

// Itera sobre todos os containers para anexar os listeners de dragover e drop.
// (Garantindo que os listeners sejam anexados UMA ÚNICA vez a cada container).
for (container of containers) {

    // --- dragover: Ativa a Zona de Soltura ---
    container.addEventListener('dragover', function (event) {
        // ESSENCIAL: Cancela o comportamento padrão do navegador (que bloqueia o drop).
        // Isso sinaliza que esta zona está pronta para receber o elemento.
        event.preventDefault(); 
    });

    // --- drop: Movimentação do Elemento ---
    container.addEventListener('drop', function (event) {
        copia = itemSendoArrastado.cloneNode(true)
        // event.currentTarget refere-se ao container onde o evento 'drop' foi capturado.
        
        // O método appendChild move o elemento automaticamente de seu pai antigo
        // (o container de origem) para este novo container (o container de destino).
        event.currentTarget.appendChild(copia);
    });

}

});