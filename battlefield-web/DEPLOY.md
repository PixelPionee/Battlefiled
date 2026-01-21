# 🚀 Deploy no Vercel - Guia Passo a Passo

## ✅ Pré-requisitos
- Conta no GitHub (já tem ✓)
- Código commitado no GitHub (já tem ✓)

## 📝 Passos para Deploy:

### 1️⃣ Criar conta na Vercel
1. Acesse: https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize a Vercel a acessar seus repositórios

### 2️⃣ Importar o Projeto
1. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
2. Procure pelo repositório **"Battlefiled"**
3. Clique em **"Import"**

### 3️⃣ Configurar o Deploy
A Vercel vai detectar automaticamente que é um projeto Vite + React!

**Configurações (já estão corretas, mas confirme):**
- **Framework Preset:** Vite
- **Root Directory:** `battlefield-web`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### 4️⃣ Deploy!
1. Clique em **"Deploy"**
2. Aguarde 2-3 minutos (a Vercel vai fazer o build)
3. 🎉 **Pronto!** Seu site estará no ar!

## 🌐 Seu Site Estará Disponível Em:
```
https://battlefiled.vercel.app
```
ou
```
https://battlefiled-[seu-usuario].vercel.app
```

## 🔄 Atualizações Automáticas
Toda vez que você fizer um `git push` para o GitHub, a Vercel vai:
1. Detectar a mudança automaticamente
2. Fazer o build
3. Atualizar o site
4. Tudo em ~2 minutos!

## 🎯 Domínio Personalizado (Opcional)
Se quiser um domínio próprio:
1. No dashboard do projeto na Vercel
2. Vá em **Settings** → **Domains**
3. Adicione seu domínio personalizado

## 📊 Monitoramento
A Vercel oferece:
- ✅ Analytics de visitantes
- ✅ Logs de build
- ✅ Performance metrics
- ✅ HTTPS automático

## ⚡ Dicas:
- O primeiro deploy demora ~3 minutos
- Deploys seguintes: ~1-2 minutos
- Vercel tem CDN global (site rápido no mundo todo)
- Suporta até 100GB de bandwidth grátis/mês

## 🆘 Problemas?
Se der erro no build:
1. Verifique se o `package.json` está correto
2. Teste localmente: `npm run build`
3. Veja os logs na Vercel

---

**Pronto para hospedar!** 🚀
Qualquer dúvida, me chame!
