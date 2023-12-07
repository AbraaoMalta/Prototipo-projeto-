document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('DataNascimento').value;
    var genero = document.querySelector('input[name="Genero"]:checked').value;
    var estado = document.getElementById('Estado').value;
    var cidade = document.getElementById('Cidade').value;


    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Gênero:', genero);
    console.log('Estado:', estado);
    console.log('Cidade:', cidade);
});

