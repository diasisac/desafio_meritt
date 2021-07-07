<h1 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Parte do desenvolvedor</h1> 
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Instalação do Projeto</h3></p>
<ol>
	<li>Clonar projeto na máquina local, dentro do caminho raiz do projeto é necessário rodar <code>npm install e/ou yarn install</code> pode ser no terminal do vscode ou 	por fora no prompt</li>
	<li> Após clonagem e instalações de dependencias seu projeto está pronto para funcionar, porém antes de usar o comando <code>yarn dev</code> para rodar o projeto em sua máquina é necessário configurar o banco de dados, pule está etapa e vá para a segunda etapa que é a configuração do banco após configurado volte e execute o comando referenciado acima</li>
</ol>
<hr>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Configurações do banco<g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></p></h3></p>
<ul>
    <li>
        Deverá ter o postgres instalado na máquina 
    </li>
    <li>
        Deverá criar um banco local com credenciais de sua preferencia em sua máquina desde que esse banco esteja sincronizado com a aplicação no arquivo, para conectar o banco na sua aplicação necessário verificar no arquivo que está localizado na raiz do projeto <code> ormconfig.json </code>
    </li>
    <li>
	Deverá criar as tabelas e suas estruturas com comando no terminal com caminho da raiz do projeto <code>yarn typeorm migration:run</code>
    </li>
 </ul>
 <hr>
 <p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Modelagem do banco</h3></p>
 https://user-images.githubusercontent.com/40832333/124756803-4296b100-df03-11eb-8631-1424525036c4.png

 <hr>
<ul>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Endpoints Proofs</h3></p>
<li><code>http://localhost:3333/proofs</code> <code>GET</code></li>
<p><li><code>http://localhost:3333/proofs</code> <code>POST</code></li>
<code>
    {
	"discipline": "math"
    }
</code></p>
<p><li><code>http://localhost:3333/proofs/update/id</code> <code>PUT</code></li>
<code>
    {
	"discipline": "portuguese"
    }
</code></p>
<li><code>http://localhost:3333/proofs/delete/id</code> <code>DELETE</code></li>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Endpoints Questions</h3></p>
<hr>
<li><code>http://localhost:3333/questions</code> <code>GET</code></li>	
<p><li><code>http://localhost:3333/questions</code> <code>POST</code></li>
<code>
{
	"number": "1",
	"utterance":"utterance",
	"proof_id": "eef83684-5609-494d-9d3c-72cbe60e36a7"
}
</code></p>
<p><li><code>http://localhost:3333/questions/update/id</code> <code>PUT</code></li>
<code>
{
	"number": "2",
	"utterance":"utterance2",
	"proof_id": "eef83684-5609-494d-9d3c-72cbe60e36a7"
}</code></p>
<li><code>http://localhost:3333/questions/delete/id</code> <code>DELETE</code></li>
<hr>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Endpoints Alternatives</h3></p>    
<li><code>http://localhost:3333/alternative</code> <code>GET</code></li>
<p><li><code>http://localhost:3333/alternative</code> <code>POST</code></li>
<code>
{
	"alternative":"D",
	"question_id":"1bc6c2e6-1228-4a2f-b70a-56394c971024"
}</code></p>
<p><li><code>http://localhost:3333/alternative/update</code> <code>PUT</code></li>
<code>
{
	"alternative":"A",
	"question_id":"1bc6c2e6-1228-4a2f-b70a-56394c971024"
}</code></p>
<li><code>http://localhost:3333/alternative/delete</code> <code>DELETE</code></li>
<hr>
<p><h3 id="markdown-header-descricao-challenge-backend-mobile-saude-2020-2">Regras da aplicação<g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji></p></h3>
<ul>
<li>Inicialmente deve ser cadastrado uma prova pois sem uma prova não existe questão e sem questão não existe alterantiva</li>
<li>Após cadastrar a prova deve cadastrar uma questão e após cadastrar uma questão deve ser cadastrada a alternativa</li>
<li>Só é possível cadastrar uma questão se existir uma prova, pois a tabela de questões está relacionada com a prova 1:N</li>
<li>Só é possível cadastrar uma alternativa se existir uma questão, pois a tabela de alternativa está relacionada com a questão 1:N</li>
</ul>
<hr>
