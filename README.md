<h1 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Parte do desenvolvedor</h1> 
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Instalação do Projeto</h3></p>
<ol>
<li>Clonar projeto na máquina local, rodar npm install e/ou yarn install</li>
</ol>
<hr>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Configurações do banco<g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></p></h3></p>
<ul>
    <li>
        DATABASE=meritt 
    </li>
    <li>
        USERNAME=meritt 
    </li>
    <li>
        PASSWORD=root 
    </li>
    <li>
        Charset=utf8mb4 
    </li>
    <li>
        Collation=utf8mb4_general_ci 
    </li>
        
 </ul>
 <hr>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Endpoints</h3></p>
<ul>
<p><li><code>http://localhost:3333/proofs</code></li></p>
<p><li><code>http://localhost:3333/proofs</code></li></p>
<p><li><code>http://localhost:3333/proofs/update</code></li></p>
<p><li><code>http://localhost:3333/proofs/delete</code></li></p>
  <table class="table table-striped table-hover table-condensed table-bordered">
  <thead>
    <tr>
      <th colspan="4" class="text-center bg-ddd">PARÂMETROS DE ENTRADA</th>
    </tr>
    <tr>
      <th width="15%">Parâmetro</th>
      <th width="15%">Tipo</th>
      <th width="15%">Obrigatoriedade</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>inteiro</td>
      <td>Opcional</td>
      <td>Id da região</td>
    </tr>
    <tr>
      <td>nome</td>
      <td>inteiro</td>
      <td>Opcional</td>
      <td>Nome da região</td>
    </tr>
  </tbody>
</table>
 </ul>
<hr>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Regras da aplicação<g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji></p></h3>
<ul>
<li>Inicialmente deve ser cadastrado uma prova pois sem uma prova não existe questão e sem questão não existe alterantiva</li>
<li>Após cadastrar a prova deve cadastrar uma questão e após cadastrar uma questão deve ser cadastrada a alternativa</li>
<li>Só é possível cadastrar uma questão se existir uma prova, pois a tabela de questões está relacionada com a prova 1:N</li>
<li>Só é possível cadastrar uma alternativa se existir uma questão, pois a tabela de alternativa está relacionada com a questão 1:N</li>
</ul>
<hr>
