# CopyMinds with CMT 

Bu proje **CopyMindsCMT** adlı Vite + React (TypeScript) uygulamasıdır. Aşağıda projenin genel bilgileri ve nasıl çalıştırılacağına dair talimatlar bulunmaktadır.

## Proje Hakkında

CopyMindsCMT, bir monorepo yapısında hem frontend (client) hem de backend (server) içerir. Frontend kısmı Vite ile oluşturulmuş bir React uygulamasıdır. Backend kısmı ise Node.js ve Express (veya benzer) yapı kullanılarak geliştirilmiştir.

### Özellikler

- **React (TypeScript)** kullanılarak oluşturulmuş modern bir kullanıcı arayüzü.
- **Vite** ile hızlı geliştirme sunucusu ve üretim modu.
- **Tailwind CSS** ile stil şablonları.
- **Server-side API** (Node.js) entegre edilmiş.
- **Render.com** üzerinde deploy için optimize edilmiş yapı.

## Kurulum

Aşağıdaki adımları izleyerek projeyi yerel ortamınıza kurabilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/WeAreTheArtMakers/copyMindsCMT.git
   cd copyMindsCMT
   ```

2. Bağımlılıkları kurun (hem client hem server):
   ```bash
   npm install
   ```

3. Frontend ve Backend’i ayrı ayrı çalıştırmak için (opsiyonel):
   - **Frontend**:
     ```bash
     cd client
     npm install
     npm run dev
     ```
   - **Backend**:
     ```bash
     cd server
     npm install
     npm run dev
     ```

4. Üretim modu için:
   ```bash
   npm run build
   ```

## Deploy (Render.com)

Proje, Render.com üzerinde **Static Site** olarak frontendi ve **Web Service** olarak serverı çalışacak şekilde yapılandırılmıştır.

- Frontend Deploy Ayarları:
  - **Build Command**: `npm install && npm run build`
  - **Publish Directory**: `dist/public`

- Backend Deploy Ayarları:
  - **Build Command**: `npm install && npm run build`
  - **Start Command**: `npm start`

## Proje Yapısı

```
copyMindsCMT/
├── client/              # React front-end
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── server/              # Node.js back-end
│   ├── src/
│   ├── package.json
│   └── index.ts
├── shared/              # Ortak kodlar
├── package.json         # Monorepo için genel bağımlılıklar
├── tsconfig.json        # TypeScript ayarları
└── README.md            # Bu dosya
```

## Lisans

Sponsored by ![Logo](https://modfxmarket.com/street/img/street12.PNG)
