document.addEventListener('DOMContentLoaded', function() {
    
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Inscrição realizada com sucesso!');
            leadForm.reset();
        });
    }
    
    const finalForm = document.getElementById('finalForm');
    if (finalForm) {
        finalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🚀 Inscrição realizada! Verifique seu e-mail.');
            finalForm.reset();
        });
    }
    
    console.log('Landing Page carregada!');
});