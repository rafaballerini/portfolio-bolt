## Tutorial de comandos no terminal para subir projeto criado no Bolt com domínio e VPS Hostinger

Abaixo são os comandos utilizados para hospedar na VPS com domínio próprio o site criado com Bolt

Bolt: https://bolt.new

Domínio e hospedagem Hostinger:

---

> Antes de conectar na VPS é importante já ter os arquivos em um repositório no Github (público ou privado, nesse segundo caso lembrar de configurar as credenciais do Github lá na VPS quando solicitado)

1. Conectar à VPS:

```bash
ssh root@<ip-vps>
```

2. Atualizar o sistema:

```bash
sudo apt update && sudo apt upgrade -y
```

3. Instalar as dependências:

```bash
sudo apt install -y nodejs npm nginx
```

4. Criar uma pasta para o projeto:

```bash
sudo mkdir -p /var/www/<nome-projeto>
```

5. Clonar o repositório do Github do projeto:

```bash
cd /var/www/<nome-projeto>
```

```bash
sudo apt install git
```

```bash
git clone https://github.com/<seu-user>/<nome-repositorio> .
```

6. Instalar dependências do projeto:

```bash
npm install
```

7. Construir o projeto

```bash
npm run build
```

8. Garantir permissões:

```bash
sudo chown -R $USER:$USER /var/www/<nome-projeto>
```

```bash
sudo chown -R www-data:www-data /var/www/<nome-projeto>
```

```bash
sudo chmod -R 755 /var/www/<nome-projeto>
```

9. Criar arquivo de configuração para o site no Nginx:

```bash
sudo nano /etc/nginx/sites-available/<nome-projeto>
```

10. Adicionar a configuração:

```nginx
server {
    listen 80;
    server_name <seu-dominio> www.<seu-dominio>;

    root /var/www/<nome-projeto>/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
    error_page 404 /404.html;
}
```

11. Salve e saia (`Ctrl + O`, `Enter`, `Ctrl + X`)

12. Ativar a configuração:

```bash
sudo ln -s /etc/nginx/sites-available/<nome-projeto> /etc/nginx/sites-enabled/
```

```bash
sudo nginx -t
```

```bash
sudo systemctl restart nginx
```

13. Configurar domínio:

```markdown
No painel de controle do domínio, adicione um registro A apontando para o IP da sua VPS:

- Type: A
- Name: @
- Value: <ip-da-vps>

Adicione também um registro CNAME para o `www`:

- Type: CNAME
- Name: www
- Value: <seu-dominio>
```

14. Adicionar certificado SSL:

```BASH
sudo apt install certbot python3-certbot-nginx -y
```

```bash
sudo certbot --nginx -d <seu-dominio> -d www.<seu-dominio>
```

```bash
sudo systemctl reload nginx
```

15. Teste seu site no navegador!

**http://<seu-dominio>|**
