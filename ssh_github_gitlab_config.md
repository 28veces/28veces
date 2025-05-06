# Configurar múltiples claves SSH para GitHub y GitLab

Este documento explica cómo usar conexiones SSH distintas para GitHub y GitLab desde la misma máquina.

---

## 🔐 1. Generar claves SSH separadas

### Para GitHub:
```bash
ssh-keygen -t ed25519 -C "tu-correo@ejemplo.com" -f ~/.ssh/id_ed25519_github
```

### Para GitLab:
```bash
ssh-keygen -t ed25519 -C "tu-correo@ejemplo.com" -f ~/.ssh/id_ed25519_gitlab
```

---

## 🔑 2. Agregar las claves públicas a las plataformas

### En GitHub:
1. Copia la clave pública:
   ```bash
   cat ~/.ssh/id_ed25519_github.pub
   ```
2. Ve a [GitHub > Settings > SSH and GPG keys](https://github.com/settings/keys) y agrégala.

### En GitLab:
1. Copia la clave pública:
   ```bash
   cat ~/.ssh/id_ed25519_gitlab.pub
   ```
2. Ve a [GitLab > Settings > SSH Keys](https://gitlab.com/-/profile/keys) y agrégala.

---

## ⚙️ 3. Editar el archivo `~/.ssh/config`

Abre el archivo:

```bash
nano ~/.ssh/config
```

Agrega:

```ssh
# GitLab
Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/id_ed25519_gitlab
  IdentitiesOnly yes

# GitHub
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes
```

Guarda y cierra (`Ctrl + O`, `Enter`, luego `Ctrl + X`).

### Asegura permisos correctos:

```bash
chmod 600 ~/.ssh/config
```

---

## 🔍 4. Verificar conexión SSH

### GitHub:
```bash
ssh -T git@github.com
```

**Primera vez:** puede mostrarte algo como:

```
The authenticity of host 'github.com (...)' can't be established.
Are you sure you want to continue connecting (yes/no)? 
```

Escribe:
```bash
yes
```

La huella digital es segura:
```
SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU
```

### GitLab:
```bash
ssh -T git@gitlab.com
```

---

## 🧪 5. Clonar usando SSH

```bash
git clone git@github.com:usuario/repositorio.git
git clone git@gitlab.com:usuario/repositorio.git
```

---

## ✅ Resultado

Ahora podés trabajar con ambos repositorios (GitHub y GitLab) con autenticación SSH sin conflictos.
