document.addEventListener('DOMContentLoaded', function() {
    const botoesDownload = document.querySelectorAll('.download-btn-materiais');
    
    botoesDownload.forEach(botao => {
        botao.addEventListener('click', function() {
            const nomeArquivo = this.getAttribute('data-file');
            
            if (nomeArquivo) {
                // Tenta fazer o download
                try {
                    const link = document.createElement('a');
                    link.href = `assets/downloads/${nomeArquivo}`;
                    link.download = nomeArquivo;
                    link.target = '_blank'; // Adicione isso
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // Feedback visual
                    const textoOriginal = this.innerHTML;
                    this.innerHTML = '<span>✓ Baixando...</span>';
                    this.style.background = '#27ae60';
                    
                    setTimeout(() => {
                        this.innerHTML = textoOriginal;
                        this.style.background = '';
                    }, 2000);
                } catch (error) {
                    console.error('Erro no download:', error);
                    alert('Erro ao baixar o arquivo. Verifique se o arquivo existe na pasta assets/downloads/');
                }
            } else {
                alert('Nome do arquivo não especificado!');
            }
        });
    });
});