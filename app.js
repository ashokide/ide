const editor = () => {
    let html = document.querySelector("#htmleditor").innerText
    let css = document.querySelector("#csseditor").innerText
    let js = document.querySelector("#jseditor").innerText
    let preview = document.querySelector("#preview")
    let content = ""
    content += `<style>${css}</style>`
    content += `<script>${js}</script>`
    content += `<body>${html}</body>`
    preview.src = `data:text/html;charset=UTF-8,<html>${content}</html>`
}