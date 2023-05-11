# Chrome Extension - OpenAI ChatGPT Shortcuts

This Chrome extension adds shortcut keys for use on https://chat.openai.com/.

## Features

- `Ctrl+Shift+N`: Start a new chat.
- `Ctrl+Shift+S`: Stop generating or regenerate response.
- `Ctrl+Shift+C`: Copy last generated text.
- `Ctrl+Shift+I`: Focus to input textarea.
- `Ctrl+Shift+4`: Switch to GPT-4 (new chat only). 

## Installation

1. Clone or download this repository and save it on your local machine.

```shellscript
git clone https://github.com/your-username/openai-chatgpt-shortcuts.git
```

2. Open [chrome://extensions/](chrome://extensions/) in your Chrome browser.
3. Enable Developer Mode by toggling the switch in the upper right corner.
4. Click the "Load unpacked" button and select the folder of the saved repository.
5. Verify that the extension has been added to Chrome and use the shortcut keys on https://chat.openai.com/ to perform actions.

## Setting

You can change the shortcut settings from `chrome://extensions/shortcuts`

However, `Ctrl+Shift+4` cannot be changed due to limitations on Chrome's side.

## Warning

- The DOM selectors used in this extension may be arbitrary, and it is unknown when they might stop working.
- We are not responsible for any damages resulting from the use of this software, including but not limited to data loss, hardware damage, system downtime, or loss of profits. This software is to be used at the user's own risk.

---

このChromeエクステンションは、https://chat.openai.com/ で使用するためのショートカットキーを追加します。

## 機能

- `Ctrl+Shift+N`: 新しいチャットを開始します。
- `Ctrl+Shift+S`: レスポンスの生成を停止または再生成します。
- `Ctrl+Shift+C`: 最後に生成されたテキストをコピーします。
- `Ctrl+Shift+I`: 入力テキストエリアにフォーカスを移動します。
- `Ctrl+Shift+4`: GPT-4に切り替えます（新規チャットのみ）。

## インストール方法

1. このリポジトリをクローンまたはダウンロードして、ローカルマシンに保存します。

```shellscript
git clone https://github.com/your-username/openai-chatgpt-shortcuts.git
```

2. Chromeブラウザで [chrome://extensions/](chrome://extensions/) を開きます。
3. 右上隅にある「デベロッパーモード」のトグルをオンにして、デベロッパーモードを有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリックし、先ほど保存したリポジトリのフォルダを選択します。
5. 拡張機能がChromeに追加されたことを確認し、https://chat.openai.com/ でショートカットキーを使用して操作を行います。

## 設定

`chrome://extensions/shortcuts` からショートカット設定を変更することができます。

ただしChrome側の制限で `Ctrl+Shift+4` は変更できません。

## 注意

- 適当にDOMのセレクタを書いているのでいつ動かなくなるかはわかりません。
- 本ソフトウェアの使用によって生じたいかなる損害に対しても責任を負いません。これには、データの損失、ハードウェアの損傷、システムのダウンタイム、利益の損失など、直接的または間接的な損害が含まれます。本ソフトウェアは、利用者の責任において使用されるものとします。
