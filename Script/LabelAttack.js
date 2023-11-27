
// Função para verificar o conteúdo do elemento e redirecionar se necessário
const checkIncomingsAndRedirect = () => {
    const incomingsElement = document.getElementById('incomings_amount');
    if (incomingsElement) {
        const incomingCount = parseInt(incomingsElement.innerText, 10); // Converte o texto para número
        console.log('Número de ataques detectados:', incomingCount);

        // Verifica se o número de ataques é maior ou igual a 1
        if (incomingCount >= 1) {
            console.log('Redirecionando devido a ataque iminente.');
            window.location.href = "https://br124.tribalwars.com.br/game.php?village=*&screen=overview_villages&mode=incomings&subtype=attacks";
        }
    } else {
        console.log('Elemento incomings_amount não encontrado.');
    }
}

// Função para configurar o MutationObserver
const setupObserver = () => {
    const targetElement = document.getElementById('incomings_amount');

    if (targetElement) {
        // Cria uma instância do MutationObserver e passa uma função de callback
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(function (_) {
                checkIncomingsAndRedirect();
            });
        });

        // Configura o observador com o elemento alvo e as opções de configuração
        observer.observe(targetElement, {
            childList: true, // observa mudanças nos nós filhos
            subtree: true, // observa descendentes
            characterData: true, // observa mudanças nos dados de texto
        });
        console.log('Observador configurado.');
    } else {
        console.log('Elemento alvo para o MutationObserver não encontrado.');
    }
}

// Inicia o processo
setupObserver();

function clickAllCheckboxesForAttack() {
    // Seleciona todos os elementos que contêm o texto 'Ataque'
    const attackLabels = document.querySelectorAll('span.quickedit-label');

    attackLabels.forEach((attackLabel) => {
        if (attackLabel.textContent.trim() === 'Ataque') {
            // Encontre o checkbox correspondente para este elemento 'Ataque'
            const checkbox = attackLabel.closest('tr').querySelector('input[type=checkbox]');

            if (checkbox) {
                checkbox.click(); // Clica no checkbox
                console.log('Checkbox de Ataque clicado.');
            } else {
                console.log('Checkbox correspondente não encontrado.');
            }
        } else {
            console.log('Etiqueta de Ataque não encontrada.');
        }
    });
}

// Executa a função para marcar todos os checkboxes de Ataque
clickAllCheckboxesForAttack();

async function clickLabelButton() {
    const maxAttempts = 1; // Defina um número máximo de tentativas
    const checkboxesSelector = "#incomings_table input[type=checkbox]:nth-child(2)";
    const labelButtonSelector = 'input.btn[value="Etiqueta"][name="label"]'; // Seletor do botão de etiquetar
    let attempts = 0; // Inicialize o contador de tentativas

    try {
        while (attempts < maxAttempts) {
            const checkboxes = document.querySelectorAll(checkboxesSelector);

            for (const checkbox of checkboxes) {
                if (checkbox.checked) {
                    const labelButton = document.querySelector(labelButtonSelector);

                    if (labelButton) {
                        labelButton.click(); // Clica no botão
                        console.log('Botão Etiquetar clicado.');
                        return; // Sai da função após clicar no botão
                    }
                }
            }

            await new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda 1 segundo
            attempts++;
        }

        throw new Error(`Botão Etiquetar não encontrado após ${maxAttempts} tentativas.`);
    } catch (error) {
        console.error(error.message);
    }
}

// Executa a função
clickLabelButton();
