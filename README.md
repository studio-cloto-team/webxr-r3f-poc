## 何の検証？
最も楽かつ柔軟にWebXRを実装できる技術スタックを固めるための検証

## 実行方法
```bash
bun dev
```
→[https://localhost:3000](https://localhost:3000)で起動

## 使った技術
### [React Three Fiber (r3f)](https://r3f.docs.pmnd.rs/getting-started/introduction)
Three.jsのReactラッパー。
基本何でもできる。

### [React Three Drei](https://drei.docs.pmnd.rs/getting-started/introduction)
fiberの拡張。
fiberだけでは表現できないことを表現できるようになる

### [React Three Rapier](https://pmndrs.github.io/react-three-rapier/)
物理演算をしてくれるパッケージ。
Rustで書かれているので、旧世代のCannonよりも高速。
```tsx
<RigidBody>でMeshやGLBファイルを囲むだけで物理演算対象になる（衝突判定など）</RigidBody>
```

### [Bun](https://bun.sh/)
爆速ビルドができるようになる。
脱npm/pnpm/yarn！
※Mac/Linux環境でしか動きません（WindowsはWSLで！）
```sh
brew install oven-sh/bun/bun #bunのインストール
```

### [Biome](https://biomejs.dev/)
爆速Lint&Format。
最大でPrettierの35倍速い。
```sh
brew install biome
# v1.9.1のところは最新のバージョンを確認すること
# →https://github.com/biomejs/biome/releases
curl -L https://github.com/biomejs/biome/releases/download/cli%2Fv1.9.1/biome-darwin-arm64 -o biome
chmod +x biome
```
