
<p align="center"> <img height="300" src="https://github.com/iTeam-S/Ampalibe/raw/main/docs/source/_static/ampalibe_logo.png"/></p>
<div align="center">
 <h4>
    <a href="https://github.com/iTeam-S/Ampalibe#other-resource">Video Tutorials</a>
  <span> · </span>
    <a href="https://ampalibe.readthedocs.io">Documentation</a>
  <span> · </span>
    <a href="https://github.com/iTeam-S/Ampalibe/issues/">Report Bug</a>
 </h4>

<p>
 <b>Ampalibe</b> is a lightweight Python framework for building Facebook Messenger bots faster.
It provides a new concept, it manages webhooks, processes data sent by Facebook and provides <a href="https://developers.facebook.com/docs/messenger-platform/">API Messenger</a> with advanced functions such as payload management, item length, and more.
</p>

<a href='https://github.com/iTeam-S/Ampalibe/#'><img src='https://img.shields.io/badge/version-1.1.4dev-%23008080'/></a>
<a href='https://ampalibe.readthedocs.io/en/latest/'><img src='https://readthedocs.org/projects/ampalibe/badge/?version=latest&style=flat'/></a>
<a href='https://github.com/iTeam-S/Ampalibe/actions/workflows/ci.yml'><img src='https://github.com/iTeam-S/Ampalibe/actions/workflows/ci.yml/badge.svg'/></a>
<a href='https://github.com/iTeam-S/Ampalibe/actions/workflows/cd-pg.yml'><img src='https://github.com/iTeam-S/Ampalibe/actions/workflows/cd-pg.yml/badge.svg'/></a>
<a href='https://github.com/iTeam-S/Ampalibe/actions/workflows/cd-pypi.yml'><img src='https://github.com/iTeam-S/Ampalibe/actions/workflows/cd-pypi.yml/badge.svg'/></a>



<p>
 <a href='https://pypi.org/project/ampalibe/'> <img src='https://img.shields.io/pypi/v/ampalibe?style=for-the-badge'/></a>
 <a href='https://pypi.org/project/ampalibe/'> <img src='https://img.shields.io/pypi/dm/ampalibe?label=DOWNLOADS&style=for-the-badge'/></a>
 <a href='https://github.com/iTeam-S/'> <img src='https://img.shields.io/badge/Team-iTeam--$-teal?style=for-the-badge'/></a>
 <a href='#'> <img src='https://img.shields.io/badge/Maintained-Yes-darkgreen?style=for-the-badge'/></a>
 <a href='https://pypi.org/project/ampalibe/'> <img src='https://img.shields.io/pypi/pyversions/ampalibe?style=for-the-badge'/></a>
 <a href='https://discord.gg/yE4YEfkp/'> <img src='https://img.shields.io/discord/995937004405661807?style=for-the-badge'/></a>
</p>
<img src="https://github.com/RajaRakoto/github-docs/blob/master/dago.gif?raw=true" width=40>

[AMPALIBE -> Github](https://github.com/iTeam-S/Ampalibe)
</div>

<br>

### 📌 Extension

**Ampalibe extension** is a VScode extension that allows the user of ampalibe framework to write a snippet of code using easy to remember prefixes

---

### 📌 Installation

You can install it by typing `ampalibe` in the extension tab of your IDE

---

### 📌 Usage


<table>
<th>prefix</th>
<th>body</th>
<th>description</th>

<tr>
<td>
<strong>amp-def</strong>
</td>
<td>

```python
def ${1:func_name}(sender_id, cmd, **extends):
  ${2:code...}
```
</td>
<td>

>[basic]: Default function for ampalibe
</td>
</tr>

<tr>
<td>
<strong>amp-cmd</strong>
</td>
<td>

```python
@ampalibe.command(${1:'/route'})
def ${2:func_name}(sender_id, cmd, **extends):
  ${3:code...}
```
</td>
<td>

>[basic]: Create ampalibe command
</td>
</tr>

<tr>
<td>
<strong>amp-act</strong>
</td>
<td>

```python
@ampalibe.action(${1:'/route'})
def ${2:func_name}(sender_id, cmd, **extends):
  ${3:code...}
```
</td>
<td>

>[basic]: Create ampalibe action
</td>
</tr>

<tr>
<td>
<strong>amp-chat-sms</strong>
</td>
<td>

```python
chat.send_message(sender_id, ${1:sms})
```
</td>
<td>

>[chat]: Sends an SMS to the specified recipient
</td>
</tr>

<tr>
<td>
<strong>amp-chat-qckreply</strong>
</td>
<td>

```python
chat.send_quick_reply(sender_id, ${1:responses_buttons}, ${2:question})
```
</td>
<td>

>[chat]: create quick reply submit
</td>
</tr>

<tr>
<td>
<strong>amp-chat-sendlocal</strong>
</td>
<td>

```python
chat.send_file(sender_id, ${1:local_path}, filetype=${2:audio|video|file})
```
</td>
<td>

>[chat]: send local file to user
</td>
</tr>

<tr>
<td>
<strong>amp-chat-sendurl</strong>
</td>
<td>

```python
chat.send_file_url(sender_id, ${1:url}, filetype=${2:audio|video|file})
```
</td>
<td>

>[chat]: send URL file to user
</td>
</tr>

<tr>
<td>
<strong>amp-chat-sendfb</strong>
</td>
<td>

```python
chat.send_media(sender_id, ${1:fb_url}, ${2:audio|video|file})
```
</td>
<td>

>[chat]: send facebook file to user
</td>
</tr>

<tr>
<td>
<strong>amp-import-quickreply</strong>
</td>
<td>

```python
from ampalibe.ui import QuickReply
```
</td>
<td>

>[deps]: import quick reply deps
</td>
</tr>

<tr>
<td>
<strong>amp-import-button</strong>
</td>
<td>

```python
from ampalibe.ui import Button
```
</td>
<td>

>[deps]: import button deps
</td>
</tr>

<tr>
<td>
<strong>amp-import-sendtemplate</strong>
</td>
<td>

```python
from ampalibe import Payload
from ampalibe.ui import Element, Button
```
</td>
<td>

>[deps]: import send_template deps
</td>
</tr>

<tr>
<td>
<strong>amp-query-setact</strong>
</td>
<td>

```python
query.set_action(sender_id, ${1:'/route'})
```
</td>
<td>

>[query]: Points to a specific route according to the argument
</td>
</tr>

<tr>
<td>
<strong>amp-query-nullact</strong>
</td>
<td>

```python
query.set_action(sender_id, None)
```
</td>
<td>

>[query]: Point action to null
</td>
</tr>

<tr>
<td>
<strong>amp-chat-button</strong>
</td>
<td>

```python
${1:button_name} = [
    Button(
        type='postback',
        title=${2:titleValue},
        payload=${3:route}
    )
]

chat.send_button(sender_id, buttons, ${3:question})
```
</td>
<td>

>[ui]: create button 
</td>
</tr>

<tr>
<td>
<strong>amp-chat-persistent</strong>
</td>
<td>

```python
persistent_menu = [
    Button(type='postback', title=${1:title_value}, payload=${2:route})
]

chat.persistent_menu(sender_id, persistent_menu)
```
</td>
<td>

>[ui]: create persistent menu
</td>
</tr>

</table>

---

### 📌 Contribution
  
- If you want to contribute to this project, here is a tool that will help you to generate snippets -> https://snippet-generator.app/
- With each new code snippet added, you need to update the `ampalibe.code-snippets` file and regenerate the documentation, all in one command:
```bash
node ampalibe-snippets-engine.js > README.md
```
- Then you can make a PR.

Enjoy it 😉

