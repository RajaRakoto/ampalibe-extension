
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
<strong>amp-chat-sms-format</strong>
</td>
<td>

```python
chat.send_message(sender_id, f'${1:sms_format}')
```
</td>
<td>

>[chat]: Sends an SMS to the specified recipient (format)
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
<strong>amp-import-nat-latest</strong>
</td>
<td>

```python
import ampalibe
from ampalibe import Model, Messenger

chat = Messenger()
query = Model()

chat.get_started()
```
</td>
<td>

>[deps]: version>=1.1.4 - Import the native module for ampalibe
</td>
</tr>

<tr>
<td>
<strong>amp-import-nat</strong>
</td>
<td>

```python
import ampalibe
from conf import Configuration

bot = ampalibe.init(Configuration())
chat = bot.chat
query = bot.query

chat.get_started()
```
</td>
<td>

>[deps]: version<=1.0.7 - Import the native module for ampalibe
</td>
</tr>

<tr>
<td>
<strong>amp-import-config</strong>
</td>
<td>

```python
from conf import Configuration as config
```
</td>
<td>

>[deps]: Import config
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
<strong>amp-pattern-credentials</strong>
</td>
<td>

```python
@ampalibe.command(${1:'/route'})
def ${2:func_name}(sender_id, cmd, **ext):
    chat.send_message(sender_id, ${3:'Enter your mail'})
    query.set_action(sender_id, ${4:'/get_mail'})

@ampalibe.action(${4:'/get_mail'})
def ${5:get_mail}(sender_id, cmd, **ext):
    query.set_temp(sender_id, 'mail', cmd)
    chat.send_message(sender_id, ${6:'Enter your password'})
    query.set_action(sender_id, ${7:'/get_password'})

@ampalibe.action(${7:'/get_password'})
def ${8:get_password}(sender_id, cmd, **ext):
    query.set_action(sender_id, None)  
    ${9:'mail'} = query.get_temp(sender_id, ${9:'mail'})
    ${10:'password'} = cmd
```
</td>
<td>

>[pattern]: Generate credentials pattern
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
<strong>amp-query-settemp</strong>
</td>
<td>

```python
query.set_temp(sender_id, ${1:'data_key'}, cmd)

```
</td>
<td>

>[query]: Create/Modify temporary data
</td>
</tr>

<tr>
<td>
<strong>amp-query-gettemp</strong>
</td>
<td>

```python
query.get_temp(sender_id, ${1:'data_key'})

```
</td>
<td>

>[query]: Get temporary data
</td>
</tr>

<tr>
<td>
<strong>amp-query-deltemp</strong>
</td>
<td>

```python
query.del_temp(sender_id, ${1:'data_key'},)

```
</td>
<td>

>[query]: Delete temporary data
</td>
</tr>

<tr>
<td>
<strong>amp-ui-button</strong>
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
<strong>amp-ui-persistent</strong>
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

<tr>
<td>
<strong>amp-ui-quickreply</strong>
</td>
<td>

```python
${1:quick_rep_name} = [
    QuickReply(
        title=${2:'Angela'},
        payload=Payload(${3:'/route'}, name=${2:'Angela'}, ref=${4:'id'})
    ),
    QuickReply(
        title=${5:'Rivo'},
        payload=Payload(${6:'/route'}, name=${5:'Rivo'}, ref=${7:'id'})
    )
]
chat.send_quick_reply(sender_id, ${1:quick_rep_name}, ${8:'Question?'})
```
</td>
<td>

>[ui]: create quickreply
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

<div align="center">

#### Enjoy it 😉
</div>

