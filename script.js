// Estrutura base para gerenciar interatividade
const App = {
    init() {
        this.cacheDOM();
        this.bindEvents();
        console.log("Sistema iniciado com sucesso!");
    },

    cacheDOM() {
        this.btn = document.querySelector('#meuBotao');
        this.form = document.querySelector('#meuFormulario');
    },

    bindEvents() {
        // Exemplo de interação: Click
        this.btn.addEventListener('click', () => this.animarBotao());
        
        // Exemplo de validação
        this.form.addEventListener('submit', (e) => this.validarFormulario(e));
    },

    animarBotao() {
        this.btn.style.transform = 'scale(0.95)';
        setTimeout(() => this.btn.style.transform = 'scale(1)', 200);
    },

    validarFormulario(e) {
        e.preventDefault();
        const input = this.form.querySelector('input').value;
        
        if (input.length < 3) {
            alert("O texto precisa ter pelo menos 3 caracteres!");
            return;
        }
        console.log("Formulário validado e pronto para envio.");
    }
};

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => App.init());
