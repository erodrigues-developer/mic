<!DOCTYPE html>
<html>
<head>
	<title>Instruções para executar o Docker Compose</title>
</head>
<body>
	<h1>Instruções para executar o Docker Compose</h1>
	<ol>
		<li>Instale o Docker Engine em sua máquina.</li>
		<li>Clone o repositório Git que contém o arquivo docker-compose.yaml.</li>
		<li>Navegue até o diretório onde se encontra o arquivo docker-compose.yaml.</li>
		<li>Abra um terminal nesse diretório.</li>
		<li>Digite o seguinte comando para iniciar os containers:</li>
	</ol>
	<pre>docker-compose up -d</pre>
	<p>6. Espere até que todos os serviços tenham sido iniciados com sucesso.</p>
	<p>7. Para verificar o status dos containers, digite o seguinte comando:</p>
	<pre>docker-compose ps</pre>
	<p>8. Para parar e remover todos os containers e redes, digite o seguinte comando:</p>
	<pre>docker-compose down</pre>
	<p>9. O serviço `mic_api` será executado na porta 8000 e o serviço `mic_front` na porta 4201.</p>
	<p>10. O serviço `micdb` usará a porta 3310.</p>
	<p>11. As seguintes pastas serão montadas como volumes nos containers:</p>
	<ul>
		<li>/home/$USER/.ssh:/root/.ssh</li>
		<li>./mic:/var/www/html/project</li>
		<li>./mic-front:/var/www/html/project</li>
		<li>/srv/mic/data:/var/lib/mysql</li>
	</ul>
	<p>12. O arquivo `docker-compose.yaml` contém a definição de rede `micnetwork`, que é uma rede de driver `bridge` e usa o endereço IP `173.23.0.0/24`. Os seguintes endereços IP foram atribuídos aos containers:</p>
	<ul>
		<li>mic_api: 173.23.0.3</li>
		<li>mic_front: 173.23.0.4</li>
		<li>micdb: 173.23.0.5</li>
		<li>redis_mic: 173.23.0.6</li>
	</ul>
</body>
</html>